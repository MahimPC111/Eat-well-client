import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/AuthProvider/AuthProvider';
import img from '../../../assets/login/login.png'
import { GoogleAuthProvider } from 'firebase/auth';
import icon from '../../../assets/icons/googleIcon.png'

const Login = () => {
    const { logInUser, signInWithGoogle } = useContext(UserContext);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                form.reset();
                toast.success('Successfully logged in!')
                navigate('/');
            })
            .catch(error => {
                toast.error(error.message)
            });
    }

    const handleGoogleLogin = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/');
                toast.success('Successfully logged in!')
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className="hero min-h-screen bg-sky-300">
            <div className="hero-content bg-green-300 grid lg:grid-cols-2 my-12 mx-auto lg:m-32 p-8 lg:p-16 rounded-md">
                <div>
                    <img src={img} alt='' className="mx-auto" />
                </div>
                <form onSubmit={handleSubmit} className="card flex-shrink-0 mx-auto w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login now!</h1>
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
                            {/* <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p><small>Don't have an account? <Link to='/register' className='underline'>Register</Link></small></p>
                    </div>
                    <div className='mx-auto mb-3'>
                        <button className='btn btn-outline btn-info btn-sm' onClick={handleGoogleLogin}>
                            <img src={icon} alt='' className='w-6 h-6 mr-2' />
                            Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;