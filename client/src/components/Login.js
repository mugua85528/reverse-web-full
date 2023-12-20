import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const loginHandler = () => {
    window.alert("成功登入，頁面將導向商家後台。");
    navigate("/business");
  };
  return (
    <div>
      <label htmlFor="username">用戶名稱(帳號)</label>
      <input onChange={usernameHandler} name="username" type="text" />
      <label htmlFor="password">密碼</label>
      <input onChange={passwordHandler} name="password" type="password" />
      <button onClick={loginHandler}>登入</button>
    </div>
  );
}

export default Login;
