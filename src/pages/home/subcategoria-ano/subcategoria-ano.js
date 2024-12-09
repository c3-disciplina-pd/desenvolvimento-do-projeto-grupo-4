import React, { useState } from "react";
import "./subcategoria-ano.scss";

import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";

import PivotGrid, { FieldChooser } from "devextreme-react/pivot-grid";

import { pivotGrid, pieChart, barChart } from "../data.js";

import Chart, { Series, Size } from "devextreme-react/chart";

import PieChart, { Label, Connector, Export } from "devextreme-react/pie-chart";

import { DateBox } from "devextreme-react";

const SubcategoriaAnoPage = () => {
  const dataSource = new PivotGridDataSource({
    onChanged: () => {
      dataSource.collapseAll();
    },
    fields: [
      {
        caption: "Region",
        width: 100,
        dataField: "region",
        area: "row",
        sortBySummaryField: "Total",
        expanded: true
      },
      {
        caption: "City",
        dataField: "city",
        width: 80,
        area: "row",
        expanded: true
      },
      {
        dataField: "date",
        dataType: "date",
        area: "column",
        expanded: true
      },
      {
        groupName: "date",
        groupInterval: "month",
        visible: false,
        expanded: true
      },
      {
        caption: "Total",
        dataField: "amount",
        dataType: "number",
        summaryType: "sum",
        format: "currency",
        area: "data",
        expanded: true
      },
    ],
    store: pivotGrid,
  });

  function pointClickHandler(e) {
    this.toggleVisibility(e.target);
  }

  function toggleVisibility(item) {
    item.isVisible() ? item.hide() : item.show();
  }

  function legendClickHandler(e) {
    const arg = e.target;
    const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    toggleVisibility(item);
  }

  const [data, setData] = useState(new Date());

  return (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className={"content-block"}>Subcategoria por ano</h2>
        <DateBox
          value={data}
          width={"20rem"}
          label={"Filtrar por data"}
          displayFormat="Year"
          calendarOptions={{
            maxZoomLevel: "decade",
            minZoomLevel: "century",
          }}
        />
      </div>
      <div className={"content-block subcategoria-linha"}>
        <div className="grafico-esquerda">
          <div className={"dx-card subcategoria-card"}>
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
          <div
            className={"dx-card subcategoria-card"}
            style={{ height: "20rem" }}
          >
            <PieChart
              id="pie"
              dataSource={pieChart}
              palette="Bright"
              title="Valor de compra por ano"
              onPointClick={pointClickHandler}
              onLegendClick={legendClickHandler}
            >
              <Series argumentField="country" valueField="area">
                <Label visible={true}>
                  <Connector visible={true} width={1} />
                </Label>
              </Series>
              <Size width={350} height={250} />
              <Export enabled={true} />
            </PieChart>
          </div>
        </div>
        <div className={"dx-card subcategoria-pivot-card"}>
          <PivotGrid
            id="pivotgrid"
            dataSource={dataSource}
            allowSortingBySummary={true}
            allowFiltering={true}
            showBorders={true}
            showColumnTotals={false}
            showColumnGrandTotals={false}
            showRowTotals={false}
            showRowGrandTotals={false}
            height={"100%"}
          >
            <FieldChooser enabled={true} height={500} />
          </PivotGrid>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SubcategoriaAnoPage;
