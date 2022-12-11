import { motion } from "framer-motion";
import { riotapi, imagechampapi } from "./config/riotapi";
import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import LOLLOGO from "./assets/lol_logo.png";
import axios from "axios";
import Champion from "./Champion";
import loadingImage from "./assets/Yasuo_18.jpg"

import {
    useParams
  } from "react-router-dom";

function CryptoCoins() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [championList, setchampionList] = useState([]);

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
      opacity: 1,
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
    console.log("GET ALL MY CHAMPIONNNN", Object.values(response));
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

  return (
    <div className="app__container">
   
      <header className="header">
        <img src={LOLLOGO} className="lol__logo" alt="lollogo" />
        <div  style={{ height: "100px"}}>
        </div>

      </header>

      <div>
      <div className="app_container">
        
          <div className="champion_container">
            <div className="all__champions">
              <motion.ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
                initial="hidden"
                animate="visible"
                variants={list}
              >
                {championList.map((champ) => (
                  <motion.li key={champ.id} variants={items}>
                    <Champion
                        data={champ}
                      id={championList.findIndex((mychamp) => mychamp.id === champ.id) +1}
                      
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
