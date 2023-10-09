import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
// import tshirt from '../assets/img/tshirt.png'


function Products (){
    const [products, setProduct] = useState([])

    useEffect(()=>{
       
        //jes http://ecom-microservices-lb-567133188.us-east-1.elb.amazonaws.com/product/getAllProducts
        axios.get("http://34.230.26.116:8080/todos")
        .then(response => setProduct(response.data))
        .catch((e)=>console.log(e.message))
    },[])

    return(
        <div>
            <h1>Product Lists</h1>
            {
                products.map( product =>{
                    const {id, productName, productImg, productPrice, productDesc} = product;
                    return(
                        <div key={id}>
                            <img src={productImg} alt='product' width='200' height='300'/><br />
                            <br />
                            <strong>{productName}</strong><br />
                            <strong>{productPrice}</strong><br />
                            <strong>{productDesc}</strong><br /><br /><br />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;