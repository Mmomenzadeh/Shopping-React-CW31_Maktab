import "../../assets/styles/productCard.css";
import Button from "../Button/Button";
import {products } from "../../Data";
import {useState} from "react";
import BasketItem from "../BasketItem/BasketItem";

const productCard = ({item ,basketArray , setBasketArray , setCountProduct}) => {

  

  const addToBasket = (id)=> {
    const find = products.find(item => item.id === id)

    const NewOrder = {...find , count:1}
      
    const duplicatItem = basketArray.find(item =>item.id === id)
  
    if(duplicatItem){
      const updatedArray = basketArray.filter(item => {
        item.id !== duplicatItem.id
      })
      duplicatItem.count += 1
      updatedArray.push(duplicatItem)
      console.log(updatedArray);
      setBasketArray(updatedArray)
    }else{
      setBasketArray([...basketArray,NewOrder])
    }
  }

  return (
    <div className="cardContainer">
      <div className="img">
        <img src={item.srcImg} alt="" />
      </div>

      <p>{item.name}</p>

      <div className="wrapper_price_btn">
        <span>${item.price}</span>
        
        <button className='addBtn' onClick={()=>addToBasket(item.id)}>Add To Card</button>
      </div>
    </div>
  );
};

export default productCard;
