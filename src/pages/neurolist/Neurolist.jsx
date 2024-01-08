import React from "react";
import "./styles/style.css";

export const Neurolist = () => {
  return (
    <div id="screen">
      <div id="div">
        <img id="image" alt="Image" src="./assets/image.png" />
        <div id="navbar">
          <div id="text-wrapper">Нейросети</div>
          <div id="text-wrapper-2">Пайплайны</div>
          <div id="text-wrapper-2">Профиль</div>
          <div id="text-wrapper-2">Настройки</div>
        </div>
      </div>
      <div id="view">
        <div id="view-2">
          <div id="view-3">
            <div id="view-4">
              <img id="polygon" alt="Polygon" src="./assets\polygon-1-1.png" />
              <div id="text-wrapper-3">Графические</div>
            </div>
            <img id="line" alt="Line" src="./assets/line-1.png" />
          </div>
          <div id="frame">
            <div id="rectangle" />
            <div id="rectangle" />
            <div id="rectangle" />
            <div id="rectangle" />
            <div id="rectangle" />
            <div id="rectangle" />
            <div id="rectangle" />
          </div>
        </div>
        <div id="view-5">
          <div id="view-4">
            <img id="img" alt="Polygon" src="./assets/polygon-1-1.png" />
            <div id="text-wrapper-4">Текстовые</div>
          </div>
          <img id="line" alt="Line" src="./assets/line-1.svg" />
        </div>
        <div id="view-5">
          <div id="view-4">
            <img id="img" alt="Polygon" src="./assets/polygon-1-1.svg" />
            <div id="text-wrapper-4">Аудио</div>
          </div>
          <img id="line" alt="Line" src="./assets/line-1.svg" />
        </div>
        <div id="view-5">
          <div id="view-4">
            <img id="img" alt="Polygon" src="./assets/polygon-1-1.svg" />
            <div id="text-wrapper-4">Анализ</div>
          </div>
          <img id="line" alt="Line" src="./assets/line-1.svg" />
        </div>
      </div>
    </div>
  );
};
