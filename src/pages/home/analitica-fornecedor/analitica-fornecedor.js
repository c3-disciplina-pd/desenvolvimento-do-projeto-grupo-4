import React, { useState } from "react";
import "./analitica-fornecedor.scss";
import {
  Chart,
  CommonSeriesSettings,
  Series,
  ArgumentAxis,
  Grid,
  Crosshair,
  Export,
  Legend,
  Point,
  Label,
  Font,
  Title,
  Subtitle,
  Tooltip,
  Size,
} from "devextreme-react/chart";

import CompraCardGrafico from "../../../components/compra-card-grafico/compra-card-grafico";

import { lineData, lineInfo, barChart } from "../data.js";
import { DateBox } from "devextreme-react";
import Timer from "../../../components/timer/timer";

const AnaliticaFornecedorPage = () => {
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
        <h2 className={"content-block"}>Analítica Fornecedores</h2>
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
        <div className={"analitica-linhas"}>
          <div className={"dx-card analitica-card"}>
            <Chart id="chart" dataSource={lineInfo}>
              <CommonSeriesSettings type="spline" argumentField="country">
                <Point hoverMode="allArgumentPoints" />
              </CommonSeriesSettings>
              {lineData.map((item) => (
                <Series
                  key={item.value}
                  valueField={item.value}
                  name={item.name}
                />
              ))}
              <ArgumentAxis
                valueMarginsEnabled={false}
                discreteAxisDivisionMode="crossLabels"
              >
                <Grid visible={true} />
              </ArgumentAxis>
              <Crosshair
                enabled={true}
                color="#949494"
                width={3}
                dashStyle="dot"
              >
                <Label visible={true} backgroundColor="#949494">
                  <Font color="#fff" size={12} />
                </Label>
              </Crosshair>
              <Legend
                verticalAlignment="bottom"
                horizontalAlignment="center"
                itemTextPosition="bottom"
                equalColumnWidth={true}
              />
              <Title text="Energy Consumption in 2004">
                <Subtitle text="(Millions of Tons, Oil Equivalent)" />
              </Title>
              <Export enabled={true} />
              <Tooltip enabled={true} />
              <Size height={200} width={500} />
            </Chart>
          </div>
          <div className={"dx-card analitica-card"}>
            <Chart id="chart" dataSource={lineInfo}>
              <CommonSeriesSettings type="spline" argumentField="country">
                <Point hoverMode="allArgumentPoints" />
              </CommonSeriesSettings>
              {lineData.map((item) => (
                <Series
                  key={item.value}
                  valueField={item.value}
                  name={item.name}
                />
              ))}
              <ArgumentAxis
                valueMarginsEnabled={false}
                discreteAxisDivisionMode="crossLabels"
              >
                <Grid visible={true} />
              </ArgumentAxis>
              <Crosshair
                enabled={true}
                color="#949494"
                width={3}
                dashStyle="dot"
              >
                <Label visible={true} backgroundColor="#949494">
                  <Font color="#fff" size={12} />
                </Label>
              </Crosshair>
              <Legend
                verticalAlignment="bottom"
                horizontalAlignment="center"
                itemTextPosition="bottom"
                equalColumnWidth={true}
              />
              <Title text="Energy Consumption in 2004">
                <Subtitle text="(Millions of Tons, Oil Equivalent)" />
              </Title>
              <Export enabled={true} />
              <Tooltip enabled={true} />
              <Size height={200} width={500} />
            </Chart>
          </div>
        </div>
        <div className={"analitica-linhas"}>
          <div className={"dx-card analitica-card-compras"}>
            <CompraCardGrafico />
            <CompraCardGrafico />
          </div>
          <div className={"dx-card analitica-card"}>
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
              <Size height={200} width={400} />
            </Chart>
          </div>
          <div className={"dx-card analitica-card"}>
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
              <Size height={200} width={400} />
            </Chart>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AnaliticaFornecedorPage;
