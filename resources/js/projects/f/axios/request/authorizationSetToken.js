import {tokenHelper} from "../../../../helpers/tokenHelper";

/**
 *
 * @param config
 * @returns {*}
 */
export function authorizationSetToken(config) {
    config.headers['Authorization'] = 'Bearer ' + tokenHelper().getToken();
    return config;
}