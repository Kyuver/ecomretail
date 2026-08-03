import React, { useState, useEffect, useRef } from "react";
import { Search, ChevronLeft, ChevronRight, Star, Heart, Phone, Mail, MessageSquareHeart, ShoppingCart, SearchX } from "lucide-react";
import { HERO_DISHES, SPECIALS, FEATURED, FAVORITES, HIGHEST_RATED, CATEGORIES, dishesByCategory } from "../data/dishes.js";
import CategoryCarousel from "./CategoryCarousel.jsx";

export default function HomeScreen({ cartCount, onSelectDish, onGoToCart, onQuickAdd }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [exploreSearch, setExploreSearch] = useState("");
  const touchStartX = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSlideIndex((i) => (i + 1) % HERO_DISHES.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSlideIndex((i) => (i + 1) % HERO_DISHES.length);
    }, 5000);
  };

  const moveSlide = (n) => {
    setSlideIndex((i) => (i + n + HERO_DISHES.length) % HERO_DISHES.length);
    resetAutoSlide();
  };

  const goToSlide = (n) => {
    setSlideIndex(n);
    resetAutoSlide();
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) moveSlide(-1);
    else if (delta < -50) moveSlide(1);
    touchStartX.current = null;
  };

  const scrollToCategory = (cat) => {
    const id = "cat-" + cat.toLowerCase().replace(/\s+/g, "-");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
    <div className="ks-container">
      <header className="header-main">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button type="button">
            <Search size={12} /> SEARCH
          </button>
        </div>

        <div className="brand-logo">
          <h1>Kusina Store</h1>
          <p>Filipino Food recipes and delivery</p>
        </div>

        <a className="cart-widget" onClick={onGoToCart}>
          <ShoppingCart size={18} />
          <span className="cart-text">Shopping Cart</span>
          <div className="cart-badge">{cartCount}</div>
        </a>
      </header>

      <nav className="category-bar">
        <ul className="category-nav">
          {CATEGORIES.map((cat) => (
            <li key={cat}>
              <a onClick={() => scrollToCategory(cat)}>{cat}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hero-carousel-wrapper">
        <button className="slider-arrow prev" onClick={() => moveSlide(-1)}>
          <ChevronLeft size={22} />
        </button>
        <button className="slider-arrow next" onClick={() => moveSlide(1)}>
          <ChevronRight size={22} />
        </button>

        <div
          className="hero-carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {HERO_DISHES.map((dish, i) => (
            <div
              key={dish.id}
              className={"hero-slide" + (i === slideIndex ? " active" : "")}
              onClick={() => onSelectDish(dish.id)}
              role="button"
              tabIndex={0}
            >
              <img src={dish.image} alt={dish.name} className="hero-image" />
              <div className="hero-price">₱{dish.price}</div>
              <div className="hero-content">
                <div className="hero-title-overlay">
                  <h2>{dish.name}</h2>
                </div>
                <div className="hero-details">
                  <h4>{dish.tagline}</h4>
                  <p>{dish.description}</p>
                  <button
                    className="btn-shop"
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickAdd(dish);
                    }}
                  >
                    Order Now!
                  </button>
                </div>
              </div>
              <div className="hero-recipe-preview">
                <span className="eyebrow">Recipe Preview</span>
                <h3>{dish.name}</h3>
                <p>{dish.ingredients.join(" · ")}...</p>
                <button
                  className="see-more-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectDish(dish.id);
                  }}
                >
                  See more →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-pagination">
          {HERO_DISHES.map((_, i) => (
            <button
              key={i}
              className={"dot" + (i === slideIndex ? " active" : "")}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>

      <section>
        <div className="section-header">
          <h3 className="section-title">Specials</h3>
        </div>
        <div className="product-grid">
          {SPECIALS.map((dish, i) => (
            <div className="product-card" key={dish.id}>
              {i === 0 && <div className="specials-ribbon">Specials</div>}
              <a className="card-link" onClick={() => onSelectDish(dish.id)}>
                <div className="image-wrap">
                  <img src={dish.image} alt={dish.name} className="product-image" />
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
      </section>

      <section>
        <div className="section-header">
          <h3 className="section-title">Featured Products</h3>
        </div>
        <div className="product-grid featured-grid">
          {FEATURED.map((dish) => (
            <div className="product-card" key={dish.id}>
              <a className="card-link" onClick={() => onSelectDish(dish.id)}>
                <div className="image-wrap">
                  <img src={dish.image} alt={dish.name} className="product-image" />
                </div>
                <div className="product-title">{dish.name}</div>
              </a>
              <div className="product-footer">
                <div className="current-price">₱{dish.price}</div>
                <button className="btn-details" onClick={() => onSelectDish(dish.id)}>
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="section-header">
          <h3 className="section-title">Favorites</h3>
        </div>
        <div className="product-grid">
          {FAVORITES.map((dish) => (
            <div className="product-card" key={dish.id}>
              <div className="favorite-badge">
                <Heart size={13} fill="#fff" />
              </div>
              <a className="card-link" onClick={() => onSelectDish(dish.id)}>
                <div className="image-wrap">
                  <img src={dish.image} alt={dish.name} className="product-image" />
                </div>
                <div className="product-title">{dish.name}</div>
              </a>
              <div className="product-footer">
                <div className="current-price">₱{dish.price}</div>
                <button className="btn-details" onClick={() => onSelectDish(dish.id)}>
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <h3 className="section-title">Highest Rated</h3>
        </div>
        <div className="product-grid">
          {HIGHEST_RATED.map((dish) => (
            <div className="product-card" key={dish.id}>
              <div className="rating-badge">
                <Star size={11} fill="#ffb733" /> {dish.rating}
              </div>
              <a className="card-link" onClick={() => onSelectDish(dish.id)}>
                <div className="image-wrap">
                  <img src={dish.image} alt={dish.name} className="product-image" />
                </div>
                <div className="product-title">{dish.name}</div>
              </a>
              <div className="product-footer">
                <div className="current-price">₱{dish.price}</div>
                <button className="btn-details" onClick={() => onSelectDish(dish.id)}>
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>

    {/* Full-bleed solid white section — sits outside ks-container so it spans edge to edge */}
    <div className="category-showcase-wrap">
      <div className="section-head-block">
        <span className="eyebrow">Browse by Category</span>
        <h2>Explore More Recipe Kits</h2>
        <div className="explore-search-box">
          <Search size={14} />
          <input
            type="text"
            placeholder="Search a recipe kit..."
            value={exploreSearch}
            onChange={(e) => setExploreSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="category-showcase-inner">
        {(() => {
          const query = exploreSearch.trim().toLowerCase();
          const results = CATEGORIES.map((cat) => ({
            cat,
            items: dishesByCategory(cat).filter(
              (d) => !query || d.name.toLowerCase().includes(query)
            ),
          }));
          const hasAnyResults = results.some((r) => r.items.length > 0);

          if (query && !hasAnyResults) {
            return (
              <div className="no-results">
                <SearchX size={32} />
                <p className="no-results-main">Sorry we don't have that recipe kit YET.</p>
                <p className="no-results-sub">search another one</p>
              </div>
            );
          }

          return results.map(({ cat, items }) => (
            <CategoryCarousel key={cat} title={cat} dishes={items} onSelectDish={onSelectDish} />
          ));
        })()}
      </div>
    </div>

    <div className="contact-bar">
      <div className="contact-heading">
        <h3>Need Help?</h3>
        <p>Reach out to the Kusina Store team anytime.</p>
      </div>
      <div className="contact-items">
        <div className="contact-item">
          <div className="icon-circle">
            <Phone size={16} />
          </div>
          <div className="contact-text">
            <div className="label">Call / Text</div>
            <div className="value">+63 9XX XXX XXXX</div>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon-circle">
            <Mail size={16} />
          </div>
          <div className="contact-text">
            <div className="label">Email</div>
            <div className="value">hello@kusinastore.ph</div>
          </div>
        </div>
      </div>
      <button className="btn-feedback">
        <MessageSquareHeart size={15} /> Send Feedback
      </button>
    </div>
    </>
  );
}