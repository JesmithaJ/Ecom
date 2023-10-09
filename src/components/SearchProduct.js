import React, { useEffect, useState } from "react";
import axios from "axios";
// import tshirt from '../assets/img/tshirt.png'


function SearchProduct (){
    const [pId,setPid]=useState();
    const [searchProduct, setSearchProduct] = useState();

   
    const submitForm=async(e)=>{
        e.preventDefault();
        try{
            //const res= await axios.get("http://ecom-microservices-lb-567133188.us-east-1.elb.amazonaws.com/product/getById/"+pId)
            const res= await axios.get("http://34.230.26.116:8080/todos"+pId)
       if(res){
        setSearchProduct(res.data)
       }
    }catch(e){
        console.log(e.message)
    }
    }

    return(
        <div>
            <div>
                            <form onSubmit={(e)=>submitForm(e)}>
                            <div className="mb-3">
                            <label  className="form-label">Search by id</label>
                            <input type="text" className="form-control" id="exampleInputId" value={pId} onChange={(e)=>setPid(e.target.value)} />
                            
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
           
            {
                searchProduct? <div key={searchProduct.productId}>
                            <img src={searchProduct.productImg} alt='product' /><br />
                            <br />
                            <strong>{searchProduct.productName}</strong><br />
                            <strong>{searchProduct.productPrice} </strong>
                            <strong>{searchProduct.productDesc} </strong>
                        </div> : null
                    
        
            }

        </div>
    )
}

export default SearchProduct;