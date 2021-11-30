const initialState = {
    data: [
        {
          id: 123,
          name: "Футболка",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          price: 500,
          color: 2,
        },
        {
          id: 300,
          name: "Платье",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          price: 3000,
          color: 3,
        },
        {
          id: 1345,
          name: "Платье",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          price: 2000,
          color: 3,
        },
        {
          id: 13425,
          name: "Толстовка",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          price: 2000,
          color: 1,
        },
        {
          id: 12345,
          name: "Футболка",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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