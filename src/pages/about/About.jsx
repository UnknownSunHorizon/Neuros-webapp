import styles from './styles/about.module.css';

import React from 'react';

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';

import {Link} from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const About = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
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
                        <MenuItem>
                            <a href="#p1">Пункт 1</a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#p2">Пункт 2</a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#p3">Пункт 3</a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#p4">Пункт 4</a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#p5">Пункт 5</a>
                        </MenuItem>
                        
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
                        <Breadcrumb.Item>О сайте</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        background: colorBgContainer,
                        color: "#DBDBDB"
                        }}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur necessitatibus deserunt porro! A consectetur eius magnam facilis libero temporibus delectus, accusamus ipsum nemo ea impedit harum suscipit distinctio quisquam ipsam.
                        <a name="p1"></a><br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ullam libero earum minus. Accusamus aliquid voluptatibus praesentium veritatis doloribus beatae sint, dignissimos quae similique. Dolore quod necessitatibus inventore nulla nesciunt!
                        Officia nemo, aliquid corporis, laborum debitis expedita vitae dolore illum exercitationem qui cumque sapiente blanditiis, eaque ipsa aliquam molestiae id consectetur eius? Repellat fugiat ex voluptatem saepe est quisquam maiores.
                        In sequi quos commodi facere obcaecati natus a dolores? Accusantium placeat aliquid laboriosam cum perferendis, repudiandae odit illo corrupti a iste. Ad, esse? Quod dignissimos quidem libero fugiat qui eligendi!
                        Eum ratione quo neque sunt assumenda dolore cumque facere porro, minima quis id ipsam nemo labore blanditiis explicabo tempora voluptatem dicta vitae maxime, doloremque nobis odio necessitatibus quasi! Dolorum, corporis.
                        <a name="p2"></a><br /><br />Amet ratione dignissimos alias illum, ut qui repellendus unde eveniet explicabo harum placeat eaque repellat eligendi ipsa cupiditate voluptates reiciendis atque, consequatur laborum deleniti! Ad quia officiis sed recusandae neque?
                        Porro voluptate repellendus quas ad deleniti aliquid eligendi possimus cupiditate magni nobis iure, nemo odit explicabo recusandae! Voluptatibus explicabo facere ipsam veritatis eaque, minus nihil sed corporis. Nobis, blanditiis sapiente!
                        Sint accusamus quisquam officia ut quia eaque minus autem quasi, quas aperiam animi in ipsam a possimus illum voluptatem officiis similique et fugiat praesentium quo libero? Consequatur deserunt assumenda exercitationem.
                        <a name="p3"></a><br /><br />Odit consequuntur consectetur, tempora dolor fuga impedit nihil sed similique adipisci magnam, velit dolorem error perferendis voluptatibus aliquam maiores soluta earum eligendi vel nostrum officia est. Qui iure magni magnam.
                        Recusandae laborum quam quis mollitia voluptas minima eligendi laboriosam, at ut modi sunt nemo accusamus minus deserunt neque cum accusantium quasi. Debitis ab culpa fugit sunt, vero quo earum doloribus.
                        Ipsa corporis nesciunt molestias odit nihil dolores ipsam assumenda placeat fugit nostrum. Voluptatum illo, enim, doloremque distinctio cumque, facilis reiciendis inventore quam similique minima omnis! Repellendus architecto explicabo mollitia fugit.
                    
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim inventore rem, debitis, pariatur ut nisi tempore id repellat deserunt minima sit! Nemo enim delectus totam culpa magnam eligendi voluptates eius.
                        Non ipsam eaque dignissimos saepe aliquid doloribus, incidunt fugit nam voluptatibus vitae necessitatibus modi nostrum repellendus alias et porro soluta iure magni perferendis nemo aperiam odit inventore recusandae quod? Dolorum.
                        Doloribus, id corporis repellat ipsum odio fugiat. Nostrum dicta veniam soluta consequatur itaque? Sed labore possimus at quasi modi alias placeat tenetur temporibus exercitationem quod fuga, sapiente sequi. Sapiente, assumenda!
                        Eligendi in porro nemo dolor praesentium, fugit ad aliquid incidunt dignissimos expedita! Dignissimos, mollitia explicabo nulla, iste iure ipsam voluptatem quae ad aut neque odio blanditiis maxime vitae fuga praesentium.
                        Reiciendis error architecto qui dignissimos odit vero optio laborum quam mollitia ad est porro totam sint suscipit nulla fugit quo saepe, illum quod numquam molestias rerum? A aut aspernatur sequi.
                        Illo blanditiis corrupti sint, doloremque quibusdam facere dignissimos eos deserunt nam, a commodi provident repudiandae consequatur eius! Nesciunt dignissimos natus quo quibusdam id placeat, eos atque, quis, officiis ea itaque?
                        Autem obcaecati dolores, est culpa vitae accusamus nulla unde earum cupiditate alias mollitia sapiente officia sed voluptatem quaerat, aut soluta reiciendis qui libero repellendus quas? Consequuntur dolorum quis eum quae!
                        Vel ipsa natus alias officia ab illum libero corrupti, repellendus qui odit debitis excepturi iste temporibus voluptate quasi earum repellat possimus eaque quibusdam distinctio. Recusandae amet laborum et facere veniam?
                        <a name="p4"></a><br /><br />Molestias et eligendi temporibus hic unde veniam sequi aliquid alias tenetur ipsum architecto nulla minima facilis id iure esse at facere consequatur maxime, delectus similique harum sapiente vero. Quas, cumque!
                        Ex, sunt facere fugit eos veniam repellat itaque similique, eum dolor veritatis quidem suscipit ducimus corrupti reiciendis dolores corporis! Eaque nesciunt dolor, autem neque optio nostrum ad placeat illo ullam.
                        Molestiae odio itaque rerum error mollitia nisi, ut dolorum doloremque, soluta provident exercitationem reprehenderit sequi esse odit debitis? Consequuntur veniam numquam asperiores deleniti illo omnis! Esse facilis harum maiores necessitatibus.
                        Sit, consequuntur quis dolorum molestiae officiis non totam nihil molestias, voluptatibus assumenda hic quisquam ut, facilis est magnam ab recusandae. Consequatur exercitationem ab nisi numquam aspernatur veritatis et ullam error.
                        Obcaecati sit nesciunt sapiente, unde ipsam perspiciatis esse inventore molestias provident, at, quam exercitationem error adipisci dignissimos. Illum est dolor doloremque inventore blanditiis, distinctio amet eius, sunt quidem veritatis ab!
                        Inventore, similique. Magnam voluptatum illo provident explicabo accusamus atque omnis itaque possimus ex rerum fugit eius, voluptatibus officia nihil ut beatae corrupti. Vel impedit in, esse sequi accusamus repudiandae quibusdam!
                        Ipsum totam sapiente neque velit laudantium nam debitis hic ullam eos, deserunt, animi eius. Consequatur dolore asperiores in quisquam perspiciatis expedita nemo atque repellat ipsam quod, repudiandae, consequuntur cum explicabo?
                        <a name="p5"></a><br /><br />Similique veritatis debitis veniam, fugiat sequi eaque maxime ducimus et mollitia accusantium? Itaque odio molestias fugiat! Repellendus ipsa nesciunt eius earum error quod labore mollitia. Doloremque repudiandae consequatur quidem minus.
                        Ab ad molestias magni officia dolor esse, repudiandae cumque consectetur ullam nam odit quisquam porro eius incidunt voluptate amet soluta aperiam odio aut. Vero, vitae! Delectus sint aliquam quidem ratione?
                        Cum velit ratione, consequuntur quam nemo facilis, molestias facere ipsa temporibus minus deleniti. Molestias, unde ducimus vel sunt iure vitae itaque hic amet earum perferendis at voluptates corporis illo et!
                        Rem corrupti nulla quo, labore consequatur reiciendis autem exercitationem quaerat ipsum rerum nesciunt, nisi nam error quis suscipit! Totam rerum est, consectetur dolor at repudiandae repellat fugit corrupti! Perspiciatis, eius!
                        Nobis quod, iste enim sequi veniam debitis eius tenetur consectetur laboriosam iusto. Sapiente magnam veniam earum est. Repellat eius qui iusto quis. Doloremque cupiditate eaque optio! Dicta beatae nihil itaque!
                        Doloribus dolor esse a at sit molestiae exercitationem, quia repudiandae eveniet similique ipsa officiis labore sapiente expedita nesciunt. Maxime eum maiores voluptate dicta laboriosam minus esse ipsum ratione vitae dolores?
                        Iusto consectetur doloremque harum voluptate saepe. Illum adipisci labore ut soluta beatae corporis. Nam possimus, molestias fugiat facere suscipit nostrum corrupti quasi qui, labore assumenda ea, veritatis eveniet illum delectus.
                        A nostrum qui magni distinctio, placeat doloremque quos excepturi impedit illum magnam consectetur similique? Deserunt, obcaecati. Explicabo exercitationem vero ut et dolorem aut nesciunt minus, aliquam qui facere sequi. Ut.
                        Quasi, ex minima. Quos ducimus quae delectus vitae cumque dolore, fuga assumenda consequuntur eius ipsa obcaecati repudiandae modi illo eaque, tempore quisquam quas autem accusamus architecto commodi quasi omnis iure.
                        Optio odit ad rem error maxime inventore sit excepturi placeat veritatis laborum corporis modi illum commodi a, vitae quasi fugit quisquam corrupti et tenetur cupiditate provident minus non? Animi, dignissimos.
                    </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    )
}

export default About