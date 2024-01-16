import { Link } from "react-router-dom";
import MenuItem from "antd/es/menu/MenuItem";
import { Breadcrumb, Layout, Menu, theme, Button, message, Space  } from 'antd';

import logo from './assets/logo.svg'

import styles from "./styles/header.module.css";



const Header = () => {
    
    const [messageApi, contextHolder] = message.useMessage();

    const error_beta = () => {
        messageApi.open({
        type: 'error',
        content: 'В данный момент эта функция находится в бета-тестировании!',
        });
    };

    return (
        <header>
            {contextHolder}                      
            <div className={styles.div}>
                <img className={styles.image_logo} alt="Image" src={logo} />
                <div className={styles.navbar}>
                    <Link to="/neurolist"><div className={styles.textwrapper2} >Нейросети</div></Link>
                    <Link to="/pipelist"><div className={styles.textwrapper2} >Пайплайны</div></Link>
                    <Link to="/profile"><div className={styles.textwrapper2} >Профиль</div></Link>
                    <div onClick={error_beta} className={styles.textwrapper2} >Настройки</div>
                </div>
            </div>
            <br></br>
        </header>
    )
}

/*
            <Link to="/about">о нас</Link>
            <Link to="/">главная</Link>
            */

export default Header