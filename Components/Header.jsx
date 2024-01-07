import React from "react";
import "./styles/Header.css";

const Header = () => {
  // 사용자 이름 들어갈 자리
  let data = [
    {
      user_name: "김건우",
    },
  ];

  return (
    <div className="header-wrap">
      <h1 className="name-hello">
        <strong>{data[0].user_name}</strong>님 안녕하세요
      </h1>
      <h4 className="hello2-text">오늘 하루는 어떠신가요?</h4>
    </div>
  );
};

export default Header;
