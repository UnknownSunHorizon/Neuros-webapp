import styles from './styles/pipelist.module.css';

import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Button, message, Space  } from 'antd';

import {Link} from "react-router-dom";

import image from './assets/image.svg'


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
    const error_beta = () => {
        messageApi.open({
        type: 'error',
        content: 'В данный момент эта функция находится в бета-тестировании!',
        });
    };
    const warning = () => {
        messageApi.open({
        type: 'warning',
        content: 'This is a warning message',
        });
    };

      return (
        <div className={styles.container}>
        <div className={styles.div}>
                <img className="image" alt="Image" src={image} />
                <div className={styles.navbar}>
                    <Link to="/neurolist"><div className={styles.textwrapper2} >Нейросети</div></Link>
                    <Link to="/pipelist"><div className={styles.textwrapper} >Пайплайны</div></Link>
                    <Link to="/profile"><div className={styles.textwrapper2} >Профиль</div></Link>
                    <div onClick={error_beta} className={styles.textwrapper2} >Настройки</div>
                </div>
         </div>
                
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
                {/*<div className={styles.pipelines_block_add}>
                    <Button onClick={error}>+</Button>
                </div>*/}
                <Button className={styles.pipelines_block_add_button} onClick={error}>
                    <div className={styles.button_vertical}></div>
                    <div className={styles.button_gorizontal}></div>
                </Button>
                            
            </div>
        </div>
      );
}

export default Pipelist