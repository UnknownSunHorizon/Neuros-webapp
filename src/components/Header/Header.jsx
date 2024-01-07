import { Link } from "react-router-dom"
import MenuItem from "antd/es/menu/MenuItem"
import { Menu } from "antd"
import header_logo from "./assets/header.png"

const Header = () => {
    return (
        <header>                      
            <Menu theme="dark" mode="horizontal" >
                <img src={header_logo} height="40" />
                <MenuItem><Link to="/">Главная</Link></MenuItem> 
                <MenuItem><Link to="/about">О сайте</Link></MenuItem>
                <MenuItem><Link to="/reviews">Отзывы пользователей</Link></MenuItem>
            </Menu>
        </header>
    )
}

/*
            <Link to="/about">о нас</Link>
            <Link to="/">главная</Link>
            */

export default Header