import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/CRB-logo.png'
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const navigate = useNavigate();

    const handleLogOut = () => {
        signOut(auth);
        navigate('/login');
        localStorage.removeItem('accessToken');
    }
    const menuItems = <>
        <li><Link className='btn bg-transparent border-none hover:bg-accent text-lg' to='/'>Home</Link></li>

        {
            user && <li><Link className='btn bg-transparent border-none hover:bg-accent text-lg' to='/clubplayers'>Club Players</Link></li>
        }
        {
            admin && <li><Link className='btn bg-transparent border-none hover:bg-accent text-lg' to='/dashboard'>Dashboard</Link></li>
        }
        {
            user
                ?
                <li>
                    <p onClick={handleLogOut} className='btn bg-transparent hover:bg-accent border-none text-lg'>Log Out</p>
                </li>
                :
                <li>
                    <Link className='btn bg-transparent border-none hover:bg-accent text-lg' to='/login'>Login</Link>
                </li>
        }

    </>
    return (
        <div className='sticky top-0 z-10'>
            <div className="navbar bg-base-100 text-xl px-0 md:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost uppercase text-xl md:text-3xl banner-font tracking-wider md:tracking-widest" to="/"> <img className='w-12' src={logo} alt="" />&nbsp; <span className='text-accent'>Cumilla</span>&nbsp;Raging Bulls</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 flex items-center">
                        {menuItems}
                    </ul>
                </div>
                {/* <div className='navbar-end lg:hidden'>
                    <label htmlFor="dashboard-sidebar" className="btn btn-sm lg:hidden">DashMenu</label>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;