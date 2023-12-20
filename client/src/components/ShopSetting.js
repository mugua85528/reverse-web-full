import React, { useState } from "react";
import ShopService from "../services/shopService";
import { useNavigate } from "react-router-dom";

function ShopSetting(props) {
  const navigate = useNavigate();
  const [shopName, setShopName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const nameHandler = (e) => {
    setShopName(e.target.value);
  };
  const startHandler = (e) => {
    setStartTime(e.target.value);
  };
  const endHandler = (e) => {
    setEndTime(e.target.value);
  };
  const buttonHandler = () => {
    ShopService.settingShop(shopName, startTime, endTime)
      .then(() => {
        window.alert("設定成功，將導向首頁");
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <label name="shopName">商店名稱</label>
      <input onChange={nameHandler} name="shopName" type="text" />
      <label name="startTime">開始營業時間</label>
      <input onChange={startHandler} name="startTime" type="text" />
      <label name="endTime">最後營業時間</label>
      <input onChange={endHandler} name="endTime" type="text" />
      <button onClick={buttonHandler}>設定</button>
    </div>
  );
}

export default ShopSetting;
