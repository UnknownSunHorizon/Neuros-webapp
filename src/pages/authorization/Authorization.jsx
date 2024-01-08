import styles from './styles/authorization.module.css';
import React from 'react';
import {Link} from "react-router-dom";

export const Authorization = () => {
    return (
        <div id={styles.authorization_background}>
            <div id={styles.authorization_container}>
                <div id={styles.authorization_title}>Авторизация</div>
                <div id={styles.authorization_inputblock}>
                    <div className={styles.authorization_login}>
                        <span className={styles.authorization_subtitle}>Почта</span>
                        <input className={styles.authorization_input} type="text"></input>
                    </div>
                    <div className={styles.authorization_login}>
                        <span className={styles.authorization_subtitle}>Пароль</span>
                        <input className={styles.authorization_input} type="text"></input>
                    </div>
                    <div className={styles.authorization_login}>
                        <span className={styles.authorization_subtitle}>Повторите пароль</span>
                        <input className={styles.authorization_input} type="text"></input>
                    </div>
                </div>
                
            </div>                        
        </div>
    );
}

export default Authorization