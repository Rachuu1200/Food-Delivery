import React from "react";
import "./Nike.css";

const Nike = () => {
  return (
    <div className="wrapper">
      <div className="card-container">
        <div className="product-image">
          <img src="NIKE+AIR+MAX+1.avif" alt="Nike Air Max" />
        </div>
        <div className="product-details">
          <h2>
            Nike Air Max
            <br />
            <span>Men&apos;s Shoe</span>
          </h2>
          <h3>Product Details</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            ducimus iusto.
          </p>
          <h4>Size</h4>
          <ul className="size">
            <li>36</li>
            <li>38</li>
            <li>40</li>
            <li>42</li>
            <li>44</li>
          </ul>
          <div className="group">
            <h2>Price: Rs 5000</h2>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nike;
