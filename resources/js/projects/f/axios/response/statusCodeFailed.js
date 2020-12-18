/**
 *
 * @param code
 */
export function statusCodeFailed(code) {
    switch (code) {
        case 404:
            console.log(code);
            break;
        case 401:
            console.log(code);
            break;
        default:
            console.log(code);
            break;
    }
}