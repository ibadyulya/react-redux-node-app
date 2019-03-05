/* eslint-disable class-methods-use-this */
/* @flow */

import { BASE_URLS } from '../constants';
import FetchQuery from '../helpers/fetch-tool';

class ProductApi {
    async displayProductsList() {
        const response = await FetchQuery.get(
            `${BASE_URLS.product}`,
        );

        if (!response.ok) {
            throw new Error(
                `ProductApi: displayProductsList failed, HTTP status ${
                    response.status
                }`,
            );
        }

        return response.json();
    }

    async createProduct(newProduct) {
        const response = await FetchQuery.post(
            `${BASE_URLS.product}`,
            {
                body: JSON.stringify(newProduct),
            },
        );

        if (!response.ok) {
            throw new Error(
                `ProductApi: createProduct failed, HTTP status ${
                    response.status
                }`,
            );
        }

        return response.json();
    }

    async displayProduct(productID) {
        const response = await FetchQuery.get(
            `${BASE_URLS.product}${productID}`,
        );

        if (!response.ok) {
            throw new Error(
                `ProductApi: displayProduct failed, HTTP status ${
                    response.status
                }`,
            );
        }

        return response.json();
    }

    async updateProduct(editedProduct) {
        const response = await FetchQuery.put(
            `${BASE_URLS.product}`,
            {
                body: JSON.stringify(editedProduct),
            },
        );

        if (!response.ok) {
            throw new Error(
                `ProductApi: createProduct failed, HTTP status ${
                    response.status
                }`,
            );
        }

        return response.json();
    }

    async deleteProduct(productID) {
        const response = await FetchQuery.delete(
            `${BASE_URLS.product}${productID}`,
        );

        if (!response.ok) {
            throw new Error(
                `ProductApi: deleteProduct failed, HTTP status ${
                    response.status
                }`,
            );
        }

        return response.json();
    }

    async searchProduct(productID) {
        const response = await FetchQuery.get(
            `${BASE_URLS.product}${productID}`,
        );

        if (!response.ok) {
            throw new Error(
                `ProductApi: searchProduct failed, HTTP status ${
                    response.status
                }`,
            );
        }

        return response.json();
    }

    async filterList(filteringValue) {
        const response = await FetchQuery.post(
            `${BASE_URLS.productFilter}`,
            {
                body: JSON.stringify({ filteringValue }),
            },
        );

        if (!response.ok) {
            throw new Error(
                `ProductApi: filterList failed, HTTP status ${
                    response.status
                }`,
            );
        }

        return response.json();
    }
}

export default new ProductApi();
