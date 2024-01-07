import styles from './styles/pipelist.module.css';

import React from 'react';

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';

import {Link} from "react-router-dom";

const { Header, Content, Sider } = Layout;


const Pipelist = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      return (
        <div className={styles.pipelines_container}>
            <div className={styles.pipelines_block}>
                <p>Пайплайн</p>
            </div>
            <div className={styles.pipelines_block}>
                <p>Пайплайн</p>
            </div>
            <div className={styles.pipelines_block}>
                <p>Пайплайн</p>
            </div>
            <div className={styles.pipelines_block}>
                <p>Пайплайн</p>
            </div>
            <div className={styles.pipelines_block}>
                <p>Пайплайн</p>
            </div>            
        </div>
      );
}

export default Pipelist