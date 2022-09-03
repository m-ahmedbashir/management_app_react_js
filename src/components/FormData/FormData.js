import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import UpdateFormData from "../UpdateFormData/UpdateFormData";
// import updateForm from "../updateForm/updateForm";
const FormData = ({ customerData, handleDelete }) => {
  const onDelete = (id) => {
    // console.log(id);
    handleDelete(id);
  };
  return (
    <div className="container">
      <div>
        <h2 className="text-center">Customer Data</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Custmer ID</th>
              <th scope="col">Custmer Name</th>
              <th scope="col">Phone No</th>
              <th scope="col">Width</th>
              <th scope="col">Height</th>
              <th scope="col">Details</th>
              <th scope="col">Delete/Update</th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customerData) => (
              <tr>
                <th key={customerData.id}>{customerData.id}</th>
                <td>{customerData.name}</td>
                <td>{customerData.number}</td>
                <td>{customerData.width}</td>
                <td>{customerData.height}</td>
                <td>{customerData.details}</td>
                <td>
                  <Button
                    className="btn btn-danger"
                    onClick={() => onDelete(customerData.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="btn btn-warning ms-2"
                    onClick={() => {
                      // NavLink={<UpdateFormData/>}
                      console.log("I am update button from form data");
                    }}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default FormData;
