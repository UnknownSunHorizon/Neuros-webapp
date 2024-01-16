import React from "react";
import './styles/neurolist.css'

import line1 from './assets/line-1.svg'
import polygon1 from './assets/polygon-1.svg'
import polygon2 from './assets/polygon-1-1.svg'
import image from './assets/image.svg'

import { Breadcrumb, Layout, Menu, theme, Button, message, Space} from 'antd';
import { Link } from "react-router-dom";

import mjEnvir from './assets/mj-enviroment.png'
import mjChars from './assets/mj-chars.png'
import sdEnvir from './assets/sd-enviroment.png'
import sdChars from './assets/sd-chars.png'

export const Neurolist = () => {

  const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
        type: 'success',
        content: 'This is a success message',
        });
    };
    const error_neuro = () => {
        messageApi.open({
        type: 'error',
        content: 'В данный момент эта нейросеть находится в бета-тестировании!',
        });
    };

    const error_beta = () => {
      messageApi.open({
      type: 'error',
      content: 'В данный момент эта функция находится в бета-тестировании!',
      });
  };

    const error_category = () => {
      messageApi.open({
      type: 'error',
      content: 'Не удается загрузить нейросети. Ошибка со стороны сервера.',
      });
  };



  return (
    <div className="neurolist">
      {contextHolder}
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
            <Link to="/neuro"><img onClick={error_neuro} className="rectangle" src={mjChars} alt="Midjourney Персонажи"/></Link>
            <img onClick={error_neuro} className="rectangle" src={mjEnvir} alt="Midjourney Окружение"/>
            <img onClick={error_neuro} className="rectangle" src={sdChars} alt="Stable Diffusion Персонажи"/>
            <img onClick={error_neuro} className="rectangle" src={sdEnvir} alt="Stable Diffusion Окружение"/>
            
          </div>
        </div>
        <div className="view-5">
          <div onClick={error_category} className="view-4">
            <img className="img" alt="Polygon" src={polygon2} />
            <div className="text-wrapper-4">Текстовые</div>
          </div>
          <hr className="line" />
        </div>
        <div  onClick={error_category} className="view-5">
          <div className="view-4">
            <img className="img" alt="Polygon" src={polygon2}/>
            <div className="text-wrapper-4">Аудио</div>
          </div>
          <hr className="line" />
        </div>
        <div className="view-5">
          <div onClick={error_category} className="view-4">
            <img className="img" alt="Polygon" src={polygon2}/>
            <div className="text-wrapper-4">Анализ</div>
          </div>
          <hr className="line" />
        </div>
      </div>
    </div>
  );
};
