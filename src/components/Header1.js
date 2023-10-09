import React from "react";
import { Link } from "react-router-dom";



const Header = ({children}) =>{
    const style ={
        display: 'inline-block',
        margin: 10,
        marginBottom: 30,
        background: 'red'
    }
   return(
    <div>
        <div>
            <h1>AR E-Commerce Application</h1>
            <h3 style={style}><Link to='/'>Home</Link></h3>
            <h3 style={style}><Link to='/product'>Products</Link></h3>
            <h3 style={style}><Link to='/login'>Login</Link></h3>
            <h3 style={style}><Link to='/register'>Register</Link></h3>
            <h3 style={style}><Link to='/addProduct'>Add Product</Link></h3>
        </div>
        {children}
    </div>
   )
}

export default Header;