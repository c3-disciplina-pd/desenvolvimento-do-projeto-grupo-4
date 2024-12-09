import React from "react";

import DataGrid, { Column } from 'devextreme-react/data-grid';
import Form, { GroupItem, SimpleItem, ButtonItem } from 'devextreme-react/form';
import { useHistory } from 'react-router-dom';

const CalendarioPage = () => {
    const history = useHistory();
    
    function addEvent () {
        history.push("/novo-evento")
    }
    
    const buttonTotal = {
        text: 'total:',
        width: '400',
        height: '50'
      }
      
      const buttonAddCalendario = {
        icon: 'event',
        text: 'Novo evento ou feriado',
        width: '400',
        height: '50',
        onClick: addEvent
      }

  return (
    <React.Fragment>
      <h2 className={"content-block"}>Calendário</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
        <Form colCount={3}>
            <ButtonItem
              buttonOptions={buttonTotal}
              verticalAlignment={'bottom'}
              horizontalAlignment={"left"}
            />
            <SimpleItem editorType='dxTextBox' label={{ text: 'Buscar por' }} />
            <ButtonItem
              buttonOptions={buttonAddCalendario}
              verticalAlignment={'bottom'}
              horizontalAlignment={"right"}
            />
          </Form>
          <br/>
          <br/>
          <DataGrid>
            <Column dataField="ex" caption="Tipo de evento"/>
            <Column dataField="ex" width='300' caption="Descrição" />
            <Column dataField="ex" caption="Cor" />
            <Column dataField="ex" caption="Início" />
            <Column dataField="ex" caption="Fim" />
          </DataGrid>
                         
        </div>
      </div>
    </React.Fragment>
  );
};

export default CalendarioPage;