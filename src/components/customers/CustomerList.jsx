import React from "react";
import { getClientUsers } from "../../services/userService.jsx";
import { User } from "../../users/User.jsx";
import { Link } from "react-router-dom";

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
        return (
          <Link to={`/customers/${customerObj.id}`}>
            <User user={customerObj} />
          </Link>
        );
      })}
    </div>
  );
};
