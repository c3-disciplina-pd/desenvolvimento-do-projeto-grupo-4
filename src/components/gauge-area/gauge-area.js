import React from "react";

import "./gauge-area.scss";

import {
  CircularGauge,
  Scale,
  Label,
  RangeContainer,
  Range,
  Size,
  ValueIndicator,
  Geometry,
  Margin,
  Tick,
  SubvalueIndicator,
} from "devextreme-react/circular-gauge";

import {
  Font,
  LinearGauge,
  Subtitle,
  Title,
} from "devextreme-react/linear-gauge";

import Sparkline from "devextreme-react/sparkline";
import { Tooltip } from "devextreme-react/tooltip";

const GaugeArea = (props) => {
  const calcularTicks = (quantidade) => {
    let numeroDeTicks = quantidade / 2;
    return Math.abs(numeroDeTicks);
  };

  let color = "#224443";

  if (props.circularGaugeValue <= 40) {
    color = "#F03835";
  } else if (props.circularGaugeValue > 40 && props.circularGaugeValue <= 80) {
    color = "#5FB6F5";
  } else if (props.circularGaugeValue > 80) {
    color = "#C7F059";
  }

  const oilCosts = [
    {
      month: 1,
      2010: 77,
      2011: 93,
      2012: 107,
    },
    {
      month: 2,
      2010: 72,
      2011: 101,
      2012: 112,
    },
    {
      month: 3,
      2010: 79,
      2011: 115,
      2012: 123,
    },
    {
      month: 4,
      2010: 82,
      2011: 116,
      2012: 123,
    },
    {
      month: 5,
      2010: 86,
      2011: 124,
      2012: 116,
    },
    {
      month: 6,
      2010: 73,
      2011: 115,
      2012: 102,
    },
    {
      month: 7,
      2010: 73,
      2011: 110,
      2012: 94,
    },
    {
      month: 8,
      2010: 77,
      2011: 117,
      2012: 105,
    },
    {
      month: 9,
      2010: 76,
      2011: 113,
      2012: 113,
    },
    {
      month: 10,
      2010: 81,
      2011: 103,
      2012: 111,
    },
    {
      month: 11,
      2010: 83,
      2011: 110,
      2012: 107,
    },
    {
      month: 12,
      2010: 89,
      2011: 109,
      2012: 110,
    },
  ];

  return (
    <div>
      <div className={"gauge"}>
        <CircularGauge
          id="gauge"
          value={props.circularGaugeValue}
          subvalues={[props.circularGaugeValue]}
          redrawOnResize={true}
        >
          <Title
            verticalAlignment={"bottom"}
            text={props.circularGaugePercentualTitle}
          >
            <Font size={11} />
            <Margin top={20} />
          </Title>
          <Geometry startAngle={180} endAngle={0} />
          <Size height={150} width={200} />
          <ValueIndicator type="triangleNeedle" color={color}></ValueIndicator>
          <SubvalueIndicator
            type="triangleMarker"
            color={color}
          ></SubvalueIndicator>
          <Scale startValue={0} endValue={100} tickInterval={20}>
            <Label useRangeColors={true} />
            <Tick color="#363640" />
          </Scale>
          <RangeContainer palette="pastel">
            <Range startValue={0} endValue={40} color="#F03835" />
            <Range startValue={40} endValue={80} color="#5FB6F5" />
            <Range startValue={80} endValue={100} color="#C7F059" />
          </RangeContainer>
        </CircularGauge>
        <div
          style={{ color: color, borderColor: color }}
          className={"gauge-value"}
        >
          <span>{props.circularGaugeValue}%</span>
        </div>
        <Sparkline
          dataSource={oilCosts}
          showMinMax={true}
          className="sparkline"
          argumentField="month"
          valueField={"2011"}
          type="line"
          size={{ width: 115 }}
        >
          <Tooltip format="currency" />
        </Sparkline>
        <span
          className={"gauge-qtd"}
        >{`${props.circularGaugeTitle}: ${props.circularGaugeQtd}`}</span>
        <div className={"gauge-bar"}>
          {props.linearGaugeItems ? (
            props.linearGaugeItems.map((linearGauge, index) => {
              return (
                <LinearGauge
                  key={index}
                  value={linearGauge.valor}
                  id="linerGauge"
                  subvalues={[linearGauge.valor]}
                >
                  <Margin right={10} left={10} />
                  <Title text={linearGauge.nome}>
                    <Font size={11} />
                    <Subtitle text={linearGauge.valor}>
                      <Font size={10} />
                    </Subtitle>
                  </Title>
                  <ValueIndicator
                    type="rangebar"
                    color={linearGauge.cor}
                  ></ValueIndicator>
                  <SubvalueIndicator
                    type="triangleMarker"
                    color={linearGauge.cor}
                  ></SubvalueIndicator>
                  <Size width={100} height={80} />
                  <Scale
                    startValue={0}
                    endValue={props.circularGaugeQtd}
                    tickInterval={calcularTicks(props.circularGaugeQtd)}
                  >
                    <Label visible={false} />
                    <Tick color="#224443" />
                  </Scale>
                </LinearGauge>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(GaugeArea);
