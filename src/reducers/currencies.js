import initialState from "../store/initialState";

export function currencies(state = initialState.currencies, action) {
    const { type, payload } = action;
    switch (type) {
        case 'CURRENCIES_GETALL_REQUEST':
            return {
                ...state
            };
        case 'CURRENCIES_GETALL_SUCCESS':
            return {
                ...state,
                data: payload.currencies
            };
        case 'CURRENCIES_GETALL_FAILED':
            return {
                ...state
            };
        default:
            return state
    }
}