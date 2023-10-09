import React,{useState} from "react";
import axios from 'axios';

const Register = ()=>{

    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const [customerName, setCustomerName]=useState();
    const [message,setMessage]=useState();

    const submitForm= async(e)=>{
        e.preventDefault();
        console.log(email,password,customerName);
        const res= await axios.post("http://ecom-microservices-lb-567133188.us-east-1.elb.amazonaws.com/customer/register",{email,password,customerName})
        console.log(res);
        if(res){
            setMessage(res.message.data);
        }
    }
    return(
        <div className="card">
          <form onSubmit={(e)=>submitForm(e)}>
          <div className="mb-3">
                <label  className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputName" value={customerName} aria-describedby="emailHelp" onChange={(e)=>setCustomerName(e.target.value)} />
                
            </div>

            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" value={email} aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} />
                
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <div><p>{message? message:null}</p></div>
        <div>S3 Images</div>
        <div><img src="https://ecombucket1.s3.amazonaws.com/s3+images/laptop.jpg " alt='product' width='200' height='300'/></div>
        <div><img src="https://ecombucket1.s3.amazonaws.com/s3+images/mob.jpg " alt='product' width='200' height='300'/></div>
        </div>
    
    )
}

export default Register;