import '../../assets/styles/allProduct.css'
import ProductCard from '../ProductCard/ProductCard'


const AllProduct = ({data ,basketArray , setBasketArray ,setCountProduct})=> {
    return(
        <div className='container_allProduct'>
            {data.map(item => (
                <ProductCard key={item.id} item={item} setBasketArray={setBasketArray} basketArray={basketArray} setCountProduct={setCountProduct}/>
            ))}

        </div>
    )

}

export default AllProduct