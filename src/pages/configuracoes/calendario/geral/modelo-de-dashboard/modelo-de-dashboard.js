import DataGrid, { Column, FilterPanel, FilterRow, } from "devextreme-react/data-grid";
import Form, { GroupItem, SimpleItem, ButtonItem } from 'devextreme-react/form';
import React from "react";
import HeaderDataGrid from "../../../../../components/header-datagrid/header-datagrid";
import { Button } from "devextreme-react";
import { useHistory } from "react-router-dom";

const ModeloDashboardPage = () => {
    const history = useHistory();
    
    function addDashboard() {
        history.push("/novo-modelo-dashboard")
    }

    return (
        <React.Fragment>
        <div className="content-block">
            <h2 className={'content-block'}>Modelo de Dashboard</h2>
            <HeaderDataGrid>
            <Button className="botao" onClick={addDashboard} text="Novo" icon="add" />
            <Button className="botao" text="Filtro" icon="filter" />
            <Button className="botao" text="Voltar" icon="return" />
            </HeaderDataGrid>
            <div className={"dx-card responsive-paddings"}>
                <Form labelMode="floating" colCount={2}>
                    <SimpleItem editorType='dxTextBox' label={{ text: 'Buscar por:' }} />
                </Form>
                <br />
                <br />
                <DataGrid>
                    <FilterRow visible={true} />
                    <FilterPanel visible={true} />
                    <Column caption={"Nome"} />
                    <Column caption={"Criado em"} />
                    <Column width={600} caption={"Atualizado em"} />
                </DataGrid>
            </div>
        </div>
        </React.Fragment >
    )
};

export default ModeloDashboardPage;