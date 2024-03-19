import { useParams } from "react-router-dom";
import { getCustomerByUserId } from "../../services/customerService";
import React from "react";

export const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = React.useState({});

  React.useEffect(() => {
    getCustomerByUserId(customerId).then((customerObj) => {
      setCustomer(customerObj);
    });
  }, [customerId]);

  return <div>Customer #{customerId}</div>;
};
