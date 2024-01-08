import React from "react";
import './styles/neuro.css';

export const Neuro = () => {
  return (
    <div className="neuro">
      <div className="div">
        <img className="image" alt="Image" src="/img/image.svg" />
        <div className="navbar">
          <div className="text-wrapper">Нейросети</div>
          <div className="text-wrapper-2">Пайплайны</div>
          <div className="text-wrapper-2">Профиль</div>
          <div className="text-wrapper-2">Настройки</div>
        </div>
      </div>
      <div className="view">
        <div className="view-2">
          <div className="text-wrapper-3">Нейросеть “Название”</div>
          <div className="rectangle" />
          <div className="frame">
            <div className="text-wrapper-4">Назад</div>
            <div className="text-wrapper-5">Сохранить</div>
            <div className="text-wrapper-6">Добавить в пайплайн</div>
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
