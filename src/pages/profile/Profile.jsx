import React from "react";
import "./styles/style.css";

export const Profile = () => {
  return (
    <div className="screen">
      <div className="div">
        <img className="image" alt="Image" src="/img/image.svg" />
        <div className="view">
          <div className="text-wrapper">Нейросети</div>
          <div className="text-wrapper-2">Пайплайны</div>
          <div className="text-wrapper-3">Профиль</div>
          <div className="text-wrapper-2">Настройки</div>
        </div>
      </div>
      <div className="view-2">
        <div className="element">
          <div className="div-2">
            <div className="div-3" />
            <div className="view-3">
              <div className="text-wrapper-4">Имя</div>
              <div className="text-wrapper-5">Фамилия</div>
              <div className="text-wrapper-6">Компания</div>
              <div className="text-wrapper-7">Должность</div>
              <div className="text-wrapper-8">Редактировать...</div>
            </div>
          </div>
          <div className="view-4">
            <div className="text-wrapper-9">Текущий план</div>
            <div className="frame">
              <p className="p">
                <span className="span">
                  Стартовый
                  <br />
                </span>
                <span className="text-wrapper-10">
                  <br />
                </span>
                <span className="text-wrapper-11">
                  Продвинутый
                  <br />
                  <br />
                  Профессиональный
                </span>
              </p>
              <p className="element-2">
                <span className="text-wrapper-12">
                  Осталось времени: 3 месяца
                  <br />
                  <br />
                  Преимущества:
                  <br />-<br />-<br />-<br />
                  <br />
                  <br />
                  <br />
                </span>
                <span className="text-wrapper-13">Повысить план</span>
              </p>
            </div>
          </div>
        </div>
        <div className="element-3">
          <div className="text-wrapper-14">Файлы</div>
          <img className="img" alt="Frame" src="/img/frame-20.svg" />
          <img className="img" alt="Frame" src="/img/frame-21.svg" />
          <img className="img" alt="Frame" src="/img/frame-22.svg" />
          <img className="img" alt="Frame" src="/img/frame-23.svg" />
          <img className="img" alt="Frame" src="/img/frame-24-1.svg" />
          <img className="frame-2" alt="Frame" src="/img/frame-24.svg" />
        </div>
      </div>
    </div>
  );
};
