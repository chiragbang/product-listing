"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { GiRunningShoe } from "react-icons/gi";
import Link from 'next/link';
import "./Description.css";

const productDesc = ({ params }) => {
    const productData = {
        nike: {
            name: "Nike Airflex Strides",
            desc: "Introducing the Nike Airflex Stride: your stride, redefined. Engineered with cutting-edge Airflex tech, these kicks adapt to your every move, offering unmatched comfort and support. From the track to the streets, unleash your potential in style. Step into the future of footwear with the Nike Airflex Stride.",
            price: "4999",
            image:"/shoe1.png"

        },
        adidas: {
            name: "Adidas-UltraBoost",
            desc: "Elevate your running experience with the Adidas Ultraboost Running Shoes. Engineered with cutting-edge technology, these shoes offer unparalleled comfort, support, and energy return with every stride. Whether you're hitting the track or exploring the city streets, these shoes provide the perfect blend of performance and style to keep you ahead of the game.",
            price: "5999",
            image:"/shoe2.png"

        },

        puma: {
            name: "Puma Ignite Blaze",
            desc: "Ignite your workouts with the Puma Ignite Blaze. Designed to provide exceptional cushioning and responsiveness, these shoes will fuel your performance in the gym or on the track. With a sleek design and innovative technology, the Ignite Blaze is the perfect combination of style and function.",
            price: "3999",
            image:"/shoe3.png"

        },
        reebok: {
            name: "Reebok FlexStride",
            desc: "Introducing the Reebok FlexStride - your go-to shoes for versatile performance. Engineered with FlexTech technology, these shoes offer dynamic flexibility and support for all your workouts. Whether you're hitting the gym or pounding the pavement, the FlexStride delivers comfort and style with every step.",
            price: "4599",
            image:"/shoe4.png",

        },
        hrx: {
            name: "HRX Velocity Boost",
            desc: "Reach new speeds with the HRX Velocity Boost. Engineered for performance, these shoes feature Velocity Boost technology for maximum energy return and propulsion. Whether you're running sprints or tackling long distances, the HRX Velocity Boost will keep you light on your feet and ahead of the competition.",
            price: "5299",
            image:"/shoe5.png"

        },
        converse: {
            name: "Converse AllStar Elite",
            desc: "Step up your street style with the Converse AllStar Elite. Combining classic design with modern comfort, these shoes are perfect for everyday wear. Whether you're hitting the skate park or hanging out with friends, the AllStar Elite offers timeless style and versatility.",
            price: "6499",
            image:"/shoe6.png"

        }

    }


    // const [quantity, setQuantity] = useState(1);
    // const [price, setPrice] = useState(4999); // Initial price

    // const decreaseQuantity = () => {
    //     if (quantity > 1) {
    //         setQuantity(quantity - 1);
    //         setPrice(price - 4999); // Decrease price when quantity decreases
    //     }
    // };

    // const increaseQuantity = () => {
    //     setQuantity(quantity + 1);
    //     setPrice(price + 4999); // Increase price when quantity increases
    // };

    const product = productData[params.product.toLowerCase()];

    return (
        <>
            <h1 className='desc-heading'>Product Description</h1>
            <hr />
            <div className='desc-container'>
                <div className='desc-container-left'>
                    <h2 className='product-head'>{product.name}</h2>
                    <div className='desc-image'>
                        <Image width={600} height={400} src={product.image} alt='Nike' />
                    </div>
                </div>
                <div className='desc-container-right'>
                    {/* <h2 className='product-head'><span>AirFlex Stride</span></h2> */}
                    <p>{product.desc}</p>
                    <div className='color-price'>
                        <div className='color'>
                            <h3>Colors</h3>
                            <GiRunningShoe style={{ color: "red" }} className='color-badge' />
                            <GiRunningShoe style={{ color: "black" }} className='color-badge' />
                            <GiRunningShoe style={{ color: "blue" }} className='color-badge' />
                        </div>
                        <div className='price'>
                            <h2>&#8377;{product.price}/-</h2>
                        </div>
                    </div>
                    <div className='shoe-size'>
                        <h3>Sizes</h3>
                        <div className='size-span'>
                            <p>6</p>
                            <p>7</p>
                            <p>8</p>
                            <p>9</p>
                            <p>10</p>
                            <Link href="/">Style Guide</Link>
                        </div>
                    </div>
                    <div className='checkout'>
                        <h3>Quantity</h3>
                        <div className="quantity">
                            <button >-</button>
                            <input type="number" value="1" readOnly />
                            <button >+</button>
                        </div>
                        <div className='checkout-buttons'>
                            <button>Add to Bag</button>
                            <button>Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default productDesc;

