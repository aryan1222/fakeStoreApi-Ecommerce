import React from 'react'
import {Link} from 'react-router-dom'

const Product = ({ product }) => {
  
  return (
    <div className="product-card">
      <Link className="nav" to={`/product/${product.id}`}>
        <img className="product-image" src={product.image} alt={product.title} />
      </Link>

      <div className="product-content">
        <Link className="nav" to={`/product/${product.id}`}>
            <span className="name">{product.title}</span>
        </Link>

        <h3 className="price">₹{product.price}</h3>
      </div>
    </div>
  )
}

export default Product