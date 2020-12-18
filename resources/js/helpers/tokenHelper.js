export function tokenHelper() {
    return {
        /**
         * token variable
         */
        token : null,
        /**
         * storage token column name
         * @returns {string}
         * @private
         */
        tokenStorageName(){
            return "token";
        },
        /**
         * storage type
         * @returns {Storage}
         * @private
         */
        tokenStorageType(){
            return localStorage;
        },
        /**
         * get token
         * @returns {*}
         */
        getToken(){
            return this.token ?? this.tokenStorageType().getItem(this.tokenStorageName());
        },
        /**
         * set token
         * @param token
         */
        setToken(token){
            this.token = token;
            this.tokenStorageType().setItem(this.tokenStorageName(), token);
        }
    }
}