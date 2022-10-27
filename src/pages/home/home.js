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
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <div className="buttons">
            <button className="button-one">Sensor 1</button>
              <Switch defaultValue={true} />
          </div>
          <div className="buttons">
            <button className="button-one">Sensor 1</button>
            <Switch defaultValue={true} />
          </div>
          
          <div className="buttons">
            <button className="button-one">Sensor 1</button>
            <Switch defaultValue={true} />
          </div>
          <div className="buttons">
            <button className="button-one">Sensor 1</button>
            <Switch defaultValue={true} />
          </div>
          <div className="buttons">
            <button className="button-one">Atualizar Arduíno</button>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
}
