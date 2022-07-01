import axios from "axios";
import React, { useState } from "react";
import "./AddUser.css";
const AddUser = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
       

    });
     const handleFormSubmit = async (e) => {
      let response = await axios.post("http://localhost:4000/posts", formData);

if (response) {
    alert("data submitted successfully");
}else {
    alert("something went wrong");
}

     setFormData({
        firstname:"",
        lastname:"",
        mobile:"",
        email:"",
       
     });
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>Registration Form</h1>
            </div>

            <div class="mb-3">
  <label 
  for="exampleFormControlInput1" 
  class="form-label">
    First Name
  </label>
  <input 
  type="text" 
  class="form-control" 
  id="exampleFormControlInput1"
  value={formData.firstname}
  onChange={(e)=> setFormData({ ...
    formData, firstname: e.target.value })}
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
    Last Name
  </label>
  <input 
  type="text" 
  class="form-control" 
  id="exampleFormControlInput1" 
  value={formData.lastname}
  onChange={(e)=> setFormData({ ...
    formData, lastname: e.target.value })}
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
    Mobile No.
  </label>
  <input 
  type="text" 
  class="form-control" 
  id="exampleFormControlInput1" 
  value={formData.mobile}
  onChange={(e)=> setFormData({ ...
    formData, mobile: e.target.value })}
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
    Email address
  </label>
  <input 
  type="email" 
  class="form-control" 
  id="exampleFormControlInput1" 
  value={formData.email}
  onChange={(e)=> setFormData({ ...
    formData, email: e.target.value })}
  />
</div>

<div class="mb-3">
    <button className="btn btn-success"
    onClick={handleFormSubmit}>Add User</button>
</div>
</div>
</div>
  );
};

export default AddUser;