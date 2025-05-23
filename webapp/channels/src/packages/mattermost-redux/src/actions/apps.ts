// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import type {AppBinding} from '@mattermost/types/apps';

import {AppsTypes} from 'mattermost-redux/action_types';
import {Client4} from 'mattermost-redux/client';
import {getChannel, getCurrentChannelId} from 'mattermost-redux/selectors/entities/channels';
import {getCurrentTeamId} from 'mattermost-redux/selectors/entities/teams';
import type {ActionFuncAsync} from 'mattermost-redux/types/actions';

import {bindClientFunc} from './helpers';

export function fetchAppBindings(channelID: string): ActionFuncAsync<true | AppBinding[]> {
    return async (dispatch, getState) => {
        if (!channelID) {
            return {data: true};
        }

        const state = getState();
        const channel = getChannel(state, channelID);
        const teamID = channel?.team_id || getCurrentTeamId(state);

        return dispatch(bindClientFunc({
            clientFunc: () => Client4.getAppsBindings(channelID, teamID),
            onSuccess: AppsTypes.RECEIVED_APP_BINDINGS,
            onFailure: AppsTypes.FAILED_TO_FETCH_APP_BINDINGS,
        }));
    };
}

export function fetchRHSAppsBindings(channelID: string): ActionFuncAsync {
    return async (dispatch, getState) => {
        const state = getState();

        const currentChannelID = getCurrentChannelId(state);
        const channel = getChannel(state, channelID);
        const teamID = channel?.team_id || getCurrentTeamId(state);

        if (channelID === currentChannelID) {
            const bindings = JSON.parse(JSON.stringify(state.entities.apps.main.bindings));
            return dispatch({
                data: bindings,
                type: AppsTypes.RECEIVED_APP_RHS_BINDINGS,
            });
        }

        return dispatch(bindClientFunc({
            clientFunc: () => Client4.getAppsBindings(channelID, teamID),
            onSuccess: AppsTypes.RECEIVED_APP_RHS_BINDINGS,
            onFailure: AppsTypes.FAILED_TO_FETCH_APP_BINDINGS,
        }));
    };
}
