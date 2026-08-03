import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DishThumb from "./DishThumb.jsx";

export default function CategoryCarousel({ title, dishes, onSelectDish }) {
  const trackRef = useRef(null);

  const scrollByCards = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.querySelector(".carousel-card")?.offsetWidth || 220;
    track.scrollBy({ left: dir * (cardWidth + 16) * 2, behavior: "smooth" });
  };

  if (!dishes || dishes.length === 0) return null;

  const sectionId = "cat-" + title.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="category-carousel" id={sectionId}>
      <div className="category-carousel-head">
        <h3 className="section-title">{title}</h3>
      </div>

      <div className="carousel-wrapper">
        <button className="carousel-side-arrow prev" onClick={() => scrollByCards(-1)} aria-label="Scroll left">
          <ChevronLeft size={20} />
        </button>
        <button className="carousel-side-arrow next" onClick={() => scrollByCards(1)} aria-label="Scroll right">
          <ChevronRight size={20} />
        </button>

        <div className="carousel-track" ref={trackRef}>
          {dishes.map((dish) => (
            <div className="product-card carousel-card" key={dish.id}>
              <a className="card-link" onClick={() => onSelectDish(dish.id)}>
                <div className="image-wrap">
                  <DishThumb dish={dish} />
                </div>
                <div className="product-title">{dish.name}</div>
              </a>
              <div className="product-footer">
                <div>
                  <div className="current-price">₱{dish.price}</div>
                  {dish.oldPrice && <div className="old-price">₱{dish.oldPrice}</div>}
                </div>
                <button className="btn-details" onClick={() => onSelectDish(dish.id)}>
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}