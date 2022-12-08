import { useLocation, useParams } from "react-router-dom";
import React from "react";
function ChampInfo(props) {
    const location = useLocation();
    console.log(props, " props");
    console.log(location, " useLocation Hook");
    const data = location.state?.data;
    console.log("MY objectchamp", data.id);
    return(
        <div>
            sadfjasbkjdas</div>
    );
}

export default ChampInfo;
