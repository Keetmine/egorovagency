import { currenciesService } from '../services';

export const currencies = {
    getAllCurrencies,
    getCurrency,
    removeFromList
};

export function getAllCurrencies() {
    return dispatch => {
        dispatch({
            type: 'CURRENCIES_GETALL_REQUEST'
        })
        currenciesService.getAllCurrencies()
            .then(
                (response) => {
                    dispatch({
                        type: 'CURRENCIES_GETALL_SUCCESS',
                        payload: {currencies: response}
                    });
                    return Promise.resolve();
                },
                (error) => {
                    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    dispatch({
                        type: 'CURRENCIES_GETALL_FAILED',
                        payload: message,
                    });
                    return Promise.reject();
                }
            );

    };
}

export function getCurrency(id) {
    return dispatch => {
        dispatch({
            type: 'CURRENCY_GET_REQUEST'
        })
        currenciesService.getCurrency(id)
            .then(
                (response) => {
                    dispatch({
                        type: 'CURRENCY_GET_SUCCESS',
                        payload: {currency: response}
                    });
                    return Promise.resolve();
                },
                (error) => {
                    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    dispatch({
                        type: 'CURRENCY_GET_FAILED',
                        payload: message,
                    });
                    return Promise.reject();
                }
            );
    };
}

export function removeFromList(item) {
    return dispatch => {
        dispatch({type: 'REMOVE_FROM_LIST', payload: item})
        return item
    };
}