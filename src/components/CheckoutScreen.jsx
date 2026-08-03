import React, { useState } from "react";
import { ArrowLeft, Wallet, Smartphone, CreditCard, Bike, Car } from "lucide-react";

export default function CheckoutScreen({ cart, onBack, onPlaceOrder }) {
  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    street: "",
    barangay: "",
    city: "",
    notes: "",
  });
  const [payment, setPayment] = useState("cod");
  const [transport, setTransport] = useState("moto");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const updateField = (field, value) => {
    setAddress((a) => ({ ...a, [field]: value }));
  };

  const canPlaceOrder = address.fullName.trim() && address.phone.trim() && address.street.trim();

  return (
    <div>
      <header className="subpage-header">
        <div className="subpage-logo">Kusina Store</div>
        <button className="back-link" onClick={onBack}>
          <ArrowLeft size={14} /> Back to Cart
        </button>
      </header>

      <div className="ks-container">
        <div className="page-head">
          <h1>Checkout</h1>
        </div>

        <div className="checkout-body">
          <div>
            {/* ADDRESS */}
            <div className="form-section">
              <h2>
                <span className="step">1</span> Delivery Address
              </h2>
              <div className="form-grid">
                <div className="form-field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Juan Dela Cruz"
                    value={address.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="09XX XXX XXXX"
                    value={address.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                </div>
                <div className="form-field full">
                  <label>Street Address</label>
                  <input
                    type="text"
                    placeholder="House No., Street Name"
                    value={address.street}
                    onChange={(e) => updateField("street", e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label>Barangay</label>
                  <input
                    type="text"
                    placeholder="Barangay"
                    value={address.barangay}
                    onChange={(e) => updateField("barangay", e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label>City / Municipality</label>
                  <input
                    type="text"
                    placeholder="City"
                    value={address.city}
                    onChange={(e) => updateField("city", e.target.value)}
                  />
                </div>
                <div className="form-field full">
                  <label>Landmark / Notes (optional)</label>
                  <textarea
                    rows="2"
                    placeholder="e.g. near the corner store, gate color, etc."
                    value={address.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* PAYMENT */}
            <div className="form-section">
              <h2>
                <span className="step">2</span> Mode of Payment
              </h2>
              <div className="option-grid">
                <div
                  className={"option-card" + (payment === "cod" ? " selected" : "")}
                  onClick={() => setPayment("cod")}
                >
                  <div className="icon">
                    <Wallet size={22} />
                  </div>
                  <div className="label">Cash on Delivery</div>
                </div>
                <div
                  className={"option-card" + (payment === "gcash" ? " selected" : "")}
                  onClick={() => setPayment("gcash")}
                >
                  <div className="icon">
                    <Smartphone size={22} />
                  </div>
                  <div className="label">GCash</div>
                </div>
                <div
                  className={"option-card" + (payment === "card" ? " selected" : "")}
                  onClick={() => setPayment("card")}
                >
                  <div className="icon">
                    <CreditCard size={22} />
                  </div>
                  <div className="label">Card</div>
                </div>
              </div>
            </div>

            {/* TRANSPORT */}
            <div className="form-section">
              <h2>
                <span className="step">3</span> Mode of Transport
              </h2>
              <div className="transport-grid">
                <div
                  className={"transport-card" + (transport === "moto" ? " selected" : "")}
                  onClick={() => setTransport("moto")}
                >
                  <div className="icon">
                    <Bike size={26} />
                  </div>
                  <div className="label">Moto</div>
                  <div className="desc">Best for regular, single orders. Fastest option.</div>
                </div>
                <div
                  className={"transport-card" + (transport === "car" ? " selected" : "")}
                  onClick={() => setTransport("car")}
                >
                  <div className="icon">
                    <Car size={26} />
                  </div>
                  <div className="label">Car</div>
                  <div className="desc">
                    For bigger or bulk orders (bultuhan) that need more space.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="summary-panel">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₱{total}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>₱0</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>₱{total}</span>
            </div>
            <button
              className="btn-place-order"
              disabled={!canPlaceOrder}
              onClick={() => onPlaceOrder({ address, payment, transport, total })}
            >
              Place Order
            </button>
            {!canPlaceOrder && (
              <p className="summary-note">Fill in name, phone, and street address to continue</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
