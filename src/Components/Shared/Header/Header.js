import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/AuthProvider/AuthProvider';
import img from '../../../assets/icons/header.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const { user, logOutUser } = useContext(UserContext);

    // route names
    const menuBar =
        <>
            <Link className='font-semibold my-2 lg:my-0 mx-2' to='/'>Home</Link>
            <Link className='font-semibold my-2 lg:my-0 mx-2' to='/services'>Services</Link>
            <Link className='font-semibold my-2 lg:my-0 mx-2' to='/blogs'>Blogs</Link>
            {
                user?.uid ?
                    <>
                        <Link className='font-semibold my-2 lg:my-0 mx-2 whitespace-nowrap' to='/myReview'>My review</Link>
                        <Link className='font-semibold my-2 lg:my-0 mx-2 whitespace-nowrap' to='/addService'>Add service</Link>
                        <button onClick={logOutUser} className='mx-2 btn btn-outline btn-warning btn-sm'>Logout</button>
                    </>
                    :
                    <>
                        <Link className='font-semibold my-2 lg:my-0 mx-2' to='/login'>Login</Link>
                        <Link className='font-semibold my-2 lg:my-0 mx-2' to='/register'>Register</Link>
                    </>
            }
        </>
    return (
        <div className="navbar py-2 lg:px-3" style={{ backgroundColor: '#686de0' }}>
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
                                    <img style={{ width: '40px', height: '40px' }} className='rounded-circle' title={user.displayName} src={user.photoURL} alt='' />
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