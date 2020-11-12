export const addRestaurant = (restaurant) => {
  console.log(`added restaurant`, restaurant)
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
};
