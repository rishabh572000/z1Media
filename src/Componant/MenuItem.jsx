import { HomeOutlined, TrophyOutlined, FileTextOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,Routes,
  Link,
} from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Dashboard', 'sub1', <HomeOutlined />, [
    getItem(<Link to="/cassis">Cassis</Link>, '1'),
    getItem('Minimal', '2'),
  ]),
  getItem('Pages', 'sub2', <FileTextOutlined />, [
    getItem('User Login', '5'),
    getItem('User Registration', '6'),
    getItem('Subscription', 'sub3', null, [getItem('Active', '7'), getItem('Expire', '8')]),
  ]),
  getItem('Applications', 'sub4', <TrophyOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Ui Component', 'sub5', <TrophyOutlined />, [
    getItem('Page One', '13'),
    getItem('Page Two', '14'),
  ]),
  getItem('Widget', 'sub6', <TrophyOutlined />, [
    getItem('Widget 9', '15'),
    getItem('Widget 10', '16'),
    getItem('Widget 11', '17'),
    getItem('Widget 12', '18'),
  ]),
  getItem('Forms', 'sub7', <TrophyOutlined />, [
    getItem('Leave', '19'),
    getItem('Apragal', '20'),
    getItem('Good work', '21'),
  ]),
  getItem('Charts', 'sub8', <TrophyOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
]; // submenu keys of first level

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8'];

const MenuItem = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256, 
        position: 'sticky',
      }}
      items={items}
    />
  );
};

export default MenuItem;