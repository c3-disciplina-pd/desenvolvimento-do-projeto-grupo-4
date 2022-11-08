import React from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import Form, { GroupItem, RequiredRule, SimpleItem, ButtonItem } from 'devextreme-react/form';
import { SelectBox } from "devextreme-react";
import { ContextMenu, Item } from 'devextreme-react/context-menu';
import { useHistory } from 'react-router-dom';

const NovoFluxoDaRequisicaoPage = () => {
    const history = useHistory();
    function backGeral() {
        history.push('/geral')
    }
    
    const checkBoxOpcoes = {
        text: "Deseja que as requisições sejam divididas por categoria ?",
        value: false
    };

    const buttonVoltar = {
        text: "Voltar",
        icon: 'return',
        width: '300',
        height: '40',
        onClick: backGeral
    };
    const firstIcon = {
        icon: 'edittableheader',
        text: 'Solicitação',
        width: '',
        height: '40'
    }
    const secondIcon = {
        icon: 'chart',
        text: 'Cotação',
        width: '',
        height: '40'
    }
    const thirdIcon = {
        icon: 'inserttable',
        text: 'análise da Cotação',
        width: '',
        height: '40'
    }
    const fourthIcon = {
        icon: 'cart',
        text: 'Compra',
        width: '',
        height: '40'
    }

    const buttonAdd = {
        icon: 'add',
        width: '',
        height: '40'
    };
    const saveButton = {
        text: 'Salvar este Fluxo',
        width: '300',
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
                    <h5 className={'content-block'}>Fluxo atual da empresa:</h5>
                    <Form labelMode='floating'>
                        <GroupItem>
                            <SimpleItem editorType='dxTextBox' label={{ text: 'Nome do fluxo' }} >
                                <RequiredRule message="Este campo é obrigatorio" />
                            </SimpleItem>
                        </GroupItem>
                        <GroupItem>
                            <SelectBox
                                items={requisicaoItens}
                                placeholder='A requisição é dada como finalizada quando :'

                            >
                                 <RequiredRule message="Este campo é obrigatorio" />
                            </SelectBox>
                                
                        </GroupItem>
                      
                        <SimpleItem
                            editorType={"dxCheckBox"}
                            editorOptions={checkBoxOpcoes}
                        />
                    </Form>
                    <br/>
                    <br/>
                    <Form labelMode='floating' colCount={4}>
                        <GroupItem caption=''>
                        <ButtonItem 
                        buttonOptions={firstIcon}
                        horizontalAlignment={'center'}
                        />
                        <SimpleItem editorType='dxSelectBox' label={{ text: 'Encaminhamento Para:' }} />
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
                                <p>Ao encerrar o período de cotações, encaminhar a requisição para: 
                                <strong> Etapa de Análise das Cotações.</strong>
                                </p>
                                <p>Prazo limite para empresas encaminharem para cotação: <strong>1 Período</strong> </p>
                                <p>Prazo limite para fornecedores catarem: <strong>1 período</strong></p>
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
                            <SimpleItem>
                                <p>Justificar escolha de cotações que não
                                    são a de menor preço: <b>Sim</b>
                                </p>
                                <p>
                                    prazo: <b>1 Período</b>
                                </p>
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
                            buttonOptions={fourthIcon}
                            horizontalAlignment={'center'}
                        />
                        <SimpleItem>
                            <p>Fluxo do pedido de compra</p>
                        </SimpleItem>
                        <SimpleItem editorType='dxSelectBox' label={{ text: 'Selecione o fluxo de compra' }} />
                        </GroupItem>
                        
                     
                        
                    </Form>
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
                            buttonOptions={saveButton}
                            horizontalAlignment={'right'}
                        />
                    </Form>
                   
                    



                </div>
            </div>
        </React.Fragment>
    );
};

export default NovoFluxoDaRequisicaoPage;