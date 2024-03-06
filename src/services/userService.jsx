export const getClientUsers = () => {
  return fetch("http://localhost:1338/users?isStaff=false").then((response) =>
    response.json()
  );
};
