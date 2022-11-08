import React, { useState } from "react";
import "./compra-card-grafico.scss";

import Sparkline from "devextreme-react/sparkline";
import { Tooltip } from "devextreme-react/tooltip";

function CompraCardGrafico() {
  const oilCosts = [
    {
      month: 1,
      2010: 77,
      2011: 93,
      2012: 107,
    },
    {
      month: 2,
      2010: 72,
      2011: 101,
      2012: 112,
    },
    {
      month: 3,
      2010: 79,
      2011: 115,
      2012: 123,
    },
    {
      month: 4,
      2010: 82,
      2011: 116,
      2012: 123,
    },
    {
      month: 5,
      2010: 86,
      2011: 124,
      2012: 116,
    },
    {
      month: 6,
      2010: 73,
      2011: 115,
      2012: 102,
    },
    {
      month: 7,
      2010: 73,
      2011: 110,
      2012: 94,
    },
    {
      month: 8,
      2010: 77,
      2011: 117,
      2012: 105,
    },
    {
      month: 9,
      2010: 76,
      2011: 113,
      2012: 113,
    },
    {
      month: 10,
      2010: 81,
      2011: 103,
      2012: 111,
    },
    {
      month: 11,
      2010: 83,
      2011: 110,
      2012: 107,
    },
    {
      month: 12,
      2010: 89,
      2011: 109,
      2012: 110,
    },
  ];

  const [defaultVisible, setDefaultVisible] = useState(false);

  function toggleDefault() {
    setDefaultVisible(!defaultVisible);
  }

  return (
    <div className="dx-card compra-card">
      <div className="compra-card-header">
        <div>
          <span
            id="valortotal"
            onMouseEnter={toggleDefault}
            onMouseLeave={toggleDefault}
          >
            505k
          </span>
          <Tooltip
            visible={defaultVisible}
            closeOnOutsideClick={false}
            target={"#valortotal"}
          >
            Valor total da compra a vida toda da categoria
          </Tooltip>
        </div>
        <i className="dx-icon dx-icon-spinup"></i>
      </div>
      <span className="titulo">Bicicletas</span>
      <div className="compra-card-valores">
        <span className="percentual">+4,58%</span>
        <span className="valor">+25k</span>
      </div>
      <Sparkline
        dataSource={oilCosts}
        showMinMax={true}
        className="sparkline"
        argumentField="month"
        valueField={"2011"}
        type="line"
        size={{ width: 115 }}
      >
        <Tooltip format="currency" />
      </Sparkline>
    </div>
  );
}

export default CompraCardGrafico;
