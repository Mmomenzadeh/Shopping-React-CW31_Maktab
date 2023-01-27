import './assets/styles/App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import {products} from "./Data"
import AllProduct from './components/AllProduct/AllProduct'
import OrderBasket from './components/OrderBasket/OrderBasket'
import {useState } from 'react'
import Footer from './components/Footer/Footer'

const App = ()=>{

  const [basketArray , setBasketArray] = useState([])
  const [countProduct , setCountProduct] = useState(1)

  return(
    <div className="container">
      <Navbar/>
      <Header data={products} />
      <div className='main'>
      <AllProduct data={products} setBasketArray={setBasketArray} basketArray={basketArray} setCountProduct={setCountProduct} />
      <OrderBasket basketArray={basketArray} countProduct={countProduct}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App