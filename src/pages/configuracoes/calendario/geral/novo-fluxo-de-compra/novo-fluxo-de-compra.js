import React from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import Form, { GroupItem, RequiredRule, SimpleItem, ButtonItem } from 'devextreme-react/form';
import { SelectBox } from "devextreme-react";
import { ContextMenu, Item } from 'devextreme-react/context-menu';
import { useHistory } from 'react-router-dom';

const NovoFluxoDeCompraPage = () => {
    const history = useHistory();
    function backGeral() {
        history.push('/geral')
    }


    const buttonVoltar = {
        text: "Voltar",
        icon: 'return',
        width: '300',
        height: '40',
        onClick: backGeral
    };
    const firstIcon = {
        icon: 'cart',
        text: 'Compra',
        width: '',
        height: '40'
    }
    const secondIcon = {
        icon: 'inserttable',
        text: 'Análise do Pedido',
        width: '',
        height: '40'
    }
    const thirdIcon = {
        icon: 'chart',
        text: 'Avaliação Fornecedor',
        width: '',
        height: '40'
    }
    const fourthIcon = {
        icon: 'chart',
        text: 'Faturamento',
        width: '',
        height: '40'
    }

    const buttonAdd = {
        icon: 'add',
        width: '',
        height: '40'
    };
    const refreshButton = {
        text: 'Atualizar',
        icon: 'save',
        width: '',
        height: '40'
    };
    const buttonEditar = {
        text: 'Editar Etapa',
        icon: 'edit',
        width: '250',
        height: '40'
    };

    const requisicaoItens = [
        'É solicitado o pedido de compra',
        'O recebedor recebe o produto',
        'O solicitante recebe o produto',
        'Os fornecedores entregam',
    ];

    return (
        <React.Fragment>

            <div className={'content-block'}>
                <div className={'dx-card responsive-paddings'}>
                    <h5 className={'content-block'}>Fluxo de compras atual da empresa:</h5>
                    <Form labelMode='floating'>
                        <GroupItem>
                            <SimpleItem editorType='dxTextBox' label={{ text: 'Nome do fluxo' }}>
                                <RequiredRule message="Este campo é obrigatorio" />
                            </SimpleItem>
                        </GroupItem>
                        
                    </Form>
                    <br />
                    <br />
                    <Form labelMode='floating' colCount={4}>
                        <GroupItem caption=''>
                            <ButtonItem
                                buttonOptions={firstIcon}
                                horizontalAlignment={'center'}
                            />
                            <SimpleItem editorType='dxSelectBox' label={{ text: 'Encaminhar Para:' }} />
                            <ButtonItem
                                buttonOptions={buttonAdd}
                                horizontalAlignment={'center'}
                            />
                        </GroupItem>
                        <GroupItem caption=''>
                            <ButtonItem
                                buttonOptions={secondIcon}
                                horizontalAlignment={'center'}
                            />
                            <SimpleItem>
                                <p><b>Prazo em períodos:</b></p>
                                <p><b>Ações:</b></p>
                                
                            </SimpleItem>
                            <ButtonItem
                                buttonOptions={buttonEditar}
                                horizontalAlignment={'center'}
                            />
                            <ButtonItem
                                buttonOptions={buttonAdd}
                                horizontalAlignment={'center'}
                            />

                        </GroupItem>
                        <GroupItem caption=''>
                            <ButtonItem
                                buttonOptions={thirdIcon}
                                horizontalAlignment={'center'}
                            />
                            <SimpleItem editorType='dxSelectBox' label={{ text: 'Encaminhar Para:' }} />
                            <SimpleItem editorType='dxSelectBox' label={{ text: 'Ao Reprovar Encaminhar Para:' }} />
                            <ButtonItem
                                buttonOptions={buttonAdd}
                                horizontalAlignment={'center'}
                            />
                        </GroupItem>
                        <GroupItem caption=''>
                            <ButtonItem
                                buttonOptions={fourthIcon}
                                horizontalAlignment={'center'}
                            />
                            <SimpleItem>
                                <p>Ações:</p>
                            </SimpleItem>
                            <ButtonItem
                                buttonOptions={buttonEditar}
                                horizontalAlignment={'center'}
                            />
                            
                        </GroupItem>
                       
                      
                    </Form>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Form colCount={2}>
                    <ButtonItem
                        buttonOptions={buttonVoltar}
                        verticalAlignment={"bottom"}
                        horizontalAlignment={'left'}
                    />
                    <ButtonItem
                        buttonOptions={refreshButton}
                        horizontalAlignment={'right'}
                    />
                    </Form>




                </div>
            </div>
        </React.Fragment>
    );
};

export default NovoFluxoDeCompraPage;