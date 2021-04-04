import React from "react";

import WeeklyBox from "./WeeklyBox";

import weeklyBoardData from "../../mock/weeklyBoardData";

// import OpenLogo from "../../assets/images/weekly/song1.jpg";

// import SGVPlay from "../../assets/images/svg/play.svg";

export const TopBoard = (props) => {

  return (
    <>
      <div className="ms_weekly_wrapper">
        <div className="ms_weekly_inner">
          <div className="row">
            <div className="col-lg-12">
              <div className="ms_heading">
                <h1>weekly top 15</h1>
              </div>
            </div>
            {weeklyBoardData.map((weeklyBoard, index) => {
              if (index === 0 || index === 1) {
                return (
                  <div className="col-lg-4 col-md-12 padding_right40">
                    {weeklyBoard.map((song, subIndex) => {
                      return <WeeklyBox {...song} topNo={song.topNo}  key={"WeeklyBox" + index + "-" + subIndex}/>;
                    })}
                  </div>
                );
              } else
                return (
                  <div className="col-lg-4 col-md-12"> 
                    {weeklyBoard.map((song, subIndex) => {
                      return <WeeklyBox {...song} key={"WeeklyBox" + index + "-" + subIndex} />;
                    })}
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBoard;
