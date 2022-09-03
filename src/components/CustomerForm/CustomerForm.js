import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import FormData from "../FormData/FormData";
const CustomerForm = () => {
  const [customerData, setCustomerData] = useState([]);
  // getting customer data from the inputform using function and passing that to the formdata for view

  const addCustmerData = (newCustomerData) => {
    setCustomerData([...customerData, newCustomerData]);
  };
  // setting up the delete function
  const handleDelete = (customerID) => {
    const updatedCustmer = customerData.filter(
      (custmer) => custmer.id !== customerID
    );
    setCustomerData(updatedCustmer);
  };
  // setting up the update function
  const handleUpdate = (customerID) => {
    console.log(`Custmer ID in handleUpdate function ${customerID} `);
    console.log("handle update function from app.js");
  };

  return (
    <>
      <InputForm addCustmerData={addCustmerData} />
      <FormData customerData={customerData} handleDelete={handleDelete} />
      {/* <UpdateFormData /> */}
    </>
  );
};

export default CustomerForm;
