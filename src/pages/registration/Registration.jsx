import styles from './styles/registration.module.css';
import React from 'react';
import {Link} from "react-router-dom";

import vk_logo from "./assets/vk_logo.png";
import google_logo from "./assets/google_logo.jpg";
import facebook_logo from "./assets/facebook_logo.svg";

export const Registration = () => {
    return (
        <div id={styles.registration_background}>
            <div id={styles.registration_container}>
                <div id={styles.registration_title}>Регистрация</div>
                <div id={styles.registration_inputblock}>
                    <div className={styles.registration_login}>
                        <span className={styles.registration_subtitle}>Почта</span>
                        <input className={styles.registration_input} type="text"></input>
                    </div>
                    <div className={styles.registration_login}>
                        <span className={styles.registration_subtitle}>Пароль</span>
                        <input className={styles.registration_input} type="text"></input>
                    </div>
                    <div className={styles.registration_login}>
                        <span className={styles.registration_subtitle}>Повторите пароль</span>
                        <input className={styles.registration_input} type="text"></input>
                    </div>
                </div>
                <button id={styles.registration_button}>Зарегистрироваться</button>
                <span id={styles.registration_toAuthorization}>Уже есть аккаунт? <a id={styles.registration_link}>Войти</a></span>
                <span id={styles.registration_with_help}>Или зарегистрируйтесь с помощью</span>
                <div id={styles.registration_icons}>
                    <div id={styles.registration_icon_1}><img id={styles.registration_vk} alt="vk_logo" src={vk_logo} /></div>
                    <img id={styles.registration_icon_2} alt="google_logo" src={google_logo} />
                    <img id={styles.registration_icon_3} alt="facebook_logo" src={facebook_logo} />
                </div>
            </div>                        
        </div>
    );
}

export default Registration