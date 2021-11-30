export const colors = [
  {
    value: 1,
    name: "Черный",
  },
  {
    value: 2,
    name: "Белый",
  },
  {
    value: 3,
    name: "Синий",
  },
  {
    value: 4,
    name: "Зеленый",
  },
];

export const getColorName = (colorValue) => {
  const color = colors.find(item => item.value == colorValue);
  return (color) ? color.name : '' ;
};

export const getProductByID = (products, id) => {
  return products.find(item => item.id === id);
};
