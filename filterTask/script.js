const availableProducts = [
  {
    productId: "P001",
    name: "Nivea Natural Glow",
    description: "A lightweight daily lotion enriched with Vitamin C and pearl extracts to enhance skin radiance and even tone.",
    image: "https://i5.walmartimages.com/seo/Nivea-Body-Lotion-Natural-Glow-Even-Tone-400ML_ed958de6-5922-473e-9dc7-faf78bf08ecb.3f9e3fe2e399f910da6658e00b5fcff2.jpeg",
    price: 4500
  },
  {
    productId: "P002",
    name: "Biore UV Aqua Rich Sunscreen SPF 50+",
    description: "A Japanese lightweight, watery sunscreen that absorbs quickly and provides superior sun protection without leaving a white cast.",
    image: "https://thebeautyprismng.com/wp-content/uploads/2022/11/biore-scaled.jpg",
    price: 7500
  },
  {
    productId: "P003",
    name: "Amlactin Daily Nourish Lotion",
    description: "A gentle exfoliating moisturizer formulated with lactic acid to smooth rough, dry skin and promote glow.",
    image: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/94/1737814/1.jpg?1544",
    price: 13500
  },
  {
    productId: "P004",
    name: "Vaseline Daily Brightening Lotion",
    description: "Infused with micro-droplets of Vaseline jelly and Vitamin B3 to restore and brighten dull skin.",
    image: "https://i.ebayimg.com/images/g/F~QAAOSwXJJoBzIH/s-l1600.webp",
    price: 4800
  },
  {
    productId: "P005",
    name: "Alpha Arbutin & Collagen Soap",
    description: "A brightening soap formulated to fade dark spots and support firm, youthful skin with collagen boost.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJgXcWBWsIyrWxEeDOXVRz35YKb5VKQUwyQ&s",
    price: 2500
  },
  {
    productId: "P006",
    name: "CeraVe Moisturizing Cream",
    description: "A rich, non-greasy cream with ceramides and hyaluronic acid that restores and protects the skin barrier.",
    image: "https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/skincare/moisturizers/daily-moisturizing-lotion/2025/daily-moisturizing-lotion_front.jpg?rev=289f877c25bd49c28b66385e8e16ce22",
    price: 16500
  },
  {
    productId: "P007",
    name: "The Ordinary Niacinamide 10% + Zinc 1%",
    description: "A high-strength serum that visibly reduces blemishes, congestion, and regulates sebum production.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdJrv2O1P8rneFg6y03PMVae4e6ZWd5xHhkw&s",
    price: 9500
  },
  {
    productId: "P008",
    name: "Neutrogena Hydro Boost Water Gel",
    description: "An oil-free moisturizer with hyaluronic acid that provides long-lasting hydration for smooth, supple skin.",
    image: "data:image/jpeg;base64,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",
    price: 11000
  },
  {
    productId: "P009",
    name: "Cetaphil Gentle Skin Cleanser",
    description: "A mild, soap-free cleanser suitable for all skin types — effectively cleans without stripping natural oils.",
    image: "data:image/jpeg;base64,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",
    price: 9500
  },
  {
    productId: "P010",
    name: "La Roche-Posay Anthelios Sunscreen SPF 60",
    description: "A dermatologist-approved sunscreen that provides high broad-spectrum protection and a smooth matte finish.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7_WsB8FPe9guVwrFd9MNxS2sf2Ev2e0M3A&s",
    price: 18500
  },
  {
    productId: "P011",
    name: "Palmer’s Cocoa Butter Formula",
    description: "Rich, nourishing lotion with pure cocoa butter and Vitamin E to deeply moisturize and improve skin elasticity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_F9qi061F5M1r72dFFljIwsvpmBLsgXkn4w&s",
    price: 5500
  },
  {
    productId: "P012",
    name: "Pixi Glow Tonic",
    description: "An exfoliating toner with 5% glycolic acid that brightens and refines skin for a healthy, luminous glow.",
    image: "data:image/jpeg;base64,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",
    price: 11500
  },
  {
    productId: "P013",
    name: "Dove Beauty Bar",
    description: "Classic moisturizing bar soap with ¼ moisturizing cream that gently cleans and nourishes the skin.",
    image: "https://tosnigeria.com/wp-content/uploads/2024/04/Dove-Beauty-Bar-Pink-90g.webp",
    price: 1200
  },
  {
    productId: "P014",
    name: "Simple Micellar Cleansing Water",
    description: "Gentle yet effective micellar water that removes makeup and impurities while keeping skin hydrated and fresh.",
    image: "https://tosnigeria.com/wp-content/uploads/2023/06/Simple-micellar-cleansing-water.jpg",
    price: 6500
  },
  {
    productId: "P015",
    name: "Aveeno Daily Moisturizing Lotion",
    description: "Nourishing oatmeal-based lotion that hydrates dry skin for 24 hours and improves texture with consistent use.",
    image: "https://nectarbeautyhub.com/cdn/shop/files/aveeno-daily-moisturizing-body-lotion-709ml-331986.jpg?v=1717770280",
    price: 8500
  }
];

const notAvailable = document.querySelector(".not_available")


function displayProducts(products) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  products.length === 0 ? notAvailable.classList.add("show") : notAvailable.classList.remove("show");
  // if (products.length == 0) {
  //   notAvailable.classList.add("show")
  // } else {
  //   notAvailable.classList.remove("show");
  // }
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span class="price">₦${product.price.toLocaleString()}</span>
    `;
    container.appendChild(card);
  });
}

displayProducts(availableProducts);

const search = document.getElementById("searchInput");

search.addEventListener("input", (e) => {
  const userSearch = search.value.toLowerCase().trim();
  console.log(userSearch)

  const filteredProducts = availableProducts.filter(product => {
    const ff = product.name.toLowerCase().includes(userSearch) ||
      product.description.toLowerCase().includes(userSearch) ||
      product.price.toString().includes(userSearch);
    return ff;
  });

    displayProducts(filteredProducts);
});
