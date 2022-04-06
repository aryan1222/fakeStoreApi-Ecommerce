import React from 'react'
import {Link} from 'react-router-dom'
import {FaTrashAlt} from 'react-icons/fa';
import {removeItem} from '../redux/cart/cartActions';
import {useDispatch} from 'react-redux';

const CartItem = ({item}) => {
    const dispatch = useDispatch();
    
  return (
    <div className="cart-item">
        <Link className="nav product-details" to={`/product/${item.id}`}>
            <img src={item.image} alt={item.title}/>
            {item.title}
        </Link>
        <div className="delete-icon" onClick={() => dispatch(removeItem(item))}><FaTrashAlt size={20}/></div>
    </div>
  )
}

export default CartItem