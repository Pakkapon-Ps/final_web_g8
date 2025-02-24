import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>สินค้า</h2>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-4">
            <div className="card">
              <img src={p.image} className="card-img-top" alt={p.name} />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.price} บาท</p>
                <button className="btn btn-primary">เพิ่มลงตะกร้า</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;