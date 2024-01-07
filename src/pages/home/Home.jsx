import { Link } from "react-router-dom"
import styles from './styles/home.module.css';

import { useEffect, useState } from "react";
import { Spin } from "antd";

import header_logo from "./assets/header.png";
import top_logo from "./assets/top.png";


import {Button} from 'antd';

const Home = () => {
    const [x, setX] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => {
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
            <div className={styles.body}>
            
            <font color="#ffffff">
            <div id={styles.back}>
                <h1 align="center"> Об игре </h1>
                <hr color="#5ad7aa" width="75%" size="2"/><br/>
                
                <div><p className={styles.text}>Darksiders II -- компьютерная игра в жанрах слешер, RPG и приключение, разработанная компанией <a href="https://dic.academic.ru/dic.nsf/ruwiki/1714414" target="_blank">Vigil Games</a> и изданная компанией <a href="https://www.thqnordic.com/" target="_blank">THQ</a>. Игра является прямым продолжением игры <a href="https://darksiders.fandom.com/ru/wiki/Darksiders" target="_blank">Darksiders</a>. В Darksiders II игроку даётся возможность сыграть за другого всадника Апокалипсиса — <a href="https://darksiders.fandom.com/ru/wiki/Смерть" target="_blank">Смерть</a>, который решил искупить грехи своего брата <a href="https://darksiders.fandom.com/ru/wiki/Война" target="_blank">Войны</a>.</p><br/></div>
                <table id={styles.about} border="2">
                    <tr><td>Разработчик</td> <td>Darksiders II: Death Lives: <a href="https://dic.academic.ru/dic.nsf/ruwiki/1714414" target="_blank">Vigil Games</a> <br/> Darksiders II: Deathinitive Edition: <a href="https://gunfiregames.com/" target="_blank">Gunfire Games</a></td></tr>
                    <tr><td>Издатель</td> <td>Darksiders II: Death Lives: <a href="https://www.thqnordic.com/" target="_blank">THQ Nordic Games</a> <br/> Darksiders II: Deathinitive Edition: <a href="https://www.thqnordic.com/" target="_blank">THQ Nordic Games</a></td></tr>
                    <tr><td>Язык</td> <td>Английский, русский</td></tr>
                    <tr><td>Озвучка</td> <td>Английская, русская</td></tr>
                    <tr><td>Локализатор</td> <td><a href="https://buka.ru/" target="_blank">Бука</a></td></tr>
                    <tr><td>Композитор</td> <td><a href="https://www.jesperkyd.com/" target="_blank">Jesper Kyd</a></td></tr>
                </table>
                <br/>
                <h2> Содержание </h2>
                <hr className={styles.line} color="#5ad7aa" align="left"/>
                <ol>
                <li><a href="#1"> Игровой процесс </a></li>
                <li><a href="#2"> Сюжет </a></li>
                <li><a href="#3"> Дополнительный контент </a></li>
                <li><a href="#4"> Трейлер игры </a></li>
                </ol>
                <a name="1"><br/></a>
                <h2> Игровой процесс </h2>
                <hr className={styles.line} color="#5ad7aa" align="left"/>
                <p className={styles.text}>Всадник Апокалипсиса <a href="https://darksiders.fandom.com/ru/wiki/Смерть" target="_blank">Смерть</a> путешествует по открытому миру. По мере прохождения посещает 6 игровых миров, имеющих свою атмосферу и населенных соответствующими им противниками.</p><br/>
                <p className={styles.text}>Основным оружием в игре является пара кос, которые при выполнении комбо и при переходе в форму <a href="https://darksiders.fandom.com/ru/wiki/Облик_Жнеца?so=search" target="_blank">Жнеца</a> объеденяются в одну большую и мощную косу.</p><br/>
                <p className={styles.text}>В отличие от первой части <a href="https://darksiders.fandom.com/ru/wiki/Darksiders" target="_blank">Darksiders</a>, здесь присутствует система экипировки: персонаж может надевать и менять различное снаряжение для улучшения своих характеристик. Валютой в этой части игры является золото (золотые монеты), которые можно получить выполняя задания, побеждая врагов и ломая предметы окружения. Используя золото, <a href="https://darksiders.fandom.com/ru/wiki/Смерть" target="_blank">Смерть</a> может торговать с неигровыми персонажами, покупая экипировку, зелья и боевые приемы.</p><br/>
                <p className={styles.text}>Также персонаж получает опыт за убийство врагов и выполнение квестов. При повышении уровня, Всадник получает <a href="https://darksiders.fandom.com/ru/wiki/Очко_умений?so=search" target="_blank">Очко умений</a>, которое может потратить на приобретение новых способностей в древе умений. Помимо шкалы опыта имеется особенная шкала, при заполнении которой <a href="https://darksiders.fandom.com/ru/wiki/Смерть" target="_blank">Смерть</a> на некоторое время может принимать <a href="https://darksiders.fandom.com/ru/wiki/Облик_Жнеца?so=search" target="_blank">Облик Жнеца,</a> увеличивающий силу атаки Всадника и уменьшающий получаемый от врагов урон.</p><br/>
                <p className={styles.text}>Преодолевать большие расстояния можно верхом на преданном <a href="https://darksiders.fandom.com/ru/wiki/Смерть" target="_blank">Смерти</a> коне <a href="https://darksiders.fandom.com/ru/wiki/Отчаяние?so=search" target="_blank">Отчаянии</a>, а правильную дорогу будет указывать верный ворон <a href="https://darksiders.fandom.com/ru/wiki/Прах?so=search" target="_blank">Прах</a>.</p>
                
                <a name="2"><br/></a>
                <h2> Сюжет </h2>
                <hr className={styles.line} color="#5ad7aa" align="left"/>
                <div id={styles.prolog}><h3> Пролог </h3>
                <p className={styles.text}><i> "Не может быть никакой жизни без Порядка. Добро, зло, тьма, свет - во вселенной все должно находится в равновесии.<br/><br/>
                Таков закон Обугленного совета, поставленного Создателем для сохранения самой ткани мироздания.<br/><br/>
                Но равновесие было нарушено.<br/><br/>
                Даже сейчас Земля догорает в руинах, перейдя во власть демонических лордов, а Разрушитель со своими Приближенными строит новое царство.<br/><br/>
                Говорят, Апокалипсис начался из-за того, что Всадник Война ... что он без разрешения отправился на Землю, чем и обрек человечество.<br/><br/>
                Но что же другие Всадники, бесстрашные орудия Совета? Где Ярость, Раздор ... и Смерть? Чтобы понять их имена, нужно сначала узнать другое.<br/><br/>
                Нефилимы - проклятое порождение ангелов и демонов.<br/><br/>
                Нефилимы предали мечу бесчисленные миры, спалили их дотла. Но четверо из них устали от резни и убоялись, что их наступление будет угрожать Равновесию.<br/><br/>
                Так был заключон мир: Четверо стали служить Совету в обмен на невообразимую силу.<br/><br/>
                Так появились ужасные Всадники. Первым же их заданием стало убить своих братьев. Истребить нефилимов ... И уничтожить их души.<br/><br/>
                Теперь взглянем на одного из Четверых. Не на Войну, который лежит в цепях перед Советом, взывая о своей невиновности, а на того, кто отправится спасать своего брата любой ценой.<br/><br/>
                Его называют по-разному: Всегубитель, Палач...<br/><br/>
                Мы же будем звать его Смерть."</i></p></div><br/>
                <p className={styles.text}>Действие в Darksiders II разворачивается после уничтожения <a href="https://darksiders.fandom.com/ru/wiki/Земля" target="_blank">Третьего царства</a> (Земли), но до того, как была сломана последняя седьмая печать. Всадник <a href="https://darksiders.fandom.com/ru/wiki/Война" target="_blank">Война</a> был обвенен в том, что он без разрешения отправился на Землю, и ожидал суда <a href="https://darksiders.fandom.com/ru/wiki/Обугленный_совет?so=search" target="_blank">Обугленного Совета</a>. Узнав об этом, <a href="https://darksiders.fandom.com/ru/wiki/Смерть" target="_blank">Смерть</a> отправляется спасать своего брата. Он решает исправить ошибки <a href="https://darksiders.fandom.com/ru/wiki/Война" target="_blank">Войны</a> и возродить человечество. В поисках ответов Всадник отправляется к самому мудрейшему -- к <a href="https://darksiders.fandom.com/ru/wiki/Старейший_Ворон?so=search" target="_blank">Старейшему Ворону</a>, Хранителю тайн. Перебравшись через <a href="https://darksiders.fandom.com/ru/wiki/Завеса" target="_blank">Ледяную Завесу</a>, <a href="https://darksiders.fandom.com/ru/wiki/Смерть" target="_blank">Смерть</a> устремляется в <a href="https://darksiders.fandom.com/ru/wiki/Темная_крепость?so=search" target="_blank">Темную крепость</a>, где ему придется сразится со своим братом -- с <a href="https://darksiders.fandom.com/ru/wiki/Война" target="_blank">Войной</a>.</p>
                
                <a name="3"><br/></a>
                <h2> Дополненительный контент </h2>
                <hr className={styles.line} color="#5ad7aa" align="left"/>
                <p className={styles.text}>Многие DLC изначально были частью различных версий игры.</p><br/>
                <p className={styles.text}><span className={styles.dlc}>Argul's Tomb (Гробница Аргула)</span> -- первое дополнение к игре. Сюда входят: около часа дополнительной игры, 2 босса, 3 подземелья, 1 легендарное оружие, 1 сет брони (броня выдаётся только вместе с Season Pass).</p><br/>
                <p className={styles.text}><span className={styles.dlc}>Shadow of Death (Тень смерти)</span> -- часть коллекционного издания игры. Включает 1 сет брони и 1 легендарное оружие.</p><br/>
                <p className={styles.text}><span className={styles.dlc}>Rusanov's Axe (Секира Рузанова)</span> -- легендарное оружие. Часть коллекционного издания игры.</p><br/>
                <p className={styles.text}><span className={styles.dlc}>The Abyssal Forge (Кузница Бездны)</span> -- дополнение, покупается по отдельной цене. Особенности: около часа дополнительной игры; 2 босса, 2 локации, 2 легендарных оружия, 1 сет брони (броня выдаётся только вместе с Season Pass).</p><br/>
                <p className={styles.text}><span className={styles.dlc}>The Demon Lord Belial (Демон Велиал)</span> -- дополнение, покупается по отдельной цене. Особенности: около часа дополнительной игры, 2 босса, 1 подземелье, 4 легендарных оружия, 1 сет брони (броня выдаётся только вместе с Season Pass).</p><br/>
                <p className={styles.text}><span className={styles.dlc}>Maker Armor Set (Броня творца)</span> -- сет брони. Бонус при покупки Season Pass.</p><br/>
                <p className={styles.text}><span className={styles.dlc}>Death Rides (Поездка смерти)</span> -- дополнение, доступное тем, кто сделал предзаказ игры через GameStop. Состоит только из новых заданий: Потери и находки (Lost and Found), Хроники творцов (The Maker’s Chronicle), Обескровленные (Bloodless). Продолжительность около 2-х часов игрового времени.</p><br/>
                <p className={styles.text}><span className={styles.dlc}>Angel of Death (Ангел смерти)</span> -- контент, доступный только тем, кто сделал предзаказ игры через Best Buy. Включает 1 сет брони и 1 легендарное оружие. Также, у Праха изменяется анимация полёта.</p><br/>
                <p className={styles.text}><span className={styles.dlc}>Deadly Despair (Смертельное отчаяние)</span> -- дополнение, которое получали покупатели при предзаказе через Amazon. Теперь у Отчаяния есть 6 ускорений вместо 5.</p><br/>
                <p className={styles.text}><span className={styles.dlc}>Mortis (Мортис)</span> -- легендарное оружие. DLC было доступно за предзаказ книги Abomination Vault.</p><br/>
                <p className={styles.text}><span className={styles.dlc}>Van Der Schmash Hammer (Ван Дер Шмяк)</span> — легендарное оружие. Можно было получить по запросу через официальный сайт игры.</p><br/>
                <p className={styles.text}><span className={styles.dlc}>Fletcher's Crow Hammer (Молот Флетчера)</span> -- легендарное оружие. Это бонус за предзаказ книги Darksiders II: Prima Games Strategy Guide.</p><br/>
                <p className={styles.text}><span className={styles.dlc}>Mace Maximus (Большая булава)</span> -- легендарное оружие. Приобретается за отдельную цену.</p><br/>
                <p className={styles.text}>Darksiders II: Deathinitive Edition содержит в себе весь дополнительный контент.</p>
                
                <a name="4"><br/></a>
                <h2> Трейлер игры </h2>
                <hr className={styles.line} color="#5ad7aa" align="left"/>
                <div align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/SirKSIZqGk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </div>
            <div id={styles.tail}>
                
            </div>
            </font>
            <a href="#top"><img id={styles.up} src={top_logo} height="50" /></a>
            </div>
        </>
    )
}

export default Home