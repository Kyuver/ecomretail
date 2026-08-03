import React from "react";
import { ImageOff } from "lucide-react";

export default function DishThumb({ dish, className = "product-image", iconSize = 22 }) {
  if (dish.image) {
    return <img src={dish.image} alt={dish.name} className={className} />;
  }
  return (
    <div className={className + "-placeholder thumb-placeholder"}>
      <ImageOff size={iconSize} />
      <span className="thumb-placeholder-label">photo coming soon</span>
    </div>
  );
}