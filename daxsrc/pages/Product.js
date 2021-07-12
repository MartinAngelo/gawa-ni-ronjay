import React from 'react'
import Nav from "../components/Nav";
import product from "../images/product1.jpg";

export default function () {
    return (
        <div>
            <div>
                <Nav/>
            </div>
            <h1>Product</h1>
            <div>
                <img class="product1" src={product} alt=""/>
                <p>Price: 100,000.00</p>
                <button>Check-out</button>
            </div>
        </div>
    )
}
