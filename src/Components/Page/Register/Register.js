import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { UserContext } from '../../../contexts/AuthProvider/AuthProvider';
import img from '../../../assets/login/login.png'

const Register = () => {
    const { createUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                toast.success('Successfully logged in!')
                navigate('/');
            })
            .then(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-sky-300">
            <div className="hero-content bg-green-300 grid lg:grid-cols-2 my-12 mx-auto lg:m-32 p-8 lg:p-16 rounded-md">
                <form onSubmit={handleSubmit} className="card flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p><small>Already have an account? <Link to='/login' className='underline'>Login</Link></small></p>
                    </div>
                </form>
                <div>
                    <img src={img} alt='' className="full mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default Register;