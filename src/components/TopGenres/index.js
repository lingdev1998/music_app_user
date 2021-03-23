import React from "react";
import GenresBox from "./GenresBox";

import ImgSrc1 from "../../assets/images/genrs/img1.jpg";
import ImgSrc2 from "../../assets/images/genrs/img2.jpg";
import ImgSrc3 from "../../assets/images/genrs/img3.jpg";
import ImgSrc4 from "../../assets/images/genrs/img4.jpg";
import ImgSrc5 from "../../assets/images/genrs/img5.jpg";
import ImgSrc6 from "../../assets/images/genrs/img6.jpg";

const TopGenres = (props) => {
  return (
    <div className="ms_genres_wrapper">
      <div className="row">
        <div className="col-lg-12">
          <div className="ms_heading">
            <h1>Top Genres</h1>
            <span className="veiw_all">
              <a href="#">view more</a>
            </span>
          </div>
        </div>
        <div className="col-lg-4">
              <GenresBox theLoai="Nhac tre" imgSrc={ImgSrc1} />
        </div>
        <div className="col-lg-6">  
          <div className="row">
            <div className="col-lg-4">
              <GenresBox theLoai="Nhac tre" imgSrc={ImgSrc2} />
            </div>
            <div className="col-lg-8">
              <GenresBox theLoai="Nhac tre" imgSrc={ImgSrc3}  />
            </div>
            <div className="col-lg-8">
              <GenresBox theLoai="Nhac tre" imgSrc={ImgSrc5} />
            </div>
            <div className="col-lg-4">
              <GenresBox theLoai="Nhac tre" imgSrc={ImgSrc6} />
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <GenresBox theLoai="Nhac tre" imgSrc={ImgSrc4} />
        </div>
      </div>
    </div>
  );
};
export default TopGenres;
