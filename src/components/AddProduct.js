import React,{useState} from "react";
import axios from 'axios';

const AddProduct = ()=>{


    const [productName, setProductName]=useState();
    const [productImg, setProductImg]=useState();
    const [productDesc, setProductDesc]=useState();
    const [productPrice,setProductPrice]=useState();
    const [message, setMessage]= useState();

    const submitForm= async(e)=>{
        e.preventDefault();
        console.log(productName,productDesc,productImg,productPrice);
       //jes const res= await axios.post("http://ecom-microservices-lb-567133188.us-east-1.elb.amazonaws.com/product/addProduct",{productName,productDesc,productImg,productPrice})
       const res= await axios.post("http://34.230.26.116:8080/todos",{productName,productDesc,productImg,productPrice})

        console.log(res);
        try{ if(res){
            setMessage(res.message.data);
        }}

        catch(e){
            console.log(e.message)
        }
       
    }

    // const onImageChange = event => {
    //     console.log(event.target.files[0])
    //     if (event.target.files && event.target.files[0]) {
    //       let img = event.target.files[0];
    //      setProductDocument(URL.createObjectURL(img)) 
    //     }
    //   };
    return(
        <div className="card">
          <form onSubmit={(e)=>submitForm(e)}>

            
          <div className="mb-3">
                <label  className="form-label">Product Name</label>
                <input type="text" name="pName" className="form-control" id="exampleInputName" value={productName}  onChange={(e)=>setProductName(e.target.value)} />
                
            </div>

            <div className="mb-3">
                <label  className="form-label">Product price</label>
                <input type="text" className="form-control" id="exampleInputPrice" value={productPrice} onChange={(e)=>setProductPrice(e.target.value)} />
                
            </div>
            <div className="mb-3">
                <label  className="form-label">Product Description</label>
                <input type="text" className="form-control" id="exampleInputProductDesc" value={productDesc} onChange={(e)=>setProductDesc(e.target.value)} />
            </div>

            <div className="mb-3">
                <label  className="form-label">Product Image Url</label>
                <input type="text" className="form-control" id="exampleInputImg" value={productImg}  onChange={(e)=>setProductImg(e.target.value)} />
                
            </div>

            
            <button type="submit" className="btn btn-primary" onClick={() => alert('Product Added Successfully')}>Submit</button>
        </form>
    
        <div><p>{message? message:null}</p></div>
        </div>
    )
}

export default AddProduct;