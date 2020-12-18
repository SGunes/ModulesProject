/**
 *
 * @param code
 */
export function statusCodeSuccess(code) {
    switch (code) {
        case 200:
            console.log(code);
            break;
        case 201:
            console.log(code);
            break;
        default:
            console.log(code);
            break;
    }
}