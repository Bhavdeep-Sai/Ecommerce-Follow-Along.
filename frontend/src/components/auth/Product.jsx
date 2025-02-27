import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/products")
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setProducts(response.data);
                } else {
                    console.error("Unexpected response format:", response.data);
                }
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
                    <Card
                        key={product._id}
                        name={product.name}
                        price={product.price}
                        image={`http://localhost:8000/uploads/${product.images?.[0]}`}  
                    />
                ))}
            </div>
        </div>
    );
};

export default Product;
