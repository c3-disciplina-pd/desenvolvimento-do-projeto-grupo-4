import React, { useState } from "react";
import { Switch } from 'devextreme-react/switch';
import toggleButton from "../../components/toggle-button/toggle-button";
import "./home.scss";

export default function Home() {
  

  return (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className={"content-block"}>DashBoard</h2>
      </div>
      
      <div style={{ display: "flex", alignItems: "center"}}>
      <iframe className = {"iframe"} src=" http://webcaseiot.com.br:1880/ui/#!/0?socketid=2rHrz1OO3n-pw8QfAAFr">
      </iframe>
      </div>
    </React.Fragment>
  );
}
