import "../../assets/styles/header.css"
import Filter from "../Filter/Filter"


const Header =({data})=>{
    return(
        <>
        <div className="hederContainer">
            <div className="header_left">
            <div className="productCount">
                <span>{data.length}</span>
                <label>Product</label>
            </div>
           
            <Filter status={'order'}/>
            <Filter status={'size'} val={data} />
            </div>

            <div className="header_right">
                <span>Cart is Empty</span>
            </div>
            
        </div>
        </>
    )
}

export default Header