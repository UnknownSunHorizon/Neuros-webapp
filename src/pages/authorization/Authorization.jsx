import styles from './styles/authorization.module.css';
import React from 'react';
import {Link} from "react-router-dom";

export const Authorization = () => {
    return (
        <div id={styles.authorization_background}>
            <div id={styles.authorization_container}>
                <div id={styles.authorization_title}>Регистрация</div>
                <div id={styles.authorization_login}>Почта
                </div>
            </div>                        
        </div>
    );
}

export default Authorization