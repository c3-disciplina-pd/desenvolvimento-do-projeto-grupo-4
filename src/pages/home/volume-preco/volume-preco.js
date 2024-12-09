import React, { useState } from "react";
import "./volume-preco.scss";

import Chart, {
  CommonSeriesSettings,
  ValueAxis,
  Series,
  Margin,
  Size,
} from "devextreme-react/chart";

import PieChart, {
  Legend,
  Tooltip,
  Format,
  Label,
  Connector,
  Export,
} from "devextreme-react/pie-chart";

import { barChart, pieChart, horizontalChart } from "../data.js";
import Timer from "../../../components/timer/timer";
import { DateBox } from "devextreme-react";

const ProdutoGraficoPage = () => {
  function customizeTooltip(arg) {
    return {
      text: `${arg.valueText} - ${(arg.percent * 100).toFixed(2)}%`,
    };
  }

  function customizeTooltip(e) {
    return { text: Math.abs(e.valueText) };
  }

  function customizeLabel(e) {
    return `${Math.abs(e.value)}%`;
  }

  const [data, setData] = useState(new Date());


  return (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className={"content-block"}>Volume por preço</h2>
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
      <div className={"content-block volume-pre-linha"}>
        <div className={"dx-card volume-pre-produtos"}>
          <Chart
            title="Volume por faixa de preço"
            dataSource={horizontalChart}
            id="chart"
            rotated={true}
            barGroupWidth={18}
          >
            <CommonSeriesSettings type="stackedbar" argumentField="age" />
            <Size height={450} width={300} />
            <Series valueField="male" name="Qtd. Items" color="#44DB56" />
            <Series valueField="female" name="Qtd. Compras" color="#DFFF4F" />
            <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
            <ValueAxis>
              <Label customizeText={customizeLabel} />
            </ValueAxis>
            <Legend verticalAlignment="bottom" horizontalAlignment="center">
              <Margin left={50} />
            </Legend>
          </Chart>
        </div>
        <div className="produtos-piebar">
          <div className={"dx-card volume-pre-produtos"}>
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
              <Size height={200} />
            </Chart>
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
              <Size width={200} height={300} />
              <Export enabled={true} />
            </PieChart>
          </div>
          <div className={"dx-card volume-pre-produtos"}>
            <Chart
              id="chart"
              dataSource={barChart}
              title={"Compra por faixa de preço (Valor)"}
            >
              <Series
                valueField="oranges"
                argumentField="day"
                name="My oranges"
                type="bar"
                color="#ffaa66"
              />
              <Size height={200} width={600} />
            </Chart>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProdutoGraficoPage;
