# Kusina Store

A small React app (Vite) for browsing Filipino recipe-ingredient bundles,
picking what you need, adding to cart, and checking out.

## Why nothing worked before

The previous version was a single `KusinaStoreApp.jsx` file dropped next to
old static `.html` pages, with no build tool wiring it up — there was no
entry point telling the browser to actually mount the React app, so
clicking things did nothing. This folder fixes that: it's a real Vite
project with a proper entry point (`index.html` → `src/main.jsx` → `App.jsx`).

**Delete the old `cart.html`, `checkout.html`, `index.html`, `recipe.html`,
and the loose `KusinaStoreApp.jsx`** from your project — they're replaced by
the `src/` folder here.

## Project structure

```
kusina-store/
├── index.html              ← Vite entry HTML (loads fonts + mounts React)
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx             ← mounts <App /> into #root
│   ├── App.jsx               ← owns navigation + cart state
│   ├── data/
│   │   └── dishes.js          ← every dish's name, price, image, ingredients
│   ├── styles/
│   │   └── global.css          ← all the site's CSS
│   └── components/
│       ├── HomeScreen.jsx        ← hero carousel, specials, featured grid
│       ├── RecipeScreen.jsx       ← ingredient checklist + add to cart
│       ├── CartScreen.jsx          ← cart items, "what's inside", qty
│       ├── CheckoutScreen.jsx       ← address, payment, transport
│       └── ConfirmationScreen.jsx    ← order placed screen
```

## Running it

You need [Node.js](https://nodejs.org) installed (v18+ recommended).

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Building for deployment

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy anywhere (Vercel,
Netlify, GitHub Pages, etc).

## Notes

- Cart state lives in React state only (no localStorage) — refreshing the
  page resets everything. That's expected for now; swap in a real backend
  or persistence layer when you're ready.
- Some dish photos point to stock-photo preview URLs (istock, ftcdn,
  shutterstock) that may show watermarks or break — swap them for your own
  images in `src/data/dishes.js` whenever you have them.
