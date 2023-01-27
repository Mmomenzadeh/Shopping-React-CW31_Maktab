import "../../assets/styles/filter.css";


const Filter = ({status,val})=> {
    if(status === 'order'){
      return(
        <div>
        <label>Order</label>
        <select>
            <option value="" selected>Lowest</option>
            <option value="">Highest</option>
        </select>

    </div>
      )
    }else{
    
      return (
        <div>
            <label>Size</label>
            <select>
              {val[0].size.map(item => (
                  <option value="" selected>{item}</option>               
              ))}           
            </select> 
        </div>
      )
    }
      
  }

export default Filter

       
        
    








