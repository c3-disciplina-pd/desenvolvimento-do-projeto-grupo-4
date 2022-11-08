import React, { useState } from "react";
import "./raiox.scss";

import DataGrid, {
  Column,
  FilterPanel,
  FilterRow,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";

import CompraCardGrafico from "../../../components/compra-card-grafico/compra-card-grafico";
import { DateBox } from "devextreme-react";

const RaioXPage = () => {
  const [data, setData] = useState(new Date());

  return (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className={"content-block"}>Raio-X Produtos</h2>
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
        <div className="dx-card">
          <div className={"raio-x-linhas"}>
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
        <div className={"raio-x-linhas"}>
          <div className={"dx-card raio-x-card"}>
            <DataGrid>
              <FilterRow visible={true} />
              <FilterPanel visible={true} />
              <Column caption={"Descrição"} />
              <Column caption={"Executou a ação"} />
              <Column caption={"Sofreu a ação"} />
              <Column caption={"Criado em"} cellComponent={CompraCardGrafico} />
              <Summary>
                <TotalItem column={"Código"} summaryType={"count"} />
              </Summary>
            </DataGrid>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RaioXPage;
