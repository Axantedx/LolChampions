import logo from "./logo.svg";
import axios from "axios";
import { baseapicall, imagechampapi } from "./config/riotapi";
import React from "react";
import Cryptos from "./Cryptos";
import CryptoInfo from "./CryptoInfo";
import ChampInfo from "./ChampInfo";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Cryptos />}></Route>
          <Route path="/championinfo" element={<ChampInfo />}></Route>
        </Routes>
      </Router>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cryptos />}></Route>
          <Route path="/championinfo" element={<ChampInfo />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
