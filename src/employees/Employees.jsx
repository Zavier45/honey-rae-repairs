import "./Employees.css";

export const Employees = ({ employeeObj }) => {
  console.log({ employeeObj });
  return (
    <div className="employee">
      <div>
        <div className="employee-info">Name</div>
        <div>{employeeObj?.fullName}</div>
      </div>
      <div>
        <div className="employee-info">Email</div>
        <div>{employeeObj?.email}</div>
      </div>
    </div>
  );
};
