import React, { useState } from "react";
import "./economizometro.scss";

import DataGrid, {
  Column,
  FilterPanel,
  FilterRow,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";

import { Chart, Series, Size } from "devextreme-react/chart";

import { barChart } from "../data.js";
import { DateBox } from "devextreme-react";

const Grafico4Page = () => {
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
        <h2 className={"content-block"}>Economizômetro</h2>
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
        <div className={"economizometro-linhas"}>
          <div className={"dx-card economizometro-card"}>
            <DataGrid>
              <FilterRow visible={true} />
              <FilterPanel visible={true} />
              <Column caption={"Descrição"} />
              <Column caption={"Executou a ação"} />
              <Column caption={"Sofreu a ação"} />
              <Column caption={"Criado em"} />
              <Summary>
                <TotalItem column={"Código"} summaryType={"count"} />
              </Summary>
            </DataGrid>
          </div>
          <div className={"dx-card economizometro-card"}>
            <DataGrid>
              <FilterRow visible={true} />
              <FilterPanel visible={true} />
              <Column caption={"Descrição"} />
              <Column caption={"Executou a ação"} />
              <Column caption={"Sofreu a ação"} />
              <Column caption={"Criado em"} />
              <Summary>
                <TotalItem column={"Código"} summaryType={"count"} />
              </Summary>
            </DataGrid>
          </div>
        </div>
        <div className={"economizometro-linhas"}>
          <div
            className={"dx-card economizometro-card"}
            style={{ width: "100%" }}
          >
            <Chart
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
              <Size height={200} width={1000} />
            </Chart>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Grafico4Page;
