export const getAllEmployees = () => {
  return fetch("http://localhost:1338/employees?_expand=user").then(
    (response) => response.json()
  );
};
