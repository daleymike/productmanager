import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css'

const ProductList = (props) =>{
    const {removeFromDom, productList, setProductList} = props;

    const destroyProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
        .then(res => {removeFromDom(productId)})
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then((res) => {
            console.log(res.data);
            setProductList(res.data.products);
        })
        .catch((err) =>{ console.log(err)
    })}, [])


return (
    <div>
        <h2>All Products:</h2>
        <br />

        {productList.map((product, index) => {
            return (
                <div key={index} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', justifyContent: 'space-between', width: 500, margin: 'auto'}}>
                    <p ><Link style={{color: 'black', fontSize: 'x-large'}} to={`/product/${product._id}`}> {product.title}</Link> </p> 
                    <p ><Link  to={`/product/edit/${product._id}`}><button className='button'>Edit</button></Link> <button className='button1' onClick={(e) => {destroyProduct(product._id)}}>Delete</button></p>
                </div>
            )
        })}
    </div>

)
}

export default ProductList;