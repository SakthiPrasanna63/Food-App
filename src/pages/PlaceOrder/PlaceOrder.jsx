import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/storeContext'
const PlaceOrder = () => {

  const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <form className='place-order'>
       <div className="order-left">
        <p className='title'>Delivery Information</p>

        <div className="input-fields">
          <input type="text" placeholder='First name' required/>
          <input type="text" placeholder='Last name' required/>
        </div>

        <input type="email" placeholder='email' required/>
        <input type="text" placeholder='Street' required/>

        <div className="input-fields">
          <input type="text" placeholder='City' required/>
          <input type="text" placeholder='State' required/>
        </div>

        <div className="input-fields">
          <input type="text" placeholder='Pin Code' required/>
          <input type="text" placeholder='Country' required/>
        </div>

        <input type="text" placeholder='Phone' required/>

       </div>

       <div className="order-right">
             <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs {getTotalCartAmount()===0?0:50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs {getTotalCartAmount() === 0 ? 0 :getTotalCartAmount()+50}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
       </div>
    </form>
  )
}

export default PlaceOrder
