import React, { useState } from "react";
import "./requisicoes-pedidos.scss";

import Chart, {
  ArgumentAxis,
  CommonSeriesSettings,
  Legend,
  Series,
  Tooltip,
  ValueAxis,
  ConstantLine,
  Label,
} from "devextreme-react/chart";

import DataGrid, {
  Column,
  FilterPanel,
  FilterRow,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";

import { complaintsData } from "../data.js";
import { DateBox } from "devextreme-react";

const RequisicoesPedidosPage = () => {
  const [data, setData] = useState(new Date());

  const dados = complaintsData.sort((a, b) => b.count - a.count);

  const totalCount = dados.reduce(
    (prevValue, item) => prevValue + item.count,
    0
  );

  let cumulativeCount = 0;

  const dataArray = dados.map((item) => {
    cumulativeCount += item.count;
    return {
      complaint: item.complaint,
      count: item.count,
      cumulativePercentage: Math.round((cumulativeCount * 100) / totalCount),
    };
  });

  function customizeTooltip(pointInfo) {
    return {
      html: `<div><div class="tooltip-header">${pointInfo.argumentText}</div><div class="tooltip-body"><div class="series-name"><span class='top-series-name'>${pointInfo.points[0].seriesName}</span>: </div><div class="value-text"><span class='top-series-value'>${pointInfo.points[0].valueText}</span></div><div class="series-name"><span class='bottom-series-name'>${pointInfo.points[1].seriesName}</span>: </div><div class="value-text"><span class='bottom-series-value'>${pointInfo.points[1].valueText}</span>% </div></div></div>`,
    };
  }

  function customizePercentageText({ valueText }) {
    return `${valueText}%`;
  }

  return (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className={"content-block"}>Requisições X Pedidos</h2>
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
        <div className={"req-ped-linhas"}>
          <div className={"dx-card req-ped-card"} style={{ width: "60%" }}>
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
          <div className={"dx-card req-ped-card"}>
            <Chart
              title="Pizza Shop Complaints"
              dataSource={dataArray}
              palette="Harmony Light"
              id="chart"
            >
              <CommonSeriesSettings argumentField="complaint" />
              <Series
                name="Complaint frequency"
                valueField="count"
                axis="frequency"
                type="bar"
                color="#fac29a"
              />
              <Series
                name="Cumulative percentage"
                valueField="cumulativePercentage"
                axis="percentage"
                type="spline"
                color="#6b71c3"
              />

              <ArgumentAxis>
                <Label overlappingBehavior="stagger" />
              </ArgumentAxis>

              <ValueAxis name="frequency" position="left" tickInterval={300} />
              <ValueAxis
                name="percentage"
                position="right"
                tickInterval={20}
                showZero={true}
                valueMarginsEnabled={false}
              >
                <Label customizeText={customizePercentageText} />
                <ConstantLine
                  value={80}
                  width={2}
                  color="#fc3535"
                  dashStyle="dash"
                >
                  <Label visible={false} />
                </ConstantLine>
              </ValueAxis>

              <Tooltip
                enabled={true}
                shared={true}
                customizeTooltip={customizeTooltip}
              />

              <Legend verticalAlignment="top" horizontalAlignment="center" />
            </Chart>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RequisicoesPedidosPage;
