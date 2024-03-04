export const getAllTickets = () => {
  return fetch(
    "http://localhost:1338/serviceTickets?_embed=employeeTickets"
  ).then((response) => response.json());
};
