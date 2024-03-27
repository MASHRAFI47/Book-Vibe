import { Link, NavLink } from "react-router-dom"

const Header = () => {
    const links = <>
        <li className="lg:mr-3"><NavLink to={'/'} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#23BE0A] border-solid border-[#23BE0A] border-2" : ""
        }>Home</NavLink></li>
        <li className="lg:mr-3"><NavLink to={'/listed-books'} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#23BE0A] border-solid border-[#23BE0A] border-2" : ""
        }>Listed Books</NavLink></li>
        <li className="lg:mr-3"><NavLink to={'/pages-to-read'} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#23BE0A] border-solid border-[#23BE0A] border-2" : ""
        }>Pages to Read</NavLink></li>
    </>
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="text-2xl font-extrabold">Book Vibe</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn mr-4 btn-success text-white">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

export default Header