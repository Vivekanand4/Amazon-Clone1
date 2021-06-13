
import React from 'react';
import "./Product.css";
import { useStateValue } from './Stateprovider';
function Product({id, title, image, price, rating}) {
   const [{basket}, dispatch] = useStateValue();
    
   
   
    const addToBasket =() =>{

        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

   };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product_price">
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                   {Array(rating).fill().map((_,i) => (
                    <p>⭐</p>))}
                   
                </div>
            </div>
            <img className="product__image" src={image} alt=""></img>
            
            <button onClick={addToBasket}> Add To Basket</button>
        </div>
    )
}

export default Product
