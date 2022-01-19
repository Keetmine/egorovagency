import initialState from "../store/initialState";

export function app(state = initialState.app, action) {
    const { type, payload } = action;
    switch (type) {
        default:
            return state
    }
}