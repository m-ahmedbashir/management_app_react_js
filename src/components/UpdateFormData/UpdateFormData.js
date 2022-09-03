import React, { useState } from "react";
import { Button } from "react-bootstrap";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
const UpdateFormData = () => {
  const [updatedCustmerData, setUpdatedCusmterData] = useState({
    id: "",
    name: "",
    number: "",
    width: "",
    height: "",
    details: "",
  });

  const handleUpdateChange = (event) => {
    setUpdatedCusmterData({
      ...updatedCustmerData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle Submit from update form");
  };
  return (
    <div>
      <div className="container">
        <h2 className="text-center mt-2">Update Custmer Data</h2>
        <form onSubmit={handleSubmit}>
          <h1>Update Form</h1>
          <div className="mt-4">
            <label>Custmer ID:</label>
            <input
              className="form-control"
              placeholder="Enter Customer ID"
              name="id"
              type="text"
              value={updatedCustmerData.id}
              onChange={handleUpdateChange}
            ></input>
          </div>
          <div className="mt-4">
            <label>Enter Name:</label>
            <input
              className="form-control"
              placeholder="Enter Customer Name"
              name="name"
              type="text"
              value={updatedCustmerData.name}
              onChange={handleUpdateChange}
            ></input>
          </div>
          <div className="mt-4">
            <label>Enter Phone Number:</label>
            <input
              className="form-control"
              placeholder="Enter Phone Number"
              name="number"
              type="number"
              value={updatedCustmerData.number}
              onChange={handleUpdateChange}
            ></input>
          </div>
          <div className="mt-4">
            <label>Enter Width:</label>
            <input
              className="form-control"
              placeholder="Enter Width"
              name="width"
              type="number"
              value={updatedCustmerData.width}
              onChange={handleUpdateChange}
            ></input>
          </div>
          <div className="mt-4">
            <label>Enter height:</label>
            <input
              className="form-control"
              placeholder="Enter Height"
              name="height"
              type="number"
              value={updatedCustmerData.height}
              onChange={handleUpdateChange}
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
              value={updatedCustmerData.details}
              onChange={handleUpdateChange}
            ></textarea>
          </div>

          <Button className="btn btn-primary ps-4 pe-4 mt-3" type="submit">
            Update Details
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateFormData;
