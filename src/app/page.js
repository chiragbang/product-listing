import React from 'react';
import "./Product.css";
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import Link from 'next/link';

const products = [
    { id: 1, routeName: "nike", name: "Nike AirFlex Stride", price: 4999, discount: 7999, rating: 4, image: "/shoe1.png" },
    { id: 2, routeName: "adidas", name: "Adidas UltraBoost", price: 5999, discount: 8999, rating: 4.5, image: "/shoe2.png" },
    { id: 3, routeName: "puma", name: "Puma Ignite Blaze", price: 3999, discount: 6999, rating: 3.5, image: "/shoe3.png" },
    { id: 4, routeName: "reebok", name: "Reebok FlexStride", price: 4599, discount: 7599, rating: 4, image: "/shoe4.png" },
    { id: 5, routeName: "hrx", name: "HRX Velocity Boost", price: 5299, discount: 8299, rating: 4.5, image: "/shoe5.png" },
    { id: 6, routeName: "converse", name: "Converse AllStar Elite", price: 6499, discount: 8699, rating: 4.5, image: "/shoe6.png" },

];

const Page = () => {
    return (
        <div>
            <h1 style={{ fontSize: "4rem", textAlign: "center" }}>Products List</h1>
            <hr />

            <div className='product-container'>
                {products.map(product => (
                    <div key={product.id} className='product-card'>
                        <p className='top'>Hot Products</p>
                        {/* <Link href="/productDetails/product"> */}
                        <Link href={`/productDetails/${product.routeName}`}>

                            <Image width={400} height={300} src={product.image} />
                        </Link>
                        <hr />
                        <h2>{product.name}</h2>
                        <div className='pricing'>
                            <h3>Rs. {product.price}/- <span><del>Rs.{product.discount}</del></span></h3>

                            <div className='rating'>
                                {Array.from({ length: Math.round(product.rating) }, (_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </div>
                        </div>
                        <hr />

                        <div className='shop-buttons'>
                            <button>Shop Now</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page;
