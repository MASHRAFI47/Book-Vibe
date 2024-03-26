import { Outlet } from "react-router-dom"
import Header from "../Header/Header"

const Root = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Root