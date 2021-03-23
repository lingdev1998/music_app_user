import React, { useState, useEffect } from "react"; 

const Heading = (props) => { 

  return (
<div className="ms_heading">
  <h1>{props.heading}</h1>
  <span className="veiw_all"><a href="#">{props.actionName}</a></span>
</div>


  );
};
export default Heading;
