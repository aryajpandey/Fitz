// Util to generate unique key strings for card data and interests data
export const getKeyString = (item, index) =>
  item && item.id
    ? `${item.id} + ${
        item.coordinates
          ? `${item.coordinates[1]}`
          : `${item.name ? item.name : index}`
      }`
    : `${index}`;
