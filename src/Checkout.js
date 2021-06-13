import React from 'react'
import'./Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './Stateprovider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="banner" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""></img>
            
           <div className="checkout_title">
               <h3>Hello, {user?.email}</h3>
               <h2 className="checkout__headtitle"> Your Shopping Basket</h2>
                {basket.map(item =>(
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
           <div className="checkout_right">
              <Subtotal></Subtotal>
               
           </div>
        </div>
    )
}

export default Checkout
