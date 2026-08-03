import React, { useState } from "react";
import { DISHES } from "./data/dishes.js";
import HomeScreen from "./components/HomeScreen.jsx";
import RecipeScreen from "./components/RecipeScreen.jsx";
import CartScreen from "./components/CartScreen.jsx";
import CheckoutScreen from "./components/CheckoutScreen.jsx";
import ConfirmationScreen from "./components/ConfirmationScreen.jsx";

export default function App() {
  const [screen, setScreen] = useState("home"); // home | recipe | cart | checkout | confirmation
  const [selectedDishId, setSelectedDishId] = useState(null);
  const [cart, setCart] = useState([]);
  const [lastOrder, setLastOrder] = useState(null);

  const selectedDish = DISHES.find((d) => d.id === selectedDishId);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const goTo = (target) => {
    setScreen(target);
    window.scrollTo?.(0, 0);
  };

  const handleSelectDish = (dishId) => {
    setSelectedDishId(dishId);
    goTo("recipe");
  };

  const handleAddToCart = (newItem) => {
    setCart((c) => [...c, newItem]);
    goTo("cart");
  };

  const handleChangeQty = (cartId, delta) => {
    setCart((c) =>
      c.map((item) =>
        item.cartId === cartId ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const handleRemove = (cartId) => {
    setCart((c) => c.filter((item) => item.cartId !== cartId));
  };

  const handlePlaceOrder = (orderInfo) => {
    setLastOrder(orderInfo);
    goTo("confirmation");
  };

  const handleBackHome = () => {
    setCart([]);
    setLastOrder(null);
    goTo("home");
  };

  return (
    <div className="ks-root">
      {screen === "home" && <div className="ks-bg-wash" />}

      {screen === "home" && (
        <HomeScreen
          cartCount={cartCount}
          onSelectDish={handleSelectDish}
          onGoToCart={() => goTo("cart")}
        />
      )}

      {screen === "recipe" && selectedDish && (
        <RecipeScreen
          dish={selectedDish}
          cartCount={cartCount}
          onBack={() => goTo("home")}
          onGoToCart={() => goTo("cart")}
          onAddToCart={handleAddToCart}
        />
      )}

      {screen === "cart" && (
        <CartScreen
          cart={cart}
          onBack={() => goTo("home")}
          onProceed={() => goTo("checkout")}
          onChangeQty={handleChangeQty}
          onRemove={handleRemove}
        />
      )}

      {screen === "checkout" && (
        <CheckoutScreen cart={cart} onBack={() => goTo("cart")} onPlaceOrder={handlePlaceOrder} />
      )}

      {screen === "confirmation" && lastOrder && (
        <ConfirmationScreen order={lastOrder} onBackHome={handleBackHome} />
      )}
    </div>
  );
}
