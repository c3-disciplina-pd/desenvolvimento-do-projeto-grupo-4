import React, { useState, useEffect } from "react";

import BarGauge, { Size, Geometry, Label } from "devextreme-react/bar-gauge";

import "./timer.scss";

function Timer() {
  
  const numb = document.querySelector(".number");
  let counter = 0;
  setInterval(() => {
    if(counter == 100 ){
      clearInterval();
    }else{
      counter+=1;
      numb.textContent = counter + "%";
    }
  }, 80);

  return (
    <>
      <div className="circular">
        <div className="inner"></div>
        <div className="number">100%</div>
        <div className="circle">
          <div className="bar left">
            <div className="progress"></div>
          </div>
          <div className="bar right">
            <div className="progress"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
