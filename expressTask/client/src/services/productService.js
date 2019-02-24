import config from '../config';

export function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

function createProduct(entity) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entity),
    };
    return fetch(`${config.serverURL}/api/product`, requestOptions).then(handleResponse);
}

function displayProduct(entityID) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${config.serverURL}/api/product/${entityID}`, requestOptions).then(handleResponse);
}

function displayProductsList() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${config.serverURL}/api/product`, requestOptions).then(handleResponse);
}

function updateProduct(entity) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entity),
    };
    return fetch(`${config.serverURL}/api/product`, requestOptions).then(handleResponse);
}

function deleteProduct(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${config.serverURL}/api/product/${id}`, requestOptions).then(handleResponse);
}

function searchProduct(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`${config.serverURL}/api/product/${id}`, requestOptions).then(handleResponse);
}

function filterList(value) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value }),
    };
    console.log(requestOptions.body);
    return fetch(`${config.serverURL}/api/product/filter`, requestOptions).then(handleResponse);
}

const productService = {
    createProduct,
    displayProduct,
    displayProductsList,
    updateProduct,
    deleteProduct,
    searchProduct,
    filterList,
};

export default productService;
