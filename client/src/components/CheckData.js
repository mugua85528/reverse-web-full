import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReverseService from "../services/reverseService";

function CheckData({ service, price, year, month, date, day, time, ms }) {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState("null");
  const [gender, setGender] = useState("小姐");
  const [textarea, setTextarea] = useState("null");
  const [message, setMessage] = useState(null);
  const [terms, setTerms] = useState(false);
  const reverseHandler = () => {
    ReverseService.reverse(
      year,
      month,
      date,
      day,
      time,
      ms,
      service,
      name,
      phone,
      gender,
      email,
      textarea,
      terms
    )
      .then(() => {
        window.alert("預約成功! 您現在將被導向首頁。");
        navigate("/");
        window.scrollTo(0, 0);
      })
      .catch((e) => {
        setMessage(e.response.data);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 800);
  }, []);

  window.onload = () => {
    navigate("/service");
    window.scrollTo(0, 1000);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const genderHandler = (e) => {
    setGender(e.target.value);
  };
  const taxtareaHandler = (e) => {
    setTextarea(e.target.value);
  };
  const termsHandler = (e) => {
    setTerms(e.target.checked);
  };
  const returnHandler = () => {
    navigate("/reverse");
  };

  return (
    <div id="Data">
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
            <p className="check">
              ✔{month + 1}/{date}-{time}
            </p>
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
          <button onClick={returnHandler}>重新選擇時間</button>
        </div>
      </section>
      <section className="form">
        <div className="form-div">
          <p className="form-title">確認時間並填寫預約資訊</p>
          <div className="data">
            <div className="reverse">
              <p className="reverse-p">您預約的時段是</p>
              <p className="reverse-y">
                {year}年{month + 1}月{date}日
              </p>
              <p className="reverse-t">
                {day} {time}
              </p>
              <div className="service">
                <p>預約服務</p>
                <p>{service}</p>
              </div>
              <div className="price">
                <p>金額</p>
                <p>{price}元</p>
              </div>
            </div>
            <div className="profile">
              <div className="profile-data">
                <div className="name-gender">
                  <span className="user-icon"></span>
                  <input
                    className="name"
                    onChange={nameHandler}
                    type="text"
                    placeholder="請輸入您的姓名"
                  />
                  <select onChange={genderHandler} className="gender">
                    <option value="小姐">小姐</option>
                    <option value="先生">先生</option>
                  </select>
                </div>
                <div className="phone-div">
                  <span className="phone-icon"></span>
                  <input
                    className="phone"
                    onChange={phoneHandler}
                    type="text"
                    placeholder="請輸入您的手機號碼"
                  />
                </div>
                <div className="email-div">
                  <span className="email-icon"></span>
                  <input
                    className="email"
                    onChange={emailHandler}
                    type="text"
                    placeholder="請輸入您的電子信箱(選填)"
                  />
                </div>
              </div>
              <div className="textarea-p">
                <p>如有其他需求請填寫於下方</p>
                <textarea
                  onChange={taxtareaHandler}
                  className="textarea"
                  rows={5}
                  cols={20}
                  placeholder="有什麼需求或建議嗎?"
                />
              </div>
              <div className="check-button">
                <div className="check-div">
                  <div className="check1-div">
                    <input
                      id="terms"
                      type="checkbox"
                      className="checkbox1"
                      onChange={termsHandler}
                      required
                    />
                    <label htmlFor="terms">我同意商家條款</label>
                  </div>
                  <div className="check2-div">
                    <input id="email" type="checkbox" className="checkbox2" />
                    <label htmlFor="email">我同意接受最新消息的電子信件</label>
                  </div>
                </div>
                {message && (
                  <section className="error">
                    <div className="message">{message}</div>
                  </section>
                )}
                <div className="button-div">
                  <button onClick={reverseHandler} className="button">
                    預約
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CheckData;
