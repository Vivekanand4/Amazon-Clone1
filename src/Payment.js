import userEvent from '@testing-library/user-event'
import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import "./Payment.css";
import Checkout from "./Checkout";
import { getBasketTotal } from './reducer'
import { useStateValue } from './Stateprovider'
import { Link } from 'react-router-dom';

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="payment">
           <div className="payment__container">
               <h1>
                   Checkout( 
                       {basket.length}
                       <Link to="/Checkout"> items</Link>
                   )
               </h1>
               <div className="payment__section">
                <div className="payment__title">
                    <h3> Dilivery Address</h3>
                </div>
                <div className="payment_address">
                    <p>
                        {user?.email}
                        <p> 123 react lane</p>
                        <p> India</p>
                    </p>
                </div>
               </div>

               <div className="payment__section">
                   <div className="payment__section">
                       <div className="payment__title">
                           <h3>
                               Review items and Dilivery
                           </h3>
                       </div>
                       <div className="payment__items">
                           {basket.map(item => (
                               <CheckoutProduct
                               id={item.id}
                               title={item.title}
                               image={item.image}
                               price={item.price}
                               rating={item.rating}
                               ></CheckoutProduct>
                           ))}
                       </div>
                   </div>
               </div>

               <div className="payment__ssection">
                  <div className='payment__section'>
                      <h3> Payment method</h3>
                      </div> 
               </div>
           </div>
        </div>
    )
}

export default Payment
