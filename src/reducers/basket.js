const initialState = {
  data: []
};

const basket = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      if (state.data.find(item => item.id == action.payload)) {
        return {
          ...state,
          data: state.data.map(item => {
            return item.id === action.payload ? {id: item.id, quantity: item.quantity + 1} : item;
          })
        };
      } else {
        return {
          ...state,
          data: [...state.data, {id: action.payload, quantity: 1}],
        };
      }
    default:
      return state;
  }
};

export default basket;