import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, id, category, price, ratings, seller, img } = props.product
    // console.log(props.product)
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>

            </div>

            <button onClick={() => props.addToCartBtn(props.product)} className='btn'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    );
};

export default Product;