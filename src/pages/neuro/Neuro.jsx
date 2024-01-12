import React from "react";
import './styles/neuro.css';

import { Breadcrumb, Layout, Menu, theme, Button, message, Space  } from 'antd';
import { Link } from "react-router-dom";

export const Neuro = () => {

  const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
        type: 'success',
        content: 'This is a success message',
        });
    };
    const error_save = () => {
        messageApi.open({
        type: 'error',
        content: 'Не удается сохранить результат. Ошибка со стороны сервера.',
        });
    };
    const error_beta= () => {
      messageApi.open({
      type: 'error',
      content: 'В данный момент эта функция находится в бета-тестировании!',
      });

      
  };



  return (
    <div className="neuro">
      {contextHolder}
      <div className="div">
        <img className="image" alt="Image" src="/img/image.svg" />
        <div className="navbar">
        <Link to="/neurolist"><div className="text-wrapper" >Нейросети</div></Link>
          <Link to="/pipelist"><div className="text-wrapper-2" >Пайплайны</div></Link>
          <Link to="/profile"><div className="text-wrapper-2" >Профиль</div></Link>
          <div onClick={error_beta} className="text-wrapper-2" >Настройки</div>
        </div>
      </div>
      <div className="view">
        <div className="view-2">
          <div className="text-wrapper-3">Нейросеть “Название”</div>
          <div className="rectangle" />
          <div className="frame">
            <Link to="/neurolist"><div className="text-wrapper-4">Назад</div></Link>
            <div onClick={error_save} className="text-wrapper-5">Сохранить</div>
            <div onClick={error_beta} className="text-wrapper-6">Добавить в пайплайн</div>
          </div>
        </div>
        <div className="view-3">
          <div className="text-wrapper-3">Настройки</div>
          <div className="div-wrapper">
            <div className="text-wrapper-7">Введите запрос...</div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-8">Расширенные настройки</div>
          </div>
        </div>
      </div>
    </div>
  );
};
