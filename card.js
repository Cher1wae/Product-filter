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
    image: "https://teeka4.com/wp-content/uploads/2024/06/WhatsApp-Image-at-bf-a.jpg",
    price: 13500
  },
  {
    productId: "P004",
    name: "Vaseline Daily Brightening Lotion",
    description: "Infused with micro-droplets of Vaseline jelly and Vitamin B3 to restore and brighten dull skin.",
    image: "https://teeka4.com/wp-content/uploads/2023/10/aadb-500x500.jpg",
    price: 4800
  },
  {
    productId: "P005",
    name: "Alpha Arbutin & Collagen Soap",
    description: "A brightening soap formulated to fade dark spots and support firm, youthful skin with collagen boost.",
    image: "https://fedeskincare.it/cdn/shop/files/IMG-2279.heic?v=1755298766&width=533",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1siyJlQ-s1cJs7ywtz9455dP6viOGT_yy9w&s",
    price: 11000
  },
  {
    productId: "P009",
    name: "Cetaphil Gentle Skin Cleanser",
    description: "A mild, soap-free cleanser suitable for all skin types — effectively cleans without stripping natural oils.",
    image: "https://teeka4.com/wp-content/uploads/2023/09/teekaa.jpg",
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
    image: "https://teeka4.com/wp-content/uploads/2023/08/Pixi-Glow-Tonic-100-Ml.jpg",
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
    image: "https://teeka4.com/wp-content/uploads/2023/08/ave_381370038443_us_daily_moisturizing_lotion_18oz_00000_0.webp",
    price: 8500
  }
];

const productContainer = document.querySelector(".cards");
//normal version
availableProducts.forEach(product => {
  console.log(product.name)
  const card = document.createElement("div");
  card.classList.add("card");

  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  const img = document.createElement("img");
  img.setAttribute("src", product.image);
  img.setAttribute("alt", product.name + "-image")
  cardImage.append(img);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content")
  const cardName = document.createElement("h2");
  const cardDesc = document.createElement("p");
  cardName.textContent = product.name;
  cardDesc.textContent = product.description;
  cardContent.append(cardName);
  cardContent.append(cardDesc);

  card.append(cardImage);
  card.append(cardContent);
  // productContainer.append(card);
});

// sweeter version
availableProducts.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
        <div class="card-image">
            <img src="${product.image}" alt="${product.name}-image">
        </div>
        <div class="card-content">
            <h2>${product.name}</h2>
            <p>
                ${product.description}
            </p>
        </div>
    `;
  productContainer.append(card);
});





//illustration
const extraM = "How far naa?"

const ppp = document.querySelector(".pppp");
console.log(ppp.textContent);
ppp.innerHTML = `<h1>Hello amigos!!  <br> ${extraM}</h1>`
console.log(ppp.innerHTML)


