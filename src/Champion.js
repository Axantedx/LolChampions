import React from "react";
import "./Champion.css";
import { Tooltip } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Champion({ data, id, name, tags, image }) {
  console.log("GET MY IDS", id + " " + name);
  return (
    <div
      className="thumbnail__container noselect"
      style={{ backgroundImage: "url(" + image + ")", backgroundSize: "cover" }}
    >
      <div className="card__header">
        <div className="champ__number"></div>
        <Link to="/championinfo" state={{ data: data }}>
          <div className="info__icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
            </svg>
          </div>
        </Link>
      </div>
      <div className="image__container"></div>
      <div className="champ__name">
        <h3> {name}</h3>

        <div className="champ__type">
          {tags.map((tag) => (
            <Tooltip key={tag} TransitionComponent={Zoom} title={tag}>
              <div className="champ__type__bg ">{tag}</div>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Champion;
