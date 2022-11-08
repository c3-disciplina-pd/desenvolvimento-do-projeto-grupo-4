import React, { useState } from "react";
import "./cotacoes.scss";

import DataGrid, {
  Column,
  FilterPanel,
  FilterRow,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";

import {
  Chart,
  CommonSeriesSettings,
  Series,
  ArgumentAxis,
  Grid,
  Export,
  Legend,
  Margin,
  Title,
  Subtitle,
  Tooltip,
  Size,
  SeriesTemplate,
  Font
} from "devextreme-react/chart";

import CompraCardGrafico from "../../../components/compra-card-grafico/compra-card-grafico";

import { dadosTeste, energySources, countriesInfo } from "../data.js";
import { DateBox } from "devextreme-react";

const CotacoesPage = () => {
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
        <h2 className={"content-block"}>Analitica Cotações</h2>
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
        <div className={"cotacoes-linhas"}>
          <div className={"dx-card cotacoes-card"}>
            <Chart palette="Violet" dataSource={dadosTeste}>
              <CommonSeriesSettings argumentField="ano" type={"line"} />
              <SeriesTemplate nameField="titulo" />
              <CommonSeriesSettings
                argumentField="ano"
                valueField="qtde"
                type="line"
              />
              <Legend verticalAlignment="top" horizontalAlignment="center">
                <Font color="#b2b2b2" size={12} />
              </Legend>
              <Tooltip enabled={true} />
            </Chart>
          </div>
          <div className={"dx-card cotacoes-card"}>
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
        <div className="dx-card">
          <div className={"cotacoes-linhas"}>
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
        <div className={"cotacoes-linhas"}>
          <div className={"dx-card cotacoes-card"}>
            <Chart palette="Violet" dataSource={countriesInfo}>
              <CommonSeriesSettings argumentField="country" type={"line"} />
              {energySources.map((item) => (
                <Series
                  key={item.value}
                  valueField={item.value}
                  name={item.name}
                />
              ))}
              <Margin bottom={20} />
              <Size height={325} />
              <ArgumentAxis
                valueMarginsEnabled={false}
                discreteAxisDivisionMode="crossLabels"
              >
                <Grid visible={true} />
              </ArgumentAxis>
              <Legend
                verticalAlignment="bottom"
                horizontalAlignment="center"
                itemTextPosition="bottom"
              />
              <Export enabled={true} />
              <Title text="Energy Consumption in 2004">
                <Subtitle text="(Millions of Tons, Oil Equivalent)" />
              </Title>
              <Tooltip enabled={true} />
            </Chart>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CotacoesPage;
