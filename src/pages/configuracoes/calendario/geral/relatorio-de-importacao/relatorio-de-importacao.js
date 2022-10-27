import React from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import Form, { SimpleItem, ButtonItem } from 'devextreme-react/form';
import { Button } from "devextreme-react";
import { useState } from 'react';
import FiltroRelatoriosPage from '../filtro-relatorios/filtro-relatorios';
import HeaderDataGrid from '../../../../../components/header-datagrid/header-datagrid';


const RelatorioDeImportacaoPage = () => {

    const buttonTotal = {
        text: 'Total:',
        width: '400',
        height: '50'
    }

    const [showFiltro, setFiltro] = useState(false);
 
    return (
        <React.Fragment>
            <h2 className={"content-block"}>Relatório de Importação</h2>
            <div className='content-block'>
                <HeaderDataGrid>
                    <Button className="botao" text="Novo" onClick={''} icon="add" />
                    <Button onClick={() => setFiltro(!showFiltro)} className="botao" text="Filtro" icon="filter" />
                </HeaderDataGrid>
                {
                    showFiltro && (
                        <FiltroRelatoriosPage />
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
                    <br />
                    <br />
                    <br />
                    <DataGrid>
                        <Column dataField="ex" caption="Entidade Importada" />
                        <Column dataField="ex" caption="Houve sucesso em algum registro" />
                        <Column dataField="ex" caption="Houve falha em algum registro" />
                        <Column dataField="ex" caption="Data da importação" />
                    </DataGrid>
                </div>
            </div>
        </React.Fragment>
    );
};

export default RelatorioDeImportacaoPage;