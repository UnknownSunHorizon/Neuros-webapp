import styles from './styles/pipelist.module.css';

import React from 'react';

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Button, message, Space  } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';

import {Link} from "react-router-dom";

const { Header, Content, Sider } = Layout;

const Pipelist = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
  
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
        type: 'success',
        content: 'This is a success message',
        });
    };
    const error = () => {
        messageApi.open({
        type: 'error',
        content: 'В данный момент не удается создать новый пайплайн. Ошибка со стороны сервера.',
        });
    };
    const warning = () => {
        messageApi.open({
        type: 'warning',
        content: 'This is a warning message',
        });
    };

      return (
        <div className={styles.pipelines_container}>
            {contextHolder}
            <Link to="/pipeline">
            <div className={styles.pipelines_block}>
                <p>Пайплайн</p>
            </div>
            </Link>
            <Link to="/pipeline">
            <div className={styles.pipelines_block}>
                <p>Пайплайн</p>
            </div>
            </Link>
            <div className={styles.pipelines_block_add}>
                <Button onClick={error}>+</Button>
            </div>
                        
        </div>
      );
}

export default Pipelist