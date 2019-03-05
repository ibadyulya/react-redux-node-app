/* eslint-disable class-methods-use-this */

const baseHeader = {
    'Content-Type': 'application/json',
};

const getHeaders = (headers, baseHeaders, setHeaders) => {
    let newHeaders = {};

    if (setHeaders) {
        newHeaders = headers || baseHeaders;
    }

    return newHeaders;
};

class FetchQuery {
    get(url: string, options: Object = {}) {
        const { headers, setHeaders = true } = options;
        const requestHeaders = getHeaders(
            headers,
            baseHeader,
            setHeaders,
        );

        return fetch(url, {
            headers: {
                ...requestHeaders,
            },
            method: 'GET',
        });
    }

    post(url: string, options: Object = {}) {
        const {
            headers, body, setHeaders = true,
        } = options;
        const requestHeaders = getHeaders(
            headers,
            baseHeader,
            setHeaders,
        );

        return fetch(url, {
            headers: {
                ...requestHeaders,
            },
            method: 'POST',
            body,
        });
    }

    put(url: string, options: Object = {}) {
        const {
            headers, body, setHeaders = true,
        } = options;
        const requestHeaders = getHeaders(
            headers,
            baseHeader,
            setHeaders,
        );

        return fetch(url, {
            headers: {
                ...requestHeaders,
            },
            method: 'PUT',
            body,
        });
    }

    patch(url: string, options: Object = {}) {
        const {
            headers, body, setHeaders = true,
        } = options;
        const requestHeaders = getHeaders(
            headers,
            baseHeader,
            setHeaders,
        );

        return fetch(url, {
            headers: {
                ...requestHeaders,
            },
            method: 'PATCH',
            body,
        });
    }

    delete(url: string, options: Object = {}) {
        const {
            headers, body, setHeaders = true,
        } = options;
        const requestHeaders = getHeaders(
            headers,
            baseHeader,
            setHeaders,
        );

        return fetch(url, {
            headers: {
                ...requestHeaders,
            },
            method: 'DELETE',
            body,
        });
    }
}

export default new FetchQuery();
