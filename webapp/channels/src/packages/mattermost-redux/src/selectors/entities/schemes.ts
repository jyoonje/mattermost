// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import type {Channel} from '@mattermost/types/channels';
import type {Scheme} from '@mattermost/types/schemes';
import type {GlobalState} from '@mattermost/types/store';
import type {Team} from '@mattermost/types/teams';

import {ScopeTypes} from 'mattermost-redux/constants/schemes';
import {createSelector} from 'mattermost-redux/selectors/create_selector';
import {getAllChannels} from 'mattermost-redux/selectors/entities/channels';
import {getTeams} from 'mattermost-redux/selectors/entities/teams';

export function getSchemes(state: GlobalState): {
    [x: string]: Scheme;
} {
    return state.entities.schemes.schemes;
}

export function getScheme(state: GlobalState, id: string): Scheme {
    const schemes = getSchemes(state);
    return schemes[id];
}

export function makeGetSchemeChannels() {
    return (createSelector(
        'makeGetSchemeChannels',
        getAllChannels,
        (state: GlobalState, props: {schemeId: string}) => getScheme(state, props.schemeId),
        (allChannels, scheme) => {
            if (!scheme) {
                return [];
            }

            if (scheme.scope === ScopeTypes.TEAM) {
                const msg = `Not implemented: scheme '${scheme.id}' is team-scope but 'getSchemeChannels' only accepts channel-scoped schemes.`;
                console.log(msg); // eslint-disable-line no-console
                return [];
            }

            const schemeChannels: Channel[] = [];

            Object.entries(allChannels).forEach((item: [string, Channel]) => {
                const [, channel] = item;
                if (channel.scheme_id === scheme.id) {
                    schemeChannels.push(channel);
                }
            });

            return schemeChannels;
        }) as (b: GlobalState, a: {
        schemeId: string;
    }) => Channel[]);
}

export function makeGetSchemeTeams() {
    return (createSelector(
        'makeGetSchemeTeams',
        getTeams,
        (state: GlobalState, props: {schemeId: string}) => getScheme(state, props.schemeId),
        (allTeams, scheme) => {
            if (!scheme) {
                return [];
            }

            if (scheme.scope === ScopeTypes.CHANNEL) {
                const msg = `Error: scheme '${scheme.id}' is channel-scoped but 'getSchemeChannels' only accepts team-scoped schemes.`;
                console.log(msg); // eslint-disable-line no-console
                return [];
            }

            const schemeTeams: Team[] = [];

            Object.entries(allTeams).forEach((item: [string, Team]) => {
                const [, team] = item;
                if (team.scheme_id === scheme.id) {
                    schemeTeams.push(team);
                }
            });

            return schemeTeams;
        }) as (b: GlobalState, a: {
        schemeId: string;
    }) => Team[]);
}
