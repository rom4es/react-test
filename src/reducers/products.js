const initialState = {
    data: [
        {
          id: 123,
          name: "Футболка",
          price: 500,
          color: 2,
        },
        {
          id: 300,
          name: "Платье",
          price: 3000,
          color: 3,
        },
        {
          id: 1345,
          name: "Платье",
          price: 2000,
          color: 3,
        },
        {
          id: 13425,
          name: "Толстовка",
          price: 2000,
          color: 1,
        },
        {
          id: 12345,
          name: "Футболка",
          price: 1000,
          color: 1,
        },
    ],
    filter: {
        color: 0,
        minPrice: '',
        maxPrice: '',
    }
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER_VALUE':
      console.log(Object.assign( state.filter, action.payload ));
      return {
        ...state,
        filter: {...state.filter, ...action.payload}
      };
    default:
      return state;
  }
};

export default products;