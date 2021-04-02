import React, { useState } from "react"; //dynamic website by useState
import { Row, Col } from "reactstrap";
import Translation from "../../utils/int8-util";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

//day la trang Auth, gom co 3 component: Login, SignUp, ForgotPassword. Khi load trang, trang thai mac dinh la 1: mo Login,
// khi ở trang Login, click vào quên mật khẩu thì set trạng thái về 2, nó sẽ render ra quên mật khẩu. Khi ở trang quên mật khẩu, click
// login nó sẽ set trạng thái về lại 1 -> render ra Login
// click SignUp->SignUp Component
//viet nay kho hieu

const AuthPage = (props) => {
  //khai bao 1 useState, luu trang thai trang AuthPage. Default = 1: Login, 2:Forgot Password, 3:SignUp
  const [trangThai, setTrangThai] = useState(1);

  return (
    <Row
      className="row"
      style={{
        height: "100%",
        width: "100%",
        background: "linear-gradient(to right,#556270 0%, #ff6b6b 100%)",
      }}
    >
      <Col className="col-md-6 col-xs-12 col-sm-12 mx-auto py-4 px-0" style={{ display: "flex" }}>
        {/* //truyen ham nay xuong cho thang Login */}
        {
          //    toan tu logic, nếu trạng thái bằg 1 -> Login hiển thị, 2-> quên mật khẩu sẽ hiển thị, nếu trạng thái bằng 3 hoặc khác: không hiển thị gì
          trangThai === 1 ? <Login setTrangThai={setTrangThai} /> : ""
        }
        {trangThai === 2 ? <ForgotPassword setTrangThai={setTrangThai} /> : ""}
      </Col>
    </Row>
  );
};

export default AuthPage;
