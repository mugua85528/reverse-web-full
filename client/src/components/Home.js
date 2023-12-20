import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [currentImg, setCurrentImg] = useState("big-img big-img1");
  const [scroll, setScroll] = useState(false);

  const nextImg = () => {
    if (currentImg === "big-img big-img1") {
      setCurrentImg("big-img big-img2");
    } else if (currentImg === "big-img big-img2") {
      setCurrentImg("big-img big-img3");
    }
  };
  const previousImg = () => {
    if (currentImg === "big-img big-img3") {
      setCurrentImg("big-img big-img2");
    } else if (currentImg === "big-img big-img2") {
      setCurrentImg("big-img big-img1");
    }
  };
  const topHandler = () => {
    window.scrollTo(0, 0);
  };

  window.onload = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <main id="Home">
      <section className="about">
        <div className="aboutUs">
          <div className="p-hr">
            <p>關於我們</p>
            <hr />
          </div>
          <h1 className="h1">
            我們是一間美容工作室，讓您的肌膚煥然水潤，更加健康
          </h1>
          <p className="service-p">我們有提供...</p>
          <div className="service">
            <div className="service1">
              <div className="circle"></div>
              <div className="h2-hr">
                <h2>專業臉部保養</h2>
                <hr />
              </div>
            </div>
            <div className="service2">
              <div className="circle"></div>
              <div className="h2-hr">
                <h2>專業SPA保養</h2>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="opening-contact">
          <div className="card opening">
            <p>營業時間</p>
            <table>
              <tbody>
                <tr>
                  <th>星期一</th>
                  <td>09:00 ~ 22:00</td>
                </tr>
                <tr>
                  <th>星期二</th>
                  <td>09:00 ~ 22:00</td>
                </tr>
                <tr>
                  <th>星期三</th>
                  <td>09:00 ~ 22:00</td>
                </tr>
                <tr>
                  <th>星期四</th>
                  <td>09:00 ~ 22:00</td>
                </tr>
                <tr>
                  <th>星期五</th>
                  <td>09:00 ~ 22:00</td>
                </tr>
                <tr>
                  <th>星期六</th>
                  <td>09:00 ~ 22:00</td>
                </tr>
                <tr>
                  <th>星期日</th>
                  <td>09:00 ~ 22:00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card contact">
            <p>聯繫我們</p>
            <table>
              <tbody>
                <tr>
                  <th>電話</th>
                  <td>0987654321</td>
                </tr>
                <tr>
                  <th>地址</th>
                  <td>台南市南區</td>
                </tr>
                <tr>
                  <th>信箱</th>
                  <td>mugua85528@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="reviews">
        <div className="p-hr">
          <p>評論</p>
          <hr />
        </div>
        <div className="reviews-div">
          <div className="review">
            <div className="per1"></div>
            <p className="name">周小姐</p>
            <p className="say">環境舒適，休假很適合來這裡放鬆保養!</p>
          </div>
          <div className="review">
            <div className="per2"></div>
            <p className="name">林小姐</p>
            <p className="say">服務人員很棒，待人親切又專業!</p>
          </div>
          <div className="review">
            <div className="per3"></div>
            <p className="name">郭小姐</p>
            <p className="say">CP值高，價值絕對高於價格!</p>
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="p-hr">
          <p>圖片</p>
          <hr />
        </div>
        <div className={currentImg}>
          <div className="pre" onClick={previousImg}>
            <p className="p-pre">〈</p>
          </div>
          <div className="next" onClick={nextImg}>
            <p className="p-next">〉</p>
          </div>
        </div>
        <div className="little-img">
          <div
            className={
              currentImg === "big-img big-img1" ? "current little1" : "little1"
            }
          ></div>
          <div
            className={
              currentImg === "big-img big-img2" ? "current little2" : "little2"
            }
          ></div>
          <div
            className={
              currentImg === "big-img big-img3" ? "current little3" : "little3"
            }
          ></div>
        </div>
      </section>
      <section className="location">
        <div className="p-hr">
          <p>位置</p>
          <hr />
        </div>
        <div className="google-map">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58783.97858024538!2d120.14153182014077!3d22.950276419550413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e75a29a7e55a5%3A0xdba8200ff03cb662!2zNzAy5Y-w5Y2X5biC5Y2X5Y2A!5e0!3m2!1szh-TW!2stw!4v1702645127824!5m2!1szh-TW!2stw"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <div onClick={topHandler} className={scroll === true ? "top-button" : ""}>
        TOP
      </div>
    </main>
  );
}

export default Home;
