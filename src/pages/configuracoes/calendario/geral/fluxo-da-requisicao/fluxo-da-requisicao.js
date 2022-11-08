import DataGrid, {
    Column,
    FilterPanel,
    FilterRow,
} from "devextreme-react/data-grid";
import Form, { SimpleItem, ButtonItem } from 'devextreme-react/form';
import { useHistory } from "react-router-dom";
import React from "react";

const FluxoDaRequisicaoPage = () => {

    const history = useHistory();

    function addFluxoRequisicao() {
        history.push("/novo-fluxo-da-requisicao");
    }

    const buttonAddFluxo = {
        text: 'Novo',
        icon: 'add',
        width: '350',
        height: '50',
        onClick: addFluxoRequisicao
    }


    return (
        <React.Fragment>
            <div className={"dx-card responsive-paddings"}>
                <h5 className={"content-block"}>Fluxo atual da empresa: </h5>
                <Form labelMode="floating" colCount={2}>
                    <SimpleItem editorType='dxTextBox' label={{ text: 'Buscar fluxo' }} />
                    <ButtonItem
                        buttonOptions={buttonAddFluxo}
                        verticalAlignment={'bottom'}
                        horizontalAlignment={"center"}
                    />
                </Form>
                <br />
                <DataGrid>
                    <FilterRow visible={true} />
                    <FilterPanel visible={true} />
                    <Column caption={"Fluxo atual"} />
                    <Column caption={"Nome"} />
                    <Column caption={"Criado em "} />
                    <Column width={400} caption={"Atualizado em "} />
                </DataGrid>
            </div>
        </React.Fragment >
    )
};

export default FluxoDaRequisicaoPage;