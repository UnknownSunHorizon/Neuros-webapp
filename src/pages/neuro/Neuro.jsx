import React from "react";
import './styles/neuro.css';

import { Breadcrumb, Layout, Menu, theme, Button, message, Space, Input } from 'antd';
import { Link } from "react-router-dom";

import { InputNumber, Slider, Col, Row } from 'antd';
import { useState } from 'react';



import image from './assets/image.svg'

const { TextArea } = Input;
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

    const error_generate = () => {
      messageApi.open({
      type: 'error',
      content: 'Попробуйте позже. Нейросеть не отвечает.',
      });
    };
  



  const DecimalStep = () => {
    const [inputValue, setInputValue] = useState(0);
    const onChange = (value) => {
      if (isNaN(value)) {
        return;
      }
      setInputValue(value);
    };
    
    return (
      <Row
      style={{
        width: '700px',
      }}>
        <Col span={12}>
          <Slider
            min={0}
            max={1}
            onChange={onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
            step={0.01}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={1}
            style={{
              margin: '0 16px',
            }}
            step={0.01}
            value={inputValue}
            onChange={onChange}
          />
        </Col>
      </Row>
    );
  };

  return (
    <div className="neuro">
      {contextHolder}
      <div className="view">
        <div className="view-2">
          <div className="text-wrapper-3">Нейросеть "Midjorney Персонажи"</div>
          <div className="rectangle">Здесь отобразится результат генерации</div>
          <div className="frame">
            <Link to="/neurolist"><div className="text-wrapper-4">Назад</div></Link>
            <div onClick={error_save} className="text-wrapper-5">Сохранить</div>
            <div onClick={error_beta} className="text-wrapper-6">Добавить в пайплайн</div>
          </div>
        </div>
        <div className="view-3">
          <div className="text-wrapper-3">Настройки</div>
          <div className="div-wrapper">
            <TextArea placeholder="Введите запрос..." className="text-wrapper-7" autoSize={{minRows:3, maxRows:8}} bordered={false}></TextArea>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-8">Расширенные настройки</div>
            <div className="slider-container">
            <div className="slider-text-wrapper">Качество</div>
              <DecimalStep/>
            </div>
            <div className="slider-container">
            <div className="slider-text-wrapper">Стилизация</div>
              <DecimalStep/>
            </div>
            <div className="slider-container">
            <div className="slider-text-wrapper">Температура</div>
              <DecimalStep/>
            </div>
          </div>

          <div onClick={error_generate} className="btn-generate">Сгенерировать</div>

        </div>
      </div>
    </div>
  );
};
