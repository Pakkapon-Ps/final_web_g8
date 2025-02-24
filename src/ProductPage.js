import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');

  const fetchProducts = async () => {
    const productCollection = collection(db, 'products');
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map(doc => doc.data());
    setProducts(productList);
  };

  const handleAddProduct = async () => {
    if (newProduct.trim()) {
      await addDoc(collection(db, 'products'), { name: newProduct });
      setNewProduct('');
      fetchProducts(); // Refresh the product list
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <input 
        type="text" 
        value={newProduct} 
        onChange={(e) => setNewProduct(e.target.value)} 
        placeholder="New product name" 
      />
      <button onClick={handleAddProduct}>Add Product</button>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;