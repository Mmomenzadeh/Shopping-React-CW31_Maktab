import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import '../../assets/styles/basketItems.css'

const BasketItem = ({item , countProduct})=> {

    return(
        <div className=" container_basketItem">
            <div className="basketItem_img">
                <img src={item.srcImg} alt=""/>
            </div>
            <div className="basketItem_content">
                <h2>{item.name}</h2>
                <div className="wraper_basketItem_price_removeBtn">
                    <span>${item.price}</span>
                    <span>*{item.count}</span>
                    <button className="removeBtn">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default BasketItem