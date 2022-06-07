import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id, image, title, price, rating }){
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
    })
    }
    return(
        <div>
            <div className="checkoutProduct">
                <img src={image} alt="pic" className="checkoutProduct" />
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>
                    <p className="checkoutProduct__price">
                        <small>Rs</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        {Array(rating)
                        .fill()
                        .map((_, i) => (
                                 <p>⭐</p>
                         ))}
                    </div>
                    <button onClick={removeFromBasket}>Remove from basket</button>
                </div>
               
            </div>

        </div>
    )
}

export default CheckoutProduct