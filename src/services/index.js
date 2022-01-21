export * from './currencies';

export default function handleResponse(response) {

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            // if (response.status === 401) {
            //     window.location.reload();
            // }
            // if (response.status === 404) {
            //     window.location.assign('/404');
            // }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}