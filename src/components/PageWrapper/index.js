import React from "react";
import Header from "./Header"; 
import ContentWrapper from "./ContentWrapper";

const PageWrapper = (props) => {
  return (
    <div className="ms_content_wrapper padder_top80">
      <Header /> 
      <ContentWrapper />
    </div>
  );
};
export default PageWrapper;
