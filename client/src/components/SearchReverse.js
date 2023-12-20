import React, { useState } from "react";
import ReverseService from "../services/reverseService";

function SearchReverse(props) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");

  const changeHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const buttonHandler = () => {
    if (phoneNumber !== "") {
      ReverseService.searchReverse(phoneNumber).then((data) => {
        setData(data);
      });
    } else {
      setData("");
      setMessage("請輸入正確的手機號碼");
    }
  };

  return (
    <section id="Search">
      <div className="Search-result">
        <div className="input-button">
          <input
            placeholder="請輸入手機號碼"
            onChange={changeHandler}
            type="text"
          />
          <button onClick={buttonHandler}>查詢</button>
        </div>
        {message && <p className={data ? "none" : "message"}>{message}</p>}
        {data && (
          <div className="result">
            <p className="title">以下是您預約的時間及服務</p>
            {data.data.map((data, index) => {
              return (
                <div className={"card"}>
                  <div className="time">
                    <p key={index}>
                      {data.year}年{data.month + 1}月{data.date}日
                    </p>
                    <p key={index}>{data.day}</p>
                    <p key={index}>{data.time}點</p>
                  </div>
                  <div className="service">
                    <p key={index}>{data.service}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default SearchReverse;
