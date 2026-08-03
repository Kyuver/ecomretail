export const DISHES = [
  {
    id: "crispy-pata",
    name: "Crispy Pata",
    section: "hero",
    categories: ["Ulam"],
    price: 499,
    image: "/images/crispy-pata.png",
    tagline: "A Filipino favorite for every occasion.",
    description:
      "Deep-fried pork leg served crispy on the outside and tender inside. Best paired with rice and a vinegar-soy dip.",
    ingredients: [
      "1 Whole Pork Leg (Pata)",
      "3 cloves Garlic",
      "1 tbsp Peppercorns",
      "2 Bay Leaves",
      "Salt",
      "Cooking Oil (for frying)",
    ],
  },
  {
    id: "pork-menudo",
    name: "Pork Menudo",
    section: "hero",
    categories: ["Ulam"],
    price: 230,
    image: "/images/pork-menudo.png",
    tagline: "Savory, rich tomato stew favorite.",
    description:
      "Tender pork cubes simmered with liver, potatoes, carrots, and raisins in a rich, flavorful tomato sauce base.",
    ingredients: [
      "500g Pork Shoulder",
      "150g Pork Liver",
      "2 Potatoes",
      "2 Carrots",
      "Raisins",
      "Tomato Sauce",
    ],
  },
  {
    id: "beef-bulalo",
    name: "Beef Bulalo",
    section: "hero",
    categories: ["Ulam"],
    price: 380,
    image: "/images/beef-bulalo.png",
    tagline: "Comforting beef shank bone marrow soup.",
    description:
      "Slow-cooked beef shanks with buttery bone marrow, fresh corn on the cob, and crisp leafy vegetables in savory broth.",
    ingredients: [
      "1kg Beef Shanks with Marrow",
      "2 Sweet Corn, sliced",
      "Pechay",
      "Cabbage",
      "Whole Peppercorns",
      "Fish Sauce",
    ],
  },
  {
    id: "paksiw-bangus",
    name: "Paksiw na Bangus",
    section: "hero",
    categories: ["Ulam"],
    price: 195,
    image: "/images/paksiw-bangus.png",
    tagline: "Tangy vinegar-poached milkfish dish.",
    description:
      "Fresh milkfish simmered gently in vinegar, ginger, garlic, eggplant, and long green chili peppers for a clean sour kick.",
    ingredients: [
      "1 Whole Milkfish (Bangus)",
      "Cane Vinegar",
      "Ginger, sliced",
      "1 Eggplant",
      "Siling Haba",
      "Garlic",
    ],
  },
  {
    id: "sizzling-sisig",
    name: "Sizzling Sisig",
    section: "hero",
    categories: ["Ulam"],
    price: 220,
    image: "/images/pork-sisig.png",
    tagline: "Pampanga's famous sizzling delicacy.",
    description:
      "Crispy minced pork belly seasoned with citrus calamansi, chili peppers, onions, topped with a fresh egg on a hot plate.",
    ingredients: [
      "500g Pork Belly, chopped",
      "Red Onions",
      "Chili Fingers",
      "Calamansi",
      "Mayonnaise",
      "1 Fresh Egg",
    ],
  },
  // ---- Specials ----
  {
    id: "sinigang-baboy",
    name: "Sinigang na Baboy",
    section: "specials",
    categories: ["Ulam"],
    price: 220,
    oldPrice: 260,
    isFavorite: true,
    rating: 4.8,
    image: "/images/pork-sinigang.png",
    tagline: "Sour pork stew, home-style comfort.",
    description:
      "Pork belly simmered in a tangy tamarind broth with kangkong, radish, and vegetables.",
    ingredients: [
      "1kg Pork Belly (Liempo)",
      "1 pack Sampalok Mix",
      "Kangkong",
      "Radish (Labanos)",
      "Tomato & Onion",
    ],
  },
  {
    id: "chicken-adobo",
    name: "Chicken Adobo",
    section: "specials",
    categories: ["Ulam"],
    price: 180,
    oldPrice: 210,
    isFavorite: true,
    rating: 4.9,
    image: "/images/chicken-adobo.png",
    tagline: "The Filipino classic, done right.",
    description:
      "Chicken braised in soy sauce, vinegar, and garlic until tender and deeply savory.",
    ingredients: ["1kg Chicken", "Soy Sauce", "Vinegar", "Garlic", "Bay Leaves"],
  },
  {
    id: "halo-halo",
    name: "Halo-Halo",
    section: "specials",
    categories: ["Desserts", "Merienda"],
    price: 120,
    oldPrice: 150,
    rating: 4.6,
    image: "/images/halo-halo.png",
    tagline: "Cool down with this iconic dessert.",
    description:
      "Shaved ice mixed with sweet beans, jackfruit, and ube ice cream for the ultimate merienda.",
    ingredients: ["Shaved Ice", "Evaporated Milk", "Sweet Beans", "Jackfruit", "Ube Ice Cream"],
  },
  {
    id: "pork-bbq",
    name: "Pork BBQ Skewers",
    section: "specials",
    categories: ["Merienda", "Street Food"],
    price: 150,
    oldPrice: 180,
    image: "/images/pork-bbq.png",
    tagline: "Sweet, smoky, street-food favorite.",
    description:
      "Marinated pork belly cubes grilled on skewers, brushed with a sweet basting sauce.",
    ingredients: [
      "Pork Belly Cubes",
      "Soy Sauce",
      "Banana Ketchup",
      "Calamansi",
      "Skewer Sticks",
    ],
  },
  // ---- Featured ----
  {
    id: "lechon-kawali",
    name: "Lechon Kawali",
    section: "featured",
    categories: ["Ulam"],
    price: 280,
    isFavorite: true,
    rating: 4.7,
    image: "/images/pork-liempo.png",
    tagline: "Crispy fried pork belly slab.",
    description:
      "Boiled then deep-fried pork belly, shatteringly crisp on the outside, juicy inside.",
    ingredients: ["1kg Pork Belly Slab", "Bay Leaves", "Peppercorns", "Salt", "Cooking Oil"],
  },
  {
    id: "pancit-canton",
    name: "Pancit Canton",
    section: "featured",
    categories: ["Merienda"],
    price: 160,
    rating: 4.5,
    image: "/images/pancit-canton.png",
    tagline: "Stir-fried noodles, party staple.",
    description:
      "Canton noodles stir-fried with vegetables and your choice of meat in a savory sauce.",
    ingredients: [
      "Canton Noodles",
      "Soy Sauce",
      "Cabbage",
      "Carrots",
      "Pork or Chicken Slices",
    ],
  },
  {
    id: "kare-kare",
    name: "Kare-Kare",
    section: "featured",
    categories: ["Ulam"],
    price: 240,
    isFavorite: true,
    rating: 4.9,
    image: "/images/kare-kare.png",
    tagline: "Rich peanut oxtail stew.",
    description:
      "Oxtail and vegetables simmered in a thick, savory peanut sauce, served with bagoong.",
    ingredients: ["Oxtail", "Peanut Sauce Mix", "Eggplant", "String Beans", "Bagoong"],
  },
  {
    id: "leche-flan",
    name: "Leche Flan",
    section: "featured",
    categories: ["Desserts"],
    price: 90,
    image: "/images/leche-flan.png",
    tagline: "Silky caramel custard dessert.",
    description:
      "Steamed egg custard topped with a rich caramel sauce — a Filipino celebration staple.",
    ingredients: ["Egg Yolks", "Condensed Milk", "Evaporated Milk", "Sugar (for caramel)"],
  },

  // ================= NEW DELICACIES (placeholder photos) =================

  // ---- Desserts (fills out to 7 with Leche Flan + Halo-Halo) ----
  {
    id: "turon",
    name: "Turon",
    categories: ["Desserts", "Merienda"],
    price: 60,
    image: "/images/turon.png",
    tagline: "Crispy caramelized banana rolls.",
    description:
      "Saba banana and jackfruit wrapped in lumpia wrapper, fried until golden and crackly with caramelized sugar.",
    ingredients: [
      "3 Saba Bananas",
      "Jackfruit strips",
      "Brown Sugar",
      "Lumpia Wrapper",
      "Cooking Oil",
    ],
  },
  {
    id: "bibingka",
    name: "Bibingka",
    categories: ["Desserts"],
    price: 70,
    image: "/images/bibingka.png",
    tagline: "Baked rice cake, a Christmas season classic.",
    description:
      "Soft rice cake baked in banana leaves, topped with salted egg and grated coconut.",
    ingredients: ["Rice Flour", "Coconut Milk", "Eggs", "Salted Egg, sliced", "Banana Leaf"],
  },
  {
    id: "puto",
    name: "Puto",
    categories: ["Desserts", "Merienda"],
    price: 50,
    image: "/images/puto.png",
    tagline: "Steamed rice cake, simple and comforting.",
    description:
      "Soft steamed rice muffins, lightly sweet, often topped with cheese or a slice of salted egg.",
    ingredients: ["Rice Flour", "Sugar", "Baking Powder", "Cheese", "Coconut Milk"],
  },
  {
    id: "maja-blanca",
    name: "Maja Blanca",
    categories: ["Desserts"],
    price: 65,
    image: "/images/maja-blanca.png",
    tagline: "Creamy coconut-corn pudding.",
    description:
      "A milky, jiggly coconut pudding studded with sweet corn, topped with toasted coconut curds (latik).",
    ingredients: [
      "Coconut Milk",
      "Cornstarch",
      "Sugar",
      "Corn Kernels",
      "Latik (toasted coconut curds)",
    ],
  },
  {
    id: "buko-pandan",
    name: "Buko Pandan",
    categories: ["Desserts"],
    price: 75,
    image: "/images/buko-pandan.png",
    tagline: "Refreshing coconut and pandan dessert salad.",
    description:
      "Young coconut strips and pandan-flavored gelatin cubes in a sweet, creamy mixture.",
    ingredients: [
      "Young Coconut Strips",
      "Pandan Gelatin",
      "All-Purpose Cream",
      "Condensed Milk",
      "Nata de Coco",
    ],
  },

  {
    id: "kwek-kwek",
    name: "Kwek-Kwek",
    categories: ["Merienda", "Street Food"],
    price: 45,
    image: "/images/kwek-kwek.png",
    tagline: "Orange-battered deep-fried quail eggs.",
    description:
      "Boiled quail eggs coated in a bright orange batter, deep-fried until crisp, served with a vinegar dip.",
    ingredients: ["Quail Eggs", "Orange Batter Mix", "Cooking Oil", "Vinegar Dip", "Cornstarch"],
  },
  {
    id: "banana-cue",
    name: "Banana Cue",
    categories: ["Merienda", "Street Food"],
    price: 40,
    image: "/images/banana-cue.png",
    tagline: "Caramelized fried banana on a stick.",
    description:
      "Saba bananas deep-fried and coated in caramelized brown sugar, served hot on a skewer.",
    ingredients: ["Saba Bananas", "Brown Sugar", "Cooking Oil", "Skewer Sticks"],
  },
  {
    id: "fishball",
    name: "Fishball",
    categories: ["Merienda", "Street Food"],
    price: 35,
    image: "/images/fishball.png",
    tagline: "Classic Filipino street-food snack.",
    description:
      "Deep-fried fishballs served on a stick with sweet and spicy vinegar dipping sauces.",
    ingredients: ["Fishballs", "Sweet Chili Sauce", "Vinegar Dip", "Cooking Oil", "Skewer Sticks"],
  },

  {
    id: "isaw",
    name: "Isaw",
    categories: ["Street Food"],
    price: 30,
    image: "/images/isaw.png",
    tagline: "Grilled chicken or pork intestines.",
    description:
      "Skewered and grilled intestines marinated in annatto oil, best with spicy vinegar dip.",
    ingredients: [
      "Chicken or Pork Intestines",
      "Annatto Marinade",
      "Vinegar Dip",
      "Skewer Sticks",
      "Charcoal Grill Sauce",
    ],
  },
  {
    id: "betamax",
    name: "Betamax",
    categories: ["Street Food"],
    price: 30,
    image: "/images/betamax.png",
    tagline: "Grilled chicken blood cubes on a stick.",
    description:
      "Coagulated chicken blood cubes marinated and grilled, named after old video cassette tapes.",
    ingredients: ["Chicken Blood Cubes", "Annatto Marinade", "Skewer Sticks", "Vinegar Dip", "Chili"],
  },
  {
    id: "balut",
    name: "Balut",
    categories: ["Street Food"],
    price: 40,
    image: "/images/balut.png",
    tagline: "Iconic fertilized duck egg snack.",
    description:
      "A classic late-night Filipino street snack, boiled and eaten with salt and vinegar.",
    ingredients: ["Balut Eggs", "Salt", "Vinegar with Chili", "Calamansi"],
  },
  {
    id: "kikiam",
    name: "Kikiam",
    categories: ["Street Food"],
    price: 35,
    image: "/images/kikiam.png",
    tagline: "Deep-fried Chinese-Filipino meat roll.",
    description:
      "Seasoned ground meat and vegetables wrapped in bean curd skin, deep-fried and sliced.",
    ingredients: ["Kikiam Sticks", "Sweet-Sour Sauce", "Cooking Oil", "Skewer Sticks"],
  },

  {
    id: "tortang-talong",
    name: "Tortang Talong",
    categories: ["Budget Meals"],
    price: 60,
    image: "/images/tortang-talong.png",
    tagline: "Simple, filling eggplant omelet.",
    description:
      "Grilled eggplant dipped in beaten egg and pan-fried — a budget-friendly home staple.",
    ingredients: ["Eggplant", "Eggs", "Ground Pork (optional)", "Garlic", "Cooking Oil"],
  },
  {
    id: "ginisang-munggo",
    name: "Ginisang Munggo",
    categories: ["Budget Meals"],
    price: 55,
    image: "/images/munggo.png",
    tagline: "Hearty mung bean stew.",
    description:
      "Mung beans simmered with vegetables and tinapa flakes — cheap, filling, and nutritious.",
    ingredients: [
      "Mung Beans",
      "Ampalaya Leaves or Malunggay",
      "Garlic & Onion",
      "Tinapa Flakes",
      "Fish Sauce",
    ],
  },
  {
    id: "ginisang-sardinas",
    name: "Ginisang Sardinas",
    categories: ["Budget Meals"],
    price: 50,
    image: "/images/gisang-sardinas.png",
    tagline: "Canned sardines, upgraded.",
    description: "Canned sardines sautéed with tomato, onion, and egg for an easy, affordable ulam.",
    ingredients: ["Canned Sardines", "Tomato", "Onion", "Garlic", "Egg"],
  },
  {
    id: "corned-beef-guisado",
    name: "Corned Beef Guisado",
    categories: ["Budget Meals"],
    price: 65,
    image: "/images/corn-beef.png",
    tagline: "Classic canned corned beef sauté.",
    description: "Corned beef sautéed with potatoes, onion, and garlic — a pantry-staple favorite.",
    ingredients: ["Canned Corned Beef", "Potatoes", "Onion", "Garlic", "Cooking Oil"],
  },
  {
    id: "egg-fried-rice",
    name: "Egg Fried Rice",
    categories: ["Budget Meals"],
    price: 45,
    image: "/images/fried-rice.png",
    tagline: "Simple, no-waste fried rice.",
    description: "Day-old rice fried with egg, garlic, and green onion — the easiest budget meal there is.",
    ingredients: ["Leftover Rice", "Eggs", "Garlic", "Soy Sauce", "Green Onion"],
  },
  {
    id: "ginisang-ampalaya",
    name: "Ginisang Ampalaya",
    categories: ["Budget Meals"],
    price: 50,
    image: "/images/gisang-ampalaya.png",
    tagline: "Sautéed bitter gourd with egg.",
    description: "Bitter gourd sautéed with egg, tomato, and onion — an affordable everyday vegetable dish.",
    ingredients: ["Bitter Gourd", "Eggs", "Tomato", "Onion", "Garlic"],
  },
  {
    id: "tinapa-fried-rice",
    name: "Tinapa Fried Rice",
    categories: ["Budget Meals"],
    price: 55,
    image: "/images/tinapa-rice.png",
    tagline: "Smoky, savory smoked fish fried rice.",
    description: "Garlic rice tossed with flaked smoked fish (tinapa), egg, tomato, and onion.",
    ingredients: ["Smoked Fish Flakes", "Garlic Rice", "Egg", "Tomato", "Onion"],
  },
];

export const HERO_DISHES = DISHES.filter((d) => d.section === "hero");
export const SPECIALS = DISHES.filter((d) => d.section === "specials");
export const FEATURED = DISHES.filter((d) => d.section === "featured");
export const FAVORITES = DISHES.filter((d) => d.isFavorite);
export const HIGHEST_RATED = [...DISHES]
  .filter((d) => d.rating)
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 4);

export const CATEGORIES = ["Ulam", "Merienda", "Street Food", "Desserts", "Budget Meals"];

/** Returns up to `limit` dishes tagged with the given category. */
export function dishesByCategory(category, limit = 12) {
  return DISHES.filter((d) => d.categories && d.categories.includes(category)).slice(0, limit);
}