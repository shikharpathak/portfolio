import React, { useState } from "react";

function Form() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    // console.log(event.target.value);
    // const value = event.target.value;
    // const name = event.target.name;
    const { value, name } = event.target;
    setFullName((prevValue) => {
      console.log(prevValue);
      console.log(name);
      return{
          ...prevValue,
          [name]: value,
      }
    //   if (name === "fname")
    //     return {
    //       fname: value,
    //       lname: prevValue.lname,
    //       email: prevValue.email,
    //       phone: prevValue.phone,
    //     };
    //   else if (name === "lname") {
    //     return {
    //       fname: prevValue.fname,
    //       lname: value,
    //       email: prevValue.email,
    //       phone: prevValue.phone,
    //     };
    //   } else if (name === "email") {
    //     return {
    //       fname: prevValue.fname,
    //       lname: prevValue.lname,
    //       email: value,
    //       phone: prevValue.phone,
    //     };
    //   } else if (name === "phone") {
    //     return {
    //       fname: prevValue.fname,
    //       lname: prevValue.value,
    //       email: prevValue.email,
    //       phone: value,
    //     };
    //   }
    });
  };
  const formSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="formDetails">
        <form onSubmit={formSubmit}>
          <h1>
            Hello there !!! {fullName.fname} {fullName.lname}
          </h1>
          <p>{fullName.email}</p>
          <p>{fullName.phone}</p>
          <div className="fname">
            <input
              type="text"
              name="fname"
              placeholder="Enter your First Name"
              onChange={inputEvent}
              value={fullName.fname}
            />
          </div>
          <br />
          <div className="lname">
            <input
              type="text"
              name="lname"
              placeholder="Enter your Last Name"
              onChange={inputEvent}
              value={fullName.lname}
            />
          </div>
          <br />
          <div className="email">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              onChange={inputEvent}
              value={fullName.email}
            />
          </div>
          <br />
          <div className="phone">
            <input
              type="number"
              name="phone"
              placeholder="Enter your Phone No."
              onChange={inputEvent}
              value={fullName.phone}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
