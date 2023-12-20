import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Nav(props) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("");
  const homeHandler = () => {
    setCurrentPage("home");
  };
  const searchHandler = () => {
    setCurrentPage("search");
  };
  const bookHandler = () => {
    setCurrentPage("");
    navigate("/service");
    window.scrollTo(0, 1000);
  };
  return (
    <div id="Nav">
      <div className="bar">
        <ul>
          <li>
            <Link
              className={currentPage === "home" ? "currentPage" : ""}
              onClick={homeHandler}
              to="/"
            >
              首頁
            </Link>
          </li>
          <li>
            <Link
              className={currentPage === "search" ? "currentPage" : ""}
              onClick={searchHandler}
              to="/search"
            >
              預約查詢
            </Link>
          </li>
        </ul>
      </div>
      <button onClick={bookHandler}>立即預約</button>
    </div>
  );
}

export default Nav;
