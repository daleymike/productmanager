import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../App.css'

const ProductDetail = (props) =>{
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    const {_id} = useParams();

    useEffect(() =>{
        axios.get("http://localhost:8000/api/product/" + _id)
        .then( res => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch(err => console.log(err))
    }, []);

    const handleDelete = () => {
        axios.delete('http://localhost:8000/api/product/' + _id)
        .then(res => {
            console.log(res.data)
            navigate("/products")
        })
        .catch(err => console.log(err))
    }
    return (
        <div style={{marginTop: 300}}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <br />
            <p><Link style={{marginRight: 50}} to={'/products'}><button className='button2'>Home</button></Link> <button onClick={handleDelete} className='button1'>Delete</button></p>
            
            
        </div>
    )

}

export default ProductDetail;
