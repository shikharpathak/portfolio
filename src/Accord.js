import React, { useState } from "react";

function Accord({ question, answer }) {
  const [show, setshow] = useState(false);
  const toggleshow = () => {
    setshow(!show);
  };
  return (
    <>
      <div className="main-heading">
        <h3>
          {question}{" "}
          <span
            onClick={toggleshow}
            style={{
              color: "red",
              cursor: "pointer",
              background: "black",
              padding: "10px",
              margin: "15px",
            }}
          >
            {show ? "-" : "+"}
          </span>{" "}
        </h3>
      </div>
      <div className="content">{show && <p>{answer}</p>}</div>
    </>
  );
}

export default Accord;
