import React from "react";
import "./styles/Nav.css";

const Nav = () => {
  return (
    <div className="nav-wrap">
      <a className="nav-button" href="/">
        홈
      </a>
      <a className="nav-button" href="/mypage">
        내 예약
      </a>
      <a className="nav-button">마이페이지</a>
    </div>
  );
};

export default Nav;
