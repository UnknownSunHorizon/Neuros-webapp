import React from "react";
import './styles/profile.css';

import {Link} from "react-router-dom";

import { Breadcrumb, Layout, Menu, theme, Button, message, Space  } from 'antd';

import {Image} from "antd"

import img1 from "./assets/profile_picture.jpg"

import image from "./assets/image.svg"

export const Profile = () => {

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
      messageApi.open({
      type: 'success',
      content: 'This is a success message',
      });
  };
  const error_file = () => {
      messageApi.open({
      type: 'error',
      content: 'Не удается загрузить файл. Ошибка со стороны сервера.',
      });
  };
  const error_payment = () => {
    messageApi.open({
    type: 'error',
    content: 'Сервис оплаты не отвечает. Попробуйте позже.',
    });
  };
    const error_beta = () => {
      messageApi.open({
      type: 'error',
      content: 'В данный момент эта функция находится в бета-тестировании!',
      });
  };






  return (
    <div id="profile">
      {contextHolder}
      
      <div id="div">
        <img id="image" alt="Image" src={image} />
        <div id="view">
          <Link to="/neurolist"><div id="text-wrapper" className="header_link">Нейросети</div></Link>
          <Link to="/pipelist"><div id="text-wrapper-2" className="header_link">Пайплайны</div></Link>
          <Link to="/profile"><div id="text-wrapper-3" className="header_link">Профиль</div></Link>
          <div onClick={error_beta} id="text-wrapper-2" className="header_link">Настройки</div>
        </div>
      </div>


      <div id="view-2">
        <div id="element">
          <div id="div-2">
            <div id="div-3" />
            <div id="view-3">
              <div id="text-wrapper-4">Имя</div>
              <div id="text-wrapper-5">Фамилия</div>
              <div id="text-wrapper-6">Компания</div>
              <div id="text-wrapper-7">Должность</div>
              <div onClick={error_beta} id="text-wrapper-8" className="btn_info" >Редактировать...</div>
            </div>
            <div id="view-3-values">
              <div id="text-wrapper-4">Иван</div>
              <div id="text-wrapper-5">Иванов</div>
              <div id="text-wrapper-6">ОмГТУ</div>
              <div id="text-wrapper-7">Студент</div>
            </div>
          </div>
          <div id="view-4">
            <div id="text-wrapper-9">Текущий план</div>
            <div id="frame">
              <p id="p">
                <span id="span">
                  Стартовый
                  <br />
                </span>
                <span id="text-wrapper-10">
                  <br />
                </span>
                <span id="text-wrapper-11">
                  Продвинутый
                  <br />
                  <br />
                  Профессиональный
                </span>
              </p>
              <p id="element-2">
                <span id="text-wrapper-12">
                  Осталось времени: 3 месяца
                  <br />
                  <br />
                  Преимущества:
                  <br />
                  - все основные нейросети
                  <br />
                  - 3ГБ для хранения результатов
                  <br />
                  - все настройки всех нейросетей
                  <br />
                  - до 15 пайплайнов
                  <br />
                  - личный ИИ-ассистент
                  <br /> <br />
                </span>
                <div onClick={error_payment} id="text-wrapper-13" className="btn_purchase" >Повысить план</div>
              </p>
            </div>
          </div>
        </div>
        <div id="files-container">
          <div id="text-wrapper-14">Файлы</div>
          <div id="element-3">

          <div onClick={error_file} className="file">
              Без названия
            </div>
            <div onClick={error_file} className="file">
              Без названия
            </div>
            <div  onClick={error_file} className="file">
              Без названия
            </div>
            <div onClick={error_file} className="file">
              Без названия
            </div>
            <div onClick={error_file} className="file">
              Без названия
            </div>
          
          
            <div onClick={error_file} className="file">
              Без названия
            </div>
            <div onClick={error_file} className="file">
              Без названия
            </div>
            <div onClick={error_file} className="file">
              Без названия
            </div>
            <div onClick={error_file} className="file">
              Без названия
            </div>
            <div onClick={error_file} className="file">
              Без названия
            </div>
          
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
          
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
          
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
          
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
            <div  onClick={error_file}  className="file">
              Без названия
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
