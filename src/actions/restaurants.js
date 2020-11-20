export const addRestaurant = (restaurant) => {
  console.log("add restaurant")
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
};
