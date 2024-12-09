import React from "react";
import './chat.scss'
import DataGrid, { Column } from 'devextreme-react/data-grid';
import Form, { GroupItem, SimpleItem, ButtonItem } from 'devextreme-react/form';
import { Item } from "devextreme-react/list";
import { Button } from "devextreme-react";
import { useHistory } from 'react-router-dom';
import HeaderDataGrid from "../../components/header-datagrid/header-datagrid";


const ChatPage = () => {
  const history = useHistory();

  function addEvent() {
    history.push("/novo-evento")
  }


  return (
    <React.Fragment>
      <h2 className={"content-block"}>Central de Mensagens</h2>
      <div className={"content-block"}>
        <div className={"dx-card responsive-paddings"}>
          <div className="wrapper">
            <div className={"left-container"}>
              <Button className="botao" text="Nova Conversa" icon="add" />
              <br />
              <Form labelMode="floating">
                <SimpleItem editorType='dxTextBox' label={{ text: 'Buscar por...' }} />
              </Form>
            </div>
            <div className={"main-container"}>

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatPage;