import styles from './styles/registration.module.css';
import React from 'react';
import {Link} from "react-router-dom";

import gmail_logo from "./assets/gmail_logo.jpg";
import ymail_logo from "./assets/ymail_logo.jpg";
import mail_logo from "./assets/mail_logo.jpg";

export const Registration = () => {
    return (
        <div id={styles.registration_background}>
            <div id={styles.registration_container}>
                <div id={styles.registration_title}>Регистрация</div>
                <form id={styles.registration_form} action="/profile">
                    <div id={styles.registration_inputblock}>
                        <div className={styles.registration_login}>
                            <span className={styles.registration_subtitle}>Почта</span>
                            <input className={styles.registration_input} type="email" required></input>
                        </div>
                        <div className={styles.registration_login}>
                            <span className={styles.registration_subtitle}>Пароль</span>
                            <input className={styles.registration_input} 
                            type="text" 
                            minLength="8" maxLength="24" size="24" 
                            pattern="[a-zA-Z0-9]+" required
                            title="Требования к паролю:
                             - содержит латинские буквы a-Z;
                             - содержит цифры 0-9;
                             - длина пароля 8-24 символов." />
                        </div>
                        <div className={styles.registration_login}>
                            <span className={styles.registration_subtitle}>Повторите пароль</span>
                            <input className={styles.registration_input}  
                            type="text" 
                            minLength="8" maxLength="24" size="24" 
                            pattern="[a-zA-Z0-9]+" required
                            title="Требования к паролю:
                             - содержит латинские буквы a-Z;
                             - содержит цифры 0-9;
                             - длина пароля 8-24 символов." />
                        </div>
                    </div>
                    <input id={styles.registration_button} type="submit" value="Зарегистрироваться" />
                </form>
                <span id={styles.registration_toAuthorization}>Уже есть аккаунт? <span />
                    <Link to="/authorize">
                        <a id={styles.registration_link}>Войти</a>
                    </Link>
                </span>
                <span id={styles.registration_with_help}>Или зарегистрируйтесь с помощью</span>
                <div id={styles.registration_icons}>
                    <a  href="https://mail.google.com/" target="_blank">
                        <img id={styles.registration_icon_1} alt="gmail_logo" src={gmail_logo} />
                    </a>
                    <a href="https://account.mail.ru/" target="_blank">
                        <img id={styles.registration_icon_2} alt="mail_logo" src={mail_logo} />
                    </a>
                    <a href="https://mail.yandex.ru/" target="_blank">
                        <img id={styles.registration_icon_3} alt="ymail_logo" src={ymail_logo} />
                    </a>
                </div>
            </div>                        
        </div>
    );
}

export default Registration