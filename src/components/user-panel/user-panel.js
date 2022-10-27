import React, { useMemo } from 'react';
import { useHistory } from "react-router-dom";
import ContextMenu, { Position } from 'devextreme-react/context-menu';
import List from 'devextreme-react/list';
import { useAuth } from '../../contexts/auth';
import './user-panel.scss';

export default function UserPanel({ menuMode }) {
  const { user, signOut } = useAuth();
  const history = useHistory();

  function navigateToProfile() {
    history.push("/dados-empresa");
  }
  const menuItems = useMemo(() => ([
    {
      text: 'Empresa',
      icon: 'home',
      onClick: navigateToProfile
    },
    {
      text: 'Sair',
      icon: 'runner',
      onClick: signOut
    }
  ]), [signOut]);

  return (
    <div className={'user-panel'}>
      <div className={'user-info'}>
        <div className={'user-name'}>Metamina</div>
      </div>
      {menuMode === 'context' && (
        <ContextMenu
          items={menuItems}
          target={'.user-button'}
          showEvent={'dxclick'}
          width={210}
          cssClass={'user-menu'}
        >
          <Position my={'top center'} at={'bottom center'} />
        </ContextMenu>
      )}
      {menuMode === 'list' && (
        <List className={'dx-toolbar-menu-action'} items={menuItems} />
      )}
    </div>
  );
}
