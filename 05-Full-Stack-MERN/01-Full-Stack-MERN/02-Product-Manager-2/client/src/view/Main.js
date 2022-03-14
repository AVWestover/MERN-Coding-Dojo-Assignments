import React, { useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = (props) => {
    
    const [products, setProducts] = useState([]);
    
    return (
        <div>
    	{/* ProductForm and Product List can both utilize the getter and setter established in their parent component: */}
            <ProductForm products={products} setProducts={setProducts} />

            <ProductList products={products} setProducts={setProducts} />
        </div>
    );
};
export default Main;