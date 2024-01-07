import React from "react";
import "./styles/Main_Content.css";
import PurchaseViewCard from "./PurchaseViewCard";

const Main_Content = () => {
  let purchaseItemAtCard = [
    {
      home_name: "건우채",
      basic_address: "부산광역시 사상구 주례로 47(동서대학교)",
      detail_address: "글로벌빌리지 서관 1219호",
      state: "결제 대기 중",
      startDate: "2023.11.30",
      finalDate: "2023.12.12",
      month: "월, 목",
      time: "오전 11:00",
      placeName: "화장실",
    },

    {
      home_name: "준오굴",
      basic_address: "부산광역시 사상구 주례로 47(동서대학교)",
      detail_address: "글로벌빌리지 서관 1219호",
      state: "견적서 보기",
      startDate: "2023.11.30",
      finalDate: "2023.12.12",
      month: "월, 목",
      time: "오전 11:00",
      placeName: "화장실",
    },
    {},
  ];

  return (
    <div className="main-content-wrap">
      <div className="user-info">
        {/* 사용자 정보 들어갈 자리(내가 결제한 것들/ 카드형태로 / 가로정렬) */}
        {purchaseItemAtCard.map((item, index) => (
          <PurchaseViewCard />
        ))}
      </div>
    </div>
  );
};

export default Main_Content;
