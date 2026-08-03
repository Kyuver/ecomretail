import React, { useState } from "react";
import { ArrowLeft, Minus, Plus, X } from "lucide-react";
import DishThumb from "./DishThumb.jsx";

export default function CartScreen({ cart, onBack, onProceed, onChangeQty, onRemove }) {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (cartId) => {
    setExpanded((e) => ({ ...e, [cartId]: !e[cartId] }));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="screen-shell">
      <header className="subpage-header">
        <div className="subpage-logo">Kusina Store</div>
        <button className="back-link" onClick={onBack}>
          <ArrowLeft size={14} /> Continue Shopping
        </button>
      </header>

      <div className="ks-container screen-main">
        <div className="page-head compact">
          <h1>Your Recipe Ingredients Cart</h1>
        </div>

        <div className="cart-body">
          <div className="cart-section scroll-box">
            {cart.length === 0 && (
              <div className="empty-cart">
                Your cart is empty — go pick a recipe kit to add.
              </div>
            )}

            {cart.map((item) => (
              <div className="cart-item" key={item.cartId}>
                <DishThumb dish={item} className="item-img" iconSize={18} />
                <div className="item-details">
                  <span className="recipe-tag">Ulam Recipe Kit</span>
                  <div className="item-title">{item.name} Kit</div>
                  <button
                    className="whats-inside-toggle"
                    onClick={() => toggleExpand(item.cartId)}
                  >
                    {expanded[item.cartId] ? "Hide what's inside ▴" : "What's inside? ▾"}
                  </button>
                  {expanded[item.cartId] && (
                    <div className="ingredient-list">
                      <strong>Includes:</strong> {item.ingredients.join(", ")}.
                    </div>
                  )}
                  <div className="qty-control">
                    <button className="qty-btn" onClick={() => onChangeQty(item.cartId, -1)}>
                      <Minus size={12} />
                    </button>
                    <span className="qty-val">{item.qty}</span>
                    <button className="qty-btn" onClick={() => onChangeQty(item.cartId, 1)}>
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <div className="item-subtotal">₱{item.price * item.qty}</div>
                <button
                  className="btn-remove"
                  title="Remove Recipe"
                  onClick={() => onRemove(item.cartId)}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="summary-panel">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Recipe Bundles ({cart.length})</span>
              <span>₱{total}</span>
            </div>
            <div className="summary-row">
              <span>Estimated Delivery</span>
              <span>Calculated at Checkout</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>₱{total}</span>
            </div>
            <button className="btn-proceed" onClick={onProceed} disabled={cart.length === 0}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}