import React from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import Form, { GroupItem, RequiredRule, SimpleItem, ButtonItem } from 'devextreme-react/form';
import { SelectBox } from "devextreme-react";
import { ContextMenu, Item } from 'devextreme-react/context-menu';
import { useHistory } from 'react-router-dom';

const NovoModeloDashboard = () => {
    const history = useHistory();
    function backGeral() {
        history.push('/modelo-de-dashboard')
    }


    const buttonVoltar = {
        text: "Voltar",
        icon: 'return',
        width: '300',
        height: '40',
        onClick: backGeral
    };
    
    const checkBoxOpcoes = {
        value: false
      };

    const iconeUm = {
        icon: 'cart',
        text: 'Compra',
        width: '300',
        height: '40'
    }
    const iconeDois = {
        icon: 'event',
        text: 'Feriados',
        width: '300',
        height: '40'
    }
    const iconeTres = {
        icon: 'chart',
        text: 'Indicadores',
        width: '300',
        height: '40'
    }
    const iconeQuatro = {
        icon: 'money',
        text: 'Economizômetro',
        width: '300',
        height: '40'
    }
    const iconeCinco = {
        icon: 'aligncenter',
        text: 'Resumo da empresa',
        width: '300',
        height: '40'
    }
    const iconeSeis = {
        icon: 'aligncenter',
        text: 'Resumo por filial',
        width: '300',
        height: '40'
    }
    const iconeSete = {
        icon: 'sorted',
        text: 'Gráficos de gestão',
        width: '300',
        height: '40'
    }
    const iconeOito = {
        icon: 'group',
        text: 'Fornecedores Convidados',
        width: '300',
        height: '40'
    }
    const iconeNove = {
        icon: 'money',
        text: '% comprados por categoria',
        width: '400',
        height: '40'
    }
    const iconeDez = {
        icon: 'money',
        text: '% normais e urgentes por categoria',
        width: '300',
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
                    <Form labelMode='floating'>
                        <GroupItem>
                            <SimpleItem editorType='dxTextBox' label={{ text: 'Nome:' }}>
                                <RequiredRule message="Este campo é obrigatorio" />
                            </SimpleItem>
                        </GroupItem>
                        
                    </Form>
                    <br />
                    <br />
                    <h5 className={'content-block'}>Módulos</h5>
                    <Form labelMode='floating' colCount={4}>
                        <GroupItem caption=' '>
                            <SimpleItem
                                editorType={"dxCheckBox"}
                                editorOptions={checkBoxOpcoes}
                            />
                            <ButtonItem
                                buttonOptions={iconeUm}
                                horizontalAlignment={'center'}
                            />
                        </GroupItem>
                        
                        <GroupItem caption=' '>
                            <SimpleItem
                                editorType={"dxCheckBox"}
                                editorOptions={checkBoxOpcoes}
                            />
                            <ButtonItem
                                buttonOptions={iconeDois}
                                horizontalAlignment={'center'}
                            />
                        </GroupItem>
                        <GroupItem caption=' '>
                            <SimpleItem
                                editorType={"dxCheckBox"}
                                editorOptions={checkBoxOpcoes}
                            />
                            <ButtonItem
                                buttonOptions={iconeTres}
                                horizontalAlignment={'center'}
                            />
                        </GroupItem>
                        <GroupItem caption=' '>
                            <SimpleItem
                                editorType={"dxCheckBox"}
                                editorOptions={checkBoxOpcoes}
                            />
                            <ButtonItem
                                buttonOptions={iconeQuatro}
                                horizontalAlignment={'center'}
                            />
                        </GroupItem>
                        <GroupItem caption=' '>
                            <SimpleItem
                                editorType={"dxCheckBox"}
                                editorOptions={checkBoxOpcoes}
                            />
                            <ButtonItem
                                buttonOptions={iconeCinco}
                                horizontalAlignment={'center'}
                            />
                        </GroupItem>
                        <GroupItem caption=' '>
                            <SimpleItem
                                editorType={"dxCheckBox"}
                                editorOptions={checkBoxOpcoes}
                            />
                            <ButtonItem
                                buttonOptions={iconeSeis}
                                horizontalAlignment={'center'}
                            />
                        </GroupItem>
                        <GroupItem caption=' '>
                            <SimpleItem
                                editorType={"dxCheckBox"}
                                editorOptions={checkBoxOpcoes}
                            />
                            <ButtonItem
                                buttonOptions={iconeSete}
                                horizontalAlignment={'center'}
                            />
                        </GroupItem>
                        <GroupItem caption=' '>
                            <SimpleItem
                                editorType={"dxCheckBox"}
                                editorOptions={checkBoxOpcoes}
                            />
                            <ButtonItem
                                buttonOptions={iconeOito}
                                horizontalAlignment={'center'}
                            />
                        </GroupItem>
                        <GroupItem caption=' '>
                            <SimpleItem
                                editorType={"dxCheckBox"}
                                editorOptions={checkBoxOpcoes}
                            />
                            <ButtonItem
                                buttonOptions={iconeNove}
                                horizontalAlignment={'center'}
                            />
                        </GroupItem>
                        <GroupItem caption=' '>
                            <SimpleItem
                                editorType={"dxCheckBox"}
                                editorOptions={checkBoxOpcoes}
                            />
                            <ButtonItem
                                buttonOptions={iconeDez}
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

export default NovoModeloDashboard;