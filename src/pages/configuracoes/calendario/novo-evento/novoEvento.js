import React from "react";

import DataGrid, { Column } from 'devextreme-react/data-grid';
import Form, { GroupItem, SimpleItem, ButtonItem } from 'devextreme-react/form';
import { SelectBox } from "devextreme-react";


const NovoEventoPage = () => {
    const tiposEvento = [
        'Feriado municipal',
        'Feriado estadual',
        'Feriado nacional',
        'Outro',
      ];

      const buttonItens = {
        text: 'Criar novo',
        icon: 'add',
        width: '350',
        height: '50',
        floating: 'right'
      }

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Adicionar Novo Evento ou Feriado</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
        
       <Form >
        <GroupItem colCount={5}>
        <SelectBox
        items={tiposEvento}
        placeholder='Selecione o tipo de evento'
        width='350'
        />  
        </GroupItem>
       </Form>
      <br/>
       <Form labelMode="floating" colCount={3}>
       <SimpleItem
                editorType={"dxDateBox"}
                label={{ text: "Início" }}
              />
               <SimpleItem
                editorType={"dxDateBox"}
                label={{ text: "Fim" }}
              />
               <SimpleItem
                editorType={"dxTextBox"}
                label={{ text: "Descrição" }}
              />
               <ButtonItem
              buttonOptions={buttonItens}
              verticalAlignment={'center'}
              horizontalAlignment={'right'}
            />
         
       </Form>
       

                         
        </div>
      </div>
    </React.Fragment>
  );
};

export default NovoEventoPage;