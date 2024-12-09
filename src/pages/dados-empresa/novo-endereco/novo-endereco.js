import React from "react";
import HeaderDataGrid from "../../../components/header-datagrid/header-datagrid";
import { Button } from "devextreme-react";
import Form, { GroupItem, RequiredRule, SimpleItem, ButtonItem } from 'devextreme-react/form';
import './novo-endereco.scss'
import { Switch } from 'devextreme-react/switch';
import { useHistory } from "react-router-dom";



const NovoEnderecoPage = () => {
   
    const history = useHistory();
    function backPage(){
        history.push('/dados-empresa')
    }

  
    return (
    <React.Fragment>
      <h2 className="content-block">Cadastrar Endreço</h2>
      <div className="content-block">
      <HeaderDataGrid>
            <Button className='botao' text="Salvar" icon="add" />
            <Button className='botao' onClick={backPage} text="Voltar" icon="return" />
        </HeaderDataGrid>
        <div className={"dx-card responsive-paddings"}>
        <Form colCount={4}>
            <GroupItem caption='Endereço de Entrega' colCount={''}>
            <Switch defaultValue={false}></Switch>     
            </GroupItem>
            <GroupItem caption='Emissão de Nota fiscal'> 
                <Switch defaultValue={false}></Switch> 
            </GroupItem>
        </Form>
        <div className="divider-h"></div>
        <br/>
        <br/>
        <Form labelMode="floating" colCount={1}>
            <SimpleItem editorType='dxTextBox' label={{text: 'CEP'}}>
                <RequiredRule message="Este campo é obrigatório" />
            </SimpleItem>
        </Form>
        <Form labelMode="floating" colCount={2}>
            <GroupItem>
            <SimpleItem editorType='dxTextBox' label={{text: 'Rua/Avenida'}}>
                <RequiredRule message="Este campo é obrigatório" />
            </SimpleItem>
            </GroupItem>
            <GroupItem>
            <SimpleItem editorType='dxTextBox' label={{text: 'Número'}}>
                <RequiredRule message="Este campo é obrigatório" />
            </SimpleItem>
            </GroupItem>
            <GroupItem>
            <SimpleItem editorType='dxTextBox' label={{text: 'Bairro'}}>
                <RequiredRule message="Este campo é obrigatório" />
            </SimpleItem>
            </GroupItem>
            <GroupItem>
            <SimpleItem editorType='dxTextBox' label={{text: 'Complemento'}}/>
            </GroupItem>
            <GroupItem>
            <SimpleItem editorType='dxSelectBox' label={{text: 'Estado'}}>
                <RequiredRule message="Este campo é obrigatório" />
            </SimpleItem>
            </GroupItem>
            <GroupItem>
            <SimpleItem editorType='dxSelectBox' label={{text: 'Cidade'}}>
                <RequiredRule message="Este campo é obrigatório" />
            </SimpleItem>
            </GroupItem>
        </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NovoEnderecoPage;
