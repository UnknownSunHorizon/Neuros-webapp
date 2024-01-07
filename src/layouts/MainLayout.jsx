import { Link, Outlet } from "react-router-dom"
import Header from "../components/Header/Header"


const MainLayout = () => {
    return (
        <>
            <Header
                    style={{
                    display: 'flex',
                    alignItems: 'center',
                    }}
               />
            
            <Outlet />
        </>
    )
}

/*<Header /> */

export default MainLayout