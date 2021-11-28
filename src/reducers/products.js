const initialState = {
    data: [
        {
          id: 123,
          name: "Футболка",
          price: 500,
          color: 0,
        },
        {
          id: 300,
          name: "Платье",
          price: 1000,
          color: 0,
        },
        {
          id: 1345,
          name: "Платье",
          price: 1000,
          color: 0,
        },
        {
          id: 13425,
          name: "Толстовка",
          price: 1000,
          color: 1,
        },
        {
          id: 12345,
          name: "Футболка",
          price: 1000,
          color: 2,
        },
      ],
    filter: {
        color: 0,
        minPrice: 0,
        maxPrice: 0,
    }
};

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default products;