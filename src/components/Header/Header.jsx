import { Link } from "react-router-dom"
import MenuItem from "antd/es/menu/MenuItem"
import { Menu } from "antd"
import header_logo from "./assets/logo.svg"

const Header = () => {
    return (
        <header>                      
            <Menu theme="dark" mode="horizontal" >
                <img src={header_logo} height="40" />
                <MenuItem><Link to="/">Нейросети</Link></MenuItem> 
                <MenuItem><Link to="/pipelist">Пайплайны</Link></MenuItem>
                <MenuItem><Link to="/reviews">Профиль</Link></MenuItem>
                <MenuItem><Link to="/reviews">Настройки</Link></MenuItem>
                
            </Menu>
        </header>
    )
}

/*
            <Link to="/about">о нас</Link>
            <Link to="/">главная</Link>
            */

export default Header