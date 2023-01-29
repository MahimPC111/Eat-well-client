import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../../contexts/AuthProvider/AuthProvider';
import img from '../../../assets/icons/header.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    const { user, logOutUser } = useContext(UserContext);

    const handleSignOut = () => {
        logOutUser()
            .then(() => { })
            .catch(e => console.error(e))
    }

    // route names
    const menuBar =
        <>
            <NavLink className={`font-semibold my-2 lg:my-0 mx-auto lg:mx-2 ${({ isActive }) => isActive ? 'active' : undefined}`} to='/'>Home</NavLink>

            <NavLink className='font-semibold my-2 lg:my-0 mx-auto lg:mx-2' to='/services'>Services</NavLink>

            <NavLink className='font-semibold my-2 lg:my-0 mx-auto lg:mx-2' to='/blogs'>Blogs</NavLink>
            {
                user?.uid ?
                    <>
                        <NavLink className='font-semibold my-2 lg:my-0 mx-auto lg:mx-2 whitespace-nowrap' to='/myReviews'>My reviews</NavLink>

                        <NavLink className='font-semibold my-2 lg:my-0 mx-auto lg:mx-2 whitespace-nowrap' to='/addService'>Add service</NavLink>

                        <button onClick={handleSignOut} className='mx-2 btn btn-outline btn-warning btn-sm'>Logout</button>
                    </>
                    :
                    <>
                        <NavLink className='font-semibold my-2 lg:my-0 mx-auto lg:mx-2' to='/login'>Login</NavLink>

                        <NavLink className='font-semibold my-2 lg:my-0 mx-auto lg:mx-2' to='/register'>Register</NavLink>
                    </>
            }
        </>
    return (
        <div className="navbar py-2 lg:px-10" style={{ backgroundColor: '#686de0' }}>
            <div className="navbar-start">
                <img className="w-12 lg:w-16 rounded-full border-2" src={img} alt="" />
                <Link to='/'><h2 href="/" className="font-bold normal-case pl-2 text-3xl lg:text-3xl">Eat Well</h2></Link>
            </div>
            <div className="hidden lg:flex ml-80">
                {menuBar}
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user?.photoURL ?
                                    <img className='rounded-circle w-10 h-40' title={user.displayName} src={user.photoURL} alt='' />
                                    :
                                    <FontAwesomeIcon className='pt-2 text-2xl' icon={faUser} />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="lg:hidden menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuBar}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;