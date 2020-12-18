import {refreshAccessToken} from "./response/refreshAccessToken";
import {statusCodeSuccess} from "./response/statusCodeSuccess";
import {statusCodeFailed} from "./response/statusCodeFailed";
import {authorizationSetToken} from "./request/authorizationSetToken";

const instance = axios.create();

instance.interceptors.request.use(function (config) {
    config = authorizationSetToken(config);
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    statusCodeSuccess(response.status);

    return response;
}, function (error) {
    var result = refreshAccessToken(error, instance);
    if (result) return result;

    statusCodeFailed(error.response.status);

    return Promise.reject(error);
});

export default instance;