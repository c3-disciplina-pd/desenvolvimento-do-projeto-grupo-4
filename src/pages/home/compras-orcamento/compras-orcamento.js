import React, { useState } from "react";
import "./compras-orcamento.scss";

import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Margin,
  Size,
} from "devextreme-react/chart";

import { barChart, areaChart } from "../data.js";
import { DateBox } from "devextreme-react";

const ComprasOrcamentoPage = () => {
  const [data, setData] = useState(new Date());

  return (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className={"content-block"}>Compras x Orçamento</h2>
        <DateBox
          value={data}
          width={"20rem"}
          label={"Filtrar por data"}
          displayFormat="monthAndYear"
          calendarOptions={{
            maxZoomLevel: "year",
            minZoomLevel: "century",
          }}
        />
      </div>
      <div className={"content-block"}>
        <div className={"dx-card compras-orc-card"}>
          <Chart
            palette="Harmony Light"
            title="Population: Age Structure (2018)"
            dataSource={areaChart}
          >
            <Size height={200} />
            <CommonSeriesSettings argumentField="country" type={"area"} />
            <Series valueField="y1564" name="15-64 years"></Series>
            <Series valueField="y014" name="0-14 years"></Series>
            <Series valueField="y65" name="65 years and older"></Series>
            <Margin bottom={20} />
            <ArgumentAxis valueMarginsEnabled={false} />
            <Legend verticalAlignment="bottom" horizontalAlignment="center" />
            <Export enabled={true} />
          </Chart>
        </div>
        <div className={"dx-card compras-orc-card"}>
          <Chart
            rotated={true}
            id="chart"
            dataSource={barChart}
            title={"Compras por dia (Items)"}
          >
            <Series
              valueField="oranges"
              argumentField="day"
              name="My oranges"
              type="bar"
              color="#ffaa66"
            />
            <Size height={200} />
          </Chart>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ComprasOrcamentoPage;
