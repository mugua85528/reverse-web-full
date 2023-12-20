import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Reverse from "./components/Reverse";
import ShopSetting from "./components/ShopSetting";
import SearchReverse from "./components/SearchReverse";
import ShopPage from "./components/ShopPage";
import Service from "./components/Service";
import CheckData from "./components/CheckData";
import React, { useState } from "react";
import "./styles/style.css";

function App() {
  const [service, setService] = useState("");
  const [price, setPrice] = useState(null);
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [date, setDate] = useState(null);
  const [day, setDay] = useState(null);
  const [time, setTime] = useState(null);
  const [ms, setMs] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/reverse"
            element={
              <Reverse
                service={service}
                setYear={setYear}
                setMonth={setMonth}
                setDate={setDate}
                setDay={setDay}
                setTime={setTime}
                setMs={setMs}
              />
            }
          />
          <Route path="/setting" element={<ShopSetting />} />
          <Route path="/search" element={<SearchReverse />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/check"
            element={
              <CheckData
                service={service}
                price={price}
                year={year}
                month={month}
                date={date}
                day={day}
                time={time}
                ms={ms}
              />
            }
          />
          <Route
            path="/service"
            element={<Service setService={setService} setPrice={setPrice} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
