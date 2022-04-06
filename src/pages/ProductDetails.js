import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, useParams} from 'react-router-dom';
import { fetchProduct, removeSelectedProduct } from '../redux/product/productActions';
import { addItem } from '../redux/cart/cartActions';

const ProductDetails = () => {

    const {id} = useParams();
    const selectedId = id;

    const [redirect, setRedirect] = useState(false);

    const productReducer = useSelector(state => state.productReducer)
    const {loading, error, product} = productReducer
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(fetchProduct(selectedId));

        return () => {
            dispatch(removeSelectedProduct());
        }
    },[dispatch, selectedId])
    
    const addHandler = (product) =>{
        dispatch(addItem(product))
        setRedirect(true);
    }

    if(redirect){
        return <Redirect to="/cart"/>
    }

    if(loading || error){
        return (
            loading ? <h2>Loading...</h2> : <h2>{error}</h2>
        )
    }

    return (product && (
        <div id="product-screen" className="pageContainer">
            <div className="pageHeader">
                {product.title}
            </div>
            
            <div className="pageBody product-details">
                <div className="col">
                    <img src={product.image} alt={product.title}/>
                </div>

                <div className="col">
                    
                    <p className="col-item"><b>Category</b> : {product.category}</p>
                    <p className="col-item"><b>Description</b> : {product.description}</p>
                    
                    <h2 className="col-item">₹ {product.price}</h2>
                    
                    <button className="col-item btn" 
                        onClick={() => addHandler(product)}>
                        Add To Cart
                    </button>
                </div>
            </div>


        </div>
    ))
};

export default ProductDetails;
