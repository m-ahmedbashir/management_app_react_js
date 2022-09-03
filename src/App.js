import React from "react";
import "./App.css";
import CustomerForm from "./components/CustomerForm/CustomerForm";
import { Routes, Route } from "react-router-dom";
import InputForm from "./components/InputForm/InputForm";
import FormData from "./components/FormData/FormData";
import UpdateFormData from "./components/UpdateFormData/UpdateFormData";
function App() {
  return (
    <CustomerForm />
    // <Routes>
    //   <Route path="show" element={<FormData />} />
    //   <Route exact path="/" element={<InputForm />} />
    //   <Route path="update" element={<UpdateFormData />} />
    // </Routes>
  );
}

export default App;
