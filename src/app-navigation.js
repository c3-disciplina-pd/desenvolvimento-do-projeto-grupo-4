import DashboardIcon from "./assets/icons/dashboard-icon.svg";
import TableIcon from "./assets/icons/table-icon.svg";

export const navigation = [
  {
    text: "Dashboard",
    path: "/home",
    icon: DashboardIcon,
  },
  {
    text: "Configuração",
    icon: "preferences",
    items: [
      {
        text: "Evento",
        path: "/calendario",
      },
      
    ],
  },
];
