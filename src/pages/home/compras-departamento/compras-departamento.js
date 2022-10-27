import React, { useState } from "react";
import "./compras-departamento.scss";

import TreeMap, { Tooltip } from "devextreme-react/tree-map";
import { citiesPopulation, pieChart } from "../data.js";

import PieChart, {
  Label,
  Connector,
  Export,
  Series,
  Size,
  Legend,
  Margin,
} from "devextreme-react/pie-chart";

import { DateBox } from "devextreme-react";

const ComprasDepartamentoPage = () => {
  function customizeTooltip(arg) {
    const { data } = arg.node;

    return {
      text: arg.node.isLeaf()
        ? `<span class="city">${data.name}</span> (${data.country})<br/>Population: ${arg.valueText}`
        : null,
    };
  }

  const [data, setData] = useState(new Date());

  return (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className={"content-block"}>Compras por departamento</h2>
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
      <div className={"content-block compras-dep-linha"}>
        <div className={"dx-card compras-dep-card"} style={{ width: "70%" }}>
          <TreeMap
            id="treemap"
            dataSource={citiesPopulation}
            title="The Most Populated Cities by Continents"
          >
            <Size width={700} />
            <Tooltip
              enabled={true}
              format="thousands"
              customizeTooltip={customizeTooltip}
            />
          </TreeMap>
        </div>
        <div className={"dx-card compras-dep-card"}>
          <PieChart
            id="pie"
            dataSource={pieChart}
            palette="Bright"
            title="Valor de compra por ano"
          >
            <Legend
              horizontalAlignment={"center"}
              verticalAlignment={"bottom"}
              margin={{ top: 10 }}
            />
            <Series argumentField="country" valueField="area">
              <Label visible={true}>
                <Connector visible={true} width={0.5} />
              </Label>
            </Series>
            <Size width={300} height={400} />
            <Export enabled={true} />
          </PieChart>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ComprasDepartamentoPage;
