import React, { useEffect, useState } from "react";
import ShopService from "../services/shopService";

function ShopPage(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    ShopService.getShopData().then((data) => {
      setData(data.data);
    });
  }, []);

  const settingHandler = () => {};
  return (
    <div>
      <p>商店名稱:{data && data[0].shopName}</p>
      <p>開始營業時間:{data && data[0].startTime}點</p>
      <p>結束營業時間:{data && data[0].endTime}點</p>
      <button onClick={settingHandler}>修改商店資訊</button>
    </div>
  );
}

export default ShopPage;
