import React from "react";
import { getClientUsers } from "../../services/userService.jsx";
import { User } from "../../users/User.jsx";

export const CustomerList = () => {
  const [customers, setCustomers] = React.useState([]);

  React.useEffect(() => {
    getClientUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObj) => {
        return <User user={customerObj} />;
      })}
    </div>
  );
};
