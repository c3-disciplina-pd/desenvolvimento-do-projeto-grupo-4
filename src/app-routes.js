import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, EmpresaPage, NovaEmpresaPage, CompraCategoriaPage, VolumePrecoPage, SubcategoriaAnoPage, ComprasOrcamentoPage, ComprasDepartamentoPage, EconomizometroPage, CotacoesPage, RaioxPage, RequisicoesPedidosPage, DadosEmpresaPage, ConvitePage, RecebidosPage, CriteriosDeAprovacaoPage, TransportadorasPage, CalendarioPage, NovoEventoPage, FormasDePagamentoPage, DatasFixasDePagamentoPage, NovaDataFixaDePagamento, NovaFormaDePagamento, GeralPage, NovoFluxoDaRequisicaoPage, NovoFluxoDeCompraPage, NovoModeloDashboard, RelatorioDeImportacaoPage, RelatorioDeIntegracaoPage, ModeloDashboardPage, ConfiguracaoEmpresaMatrizPage, NovoEnderecoPage, ChatPage } from './pages';

const routes = [
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/compra-categoria',
    component: CompraCategoriaPage
  }, 
  {
    path: '/volume-preco',
    component: VolumePrecoPage
  }, 
  {
    path: '/empresa-grafico',
    component: SubcategoriaAnoPage
  }, 
  {
    path: '/compras-orcamento',
    component: ComprasOrcamentoPage
  }, 
  {
    path: '/compras-departamento',
    component: ComprasDepartamentoPage
  },  
  {
    path: '/economizometro',
    component: EconomizometroPage
  }, 
  {
    path: '/cotacoes',
    component: CotacoesPage
  }, 
  {
    path: '/raiox',
    component: RaioxPage
  }, 
  {
    path: '/requisicoes-pedidos',
    component: RequisicoesPedidosPage
  }, 
  {
    path: '/dados-empresa',
    component: DadosEmpresaPage
  },  
  {
    path: '/convite',
    component: ConvitePage
  }, 
  {
    path: '/recebidos',
    component: RecebidosPage
  },
  {
    path: '/calendario',
    component: CalendarioPage
  },
  {
    path: '/novo-evento',
    component: NovoEventoPage
  },
  {
    path: '/geral',
    component: GeralPage
  },
  {
    path: '/novo-fluxo-da-requisicao',
    component: NovoFluxoDaRequisicaoPage
  },
  {
    path: '/novo-fluxo-de-compra',
    component: NovoFluxoDeCompraPage
  },
  {
    path: '/novo-modelo-dashboard',
    component: NovoModeloDashboard
  },
  {
    path: '/relatorio-de-importacao',
    component: RelatorioDeImportacaoPage
  },
  {
    path: '/relatorio-de-integracao',
    component: RelatorioDeIntegracaoPage
  },
  {
    path: '/modelo-de-dashboard',
    component: ModeloDashboardPage
  },
  {
    path: '/configuracoes-da-empresa-matriz',
    component: ConfiguracaoEmpresaMatrizPage
  },
  {
    path: '/novo-endereco',
    component: NovoEnderecoPage
  },
  {
    path: '/chat',
    component: ChatPage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
