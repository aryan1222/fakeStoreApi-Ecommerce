import React from 'react';
import {Link} from 'react-router-dom';
import {FaOpencart, FaUserAlt, FaSignOutAlt} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../redux/user/userActions';

const Header = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
    
    return (
        <header>
            <Link className="nav" to='/'>
                <h1>Ecommerce</h1>
            </Link>
            
            <div className="navbar">
                <Link className="nav" to='/cart'><FaOpencart/> Cart</Link>
                {userInfo ?  <Link className="nav" to='/' onClick={() => dispatch(logout())}><FaSignOutAlt/> Logout</Link>:
                <Link className="nav" to='/login'><FaUserAlt/> Login</Link>}
            </div>
        </header>
    )
};

export default Header;
