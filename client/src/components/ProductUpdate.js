import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductUpdate = (props) => {
  const { _id } = useParams();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + _id)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/product/" + _id, {
        title: title,
        price: price,
        description: description,
      })
      .then((res) => {
        console.log(res);
        navigate("/products");
      })
      .catch(err => console.log(err))
  }
  return (
      <div>
          <h1>Update Product</h1>
          <form onSubmit={updateProduct} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
                <div>
                   <input type="submit" value='Update' style={{marginTop: 5, width: 75, padding: 5, fontWeight: 'bold'}}/>
                </div>
            </form>
      </div>
  )
}

export default ProductUpdate;
