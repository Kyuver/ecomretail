import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function ConfirmationScreen({ order, onBackHome }) {
  return (
    <div className="confirm-wrap">
      <div className="confirm-card">
        <CheckCircle2 size={48} color="#117700" style={{ margin: "0 auto" }} />
        <h1>Order Placed!</h1>
        <p>
          Thanks, {order.address.fullName || "friend"}! Your order worth ₱{order.total} will
          arrive via {order.transport === "moto" ? "moto" : "car"} delivery, paid by{" "}
          {order.payment === "cod"
            ? "Cash on Delivery"
            : order.payment === "gcash"
            ? "GCash"
            : "Card"}
          . (Placeholder confirmation — connect to a real order system later.)
        </p>
        <button className="btn-shop" onClick={onBackHome}>
          Back to Store
        </button>
      </div>
    </div>
  );
}
