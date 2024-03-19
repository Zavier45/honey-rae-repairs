export const getCustomerByUserId = () => {
  return fetch(
    `http://localhost:1338/customers?userId=${userId}&_expand=user`
  ).then((response) => response.json());
};
