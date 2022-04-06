import React from 'react';
import CartItem from '../components/CartItem';
import {useSelector} from 'react-redux';

const Cart = () => {

    const {cartItems} = useSelector(state => state.cart)
    
    const checkOutHandler = () =>{
        console.log('orderPlaced');
    }

    return (
        <div className="pageContainer" id="cart-screen">
            <div className="pageHeader">
                <p>My Cart</p>
            </div>

            {cartItems.length === 0 ? <div>Your cart is empty</div> :
                <div className="pageBody cols">
                    <ul>
                        {cartItems.map((item) => <CartItem key={item.id} item={item}/>)}
                    </ul>
                    <div className="checkout">
                        <h3>Total Price : ₹ {cartItems.reduce((acc, item) => acc + item.price, 0)}</h3>
                        <button className="btn" onClick={() => checkOutHandler()}>Place Order</button>
                    </div>
                </div>}
            
        </div>
    )
};

export default Cart;