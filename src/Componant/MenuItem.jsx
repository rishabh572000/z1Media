import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

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
  getItem('Dashboard', 'sub1', <MailOutlined />, [
    getItem('Classic', '1'),
    getItem('Minimal', '2'),
  ]),
  getItem('Pages', 'sub2', <AppstoreOutlined />, [
    getItem('User Login', '5'),
    getItem('User Registration', '6'),
    getItem('Subscription', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Applications', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
]; // submenu keys of first level

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

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
      }}
      items={items}
    />
  );
};

export default MenuItem;