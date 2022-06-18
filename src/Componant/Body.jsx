import React from "react";
import MenuItem from "./MenuItem";
import './body.css';
import Card from './Card';
import DataCard from "./DataCard";
import Graph from "./Graph";
import ProcessGraph from "./ProcessGraph";
import { Typography } from 'antd';

const { Title } = Typography;

const Body = () => {
  return(
    <div className="body">
      <div className="staticdata">
      <div className="bodyleft">
      <MenuItem />
      </div>

      <div className="right">
      <div className="bodymiddleSection">
        {DataCard.map((value, index)=>{
          return(
            <>
            <Card key={value.id} text1={value.text1} text2={value.text2} text3={value.text3} color={value.color}/>
            </>
          )
        })}
      </div>
      <div className="graph">
        <div className="graphLeft">
        <Graph />
        </div>
        <div className="graphRight">
          <div className="item">
          <Title level={5}>% of Income Budget</Title>
            <ProcessGraph percent={0.6} color1='#23c662' color2='#b2fca6'/>
          </div>
          <div className="item">
          <Title level={5}>% of Expenses Budget</Title>
            <ProcessGraph percent={0.79} color1='#177483' color2='#bfcfff'/>
          </div>
        </div>
      </div>
      </div>

      </div>
    </div>
  )
}

export default Body;