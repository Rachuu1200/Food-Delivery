import React, { useState } from "react";
import "./CourierCard.css";

const CourierCard = () => {
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  return (
    <>
      <div className="courier-card">
        <div className="courier-image">
          <img src="download.jpeg" alt="Courier Service" />
        </div>

        <div className="courier-content">
          <h2>Sindhuli Bazar Courier</h2>
          <p className="description">
            Reliable courier service from Sindhuli, delivering to <strong>40 countries</strong> worldwide. Weight-based pricing. Fast and secure.
          </p>

          <div className="details">
            <span>🌍 40 Countries</span>
            <span>📦 Weight-based Pricing</span>
            <span>🚀 Fast Delivery</span>
            <span>🛡️ Insurance Available</span>
            <span>📄 Tracking Included</span>
          </div>

          <button className="send-btn" onClick={handleOpenForm}>
            Send Your Courier
          </button>
        </div>
      </div>

      {openForm && <CourierForm onClose={handleCloseForm} />}
    </>
  );
};

export default CourierCard;
