import React from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import Form, { SimpleItem, ButtonItem } from 'devextreme-react/form';
import { Button } from "devextreme-react";
import { useState } from 'react';
import FiltroRelatoriosPage from '../filtro-relatorios/filtro-relatorios';
import HeaderDataGrid from '../../../../../components/header-datagrid/header-datagrid';


const RelatorioDeIntegracaoPage = () => {

    const buttonTotal = {
        text: 'Total:',
        width: '400',
        height: '50'
    }
    const [showFiltro, setFiltro] = useState(false);

    return (
        <React.Fragment>
             <h2 className={"content-block"}>Relatório de Integração</h2>
            <div className='content-block'>
            <HeaderDataGrid>
                <Button className="botao" text="Novo" onClick={''} icon="add" />
                <Button onClick={()=>setFiltro(!showFiltro)} className="botao" text="Filtro" icon="filter" />
            </HeaderDataGrid>
            {
                showFiltro&& (
                    <FiltroRelatoriosPage/>
                )
            }
            <div className={'dx-card responsive-paddings'}>
                <Form colCount={2}>
                    <ButtonItem
                        buttonOptions={buttonTotal}
                        verticalAlignment={'bottom'}
                        horizontalAlignment={"left"}
                    />
                    <SimpleItem editorType='dxTextBox' label={{ text: 'Buscar por' }} />
                </Form>
                <br/>
                <br/>
                <br/>
                <DataGrid colCount={5}>
                    <Column dataField="ex" width={50} caption="ID" />
                    <Column dataField="ex" width={90} caption="Direção" />
                    <Column dataField="ex" caption="Recurso" />
                    <Column dataField="ex" caption="ERP" />
                    <Column dataField="ex" caption="Título" />
                    <Column dataField="ex" caption="Status" />
                    <Column dataField="ex" caption="Sucesso em" />
                    <Column dataField="ex" caption="criado em" />
                    <Column dataField="ex" width={200} caption="JSON da requisição" />
                </DataGrid>
            </div>
        </div>
        </React.Fragment>
    );
};

export default RelatorioDeIntegracaoPage;