import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../App.css'

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const {productList, setProductList} = props;

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product', {
            title: title,
            price: price,
            description: description
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            setProductList([...productList, res.data]);
            setTitle("");
            setPrice("");
            setDescription("");
            
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <h2>Product Manager</h2>
            <br />
            <form onSubmit={onSubmitHandler} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{margin: 10, backgroundColor: 'lightGrey', borderRadius: 5, padding: 5, width: 300, display: 'flex', justifyContent: 'space-between'}}>
                    <label style={{margin: 5}}>Title</label>
                    <input type="text" value={title || ''} onChange= {(e)=> setTitle(e.target.value)} />
                </div>
                <div style={{margin: 10, backgroundColor: 'lightGrey', borderRadius: 5, padding: 5, width: 300, display: 'flex', justifyContent: 'space-between'}}>
                    <label style={{margin: 5}}>Price</label>
                    <input type="float" value={price || ''} onChange= {(e)=> setPrice(e.target.value)} />
                </div>
                <div style={{margin: 10, backgroundColor: 'lightGrey',  borderRadius: 5, padding: 5, width: 300, display: 'flex', justifyContent: 'space-between'}}>
                    <label style={{margin: 5}}>Description</label>
                    <input type="textarea" value={description || ''} onChange= {(e)=> setDescription(e.target.value)} />
                </div>
                <br />
                <div>
                   <input type="submit" value='Create' className='button2'/>
                </div>
            </form>
        </div>
    )

}

export default ProductForm