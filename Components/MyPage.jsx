import React from "react";
import "./styles/MyPage.css";
import Nav from "./Nav";

const MyPage = () => {
  return (
    <div className="mypage-wrap">
      <h1>마이페이지입니다</h1>
      <div className="mypage-content"></div>
      <Nav />
    </div>
  );
};

export default MyPage;
