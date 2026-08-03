import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import DishThumb from "./DishThumb.jsx";

export default function RecipeScreen({ dish, cartCount, onBack, onGoToCart, onAddToCart }) {
  const [checked, setChecked] = useState(() => dish.ingredients.map(() => true));

  useEffect(() => {
    setChecked(dish.ingredients.map(() => true));
  }, [dish]);

  const toggle = (idx) => {
    setChecked((c) => c.map((v, i) => (i === idx ? !v : v)));
  };

  const checkedCount = checked.filter(Boolean).length;
  const bundlePrice = Math.max(
    1,
    Math.round((dish.price * checkedCount) / dish.ingredients.length)
  );

  const handleAdd = () => {
    onAddToCart({
      cartId: `${dish.id}-${Date.now()}`,
      dishId: dish.id,
      name: dish.name,
      image: dish.image,
      price: bundlePrice,
      qty: 1,
      ingredients: dish.ingredients.filter((_, i) => checked[i]),
    });
  };

  return (
    <div className="screen-shell">
      <header className="subpage-header">
        <div className="subpage-logo">Kusina Store</div>
        <button className="back-link" onClick={onBack}>
          <ArrowLeft size={14} /> Back to Store
        </button>
        <button className="cart-link" onClick={onGoToCart}>
          Cart <div className="cart-badge">{cartCount}</div>
        </button>
      </header>

      <div className="ks-container screen-main">
        <div className="recipe-hero compact">
          <DishThumb dish={dish} className="recipe-photo" iconSize={26} />
          <div className="recipe-hero-text">
            <span className="placeholder-badge">Recipe kit — you pick what you need</span>
            <h1>{dish.name}</h1>
            <p className="subtitle">{dish.description}</p>
          </div>
        </div>

        <div className="recipe-body">
          <div className="ingredients-panel scroll-box">
            <h2>Ingredients</h2>
            <p className="ingredients-note">
              Check the ones you need — uncheck anything you already have at home.
            </p>

            {dish.ingredients.map((ing, idx) => (
              <div className="ingredient-row" key={ing}>
                <input
                  type="checkbox"
                  checked={checked[idx]}
                  onChange={() => toggle(idx)}
                />
                <div className="ingredient-info">
                  <div className="name">{ing}</div>
                </div>
                <div className="ingredient-thumb">photo</div>
              </div>
            ))}
          </div>

          <div className="summary-panel">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Selected items</span>
              <span>
                {checkedCount}/{dish.ingredients.length}
              </span>
            </div>
            <div className="summary-row">
              <span>Bundle price</span>
              <span>₱{bundlePrice}</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>₱{bundlePrice}</span>
            </div>
            <button
              className="btn-add-cart"
              onClick={handleAdd}
              disabled={checkedCount === 0}
            >
              Add to Cart
            </button>
            <p className="summary-note">Prices scale with what you actually select</p>
          </div>
        </div>
      </div>
    </div>
  );
}