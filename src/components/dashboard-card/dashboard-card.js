import React from "react";
import "./dashboard-card.scss";

function DashboardCard(props) {
  return (
    <div
      className={"dx-card card"}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <p className="titulo">{props.titulo}</p>
      <p className="dados">{props.dados}</p>
    </div>
  );
}

export default DashboardCard;
