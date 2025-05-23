// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import keyMirror from 'mattermost-redux/utils/key_mirror';

export default keyMirror({
    CHANNEL_REQUEST: null,
    CHANNEL_SUCCESS: null,
    CHANNEL_FAILURE: null,

    CHANNELS_REQUEST: null,
    CHANNELS_SUCCESS: null,
    CHANNELS_FAILURE: null,

    CREATE_CHANNEL_REQUEST: null,
    CREATE_CHANNEL_SUCCESS: null,
    CREATE_CHANNEL_FAILURE: null,

    DELETE_CHANNEL_SUCCESS: null,
    UNARCHIVED_CHANNEL_SUCCESS: null,

    GET_CHANNELS_REQUEST: null,
    GET_CHANNELS_SUCCESS: null,
    GET_CHANNELS_FAILURE: null,

    GET_ALL_CHANNELS_REQUEST: null,
    GET_ALL_CHANNELS_SUCCESS: null,
    GET_ALL_CHANNELS_FAILURE: null,

    GET_CHANNELS_TIMEZONE_REQUEST: null,
    GET_CHANNELS_TIMEZONE_SUCCESS: null,
    GET_CHANNELS_TIMEZONE_FAILURE: null,

    CHANNEL_STATS_REQUEST: null,
    CHANNEL_STATS_SUCCESS: null,
    CHANNEL_STATS_FAILURE: null,

    ADD_CHANNEL_MEMBER_REQUEST: null,
    ADD_CHANNEL_MEMBER_SUCCESS: null,

    REMOVE_CHANNEL_MEMBER_SUCCESS: null,

    SELECT_CHANNEL: null,
    LEAVE_CHANNEL: null,
    REMOVE_MEMBER_FROM_CHANNEL: null,
    RECEIVED_CHANNEL: null,
    RECEIVED_CHANNELS: null,
    RECEIVED_ALL_CHANNELS: null,
    RECEIVED_CHANNELS_LIST: null,
    RECEIVED_MY_CHANNEL_MEMBERS: null,
    RECEIVED_MY_CHANNEL_MEMBER: null,
    RECEIVED_CHANNEL_MEMBERS: null,
    RECEIVED_CHANNEL_MEMBER: null,
    RECEIVED_CHANNEL_STATS: null,
    RECEIVED_CHANNELS_MEMBER_COUNT: null,
    RECEIVED_CHANNEL_PROPS: null,
    RECEIVED_CHANNEL_DELETED: null,
    RECEIVED_CHANNEL_UNARCHIVED: null,
    RECEIVED_LAST_VIEWED_AT: null,
    CHANNEL_MEMBER_ADDED: null,
    CHANNEL_MEMBER_REMOVED: null,

    SET_CHANNEL_MUTED: null,

    INCREMENT_TOTAL_MSG_COUNT: null,
    INCREMENT_UNREAD_MSG_COUNT: null,
    DECREMENT_UNREAD_MSG_COUNT: null,
    INCREMENT_UNREAD_MENTION_COUNT: null,
    DECREMENT_UNREAD_MENTION_COUNT: null,

    UPDATED_CHANNEL_SCHEME: null,
    UPDATED_CHANNEL_MEMBER_SCHEME_ROLES: null,

    RECEIVED_CHANNEL_MEMBERS_MINUS_GROUP_MEMBERS: null,

    RECEIVED_CHANNEL_MODERATIONS: null,

    RECEIVED_CHANNEL_MEMBER_COUNTS_BY_GROUP: null,
    RECEIVED_CHANNEL_MEMBER_COUNTS_FROM_GROUPS_LIST: null,

    RECEIVED_TOTAL_CHANNEL_COUNT: null,

    POST_UNREAD_SUCCESS: null,

    ADD_MANUALLY_UNREAD: null,
    REMOVE_MANUALLY_UNREAD: null,

    INCREMENT_PINNED_POST_COUNT: null,
    DECREMENT_PINNED_POST_COUNT: null,

    INCREMENT_FILE_COUNT: null,

    GM_CONVERTED_TO_CHANNEL: null,
});
