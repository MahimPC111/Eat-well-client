import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOutUser } = useContext(UserContext);

    const menuBar =
        <>
            <Link className='font-semibold mx-2' to='/'>Home</Link>
            <Link className='font-semibold mx-2' to='/blogs'>Blogs</Link>
            {
                user?.uid ?
                    <>
                        <Link className='font-semibold mx-2 whitespace-nowrap' to='/review'>My review</Link>
                        <Link className='font-semibold mx-2 whitespace-nowrap' to='/blogs'>Add service</Link>
                        <button onClick={logOutUser} className='mx-2 btn btn-outline btn-warning btn-sm'>Logout</button>
                    </>
                    :
                    <>
                        <Link className='font-semibold mx-2' to='/login'>Login</Link>
                        <Link className='font-semibold mx-2' to='/register'>Register</Link>
                    </>
            }
        </>
    return (
        <div className="navbar bg-sky-500">
            <div className="navbar-start">
                <Link to='/'><h2 href="/" className="font-bold normal-case pl-2 text-2xl lg:text-3xl">Eat Well</h2></Link>
            </div>
            <div className="hidden lg:flex ml-80">
                {menuBar}
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='' />
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