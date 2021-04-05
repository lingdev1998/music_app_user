import React from "react";
import LoaderImg from "../../assets/images/loader.gif";

const Loader = ({ isLoading, error }) => {
  // Handle the loading state
  console.log(isLoading)
  if (isLoading) {
    return (
      <div>
        <div style={{ height: "90vh" }} className="container">
          <div className="ms_loader">
            <div className="wrap">
              <img src={LoaderImg} alt="dsa" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
}; 

export default Loader;
