import React, { useState } from 'react'
import { products } from './products'
import { Item } from './Item'
import './Prod.css'


export const Prod = () => {

  const [cartItems, setCartItems] = useState(products);         // update the product 

  const handleQuantityChange = (id, quantity) => {              // handle the quantity change
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {                                 // calculate the total price of the cart
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='bod'>
      <h1 className='prod_title'>Your bag total is ₹{calculateTotalPrice()} or ₹{Math.round(calculateTotalPrice()/12)}/mo^</h1>
      <div className='checkout_cont'>
        <button className='checkoutBtn' id='checkout'>Check Out</button>

      </div>
       
      {cartItems.map((item) => (
        <Item
          id={item.id}
          desc={item.description}
          price={item.price}
          image={item.img}
          onQuantityChange={handleQuantityChange}                // as the quantity changes the handleQuantityChange will be called
        />
      ))}
         <div className='total_detail_cont'>
           <hr className='total_sep'></hr>
           <div className='total_detail'>
            <div className='space'></div>
            <div className='total_detail_sub'>
                <div className='shipping_element'>
                  <p>subtotal</p>
                  <p>₹{calculateTotalPrice()}</p>
                </div>
                <div className='shipping_element'>
                  <p>Shipping</p>
                  <p>FREE</p>
                </div>
              <hr className='last_sep'/>
                <div className='shipping_element'>
                  <p>Total</p>
                  <p>₹{calculateTotalPrice()}</p>
                </div>
                
                <div className='shipping_element'>
                  <p>Monthly payment</p>
                  <p>₹{Math.round(calculateTotalPrice()/12)}/mo.per^ with EMI</p>
                </div>

            </div>
           </div>
          
         </div>
         <div className='cashback_cont'>
          <p>Explore instant Cashback and No Cost EMI</p>
         </div>
         <div className='checkout_cont2'>
          <button>Check Out</button>
         </div>


         
    </div>
  )
}
