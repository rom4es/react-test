export function addProduct(id) {
  return {
    type: "ADD_PRODUCT",
    payload: id,
  };
}

export function changeFilterValue(param) {
  return {
    type: "CHANGE_FILTER_VALUE",
    payload: param,
  };
}
