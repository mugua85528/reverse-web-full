import React, { useEffect, useState } from "react";
import { addDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import ReverseService from "../services/reverseService";
import ShopService from "../services/shopService";

function Reverse({
  service,
  setYear,
  setMonth,
  setDate,
  setDay,
  setTime,
  setMs,
}) {
  const navigate = useNavigate();
  const [week, setWeek] = useState(0);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const reverseTime = [];
  const dateNow = new Date();
  const date1 = addDays(new Date(dateNow), 1 + week);
  const date2 = addDays(new Date(dateNow), 2 + week);
  const date3 = addDays(new Date(dateNow), 3 + week);
  const date4 = addDays(new Date(dateNow), 4 + week);
  const date5 = addDays(new Date(dateNow), 5 + week);
  const date6 = addDays(new Date(dateNow), 6 + week);
  const date7 = addDays(new Date(dateNow), 7 + week);
  const [reversed, setReversed] = useState([]);

  for (let hour = startTime; hour <= endTime; hour++) {
    dateNow.setHours(hour);
    dateNow.setMinutes("00");
    const formattedTime = dateNow.toLocaleTimeString("zh-hant", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    reverseTime.push(formattedTime);
  }

  const reverseHandler1 = (time) => {
    setTime(time);
    setYear(date1.getFullYear());
    setMonth(date1.getMonth());
    setDate(date1.getDate());
    switch (date1.getDay()) {
      case 0:
        setDay("星期日");
        break;
      case 1:
        setDay("星期一");
        break;
      case 2:
        setDay("星期二");
        break;
      case 3:
        setDay("星期三");
        break;
      case 4:
        setDay("星期四");
        break;
      case 5:
        setDay("星期五");
        break;
      case 6:
        setDay("星期六");
    }
    setMs(date1.getTime());
    navigate("/check");
  };
  const reverseHandler2 = (time) => {
    setTime(time);
    setYear(date2.getFullYear());
    setMonth(date2.getMonth());
    setDate(date2.getDate());
    switch (date2.getDay()) {
      case 0:
        setDay("星期日");
        break;
      case 1:
        setDay("星期一");
        break;
      case 2:
        setDay("星期二");
        break;
      case 3:
        setDay("星期三");
        break;
      case 4:
        setDay("星期四");
        break;
      case 5:
        setDay("星期五");
        break;
      case 6:
        setDay("星期六");
    }
    setMs(date2.getTime());
    navigate("/check");
  };
  const reverseHandler3 = (time) => {
    setTime(time);
    setYear(date3.getFullYear());
    setMonth(date3.getMonth());
    setDate(date3.getDate());
    switch (date3.getDay()) {
      case 0:
        setDay("星期日");
        break;
      case 1:
        setDay("星期一");
        break;
      case 2:
        setDay("星期二");
        break;
      case 3:
        setDay("星期三");
        break;
      case 4:
        setDay("星期四");
        break;
      case 5:
        setDay("星期五");
        break;
      case 6:
        setDay("星期六");
    }
    setMs(date3.getTime());
    navigate("/check");
  };
  const reverseHandler4 = (time) => {
    setTime(time);
    setYear(date4.getFullYear());
    setMonth(date4.getMonth());
    setDate(date4.getDate());
    switch (date4.getDay()) {
      case 0:
        setDay("星期日");
        break;
      case 1:
        setDay("星期一");
        break;
      case 2:
        setDay("星期二");
        break;
      case 3:
        setDay("星期三");
        break;
      case 4:
        setDay("星期四");
        break;
      case 5:
        setDay("星期五");
        break;
      case 6:
        setDay("星期六");
    }
    setMs(date4.getTime());
    navigate("/check");
  };
  const reverseHandler5 = (time) => {
    setTime(time);
    setYear(date5.getFullYear());
    setMonth(date5.getMonth());
    setDate(date5.getDate());
    switch (date5.getDay()) {
      case 0:
        setDay("星期日");
        break;
      case 1:
        setDay("星期一");
        break;
      case 2:
        setDay("星期二");
        break;
      case 3:
        setDay("星期三");
        break;
      case 4:
        setDay("星期四");
        break;
      case 5:
        setDay("星期五");
        break;
      case 6:
        setDay("星期六");
    }
    setMs(date5.getTime());
    navigate("/check");
  };
  const reverseHandler6 = (time) => {
    setTime(time);
    setYear(date6.getFullYear());
    setMonth(date6.getMonth());
    setDate(date6.getDate());
    switch (date6.getDay()) {
      case 0:
        setDay("星期日");
        break;
      case 1:
        setDay("星期一");
        break;
      case 2:
        setDay("星期二");
        break;
      case 3:
        setDay("星期三");
        break;
      case 4:
        setDay("星期四");
        break;
      case 5:
        setDay("星期五");
        break;
      case 6:
        setDay("星期六");
    }
    setMs(date6.getTime());
    navigate("/check");
  };
  const reverseHandler7 = (time) => {
    setTime(time);
    setYear(date7.getFullYear());
    setMonth(date7.getMonth());
    setDate(date7.getDate());
    switch (date7.getDay()) {
      case 0:
        setDay("星期日");
        break;
      case 1:
        setDay("星期一");
        break;
      case 2:
        setDay("星期二");
        break;
      case 3:
        setDay("星期三");
        break;
      case 4:
        setDay("星期四");
        break;
      case 5:
        setDay("星期五");
        break;
      case 6:
        setDay("星期六");
    }
    setMs(date7.getTime());
    navigate("/check");
  };

  const nextWeek = () => {
    if (week < 21) {
      setWeek(week + 7);
    }
  };
  const previousWeek = () => {
    if (week > 0) {
      setWeek(week - 7);
    }
  };
  const returnHandler = () => {
    navigate("/service");
  };

  useEffect(() => {
    window.scrollTo(0, 1200);
    ReverseService.getReversed().then((data) => {
      setReversed(
        data.data.map(
          (ReversedData) =>
            ReversedData.year +
            "" +
            (ReversedData.month + 1) +
            "" +
            ReversedData.date +
            ReversedData.time
        )
      );
    });
    ShopService.getShopData().then((data) => {
      setStartTime(data.data[0].startTime);
      setEndTime(data.data[0].endTime);
    });
  }, []);

  window.onload = () => {
    navigate("/service");
    window.scrollTo(0, 1000);
  };

  return (
    <div id="ReverseMain">
      <section className="step">
        <div className="step1">
          <div className="circle circle1">
            <p className="num">01</p>
            <p className="check"> ✔{service} </p>
          </div>
        </div>
        <div className="arow1">
          <p>〉</p>
        </div>
        <div className="step2">
          <div className="circle circle2">
            <p className="num">02</p>
            <p className="step-p step2-p">選擇時間</p>
          </div>
        </div>
        <div className="arow2">
          <p>〉</p>
        </div>
        <div className="step3">
          <div className="circle circle3">
            <p className="num">03</p>
            <p className="step-p step3-p">填寫資料</p>
          </div>
        </div>
      </section>

      <section className="return">
        <div className="return-div">
          <button onClick={returnHandler}>重新選擇服務</button>
        </div>
      </section>

      <section className="time-area">
        <div className="year-month">
          <button
            className={week === 0 ? "none" : "pre"}
            onClick={previousWeek}
          >
            上週
          </button>
          <div>
            <p>
              {date1.getFullYear()}年 {date1.getMonth() + 1}月
            </p>
            <div className="p-none">
              <p
                className={
                  date1.getFullYear() === date7.getFullYear() ? "none" : ""
                }
              >
                {date7.getFullYear()}年
              </p>
              <p
                className={date1.getMonth() === date7.getMonth() ? "none" : ""}
              >
                {date7.getMonth() + 1}月
              </p>
            </div>
          </div>
          <button className={week === 21 ? "none" : "next"} onClick={nextWeek}>
            下週
          </button>
        </div>
        <div className="time">
          <div className="reverse reverse1">
            <p className="date">{date1.getDate()}日</p>
            {reverseTime.map((time, index) => {
              return (
                <button
                  className={
                    reversed.includes(
                      date1.getFullYear() +
                        "" +
                        (date1.getMonth() + 1) +
                        "" +
                        date1.getDate() +
                        time
                    )
                      ? "reversed"
                      : "button1"
                  }
                  key={index}
                  onClick={() => reverseHandler1(time)}
                >
                  {time}
                </button>
              );
            })}
          </div>
          <div className="reverse reverse2">
            <p className="date">{date2.getDate()}日</p>
            {reverseTime.map((time, index) => {
              return (
                <button
                  className={
                    reversed.includes(
                      date2.getFullYear() +
                        "" +
                        (date2.getMonth() + 1) +
                        "" +
                        date2.getDate() +
                        time
                    )
                      ? "reversed"
                      : "button2"
                  }
                  key={index}
                  onClick={() => reverseHandler2(time)}
                >
                  {time}
                </button>
              );
            })}
          </div>
          <div className="reverse reverse3">
            <p className="date">{date3.getDate()}日</p>
            {reverseTime.map((time, index) => {
              return (
                <button
                  className={
                    reversed.includes(
                      date3.getFullYear() +
                        "" +
                        (date3.getMonth() + 1) +
                        "" +
                        date3.getDate() +
                        time
                    )
                      ? "reversed"
                      : "button3"
                  }
                  key={index}
                  onClick={() => reverseHandler3(time)}
                >
                  {time}
                </button>
              );
            })}
          </div>
          <div className="reverse reverse4">
            <p className="date">{date4.getDate()}日</p>
            {reverseTime.map((time, index) => {
              return (
                <button
                  className={
                    reversed.includes(
                      date4.getFullYear() +
                        "" +
                        (date4.getMonth() + 1) +
                        "" +
                        date4.getDate() +
                        time
                    )
                      ? "reversed"
                      : "button4"
                  }
                  key={index}
                  onClick={() => reverseHandler4(time)}
                >
                  {time}
                </button>
              );
            })}
          </div>
          <div className="reverse reverse5">
            <p className="date">{date5.getDate()}日</p>
            {reverseTime.map((time, index) => {
              return (
                <button
                  className={
                    reversed.includes(
                      date5.getFullYear() +
                        "" +
                        (date5.getMonth() + 1) +
                        "" +
                        date5.getDate() +
                        time
                    )
                      ? "reversed"
                      : "button5"
                  }
                  key={index}
                  onClick={() => reverseHandler5(time)}
                >
                  {time}
                </button>
              );
            })}
          </div>
          <div className="reverse reverse6">
            <p className="date">{date6.getDate()}日</p>
            {reverseTime.map((time, index) => {
              return (
                <button
                  className={
                    reversed.includes(
                      date6.getFullYear() +
                        "" +
                        (date6.getMonth() + 1) +
                        "" +
                        date6.getDate() +
                        time
                    )
                      ? "reversed"
                      : "button6"
                  }
                  key={index}
                  onClick={() => reverseHandler6(time)}
                >
                  {time}
                </button>
              );
            })}
          </div>
          <div className="reverse reverse7">
            <p className="date">{date7.getDate()}日</p>
            {reverseTime.map((time, index) => {
              return (
                <button
                  className={
                    reversed.includes(
                      date7.getFullYear() +
                        "" +
                        (date7.getMonth() + 1) +
                        "" +
                        date7.getDate() +
                        time
                    )
                      ? "reversed"
                      : "button7"
                  }
                  key={index}
                  onClick={() => reverseHandler7(time)}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reverse;
