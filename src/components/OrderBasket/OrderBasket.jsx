import '../../assets/styles/orderBasket.css'
import BasketItem from '../BasketItem/BasketItem'
import { useState } from 'react'

const OrderBasket = ({basketArray , countProduct})=> {
    
    return(
        <div className='container_orderBasket'>
            {basketArray.map(item => (
                <BasketItem key={item.id} item={item} countProduct={countProduct}/>
            ))}
        </div>
    )
}

export default OrderBasket