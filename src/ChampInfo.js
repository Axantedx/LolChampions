import React, { useState, useEffect, useRef } from "react";
import "./ChampionInfo.css";
import { useLocation, useParams } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LOLLOGO from "./assets/lol_logo.png";
   
import {
  imagechampapi,
  imageskillapi,
  imagepassiveapi,
  splash,
} from "./config/riotapi";

function ChampInfo() {
  
  const location = useLocation();
  const objectchamp = location.state?.data;
  console.log("MY objectchamp", objectchamp);
  const backgroundSplash = `${splash}/${objectchamp.id}_6.jpg`;
  const [useImage, setImage] = useState(backgroundSplash);
  console.log("MY objectchamp", objectchamp.skins.length);
  console.log("MY objectchamp", objectchamp.tags);
  console.log("MY objectchamp", objectchamp.spells);
  console.log("MY objectchamp", objectchamp.info);
  

 useEffect(() => {
    
     }, [useImage]);

  const getImage = (event, message) => {
    console.log(event.target);
    console.log(message);
    setImage(`${splash}/${message}.jpg`)
    
   
  };

  return (
    <div className="app__container">
      <div
        className="info__container"
        style={{
          backgroundImage: "url(" + useImage + ")",
          backgroundSize: "cover",
        }}
      >
        <div className="info__image">
          <div className="banner">
            <div className="info__detail"></div>
            <div className="title">{`${objectchamp.name}`}</div>
            <div className="title_h2">{`${objectchamp.title}`}</div>

            <img onClick={(event) => getImage(event, objectchamp.id+"_0")}  src={`${imagechampapi}/${objectchamp.id}_0.jpg` } />
            <img onClick={(event) => getImage(event, objectchamp.id+"_1")} src={`${imagechampapi}/${objectchamp.id}_1.jpg`} />
            <img onClick={(event) => getImage(event, objectchamp.id+"_2")} src={`${imagechampapi}/${objectchamp.id}_2.jpg`} />
            <img onClick={(event) => getImage(event, objectchamp.id+"_3")} src={`${imagechampapi}/${objectchamp.id}_3.jpg`} />
            <img onClick={(event) => getImage(event, objectchamp.id+"_4")} src={`${imagechampapi}/${objectchamp.id}_4.jpg`} />
            <img onClick={(event) => getImage(event, objectchamp.id+"_5")} src={`${imagechampapi}/${objectchamp.id}_5.jpg`} />
            <img onClick={(event) => getImage(event, objectchamp.id+"_6")} src={`${imagechampapi}/${objectchamp.id}_6.jpg`} />
            <img onClick={(event) => getImage(event, objectchamp.id+"_7")} src={`${imagechampapi}/${objectchamp.id}_7.jpg`} />
            <img onClick={(event) => getImage(event, objectchamp.id+"_8")} src={`${imagechampapi}/${objectchamp.id}_8.jpg`} />
            <img onClick={(event) => getImage(event, objectchamp.id+"_9")} src={`${imagechampapi}/${objectchamp.id}_9.jpg`} />
          </div>
        </div>
  
        <div className="info__detail">
          <div className="info__detail">
          <img src={LOLLOGO} className="lol__logo" alt="lollogo" />

             </div>
          <div className="info__detail"> </div>
          <div className="skill__box">
            <div>
              <div className="passive">
                <img
                  src={`${imagepassiveapi}/${objectchamp.passive.image.full}`}
                />

                <div className="skill__title">{objectchamp.passive.name}</div>
              </div>
            </div>

            <div>
              <div className="passive">
                <img
                  src={`${imageskillapi}/${objectchamp.spells[0].image.full}`}
                />

                <div className="skill__title">{objectchamp.spells[0].name}</div>
              </div>
            </div>

            <div>
              <div className="passive">
                <img
                  src={`${imageskillapi}/${objectchamp.spells[1].image.full}`}
                />

                <div className="skill__title">{objectchamp.spells[1].name}</div>
              </div>
            </div>

            <div>
              <div className="passive">
                <img
                  src={`${imageskillapi}/${objectchamp.spells[2].image.full}`}
                />

                <div className="skill__title">{objectchamp.spells[2].name}</div>
              </div>
            </div>

            <div>
              <div className="passive">
                <img
                  src={`${imageskillapi}/${objectchamp.spells[3].image.full}`}
                />

                <div className="skill__title">{objectchamp.spells[3].name}</div>
              </div>
            </div>
          </div>
          <div className="info__detail">
        <div className="lore__box">
            <div className="title">{`${objectchamp.tags}`}</div>
            <div className="content">{`${objectchamp.lore}`}</div>
          </div>
        
          
        </div>
        <Link to="/">
            <div className="title">
            Return to Hompage
            </div>
        </Link>
        </div>
        
      </div>
    </div>
  );
}

export default ChampInfo;
