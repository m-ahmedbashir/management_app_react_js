import React, { useState } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
const InputForm = ({ addCustmerData }) => {
  const [contactInfo, setContactInfo] = useState({
    id: "",
    name: "",
    number: "",
    width: "",
    height: "",
    details: "",
  });
  // handle input changes
  const handlChanges = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  // handle form data submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // seding data to input form with function
    addCustmerData(contactInfo);
    // empty text box
    setContactInfo({
      id: "",
      name: "",
      number: "",
      width: "",
      height: "",
      details: "",
    });
  };
  return (
    <div className="container">
      <h2 className="text-center mt-2">Enter Customer Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label>Custmer ID:</label>
          <input
            className="form-control"
            placeholder="Enter Customer ID"
            name="id"
            type="text"
            onChange={handlChanges}
            value={contactInfo.id}
          ></input>
        </div>
        <div className="mt-4">
          <label>Enter Name:</label>
          <input
            className="form-control"
            placeholder="Enter Customer Name"
            name="name"
            type="text"
            onChange={handlChanges}
            value={contactInfo.name}
          ></input>
        </div>
        <div className="mt-4">
          <label>Enter Phone Number:</label>
          <input
            className="form-control"
            placeholder="Enter Phone Number"
            name="number"
            type="number"
            onChange={handlChanges}
            value={contactInfo.number}
          ></input>
        </div>
        <div className="mt-4">
          <label>Enter Width:</label>
          <input
            className="form-control"
            placeholder="Enter Width"
            name="width"
            type="number"
            onChange={handlChanges}
            value={contactInfo.width}
          ></input>
        </div>
        <div className="mt-4">
          <label>Enter height:</label>
          <input
            className="form-control"
            placeholder="Enter Height"
            name="height"
            type="number"
            onChange={handlChanges}
            value={contactInfo.height}
          ></input>
        </div>
        <div className="mt-4">
          <label>Enter details:</label>
          <textarea
            className="form-control"
            placeholder="Enter Details (Optional)"
            type="text"
            rows="4"
            name="details"
            onChange={handlChanges}
            value={contactInfo.details}
          ></textarea>
        </div>

        <Button className="btn btn-primary ps-4 pe-4 mt-3" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default InputForm;
