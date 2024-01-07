import { Link } from "react-router-dom"
import styles from './styles/home.module.css';

import { useEffect, useState } from "react";
import { Spin } from "antd";

import header_logo from "./assets/logo.svg";
import aggregator_logo from "./assets/logo1.svg";

import img10 from "./assets/image-10.png";
import img2 from "./assets/image-2.png";
import img1 from "./assets/image-1.png";
import img9 from "./assets/image-9.png";
import img4 from "./assets/image-4.png";
import img7 from "./assets/image-7.png";
import img8 from "./assets/image-8.png";
import img5 from "./assets/image-5.png";
import img6 from "./assets/image-6.png";

import {Button} from 'antd';

export const Home = () => {
    return (
      <div id={styles.index}>
        <div id={styles.view}>
          <div id={styles.div}>
            <img
              id={styles.image}
              alt="Image"
              src={header_logo}
            />
            <div id={styles.navbar}>
              <div id={styles.text_wrapper} className={styles.header_link}>Об Агрегаторе</div>
              <div id={styles.text_wrapper} className={styles.header_link}>О подписках</div>
              <div id={styles.text_wrapper} className={styles.header_link}>Зарегистрироваться</div>
              <div id={styles.text_wrapper} className={styles.header_link}>Авторизоваться</div>
            </div>
          </div>
          <div id={styles.view_2}>
            <img
              id={styles.img}
              alt="Image"
              src={aggregator_logo}
            />
            <div id={styles.lorem_ipsum_dolor_wrapper}>
              <p id={styles.lorem_ipsum_dolor}>
                Встречайте NEUROS - интерактивный агрегатор нейросетей, созданный профессионалами для профессионалов 
                <br />
                <br />
                Используйте нейросети из исчерпывающего перечня не покидая сайт <br /> Формируйте пайплайны из нейросетей и автоматизируйте производство вашего контента<br />
                <br />
                Попробуйте бесплатный доступ и оцените все основные функции NEUROS даже не притрагиваясь к оплате!
              </p>
            </div>
            <div id={styles.div_wrapper} className={styles.btn_register}>
              <div id={styles.text_wrapper_2}>ЗАРЕГИСТРИРОВАТЬСЯ</div>
            </div>
          </div>
        </div>
        <div id={styles.view_3}>
          <div id={styles.text_wrapper_3}>O NEUROS</div>
          <div id={styles.frame}>
            <div id={styles.frame_2}>
              <div id={styles.frame_3}>
                <div id={styles.text_wrapper_4}>
                  Создавайте
                  <br />
                  изображения
                </div>
              </div>
              <div id={styles.image_wrapper}>
                <img
                  id={styles.image_2}
                  alt="Image"
                  src={img10}
                />
              </div>
              <div id={styles.img_wrapper}>
                <img
                  id={styles.image_3}
                  alt="Image"
                  src={img2}
                />
              </div>
              <div id={styles.frame_4}>
                <img
                  id={styles.image_4}
                  alt="Image"
                  src={img1}
                />
              </div>
            </div>
            <div id={styles.frame_2}>
              <div id={styles.frame_5}>
                <img
                  id={styles.image_5}
                  alt="Image"
                  src={img9}
                />
              </div>
              <div id={styles.image_wrapper}>
                <img
                  id={styles.image_6}
                  alt="Image"
                  src={img4}
                />
              </div>
              <div id={styles.img_wrapper}>
                <img
                  id={styles.image_7}
                  alt="Image"
                  src={img7}
                />
              </div>
              <div id={styles.frame_6}>
                <div id={styles.text_wrapper_5}>
                  Пишите
                  <br />
                  тексты
                </div>
              </div>
            </div>
            <div id={styles.frame_2}>
              <div id={styles.frame_5}>
                <img
                  id={styles.image_8}
                  alt="Image"
                  src={img8}
                />
              </div>
              <div id={styles.frame_7}>
                <div id={styles.text_wrapper_4}>
                  Генерируйте
                  <br />
                  аудио
                </div>
              </div>
              <div id={styles.img_wrapper}>
                <img
                  id={styles.image_9}
                  alt="Image"
                  src={img5}
                />
              </div>
              <div id={styles.frame_4}>
                <img
                  id={styles.image_10}
                  alt="Image"
                  src={img6}
                />
              </div>
            </div>
          </div>
        </div>
        <div id={styles.view_4}>
          <div id={styles.text_wrapper_6}>Тарифы</div>
          <div id={styles.frame_8}>
            <div id={styles.frame_9}>
              <div id={styles.overlap_group} className={styles.btn_purchase}>
                <div id={styles.text_wrapper_7}>Приобрести</div>
              </div>
              <div id={styles.text_wrapper_8}>Стартовый</div>
              <div id={styles.rectangle} >299 Р/месяц</div>
              <div id={styles.text_wrapper_9}>
                - все основные нейросети<br />- 3ГБ для хранения результатов<br />- все настройки всех нейросетей<br />- до 15 пайплайнов<br />- личный ИИ-ассистент
              </div>
            </div>
            <div id={styles.frame_9}>
              <div id={styles.overlap} className={styles.btn_purchase}>
                <div id={styles.text_wrapper_7}>Приобрести</div>
              </div>
              <div id={styles.text_wrapper_10}>Продвинутый</div>
              <div id={styles.rectangle_2} >699 Р/месяц</div>
              <div id={styles.text_wrapper_9}>
                - доступны все нейросети<br />- 10ГБ для результатов <br />- различные модели для RVC, Dall-E, GPT <br /> - до 50 пайплайнов<br />- преимущества прошлых планов
              </div>
            </div>
            <div id={styles.frame_10}>
              <div id={styles.overlap} className={styles.btn_purchase}>
                <div id={styles.text_wrapper_7}>Приобрести</div>
              </div>
              <div id={styles.text_wrapper_11}>Профессиональный</div>
              <div id={styles.rectangle_3} >1299 Р/месяц</div>
              <div id={styles.text_wrapper_12}>
              - приоритетный доступ<br />- 30ГБ для результатов<br />- уникальные пресеты<br />- нет ограничений на пайплайны<br />- преимущества прошлых планов
              </div>
            </div>
          </div>
          <div id={styles.frame_11}>
            <div id={styles.text_wrapper_13}>Контакты:  
             <div className={styles.footer_mail}>info@neuros.ru </div>
             <div className={styles.footer_mail}>help@neuros.pls </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Home