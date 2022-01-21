import initialState from "../store/initialState";

export function list(state = initialState.list, action) {
    const { type, payload } = action;
    switch (type) {
        case 'CURRENCY_GET_REQUEST':
            return {
                ...state,
                error: null
            };
        case 'CURRENCY_GET_SUCCESS':
            return {
                ...state,
                data: [...state.data, payload.currency]
            };
        case 'CURRENCY_GET_FAILED':
            return {
                ...state,
                error: payload
            };
        case 'REMOVE_FROM_LIST':
            console.log(payload)
            return {
                ...state,
                data: [...state.data.filter(item => item.Cur_ID !== payload)],
            };
        default:
            return state
    }
}