import React from "react";
import "./dados-empresa.scss";
import DataGrid, { Column } from "devextreme-react/data-grid";
import { useHistory } from "react-router-dom";
import HeaderDataGrid from "../../components/header-datagrid/header-datagrid";
import { Button } from "devextreme-react";

const DadosEmpresaPage = () => {
  const history = useHistory();

  function addAdrass() {
    history.push("/novo-endereco");
  }

  function returnHome() {
    history.push("/home");
  }

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Dados da Empresa</h2>
      <div className={"content-block dados-linha"}>
        <div
          className={"dx-card"}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-around",
            width: "100%",
            padding: "1rem",
          }}
        >
          <div style={{ marginRight: "2rem" }}>
            <h2>Empresa</h2>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "1.5rem" }}>
                <p>CNPJ</p>
                <span>
                  <strong>11.111.111/0001-01</strong>
                </span>
                <p>Razão Social</p>
                <span>
                  <strong>Metamina</strong>
                </span>
                <p>Nome Fantasia</p>
                <span>
                  <strong>Metamina</strong>
                </span>
                <p>Apelido</p>
                <span>
                  <strong>Metamina</strong>
                </span>
                <p>Telefone</p>
                <span>
                  <strong>(81) 9999-9999</strong>
                </span>
              </div>
              <div>
                <p>Inscrição Estadual</p>
                <span>
                  <strong>468434469</strong>
                </span>
                <p>Inscrição Municipal</p>
                <span>
                  <strong>2402010781</strong>
                </span>
                <p>Atualizado em</p>
                <span>
                  <strong>18/11/2022 07:00</strong>
                </span>
                <p>Criado em</p>
                <span>
                  <strong>18/11/2022 07:30</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="divider-v" />
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>Endereços</h2>
              <Button onClick={addAdrass} text="Novo Endereço" icon="add" />
            </div>
            <DataGrid width={450}>
              <Column caption={"Nome"} />
              <Column caption={"Endereço"} />
            </DataGrid>
          </div>
        </div>

        <Button width={120} text="Retornar" onClick={returnHome} />
      </div>
    </React.Fragment>
  );
};

export default DadosEmpresaPage;
