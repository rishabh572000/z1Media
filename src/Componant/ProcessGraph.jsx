import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RingProgress } from '@ant-design/plots';

const ProcessGraph = (props) => {
  const config = {
    height: 170,
    width: 170,
    autoFit: false,
    percent: props.percent,
    color: [props.color1, props.color2],
  };
  return <RingProgress {...config} />;
};

export default ProcessGraph;