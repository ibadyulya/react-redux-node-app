export const convertToTableFormat = data =>
    data.map(element => ({
        key: element._id,
        name: element.name,
        category: element.category,
        price: `${element.price} $`
    }));

export default {
    convertToTableFormat
};
