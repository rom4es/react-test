export function addProduct(id) {
    return {
        type: 'ADD_PRODUCT',
        payload: id,
    };
}