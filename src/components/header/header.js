import React from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
import UserPanel from '../user-panel/user-panel';
import { useHistory } from "react-router-dom";
import { Popup, Position, ToolbarItem } from 'devextreme-react/popup';
import { useState } from 'react';
import './header.scss';
import { Template } from 'devextreme-react/core/template';
import PopUpComponent from './popUpComponent/popUpComponent';

export default function Header({ menuToggleEnabled, title, toggleMenu }) {

  const history = useHistory();

  function retornarHome() {
    history.push("/home");
  }

  function openChat() {
    history.push('/chat')
    setPopupVisibility(false)
  }

  const [isPopupVisible, setPopupVisibility] = useState(false);

  function togglePopup() {
    setPopupVisibility(!isPopupVisible);
  };

  const renderContent = () => {

    return (
      <>
        <div className={'message-area'}><p>Nenhuma Mensagem Disponível</p></div>
        <Button onClick={openChat} className="botao" icon="chevronright" text="Ver todas" />
      </>
    )

  }
  const avaliacoesContent = () => {
    return (
      <>
        <div className={'message-area'}><p></p></div>
        <Button className="botao" icon="chevronright" text="Ver Avaliações" />
      </>
    )

  }


  return (
    <header className={'header-component'}>
      <Toolbar className={'header-toolbar'}>
        <Item
          visible={menuToggleEnabled}
          location={'before'}
          widget={'dxButton'}
          cssClass={'menu-button'}
        >
          <Button icon="menu" stylingMode="text" onClick={toggleMenu} />
        </Item>
        <Item
          location={'before'}
          cssClass={'header-title'}
          text={title}
          visible={!!title}
        />
        
        <Item
          location={'after'}
          locateInMenu={'auto'}
          menuItemTemplate={'userPanelTemplate'}
        >
          <Popup
            visible={isPopupVisible}
            hideOnOutsideClick={true}
            onHiding={togglePopup}
            showCloseButton={true}
            title="Central de Mensagens"
            width={'400'}
            resizeEnabled={false}
            position="right top"
            contentRender={renderContent}
          />
          <Button
            icon='comment'
            onClick={togglePopup}
          />
        </Item>
        <Item
          location={'after'}
          locateInMenu={'auto'}
          menuItemTemplate={'userPanelTemplate'}
        >
          <PopUpComponent content={avaliacoesContent} title='Avaliações' icon='favorites' />
        </Item>
        <Item
          location={'after'}
          locateInMenu={'auto'}
          menuItemTemplate={'userPanelTemplate'}
        >
          <PopUpComponent title='Suporte' icon='message' />
        </Item>
        <Item
          location={'after'}
          locateInMenu={'auto'}
          menuItemTemplate={'userPanelTemplate'}
        >
          <Button
            className={'user-button authorization'}
            width={210}
            height={'100%'}
            stylingMode={'text'}
          >
            <UserPanel menuMode={'context'} />
          </Button>
        </Item>
        <Template name={'userPanelTemplate'}>
          <UserPanel menuMode={'list'} />
        </Template>
      </Toolbar>
    </header>
  )
}
