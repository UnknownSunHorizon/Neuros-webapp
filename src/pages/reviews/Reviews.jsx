
import React from 'react';

import styles from './styles/reviews.module.css';
import stylesGlobal from '../../App.css';

import { Breadcrumb, Layout, Menu, Rate, theme, Spin,  Card } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';

import ReviewsBlock from '../../components/ReviewsBlock/ReviewsBlock';

import { useEffect, useState } from "react";

import {Link} from "react-router-dom";

const { Header, Content, Sider } = Layout;

const {Meta} = Card;

const Reviews = () => {

    const CategoriesList=["Внешний вид","Функционал","Полезность информации","Пожелания",];

    const [x, setX] = useState([]);
    const [loading, setLoading] = useState(false);

    const {
        token: { colorBgContainer },
      } = theme.useToken();

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json()).then((data) => {

            setX(data);
            setLoading(false);

        })
    }, []);

    if (loading) {
        return <div className={styles.loaderScreen}><Spin tip="Идет загрузка. Пожалуйста, подождите...">
        <div className="content" /> 
      </Spin></div>
    }

    return (
        <>
            <Layout>
                
                <Layout>
                    <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                    >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                        height: '100%',
                        borderRight: 0,
                        }}
                    >
                        <MenuItem><h2>Оглавление</h2></MenuItem>

                        {CategoriesList.map((title,index) => (
                            <MenuItem>
                                <a href={"#c"+index}>{title}</a>
                            </MenuItem>
                        ))}
                        
                    </Menu>
                    </Sider>
                    <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                    >
                    <Breadcrumb
                        style={{
                        margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Главная</Breadcrumb.Item>
                        <Breadcrumb.Item>Отзывы</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        background: colorBgContainer,
                        }}
                    >

                        {CategoriesList.map((title,index) => (
                            <ReviewsBlock 
                                reviews={x.sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 12))} 
                                index={index} 
                                CategoryTitle={title}>
                            </ReviewsBlock>
                        ))}
                        

                    </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    )
}
export default Reviews