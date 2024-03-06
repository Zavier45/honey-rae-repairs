export const getClientUsers = () => {
  return fetch("http://localhost:1338/users?isStaff=false").then((response) =>
    response.json()
  );
};

export const getNonClientUser = () => {
  return fetch("http://localhost:1338/users?isStaff=true").then((response) =>
    response.json()
  );
};
