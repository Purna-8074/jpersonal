import React, { useState } from "react";
import './style.css';
import config from './confg';



function Registar() {
  const [register, setRegister] = useState({
    id: "",
    name: "",
    dep: "",
    salary: ""
  });
    const baseUrl = `${config.API_URL}/emp/add`;

   


  const change = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });  
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(register)
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response from backend:", data);
    alert("Registration Successful!");
    setRegister({ id: "", name: "", dep: "", salary: "" }); // clear form
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Failed to submit form. Check console for details.");
  }
};



  return (
    <div>
        <div className="form-grid"> 
      <h2>Registar Form</h2>
      <form onSubmit={handleSubmit}>
        
        
            <input
          type="text" name="id" value={register.id} onChange={change} required   placeholder="ID"
          />
         

        
          <input
            type="text" name="name" value={register.name}  onChange={change} required   placeholder="NAME"
          />
       

         
          <input
            type="text"  name="dep" value={register.dep} onChange={change} required   placeholder="DEP"
          />
       
 
          <input
            type="number"  name="salary" value={register.salary} onChange={change} required   placeholder="SALARY"
          />
        

        <button type="submit">Submit</button>
      </form>
       </div>
       </div>
  );
}

export default Registar;
