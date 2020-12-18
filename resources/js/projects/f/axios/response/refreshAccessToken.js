/**
 *
 * @param error
 * @param instance
 * @returns {*}
 */
export function refreshAccessToken(error, instance) {
    if (401 === error.response.status) {
        if(error.response.data.newToken){
            /**
             * update new token and refresh query when first 401
             */
            fEventBus.setToken(error.response.data.access_token);
            const originalRequest = error.config;
            if (!originalRequest._retry) {
                originalRequest._retry = true;
                return instance(originalRequest); // new axios query
            }
        }
    }return null;
}