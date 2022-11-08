import { DataGrid } from "devextreme-react";
import {
  Column,
  FilterPanel,
  FilterRow,
  Summary,
  TotalItem,
} from "devextreme-react/data-grid";
import Form, { GroupItem, RequiredRule, SimpleItem, ButtonItem } from 'devextreme-react/form';
import SelectBox from 'devextreme-react/select-box'

import TabPanel, { Item } from "devextreme-react/tab-panel";

import React from "react";
import "./recebidos.scss";

const RecebidosPage = () => {
  
  const buttonComprados = {
    text: "Comprados",
    icon: 'money',
    width: '250',
    height: '40'
};
const buttonEstoque = {
  text: "Em Estoque",
  icon: 'product',
  width: '250',
  height: '40'
};
const buttonTotal = {
  text: 'Total:',
  width: '400',
  height: '50'
}
const checkBoxOpcoes = {
  text: "Selecionar Todos (produtos listados)",
  value: false
};
const checkBoxOpcoesDois = {
  text: "Indicar produtos selecionados como recebidos.",
  value: false
};
 
return(
  <React.Fragment>
    <div className={"content-block"}>
      <TabPanel animationEnabled={true} swipeEnabled={true}>
        <Item title="Produtos à receber" icon="box">
          <div className={"dx-card responsive-paddings"}>
            <h2 className={"content-block"}>Produtos à receber</h2>
            <Form colCount={2}>
            <GroupItem colCount={2}>
              <ButtonItem
                buttonOptions={buttonComprados}
                horizontalAlignment={'left'}
              />
              <ButtonItem
                buttonOptions={buttonEstoque}
                horizontalAlignment={'left'}
              />
            </GroupItem>
            </Form>
            <br/>
            <br/>
            <Form colCount={3}>
              <GroupItem>
              <SelectBox
                placeholder="Selecione o período"
                showClearButton={true} />
              </GroupItem>
              <GroupItem>
              <SimpleItem
                editorType={"dxCheckBox"}
                editorOptions={checkBoxOpcoes}
              />
              </GroupItem>
              <GroupItem>
              <SimpleItem
                editorType={"dxCheckBox"}
                editorOptions={checkBoxOpcoesDois}
              />
              </GroupItem>
            </Form>
            <br/>
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
            <DataGrid>
              <FilterRow visible={true} />
              <FilterPanel visible={true} />
              <Column caption={"Produto"} />
              <Column caption={"Atributos"} />
              <Column caption={"Solicitante"} />
              <Column caption={"Empresa"} />
              <Column caption={"Inf. Requisição"} />
              <Column caption={"Quantidade"} />
              <Column caption={"Solicitado em"} />
            </DataGrid>
          </div>
        </Item>
        <Item title="Produtos recebidos" icon="check">
          <div className={"dx-card responsive-paddings"}>
            <h2 className={"content-block"}>Produtos recebidos</h2>
            <Form colCount={2}>
            <GroupItem colCount={2}>
              <ButtonItem
                buttonOptions={buttonComprados}
                horizontalAlignment={'left'}
              />
              <ButtonItem
                buttonOptions={buttonEstoque}
                horizontalAlignment={'left'}
              />
            </GroupItem>
            </Form>
            <DataGrid>
              <FilterRow visible={true} />
              <FilterPanel visible={true} />
              <Column caption={"Produto"} />
              <Column caption={"Atributos"} />
              <Column caption={"Solicitante"} />
              <Column caption={"Empresa"} />
              <Column caption={"Inf. Requisição"} />
              <Column caption={"Quantidade"} />
              <Column caption={"Solicitado em"} />
            </DataGrid>
          </div>
        </Item>
      </TabPanel>
    </div>
  </React.Fragment>
  );
};

export default RecebidosPage;


