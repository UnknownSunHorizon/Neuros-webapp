import styles from './styles/authorization.module.css';
import React from 'react';
import {Link} from "react-router-dom";

import gmail_logo from "./assets/gmail_logo.jpg";
import yamail_logo from "./assets/ymail_logo.jpg";
import mail_logo from "./assets/mail_logo.jpg";

export const Authorization = () => {
    return (
        <div id={styles.authorization_background}>
            <div id={styles.authorization_container}>
                <div id={styles.authorization_title}>Авторизация</div>
                <form id={styles.authorization_form} action="/profile">
                    <div id={styles.authorization_inputblock}>
                        <div className={styles.authorization_login}>
                            <span className={styles.authorization_subtitle}>Почта</span>
                            <input className={styles.authorization_input} type="email" required/>
                        </div>
                        <div className={styles.authorization_login}>
                            <span className={styles.authorization_subtitle}>Пароль</span>
                            <input className={styles.authorization_input} 
                            type="password" 
                            minLength="8" maxLength="24" size="24" 
                            pattern="[a-Z0-9]+" required
                            title="Требования к паролю:
                             - содержит латинские буквы a-Z;
                             - содержит цифры 0-9;
                             - длина пароля 8-24 символов."/>
                            <p id={styles.authorization_memory}>Забыли пароль?</p>
                        </div>
                        
                    </div>
                    <input id={styles.authorization_button} type="submit" value="Войти" />
                </form>
                <span id={styles.authorization_toRegistration}>Нет аккаунта? <span />
                    <Link to="/register">
                        <a id={styles.authorization_link}>Зарегистрироваться</a>
                    </Link>
                </span>
                <span id={styles.authorization_with_help}>Или войдите с помощью</span>
                <div id={styles.authorization_icons}>
                    <a  href="https://mail.google.com/" target="_blank">
                        <img id={styles.authorization_icon_1} alt="gmail_logo" src={gmail_logo} />
                    </a>
                    <a href="https://account.mail.ru/" target="_blank">
                        <img id={styles.authorization_icon_2} alt="mail_logo" src={mail_logo} />
                    </a>
                    <a href="https://mail.yandex.ru/" target="_blank">
                        <img id={styles.authorization_icon_3} alt="yamail_logo" src={yamail_logo} />
                    </a>
                </div>
            </div>                        
        </div>
    );
}

export default Authorization