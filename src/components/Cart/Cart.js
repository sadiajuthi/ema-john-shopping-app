import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = total * 0.1
    const grandTotal = total + shipping + parseInt(tax)


    return (
        <div className='cart-container'>
            <h3>Order Summery</h3>
            <p>selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;