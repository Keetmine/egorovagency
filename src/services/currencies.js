import handleResponse from "./index";

export const currenciesService = {
    getAllCurrencies,
    getCurrency,
};

function getAllCurrencies() {
    const requestOptions = {
        method: 'GET'
    };
    return fetch('https://www.nbrb.by/api/exrates/currencies', requestOptions)
        .then(handleResponse)
        .then(currencies => { return currencies })

}

function getCurrency(item) {
    const requestOptions = {
        method: 'GET',
        // mode: 'no-cors'
    };

    return fetch('https://www.nbrb.by/api/exrates/rates/' + item.value, requestOptions)
        .then(handleResponse)
        .then(currency => { return currency });

}