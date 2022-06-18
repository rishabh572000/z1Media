import React from "react";
import './Header.css';
import { Typography, Input } from 'antd';
import { SearchOutlined, MessageOutlined, BellOutlined} from '@ant-design/icons';

const { Title } = Typography;

const Hearer = () =>{
  return(
    <>
    <div className="Header">
        <div className="left"><h1>Finance</h1></div>
        <div className="middle"><Input placeholder="Search here..." prefix={<SearchOutlined />} style={{borderRadius:'50px', width:'350px'}}/></div>
        <div className="right">
        <div className="icon">
          <MessageOutlined style={{fontSize:20, padding:10}}/>  
          <BellOutlined style={{fontSize:20, padding:10}}/>
          </div>
        </div>
    </div>
    </>
  )
}
export default Hearer;