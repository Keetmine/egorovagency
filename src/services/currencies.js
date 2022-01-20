import handleResponse from "./index";

export const currenciesService = {
    getAllCurrencies,
    getCurrency,
};

function getAllCurrencies() {
    const requestOptions = {
        method: 'GET',
        // mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return fetch('https://www.nbrb.by/api/exrates/currencies', requestOptions)
        // .then(handleResponse)
        .then(currencies => { return currencies.json() })
        .then(currencies => { console.log(currencies)});
}

function getCurrency(cur_id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch('https://www.nbrb.by/api/exrates/currencies' + cur_id, requestOptions)
        .then(handleResponse)
        .then(currencies => { return currencies });
}