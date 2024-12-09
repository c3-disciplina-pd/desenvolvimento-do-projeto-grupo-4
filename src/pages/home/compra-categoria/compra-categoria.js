import React, { useState, useEffect } from "react";
import "./compra-categoria.scss";

import CompraCardGrafico from "../../../components/compra-card-grafico/compra-card-grafico";

import { DateBox, SelectBox } from "devextreme-react";

const ComprasCategoriaPage = () => {
  const [data, setData] = useState(new Date());
  const [trimestre, setTrismestre] = useState(
    Math.floor(data.getMonth() / 3 + 1)
  );

  function handleTrismestre(e) {
    console.log(e.value);
    setTrismestre(Math.floor(e.value.getMonth() / 3 + 1));
  }

  return (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className={"content-block"}>
          Compras por categoria (T{trimestre}/2022)
        </h2>
        <DateBox
          width={"20rem"}
          label={"Filtrar por data"}
          displayFormat="monthAndYear"
          calendarOptions={{
            maxZoomLevel: "year",
            minZoomLevel: "century",
          }}
          value={data}
          onValueChanged={handleTrismestre}
        />
      </div>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <div className="compras-chart">
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
            <CompraCardGrafico />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ComprasCategoriaPage;
