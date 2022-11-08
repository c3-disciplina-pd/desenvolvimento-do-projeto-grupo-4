import React from "react";
import DataGrid, {
    Column,
    FilterPanel,
    FilterRow,
} from "devextreme-react/data-grid";
import { Button } from "devextreme-react";
import FluxoDaRequisicaoPage from "./fluxo-da-requisicao/fluxo-da-requisicao";
import FluxoPedidoDeCompra from "./fluxo-do-pedido-de-compra/fluxo-do-pedido-de-compra";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Menu, { Item } from 'devextreme-react/menu';
import HeaderDataGrid from "../../../../components/header-datagrid/header-datagrid";


const GeralPage = () => {
    const history = useHistory();
    function addDashboard() {
        history.push("/novo-modelo-dashboard")
    }
    const buttonAddDashboard = {
        text: 'Novo',
        icon: 'add',
        width: '350',
        height: '50',
        onClick: addDashboard
    }

    const [showFluxoReq, setFluxoReq] = useState(true);
    const [showFluxoPedido, setFluxoPedido] = useState(false);

    const inativarComponentes = ()=>{
        setFluxoReq(false);
        setFluxoPedido(false);
    }

    const handleClickFluxoReq = (e)=>{
        inativarComponentes();
        setFluxoReq(true)
    }
    const handleClickContratosEncerrados = (e) =>{
        inativarComponentes();
        setFluxoPedido(true);
    }


    return (
        <React.Fragment>
            <h2 className={'content-block'}>Configuração Geral</h2>
            <div className={"content-block"}>
            <HeaderDataGrid>
            <Menu closeMenuOnClick='true'>
            <Item   icon="filter" text='Filtro'>
              <Item icon="" onClick={handleClickFluxoReq} text='Fluxo da requisição'></Item>
              <Item icon="" onClick={handleClickContratosEncerrados} text='Fluxo do pedido de compra'></Item>
            </Item>
            </Menu>
        </HeaderDataGrid>
           {
            showFluxoReq && (
                <FluxoDaRequisicaoPage/>
            )
           }
           {
            showFluxoPedido && (
                <FluxoPedidoDeCompra/>
            )
           }          
            </div>
        </React.Fragment>
    );
};

export default GeralPage;
