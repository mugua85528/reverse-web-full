import React from "react";
import { useNavigate } from "react-router-dom";

function Service({ setService, setPrice }) {
  const navigate = useNavigate();
  const service1Handler = () => {
    setService("臉部基礎保養");
    setPrice(899);
    navigate("/reverse");
  };
  const service2Handler = () => {
    setService("臉部深層保養");
    setPrice(1399);
    navigate("/reverse");
  };
  const service3Handler = () => {
    setService("臉部頂級保養");
    setPrice(1999);
    navigate("/reverse");
  };
  const service4Handler = () => {
    setService("SPA基礎保養");
    setPrice(899);
    navigate("/reverse");
  };
  const service5Handler = () => {
    setService("SPA深層保養");
    setPrice(1399);
    navigate("/reverse");
  };
  const service6Handler = () => {
    setService("SPA頂級保養");
    setPrice(1999);
    navigate("/reverse");
  };
  return (
    <div id="Service">
      <section className="step">
        <div className="step1">
          <div className="circle circle1">
            <p className="num">01</p>
            <p className="step-p step1-p">選擇服務</p>
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
      <section className="service">
        <div className="card service1">
          <div className="img1"></div>
          <div className="button">
            <p>臉部保養</p>
            <hr />
            <button onClick={service1Handler}>基礎保養 $899</button>
            <button onClick={service2Handler}>深層保養 $1399</button>
            <button onClick={service3Handler}>頂級保養 $1999</button>
          </div>
        </div>
        <div className="card service2">
          <div className="img2"></div>
          <div className="button">
            <p>身體SPA</p>
            <hr />
            <button onClick={service4Handler}>基礎SPA $899</button>
            <button onClick={service5Handler}>深層SPA $1399</button>
            <button onClick={service6Handler}>頂級SPA $1999</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
