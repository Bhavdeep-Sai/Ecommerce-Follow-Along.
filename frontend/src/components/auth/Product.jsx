import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/products")
            .then((response) => {
                setProducts(response.data);  // Assuming API returns an array of products
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div className="min-h-screen mx-10 bg-gray-700">
            <h1 className="text-5xl font-bold text-center text-white mb-10">Our Products</h1>
            <div className="flex gap-10 flex-wrap">
                {products.map((product) => (
                    <Card this is teh frontend code 
                        key={product._id}
                        name={product.name}
                        price={product.price}
                        image={`http://localhost:8000/uploads/${product.images[0]}`}  // Fix the path
                    />
                ))}
            </div>
        </div>
    );
};

export default Product;
