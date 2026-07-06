document.addEventListener('DOMContentLoaded', function () {
  const zoomableImages = document.querySelectorAll('.w16, .w17, .w18');
  const zoomOverlay = document.createElement('div');
  zoomOverlay.className = 'zoom-overlay';
  zoomOverlay.style.cssText = `
    display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.85); z-index: 1000; justify-content: center;
    align-items: center; overflow: auto; backdrop-filter: blur(5px);
    opacity: 0; transition: opacity 0.3s ease;
  `;

  const zoomContainer = document.createElement('div');
  zoomContainer.style.cssText = `
    position: relative; display: flex; flex-direction: column; align-items: flex-end;
    max-width: 90%; max-height: 90vh;
  `;

  const zoomedImage = document.createElement('img');
  zoomedImage.className = 'zoomed-image';
  zoomedImage.draggable = false; // 🚫 prevent ghost drag

  const closeButton = document.createElement('button');
  closeButton.innerHTML = '&times;';
  closeButton.className = 'zoom-close-button';

  zoomContainer.appendChild(closeButton);
  zoomContainer.appendChild(zoomedImage);
  zoomOverlay.appendChild(zoomContainer);
  document.body.appendChild(zoomOverlay);

  // ===== Open Zoom =====
  zoomableImages.forEach(image => {
    image.style.cursor = 'zoom-in';
    image.addEventListener('click', (e) => {
      e.stopPropagation();
      zoomedImage.src = image.src;
      zoomOverlay.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // 🚫 disable background scroll
      requestAnimationFrame(() => {
        zoomOverlay.style.opacity = '1'; // fade in
      });
    });
  });

  // ===== Close Zoom =====
  const closeZoom = () => {
    zoomOverlay.style.opacity = '0'; // fade out
    setTimeout(() => {
      zoomOverlay.style.display = 'none';
      document.body.style.overflow = ''; // enable scroll again
    }, 300);
  };

  closeButton.addEventListener('click', closeZoom);

  zoomOverlay.addEventListener('click', (e) => {
    if (e.target === zoomOverlay || e.target === zoomContainer) closeZoom();
  });

  // ESC key closes zoom
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && zoomOverlay.style.display === 'flex') {
      closeZoom();
    }
  });

  // Responsive adjustments for zoom
  const updateZoomStyles = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    zoomedImage.style.maxWidth = width < 480 ? '95%' : width < 768 ? '60%' : width < 1024 ? '70%' : '50%';
    zoomedImage.style.maxHeight = height < 600 ? '70vh' : '80vh';
  };
  window.addEventListener('resize', updateZoomStyles);
  updateZoomStyles();
});


const images = [
  // 'https://www.shutterstock.com/image-photo/hand-rubber-glove-holding-cleaning-600nw-256016113.jpg',
  'https://iili.io/FyG59pt.jpg',
  'https://www.vijesti.me/data/images/2025/02/06/14/5622731_shutterstock-1955526229_share.jpg'


  // 'https://img.freepik.com/premium-photo/black-style-home-cleaning-service-concept-with-supplies-black-wooden-background-top-view-copy-space_89816-31837.jpg'
];
const bg = document.querySelector('.sparkleCanvas');
const dotsContainer = document.querySelector('.carouselOrbs');
let currentImage = 0;

// Create dots
images.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('orbitGlow');
  if (i === 0) dot.classList.add('igniteSpark');
  dot.addEventListener('click', () => {
    currentImage = i;
    changeBackground();
  });
  dotsContainer.appendChild(dot);
});

function changeBackground() {
  bg.style.backgroundImage = `url('${images[currentImage]}')`;

  // Update dots
  document.querySelectorAll('.orbitGlow').forEach((dot, i) => {
    dot.classList.toggle('igniteSpark', i === currentImage);
  });

  // Move to next image
  currentImage = (currentImage + 1) % images.length;
}

// Auto-change every 3 seconds
setInterval(changeBackground, 4000);


function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.5 },
    colors: ['#00ff00', '#00aaff', '#ffffff']
  });
}
// Auto-rotate every 2 seconds
changeBackground();
setInterval(() => {
  currentImage = (currentImage + 1) % images.length;

  changeBackground();
}, 3000);
function openModal() {
  document.getElementById("myModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }
}
function changeImage(img) {
  const mainImage = document.querySelector('.product-image');
  mainImage.style.backgroundImage = `url(${img.src})`;
}

// -----------swiper

const topElement = document.getElementsByClassName("top")[0];
const ff = document.getElementsByClassName("nok")[0];

topElement.style.display = "none";
topElement.style.transition = "top 0.3s ease";


document.getElementsByClassName("nav-4")[0].addEventListener("click", () => {

  topElement.style.top = "2%";
  topElement.style.display = "block";
  overlay.style.opacity = "0";



});


ff.addEventListener("click", () => {
  topElement.style.top = "-1000%";
});
// Hide them before anything else runs

// document.getElementById('VoidOverlay').style.display = 'none';
// document.getElementById('QuantumCartBox').style.display = 'none';

// Show Overlay on Load

// Popup Interactions
function closeQuantumCartBox() {
  const QuantumCartBox = document.getElementById('QuantumCartBox');
  const overlay = document.getElementById('VoidOverlay');
  QuantumCartBox.classList.add('ZenithFade');
  overlay.classList.remove('active');
  setTimeout(() => {
    QuantumCartBox.style.display = 'none';
  }, 400);
}

function continueLunarShop() {

  closeQuantumCartBox();
}

function goToGalacticCart() {

  closeQuantumCartBox();
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeQuantumCartBox();
});
// ---------------calling things
document.querySelector(".bestone").style.transition = "top 0.5s ease";
document.querySelector(".bestone").style.top = "-1000px"
Array.from(document.querySelectorAll(".mems")).forEach(e => {
  e.addEventListener("click", () => {
    document.querySelector(".bestone").style.top = "1px"
    const QuantumCartBox = document.getElementById('QuantumCartBox');
    const overlay = document.getElementsByClassName('VoidOverlay');
    QuantumCartBox.style.display = 'flex';
    QuantumCartBox.classList.remove('ZenithFade');
    launchConfetti()
    setTimeout(() => {
      document.querySelector(".bestone").style.top = "-1000px"

    }, 5000)
  })
})










function toggleSlideMenu() {
  const slideMenu = document.getElementById('lolSlideMenu');
  const isActive = slideMenu.classList.toggle('active');
  slideMenu.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  if (isActive) {
    slideMenu.querySelector('.lol-nav-link').focus();
    if (navigator.vibrate) navigator.vibrate(50);
  }
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const slideMenu = document.getElementById('lolSlideMenu');
  const hamburger = document.querySelector('.lol-hamburger');
  if (!slideMenu.contains(e.target) && !hamburger.contains(e.target)) {
    slideMenu.classList.remove('active');
    slideMenu.setAttribute('aria-expanded', 'false');
  }
});

// Close menu with Escape key and handle keyboard navigation
document.addEventListener('keydown', (e) => {
  const slideMenu = document.getElementById('lolSlideMenu');
  if (e.key === 'Escape' && slideMenu.classList.contains('active')) {
    slideMenu.classList.remove('active');
    slideMenu.setAttribute('aria-expanded', 'false');
    document.querySelector('.lol-hamburger').focus();
    if (navigator.vibrate) navigator.vibrate(30);
  }
});

// Trap focus within menu
const slideMenu = document.getElementById('lolSlideMenu');
const focusableElements = slideMenu.querySelectorAll('a');
const firstFocusable = focusableElements[0];
const lastFocusable = focusableElements[focusableElements.length - 1];

slideMenu.addEventListener('keydown', (e) => {
  if (!slideMenu.classList.contains('active')) return;
  if (e.key === 'Tab') {
    if (e.shiftKey && document.activeElement === firstFocusable) {
      e.preventDefault();
      lastFocusable.focus();
    } else if (!e.shiftKey && document.activeElement === lastFocusable) {
      e.preventDefault();
      firstFocusable.focus();
    }
  }
});

// Preload images for smooth loading
const imageLinks = ['pic-12.jpg', 'pic-13.png', 'pi-13.jpg', 'pic-14.jpg'];
imageLinks.forEach(src => {
  const img = new Image();
  img.src = src;
});

// Add touch feedback for mobile devices
document.querySelector('.lol-hamburger').addEventListener('touchstart', () => {
  document.querySelector('.lol-hamburger').style.transform = 'perspective(800px) rotateY(5deg) scale(1.1)';
});

document.querySelector('.lol-hamburger').addEventListener('touchend', () => {
  document.querySelector('.lol-hamburger').style.transform = 'perspective(800px) rotateY(0deg) scale(1)';
});

// Dynamic cursor effect for desktop
document.querySelectorAll('.lol-nav-item').forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    item.style.setProperty('--mouse-x', `${x}px`);
    item.style.setProperty('--mouse-y', `${y}px`);
  });
});























// ------------------------without local storage working

// let namess=document.getElementsByClassName("product-name8")[0].innerHTML;
//  let price= document.getElementsByClassName("price10")[0].innerHTML.split("<del>")[0];
// console.log(namess)
// console.log(price)

// document.getElementsByClassName("los1")[0].addEventListener("click",()=>{
// document.getElementsByClassName("addwala-div")[0].innerHTML=` <div class="bapp">
//                         <div class="carting">
//                             <div class="cont">
//                                 <div class="side">
//                                     <div class="image1">
//                                         <img class="rt"
//                                             src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
//                                             alt="" srcset="">

//                                     </div>
//                                     <div class="image2">
//                                         <h3 class="n21">${namess}</h3>
//                                         <h3 class="n23">${price}</h3>
//                                         <div class="zephyrHub-unique">
//                                             <button class="nebulaPulse-unique">-</button>
//                                             <span class="lunarEcho-unique">1</span>
//                                             <button class="nebulaPulse-unique">+</button>
//                                             <button class="solarFlare-unique">×</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         </div>
//                         </div>
//                         `
//                     let mms=document.querySelector(".OrbitAction.GalacticCart").addEventListener("click",()=>{
//                          topElement.style.display = "block";
//                          topElement.style.top = "2%";
//                          console.log(mms)
//                     })
// })
// const pics= window.getComputedStyle(document.querySelector('.lol0')).backgroundImage.slice(5, -2);
// const names = document.getElementsByClassName("product-name8")[0].innerHTML;
// const price = document.getElementsByClassName("price10")[0].innerHTML.split("<del>")[0];
// localStorage.setItem("cart", JSON.stringify({name: names, price: price,img:pics}));

// ====== GLOBAL VARIABLES ====== //
document.getElementsByClassName("endss")[0].style.display="none"
const countElement = document.querySelector(".numCircle");
let cartItems = [];
let totalPrice = 0;

// Load cart from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  try {
    const savedCart = localStorage.getItem('cartItems');
    const savedTotal = localStorage.getItem('totalPrice');
    if (savedCart) {
      cartItems = JSON.parse(savedCart);
      totalPrice = parseInt(savedTotal) || 0;
      if (!Array.isArray(cartItems)) cartItems = [];
      cartItems.forEach(item => {
        if (item.id && item.name && item.price && item.img) {
          renderCartItem(item);
        }
      });
      updateCart();
    }
  } catch (error) {
    console.error('Error loading cart:', error);
    cartItems = [];
    totalPrice = 0;
    updateCart();
  }
});

// ====== CART INTERACTIONS ====== //
document.querySelector('.addwala-div').addEventListener('click', (e) => {
  const actionBtn = e.target.closest('.nebulaPulse-unique, .solarFlare-unique');
  if (!actionBtn) return;

  const itemId = actionBtn.closest('.carting')?.id.split('-')[2];
  const item = document.getElementById(`cart-item-${itemId}`);
  if (!item) return;

  try {
    // Remove Item
    if (actionBtn.classList.contains('solarFlare-unique')) {
      item.remove();
      cartItems = cartItems.filter(cartItem => cartItem.id !== parseInt(itemId));
      saveCart();
      updateCart();
      return;
    }

    // Quantity Change
    const quantityEl = item.querySelector('.lunarEcho-unique');
    let quantity = parseInt(quantityEl.textContent) || 1;
    const priceEl = item.querySelector('.n23');
    const unitPrice = parseInt(priceEl.dataset.unitPrice) || 0;

    if (actionBtn.textContent === '+') {
      quantity++;
    } else if (actionBtn.textContent === '-' && quantity > 1) {
      quantity--;
    }

    quantityEl.textContent = quantity;
    priceEl.textContent = `₨${unitPrice * quantity}`;

    // Update quantity in cartItems
    const cartItem = cartItems.find(ci => ci.id === parseInt(itemId));
    if (cartItem) {
      cartItem.quantity = quantity;
    }
    saveCart();
    updateCart();
  } catch (error) {
    console.error('Error updating cart:', error);
    updateCart();
  }
});

// ====== ADD ITEMS ====== //
document.querySelectorAll(".mems").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    try {
      const productElements = {
        img: document.querySelectorAll('.product-img')[index],
        name: document.querySelectorAll(".product-name8")[index],
        price: document.querySelectorAll(".price10")[index]
      };

      if (!productElements.img || !productElements.name || !productElements.price) {
        throw new Error('Product data missing');
      }

      const product = {
        id: Date.now(),
        img: productElements.img.src.trim(),
        name: productElements.name.innerHTML.trim(),
        price: parseInt(productElements.price.innerHTML.split("<del>")[0].replace(/[^\d]/g, '')) || 0,
        quantity: 1
      };

      if (!product.img || !product.name || product.price <= 0) {
        throw new Error('Invalid product data');
      }
      cartItems.push(product);
      renderCartItem(product);
      saveCart();
      updateCart();
      document.querySelector(".awe").style.display = "none";
      document.querySelector(".endss").style.display = "block";
    } catch (error) {
      console.error('Error adding item:', error);
    }
  });
});

// ====== RENDER CART ITEM ====== //
function renderCartItem(product) {
  try {
    if (!document.querySelector(".addwala-div")) {
      throw new Error('Cart container missing');
    }
    document.querySelector(".addwala-div").insertAdjacentHTML('beforeend', `
      <div class="carting" id="cart-item-${product.id}">
        <div class="cont">
          <div class="side">
            <div class="image1">
              <img class="rt" src="${product.img}" alt="${product.name}">
            </div>
            <div class="image2">
              <h3 class="n21">${product.name}</h3>
              <h3 class="n23" data-unit-price="${product.price}">₨${product.price * (product.quantity || 1)}</h3>
              <div class="zephyrHub-unique">
                <button class="nebulaPulse-unique">-</button>
                <span class="lunarEcho-unique">${product.quantity || 1}</span>
                <button class="nebulaPulse-unique">+</button>
                <button class="solarFlare-unique">×</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  } catch (error) {
    console.error('Error rendering cart item:', error);
  }
}

// ====== UPDATE CART & CALCULATE TOTAL ====== //
function updateCart() {
  try {
    const items = document.querySelectorAll('.carting');
    let totalItems = cartItems.length; // Count unique items
    totalPrice = 0;
    items.forEach(item => {
      const qty = parseInt(item.querySelector('.lunarEcho-unique').textContent) || 1;
      const price = parseInt(item.querySelector('.n23').dataset.unitPrice) || 0;
      totalPrice += qty * price;
    });

    // Update UI
    if (countElement) {
      countElement.textContent = totalItems;
    }
    const stellarCartDetails = document.querySelector(".StellarCartDetails");
    if (stellarCartDetails) {
      stellarCartDetails.innerHTML = `(${totalItems}) ITEMS | ₨${totalPrice} TOTAL`;
    }

    // Update Total Display
    let totalElement = document.querySelector('.total');
    if (!totalElement) {
      totalElement = document.createElement('div');
      totalElement.className = 'total';
      document.querySelector(".addwala-div").appendChild(totalElement);
    }
    totalElement.innerHTML = `Total: Rs. ${totalPrice}`;

    // Update empty cart message
    const aweElement = document.querySelector(".awe");
    if (aweElement) {
      aweElement.style.display = totalItems === 0 ? "block" : "none";
    }

    // Update .endss display
    const endssElement = document.querySelector(".endss");
    if (endssElement) {
      endssElement.style.display = totalItems === 0 ? "none" : "block";
    }

    // Save to localStorage
    saveCart();
  } catch (error) {
    console.error('Error updating cart UI:', error);
  }
}

// ====== SAVE CART TO LOCALSTORAGE ====== //
function saveCart() {
  try {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('totalPrice', totalPrice);
  } catch (error) {
    console.error('Error saving cart:', error);
  }
}

// ====== TOGGLE CART VISIBILITY ====== //
const cartToggle = document.querySelector(".OrbitAction.GalacticCart");
if (cartToggle) {
  cartToggle.addEventListener("click", () => {
    try {
      const topEl = document.querySelector(".top");
      if (topEl) {
        topEl.style.display = "block";
        topEl.style.top = "2%";
      }
    } catch (error) {
      console.error('Error toggling cart visibility:', error);
    }
  });
}
// -------------------

Array.from(document.getElementsByClassName("eye-button4")).forEach(e => {
  e.addEventListener("click", () => {
    const index = e.getAttribute("data-indexs1");

    localStorage.setItem("Dynamic-Pages", JSON.stringify({
      pic4: document.getElementsByClassName("product-img")[index].src,
      price: document.getElementsByClassName("price10")[index].innerHTML.split("<del>")[0],
      off: document.getElementsByClassName("price10")[index].lastElementChild.innerHTML.split("Rs.")[1],
      // Store options as an array instead of HTML string
      options: [
        document.getElementsByClassName("features12")[index].children[0]?.innerHTML || options[0],
        document.getElementsByClassName("features12")[index].children[1]?.innerHTML || options[1],
        document.getElementsByClassName("features12")[index].children[2]?.innerHTML || options[2]
      ],
      name: document.getElementsByClassName("product-name8")[index].innerHTML,
      pic1: document.getElementsByClassName("w16")[index].src,
      pic2: document.getElementsByClassName("w17")[index].src,
      pic3: document.getElementsByClassName("w18")[index].src,
      // Fix background-image access



    }));

  });
});



// document.addEventListener('DOMContentLoaded', function () {
//   // Handle clicks on thumbnail images (w16, w17, w18)
//   document.querySelectorAll('.w16, .w17, .w18').forEach(thumbnail => {
//     thumbnail.addEventListener('click', function () {
//       // Find the parent product card
//       const productCard = this.closest('.product-card1');

//       // Find the main product image within this card
//       const mainImage = productCard.querySelector('.product-img');

//       // Update the main image source
//       mainImage.src = this.src;

//       // Optional: Add active class to clicked thumbnail and remove from siblings
//       const gallery = this.closest('.gallery5');
//       gallery.querySelectorAll('img').forEach(img => {
//         img.classList.remove('active-thumb');
//       });
//       this.classList.add('active-thumb');
//     });
//   });
// });

Array.from(document.getElementsByClassName("view-hover")).forEach(e => {
  e.addEventListener("click", (a) => {
    const index = a.target.getAttribute("data-index");

    localStorage.setItem("Dynamic-Pages", JSON.stringify({
      pic4: document.getElementsByClassName("product-img")[index].src,
      price: document.getElementsByClassName("price10")[index].innerHTML.split("<del>")[0],
      off: document.getElementsByClassName("price10")[index].lastElementChild.innerHTML.split("Rs.")[1],
      // Store options as an array instead of HTML string
      options: [
        document.getElementsByClassName("features12")[index].children[0]?.innerHTML || options[0],
        document.getElementsByClassName("features12")[index].children[1]?.innerHTML || options[1],
        document.getElementsByClassName("features12")[index].children[2]?.innerHTML || options[2]
      ],
      name: document.getElementsByClassName("product-name8")[index].innerHTML,
      pic1: document.getElementsByClassName("w16")[index].src,
      pic2: document.getElementsByClassName("w17")[index].src,
      pic3: document.getElementsByClassName("w18")[index].src,

    }));
    window.location.href = "/NEW-DETAILS.HTML";
  });
});









// ====== SEARCH DATA ====== //
// ====== SEARCH DATA ====== //
const products = Array.from(document.querySelectorAll(".product-card1")).map((card, index) => {
  // ensure each card has a unique ID
  if (!card.id) {
    card.id = `product-${index}`;
  }

  const name = card.querySelector(".product-name8")?.innerText.trim() || `Product ${index+1}`;
  const img = card.querySelector(".product-img")?.src || "";
  const id = card.id;

  return { name, img, id };
});


function showSuggestions(query) {
  const suggestionBox = document.getElementById("suggestions");
  suggestionBox.innerHTML = "";
  if (!query) {
    suggestionBox.style.display = "none";
    return;
  }

  const matches = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  if (matches.length > 0) {
    matches.forEach(p => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <span>${p.name}</span>
      `;
      li.onclick = () => {
        suggestionBox.style.display = "none";
        document.getElementById("productSearch").value = p.name;

        // Scroll to product card
        const productEl = document.getElementById(p.id);
        if (productEl) {
          productEl.scrollIntoView({ behavior: "smooth", block: "center" });
          productEl.classList.add("highlight-product");
          setTimeout(() => productEl.classList.remove("highlight-product"), 1500);
        }
      };
      suggestionBox.appendChild(li);
    });
    suggestionBox.style.display = "block";
  } else {
    suggestionBox.style.display = "none";
  }
}












setupSearchOverlay();

function setupSearchOverlay() {
  const overlay = document.getElementById('searchSlide');
  const box = document.getElementById('searchBox');
  const input = document.getElementById('productSearch');
  const suggestions = document.getElementById('suggestions');

  if (!overlay || !box || !input || !suggestions) {
    console.warn('search overlay: one or more elements not found (searchSlide/searchBox/productSearch/suggestions)');
    return;
  }

  function openOverlay() {
    overlay.classList.add('active');

    // 🔥 Mobile-friendly focus (must run in the same user gesture)
    try {
      input.focus({ preventScroll: true });
      // iOS trick: put cursor at end to force keyboard
      const v = input.value || '';
      input.setSelectionRange(v.length, v.length);
      // Some mobile browsers need an explicit click to show keyboard
      input.click();
    } catch (e) {}
  }

  function closeOverlay() {
    overlay.classList.remove('active');
    // hide mobile keyboard
    input.blur();
  }

  // Expose your existing trigger to use: onclick="toggleSearch()"
  window.toggleSearch = function () {
    openOverlay();
  };

  // Close on outside tap/click (PC + mobile)
  document.addEventListener('pointerdown', (e) => {
    if (!overlay.classList.contains('active')) return;
    const clickedMams = !!e.target.closest('.mams');
    const clickedInsideBox = box.contains(e.target);
    if (!clickedInsideBox && !clickedMams) {
      closeOverlay();
    }
  });

  // Close on ESC (desktop)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeOverlay();
    }
  });

  // Close immediately when a suggestion is chosen (works if click is on LI or its children)
  const suggestionChoose = (e) => {
    const li = e.target.closest('#suggestions li');
    if (!li) return;
    closeOverlay();
  };
  // Use pointerdown for instant response on mobile; click as fallback
  suggestions.addEventListener('pointerdown', suggestionChoose, { passive: true });
  suggestions.addEventListener('click', suggestionChoose);
}






Array.from(document.getElementsByClassName("eye-button4")).forEach(e => {
  e.addEventListener("click", () => {
    const index = e.getAttribute("data-indexs1");

    localStorage.setItem("Dynamic-Pages", JSON.stringify({
      pic4: document.getElementsByClassName("product-img")[index].src,
      price: document.getElementsByClassName("price10")[index].innerHTML.split("<del>")[0],
      off: document.getElementsByClassName("price10")[index].lastElementChild.innerHTML.split("Rs.")[1],
      options: [
        document.getElementsByClassName("features12")[index].children[0]?.innerHTML || "",
        document.getElementsByClassName("features12")[index].children[1]?.innerHTML || "",
        document.getElementsByClassName("features12")[index].children[2]?.innerHTML || ""
      ],
      name: document.getElementsByClassName("product-name8")[index].innerHTML,
      pic1: document.getElementsByClassName("w16")[index].src,
      pic2: document.getElementsByClassName("w17")[index].src,
     
    }));

    // ✅ Redirect to details page
    window.location.href = "/NEW-DETAILS.HTML";
  });
});














