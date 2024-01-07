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
      <div className={styles.index}>
        <div className={styles.view}>
          <div className={styles.div}>
            <img
              className={styles.image}
              alt="Image"
              src={header_logo}
            />
            <div className={styles.navbar}>
              <div className={styles.text_wrapper}>Об Агрегаторе</div>
              <div className={styles.text_wrapper}>О подписках</div>
              <div className={styles.text_wrapper}>Зарегистрироваться</div>
              <div className={styles.text_wrapper}>Авторизоваться</div>
            </div>
          </div>
          <div className={styles.view_2}>
            <img
              className={styles.img}
              alt="Image"
              src={aggregator_logo}
            />
            <div className={styles.lorem_ipsum_dolor_wrapper}>
              <p className={styles.lorem_ipsum_dolor}>
                Встречайте NEUROS - интерактивный агрегатор нейросетей, созданный профессионалами для профессионалов 
                <br />
                <br />
                Используйте нейросети из исчерпывающего перечня не покидая сайт <br /> Формируйте пайплайны из нейросетей и автоматизируйте производство вашего контента<br />
                <br />
                Попробуйте бесплатный доступ и оцените все основные функции NEUROS даже не притрагиваясь к оплате!
              </p>
            </div>
            <div className={styles.div_wrapper}>
              <div className={styles.text_wrapper_2}>ЗАРЕГИСТРИРОВАТЬСЯ</div>
            </div>
          </div>
        </div>
        <div className={styles.view_3}>
          <div className={styles.text_wrapper_3}>O NEUROS</div>
          <div className={styles.frame}>
            <div className={styles.frame_2}>
              <div className={styles.frame_3}>
                <div className={styles.text_wrapper_4}>
                  Создавайте
                  <br />
                  изображения
                </div>
              </div>
              <div className={styles.image_wrapper}>
                <img
                  className={styles.image_2}
                  alt="Image"
                  src={img10}
                />
              </div>
              <div className={styles.img_wrapper}>
                <img
                  className={styles.image_3}
                  alt="Image"
                  src={img2}
                />
              </div>
              <div className={styles.frame_4}>
                <img
                  className={styles.image_4}
                  alt="Image"
                  src={img1}
                />
              </div>
            </div>
            <div className={styles.frame_2}>
              <div className={styles.frame_5}>
                <img
                  className={styles.image_5}
                  alt="Image"
                  src={img9}
                />
              </div>
              <div className={styles.image_wrapper}>
                <img
                  className={styles.image_6}
                  alt="Image"
                  src={img4}
                />
              </div>
              <div className={styles.img_wrapper}>
                <img
                  className={styles.image_7}
                  alt="Image"
                  src={img7}
                />
              </div>
              <div className={styles.frame_6}>
                <div className={styles.text_wrapper_5}>
                  Пишите
                  <br />
                  тексты
                </div>
              </div>
            </div>
            <div className={styles.frame_2}>
              <div className={styles.frame_5}>
                <img
                  className={styles.image_8}
                  alt="Image"
                  src={img8}
                />
              </div>
              <div className={styles.frame_7}>
                <div className={styles.text_wrapper_4}>
                  Генерируйте
                  <br />
                  аудио
                </div>
              </div>
              <div className={styles.img_wrapper}>
                <img
                  className={styles.image_9}
                  alt="Image"
                  src={img5}
                />
              </div>
              <div className={styles.frame_4}>
                <img
                  className={styles.image_10}
                  alt="Image"
                  src={img6}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.view_4}>
          <div className={styles.text_wrapper_6}>Тарифы</div>
          <div className={styles.frame_8}>
            <div className={styles.frame_9}>
              <div className={styles.overlap_group}>
                <div className={styles.text_wrapper_7}>Приобрести</div>
              </div>
              <div className={styles.text_wrapper_8}>Стартовый</div>
              <div className={styles.rectangle} >299 Р/месяц</div>
              <div className={styles.text_wrapper_9}>
                - все основные нейросети<br />- 3ГБ для хранения результатов<br />- все настройки всех нейросетей<br />- до 15 пайплайнов<br />- личный ИИ-ассистент
              </div>
            </div>
            <div className={styles.frame_9}>
              <div className={styles.overlap}>
                <div className={styles.text_wrapper_7}>Приобрести</div>
              </div>
              <div className={styles.text_wrapper_10}>Продвинутый</div>
              <div className={styles.rectangle_2} >699 Р/месяц</div>
              <div className={styles.text_wrapper_9}>
                - доступны все нейросети<br />- 10ГБ для результатов <br />- различные модели для RVC, Dall-E, GPT <br /> - до 50 пайплайнов<br />- преимущества прошлых планов
              </div>
            </div>
            <div className={styles.frame_10}>
              <div className={styles.overlap}>
                <div className={styles.text_wrapper_7}>Приобрести</div>
              </div>
              <div className={styles.text_wrapper_11}>Профессиональный</div>
              <div className={styles.rectangle_3} >1299 Р/месяц</div>
              <div className={styles.text_wrapper_12}>
              - приоритетный доступ<br />- 30ГБ для результатов<br />- уникальные пресеты<br />- нет ограничений на пайплайны<br />- преимущества прошлых планов
              </div>
            </div>
          </div>
          <div className={styles.frame_11}>
            <div className={styles.text_wrapper_13}>Контакты:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; info@neuros.ru &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; help@neuros.pls</div>
          </div>
        </div>
      </div>
    );
  };

export default Home