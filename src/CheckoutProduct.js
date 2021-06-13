import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './Stateprovider';
function CheckoutProduct({id, image, title, price, rating}) {

    const [{basket}, dispatch] = useStateValue();
    const removefrombasket =() =>{
        dispatch({
            type: 'removefrombasket',
            id: id,
        })
    }

    return (
        <div className="checkoutproduct">
           <img className="product__img" src={image} />

           <div className="product__info">
               <p className="product__title">{title}
               </p>
               <p className="product__price">
                   <small>Rs</small>
                   <strong>{price}</strong>
               </p>
               <div className="product__rating">
                   {Array(rating)
                   .fill()
                   .map((_,i)=>(
                       <p>⭐</p>
                   ))
                   }
               </div>
               <button onClick={removefrombasket} >
                   Remove The Product
               </button>
           </div>
        </div>
    )
}

export default CheckoutProduct
