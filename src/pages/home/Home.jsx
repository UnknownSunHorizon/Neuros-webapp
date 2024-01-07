import { Link } from "react-router-dom"
import styles from './styles/home.module.css';

import { useEffect, useState } from "react";
import { Spin } from "antd";

import header_logo from "./assets/header.png";
import top_logo from "./assets/top.png";

import {Button} from 'antd';

export const Home = () => {
    return (
      <div className={styles.index}>
        <div className={styles.view}>
          <div className={styles.div}>
            <img
              className={styles.image}
              alt="Image"
              src="https://cdn.animaapp.com/projects/659a96dbde0bbd56d7a8ad3d/releases/659a97a83eeab1d3632e9f59/img/----.svg"
            />
            <div className={styles.navbar}>
              <div className={styles.text_wrapper}>О Агрегаторе</div>
              <div className={styles.text_wrapper}>О подписках</div>
              <div className={styles.text_wrapper}>Зарегестрироваться</div>
              <div className={styles.text_wrapper}>Авторизоваться</div>
            </div>
          </div>
          <div className={styles.view_2}>
            <img
              className={styles.img}
              alt="Image"
              src="https://cdn.animaapp.com/projects/659a96dbde0bbd56d7a8ad3d/releases/659a97a83eeab1d3632e9f59/img/-----1.svg"
            />
            <div className={styles.lorem_ipsum_dolor_wrapper}>
              <p className={styles.lorem_ipsum_dolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                <br />
                <br />
                Amet justo donec enim diam vulputate ut pharetra sit amet. Amet commodo nulla facilisi nullam. Volutpat
                consequat mauris nunc congue nisi vitae suscipit tellus mauris. <br />
                <br />
                Ornare arcu odio ut sem nulla pharetra diam sit amet. Felis eget velit aliquet sagittis id consectetur
                purus ut.
              </p>
            </div>
            <div className={styles.div_wrapper}>
              <div className={styles.text_wrapper_2}>ЗАРЕГЕСТРИРОВАТЬСЯ</div>
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
                  src="https://cdn.animaapp.com/projects/659a96dbde0bbd56d7a8ad3d/releases/659a97a83eeab1d3632e9f59/img/image-10.png"
                />
              </div>
              <div className={styles.img_wrapper}>
                <img
                  className={styles.image_3}
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/659a96dbde0bbd56d7a8ad3d/releases/659a97a83eeab1d3632e9f59/img/image-2.png"
                />
              </div>
              <div className={styles.frame_4}>
                <img
                  className={styles.image_4}
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/659a96dbde0bbd56d7a8ad3d/releases/659a97a83eeab1d3632e9f59/img/image-1.png"
                />
              </div>
            </div>
            <div className={styles.frame_2}>
              <div className={styles.frame_5}>
                <img
                  className={styles.image_5}
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/659a96dbde0bbd56d7a8ad3d/releases/659a97a83eeab1d3632e9f59/img/image-9.png"
                />
              </div>
              <div className={styles.image_wrapper}>
                <img
                  className={styles.image_6}
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/659a96dbde0bbd56d7a8ad3d/releases/659a97a83eeab1d3632e9f59/img/image-4.png"
                />
              </div>
              <div className={styles.img_wrapper}>
                <img
                  className={styles.image_7}
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/659a96dbde0bbd56d7a8ad3d/releases/659a97a83eeab1d3632e9f59/img/image-7.png"
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
                  src="https://cdn.animaapp.com/projects/659a96dbde0bbd56d7a8ad3d/releases/659a97a83eeab1d3632e9f59/img/image-8.png"
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
                  src="https://cdn.animaapp.com/projects/659a96dbde0bbd56d7a8ad3d/releases/659a97a83eeab1d3632e9f59/img/image-5.png"
                />
              </div>
              <div className={styles.fram_4}>
                <img
                  className={styles.image_10}
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/659a96dbde0bbd56d7a8ad3d/releases/659a97a83eeab1d3632e9f59/img/image-6.png"
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
              <div className={styles.rectangle} />
              <div className={styles.text_wrapper_9}>
                -<br />-<br />-<br />-<br />-
              </div>
            </div>
            <div className={styles.frame_9}>
              <div className={styles.overlap}>
                <div className={styles.text_wrapper_7}>Приобрести</div>
              </div>
              <div className={styles.text_wrapper_10}>Продвинутый</div>
              <div className={styles.rectangle_2} />
              <div className={styles.text_wrapper_9}>
                -<br />-<br />-<br />-<br />-
              </div>
            </div>
            <div className={styles.frame_10}>
              <div className={styles.overlap}>
                <div className={styles.text_wrapper_7}>Приобрести</div>
              </div>
              <div className={styles.text_wrapper_11}>Профессиональный</div>
              <div className={styles.rectangle_3} />
              <div className={styles.text_wrapper_12}>
                -<br />-<br />-<br />-<br />-
              </div>
            </div>
          </div>
          <div className={styles.frame_11}>
            <div className={styles.text_wrapper_13}>Контакты</div>
          </div>
        </div>
      </div>
    );
  };

export default Home