import DataGrid, {
    Column,
    FilterPanel,
    FilterRow,
    Summary,
    TotalItem,
} from "devextreme-react/data-grid";
import Form, { GroupItem, SimpleItem, ButtonItem } from 'devextreme-react/form';
import React from "react";

const ConfiguracaoEmpresaMatrizPage = () => {

   
    const buttonSalvar = {
        text: 'Salvar',
        icon: 'save',
        width: '200',
        height: '50'
    }


    return (
        <React.Fragment>
            <div className="content-block">
            <h2 className={'content-block'}>Configurações da Empresa Matriz</h2>
                <div className={"dx-card responsive-paddings"}>
                    <Form labelMode="floating">
                        <GroupItem caption='Requisições'>
                            <SimpleItem
                                editorType={"dxSelectBox"}
                                label={{ text: "Quantidade mínima de cotações em cada produto da requisição:" }}
                            />
                        </GroupItem>
                        <GroupItem caption='Economizômetro'>
                            <SimpleItem
                                editorType={"dxSelectBox"}
                                label={{ text: "Exibir aviso quando o Prazo médio de pagamento for interior a (dias):" }}
                            />
                        </GroupItem>
                        <ButtonItem
                            icon="add"
                            horizontalAlignment={'right'}
                            verticalAlignment='bottom'
                            buttonOptions={buttonSalvar}
                        />
                    </Form>
                </div>
            </div>
        </React.Fragment >
    )
};

export default ConfiguracaoEmpresaMatrizPage;