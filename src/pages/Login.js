import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {login} from '../redux/user/userActions';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    
    const [formData, setFormData] = useState({email: '', password: ''});
    const { email, password } = formData

    const [redirect, setRedirect] = useState(false);
    
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
    
    useEffect(() => {
        if(localStorage.getItem('userInfo')){
            setRedirect(true)
        }
    },[userInfo])

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(login(formData));
        setFormData({email : '', password : ''})
    }

    if(redirect){
        return <Redirect to="/"/>
    }

    return (
        <div className='pageContainer'>
            <header className='pageHeader'>
                <p>Login</p>
            </header>
            <div className="pageBody">
                <form>
                    <input
                        type='email'
                        className='emailInput'
                        placeholder='Email'
                        id='email'
                        value={email}
                        onChange={onChange}
                    />

                    <input
                        type='password'
                        className='passwordInput'
                        placeholder='Password'
                        id='password'
                        value={password}
                        onChange={onChange}
                    />
                </form>

                <div className="textLink">
                    <Link className='nav registerLink' to='/register'>
                        Sign Up Instead!
                    </Link>
                </div>

                <button type='submit' onClick={onSubmit} className='btn signInButton'>Login</button>
            </div>
        </div>
    )
};

export default Login;
