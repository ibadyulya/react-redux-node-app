const BASE_URL = 'http://localhost:3000';

const BASE_URLS = {
    main: `${BASE_URL}`,
    product: `${BASE_URL}/api/product/`,
    productFilter: `${BASE_URL}/api/product/filter/`,
    productSecondFilter: `${BASE_URL}/api/product/filter?search=`,
};

export default BASE_URLS;
