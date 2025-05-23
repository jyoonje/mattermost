// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import keyMirror from 'mattermost-redux/utils/key_mirror';

export default keyMirror({
    RECEIVED_CLOUD_CUSTOMER: null,
    RECEIVED_CLOUD_PRODUCTS: null,
    RECEIVED_CLOUD_SUBSCRIPTION: null,
    RECEIVED_CLOUD_INVOICES: null,
    RECEIVED_CLOUD_LIMITS: null,
    RECEIVED_MESSAGES_USAGE: null,
    RECEIVED_FILES_USAGE: null,
    RECEIVED_BOARDS_USAGE: null,
    RECEIVED_TEAMS_USAGE: null,
    RECEIVED_LICENSE_SELF_SERVE_STATS: null,
    CLOUD_CUSTOMER_FAILED: null,
    CLOUD_INVOICES_FAILED: null,
    CLOUD_LIMITS_FAILED: null,
    CLOUD_PRODUCTS_FAILED: null,
    CLOUD_SUBSCRIPTION_FAILED: null,
    LICENSE_SELF_SERVE_STATS_FAILED: null,
    CLOUD_CUSTOMER_REQUEST: null,
    CLOUD_INVOICES_REQUEST: null,
    CLOUD_LIMITS_REQUEST: null,
    CLOUD_PRODUCTS_REQUEST: null,
    CLOUD_SUBSCRIPTION_REQUEST: null,
    LICENSE_SELF_SERVE_STATS_REQUEST: null,
    RECEIVED_SELF_HOSTED_SIGNUP_PROGRESS: null,
});
