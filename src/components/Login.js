import React,{useState} from "react";
import axios from 'axios';

const Login = ()=>{

    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const [message,setMessage]=useState();

    const submitForm= async(e)=>{
        e.preventDefault();
        console.log(email,password);
        const res= await axios.post("http://ecom-microservices-lb-567133188.us-east-1.elb.amazonaws.com/customer/login",{email,password})
        console.log(res);
        if(res){
            setMessage(`res.message.data`);
        }
    }
    return(
        <div className="card">
          <form onSubmit={(e)=>submitForm(e)}>
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
        </div>
    )
}

export default Login;