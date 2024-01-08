import React from "react";
import './styles/neurolist.css'

import line1 from './assets/line-1.svg'
import polygon1 from './assets/polygon-1.svg'
import polygon2 from './assets/polygon-1-1.svg'
import image from './assets/image.svg'

export const Neurolist = () => {
  return (
    <div className="screen">
      <div className="div">
        <img className="image" alt="Image" src={image} />
        <div className="navbar">
          <div className="text-wrapper">Нейросети</div>
          <div className="text-wrapper-2">Пайплайны</div>
          <div className="text-wrapper-2">Профиль</div>
          <div className="text-wrapper-2">Настройки</div>
        </div>
      </div>
      <div className="view">
        <div className="view-2">
          <div className="view-3">
            <div className="view-4">
              <img className="polygon" alt="Polygon" src={polygon1} />
              <div className="text-wrapper-3">Графические</div>
            </div>
            <hr className="line" />
          </div>
          <div className="frame">
            <div className="rectangle" />
            <div className="rectangle" />
            <div className="rectangle" />
            <div className="rectangle" />
            <div className="rectangle" />
            <div className="rectangle" />
            <div className="rectangle" />
          </div>
        </div>
        <div className="view-5">
          <div className="view-4">
            <img className="img" alt="Polygon" src={polygon2} />
            <div className="text-wrapper-4">Текстовые</div>
          </div>
          <hr className="line" />
        </div>
        <div className="view-5">
          <div className="view-4">
            <img className="img" alt="Polygon" src={polygon2}/>
            <div className="text-wrapper-4">Аудио</div>
          </div>
          <hr className="line" />
        </div>
        <div className="view-5">
          <div className="view-4">
            <img className="img" alt="Polygon" src={polygon2}/>
            <div className="text-wrapper-4">Анализ</div>
          </div>
          <hr className="line" />
        </div>
      </div>
    </div>
  );
};
