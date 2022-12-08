import { motion } from "framer-motion";
import { riotapi, imagechampapi } from "./config/riotapi";
import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import LOLLOGO from "./lol_logo.png";
import axios from "axios";
import Champion from "./Champion";

import {
    useParams
  } from "react-router-dom";

const callCoinsAPI =
  "https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=MYR";

function CryptoCoins() {
  const params = useParams();
  const [showloading, setshowloading] = useState(true);
  const [searchedCoin, setSearchCoin] = useState("");
  const [championList, setchampionList] = useState([]);
  const API_KEY = "RGAPI-e69a7006-002d-44e1-bdd3-02a233f20b30";
  // console.log(searchPlayer)

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.35,
        delayChildren: 0.75,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const items = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -150 },
  };

  useEffect(() => {
    getAllChamp();
  }, []);

  const getAllChamp = async () => {
    const response = await axios
      .get(`${riotapi}/champion.json`)
      .catch((errors) => console.log("Error:", errors));
    console.log("GET ALL MY CHAMPIONNNN", Object.values(response.data.data));
    getChampData(Object.values(response.data.data));
  };

  const getChampData = async (result) => {
    const champArr = [];

    await Promise.all(
      result.map((champItems) => {
        return axios
          .get(`${riotapi}/champion/${champItems.id}.json`)
          .then((result) => {
            champArr.push(result.data.data[champItems.id]);
          });
      })
    );
    console.log("MY ARRAY LIST", champArr);
    setchampionList(champArr);
  };

  //   useEffect(() => {
  //     autoGetAllCoin();
  //   }, []);

  //   const autoGetAllCoin = () => {
  //     fetch(`${riotapi}/champion.json`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);

  //         //setAllCoin(data);
  //         //etMovies(data.results);
  //       });
  //   };

  const searchForCoin = () => {
    console.log(callCoinsAPI);

    // axios.get(getSummonerID).then(function (response){
    //   console.log(response);
    // }).catch(function (error){
    //   console.log(error)
    // })

    // fetch(getSummonerID).then((response) => {
    //   console.log(response.json);
    // })

    fetch(callCoinsAPI)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.coins);

        setSearchCoin(data.coins);
        //etMovies(data.results);
      });

    // fetch(getSummonerID)
    // .then((res)=>res.json())
    // .then(data=>{
    //   console.log(data)

    // })
  };

  return (
    <div className="app__container">
      <header>
        <img src={LOLLOGO} className="lol__logo" alt="lollogo" />
        <h1>Crypto Card Viewer</h1>
        <input
          type="text"
          onChange={(event) => setSearchCoin(event.target.value)}
        ></input>
        <button onClick={searchForCoin}>Search Crypto</button>
      </header>

      <div>
      <div className="app_container">
        
          <div className="champion_container">
            <div className="all__champions">
              <motion.ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  listStyleType: "none",
                  paddingInlineStart: "0px",
                  marginBlockStart: "0px",
                  marginBlockEnd: "0px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                initial="hidden"
                animate="visible"
                variants={list}
              >
                {championList.map((champ) => (
                  <motion.li key={champ.id} variants={items}>
                    <Champion
                        data={champ}
                      id={championList.findIndex((p) => p.id === champ.id) + 1}
                      name={champ.name}
                      image={`${imagechampapi}/${champ.id}_0.jpg`}
                      tags={champ.tags}
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoCoins;
