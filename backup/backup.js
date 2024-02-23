document.addEventListener("DOMContentLoaded", function() {
    const productList = document.querySelector('.product-list');
    
    // Fetch products from the API
    fetch('https://api.noroff.dev/api/v1/rainy-days')
      .then(response => response.json())
      .then(products => {
        products.forEach(product => {
          // Create product item
          const productItem = document.createElement('div');
          productItem.classList.add('product-item');
          productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
          `;
          
          // Add click event listener to view product details
          productItem.addEventListener('click', () => {
            window.location.href = `product.html?id=${product.id}`;
          });
          
          // Append product item to product list
          productList.appendChild(productItem);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  });







  document.addEventListener("DOMContentLoaded", function() {
    const productList = document.querySelector('.product-list');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const productImages = [];
    let currentIndex = 0;
  
    // Fetch products from the API
    fetch('https://api.noroff.dev/api/v1/rainy-days')
        .then(response => response.json())
        .then(products => {
            // Create product images
            products.forEach(product => {
                const img = new Image();
                img.src = product.image;
                img.alt = product.title;
                productImages.push(img);
            });
  
            // Render the initial set of products
            renderProducts();
  
            // Add event listeners for navigation buttons
            prevButton.addEventListener('click', () => {
                currentIndex = Math.max(currentIndex - 1, 0);
                renderProducts();
            });
  
            nextButton.addEventListener('click', () => {
                currentIndex = Math.min(currentIndex + 1, productImages.length - 1);
                renderProducts();
            });
        })
        .catch(error => console.error('Error fetching products:', error));
  
    // Function to render the current set of products
    function renderProducts() {
        // Clear existing content
        productList.innerHTML = '';
  
        // Display current product
        const currentProduct = productImages[currentIndex];
        productList.appendChild(currentProduct);
  
        // Update button visibility
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === productImages.length - 1;
    }
  });










  document.addEventListener("DOMContentLoaded", function() {
    const productList = document.querySelector('.product-list');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const productImages = [];
    let currentIndex = 0;
  
    // Fetch products from the API
    fetch('https://api.noroff.dev/api/v1/rainy-days')
        .then(response => response.json())
        .then(products => {
            // Create product images
            products.forEach(product => {
                const img = new Image();
                img.src = product.image;
                img.alt = product.title;
                productImages.push(img);
            });
  
            // Render the initial set of products
            renderProducts();
  
            // Add event listeners for navigation buttons
            prevButton.addEventListener('click', () => {
                currentIndex = Math.max(currentIndex - 1, 0);
                renderProducts();
            });
  
            nextButton.addEventListener('click', () => {
                currentIndex = Math.min(currentIndex + 1, productImages.length - 1);
                renderProducts();
            });
        })
        .catch(error => console.error('Error fetching products:', error));
  
    // Function to render the current set of products
    function renderProducts() {
        // Clear existing content
        productList.innerHTML = '';
  
        // Display current product
        const currentProduct = productImages[currentIndex];
        productList.appendChild(currentProduct);
  
        // Update button visibility
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === productImages.length - 1;
    }
  });



  // Container:

  document.addEventListener("DOMContentLoaded", function() {
    const productList = document.querySelector('.product-list');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const productImages = [];
    let currentIndex = 0;
  
    // Function to create container for product item
    function createProductContainer(imageUrl, title) {
      const productItemContainer = document.createElement('div');
      productItemContainer.classList.add('product-item');
  
      // Create product item (image)
      const productItem = document.createElement('img');
      productItem.src = imageUrl;
      productItem.alt = title;
  
      // Append product item to container
      productItemContainer.appendChild(productItem);
  
      // Add click event listener to view product details
      productItem.addEventListener('click', () => {
        window.location.href = `product.html?id=${product.id}`;
      });
  
      return productItemContainer;
    }
  
    // Fetch products from the API
    fetch('https://api.noroff.dev/api/v1/rainy-days')
        .then(response => response.json())
        .then(products => {
            // Create product images
            products.forEach(product => {
                const productContainer = createProductContainer(product.image, product.title);
                productList.appendChild(productContainer);
                productImages.push(productContainer);
            });
  
            // Render the initial set of products
            renderProducts();
  
            // Add event listeners for navigation buttons
            prevButton.addEventListener('click', () => {
                currentIndex = Math.max(currentIndex - 1, 0);
                renderProducts();
            });
  
            nextButton.addEventListener('click', () => {
                currentIndex = Math.min(currentIndex + 1, productImages.length - 1);
                renderProducts();
            });
        })
        .catch(error => console.error('Error fetching products:', error));
  
    // Function to render the current set of products
    function renderProducts() {
        // Hide all products
        productImages.forEach(productContainer => {
          productContainer.style.display = 'none';
        });
  
        // Display current product
        productImages[currentIndex].style.display = 'block';
  
        // Update button visibility
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === productImages.length - 1;
    }
  });
  











  document.addEventListener("DOMContentLoaded", function() {
    const productList = document.querySelector('.product-list');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const productContainers = []; // Array to store product container elements
    let currentIndex = 0;
  
    // Function to create container for product item
    function createProductContainer(imageUrl, title) {
      const productItemContainer = document.createElement('div');
      productItemContainer.classList.add('product-item');
  
      // Set fixed dimensions for the container
      productItemContainer.style.width = '500px'; // Adjust as needed
      productItemContainer.style.height = '500px'; // Adjust as needed
  
      // Create product item (image)
      const productItem = document.createElement('img');
      productItem.src = imageUrl;
      productItem.alt = title;
  
      // Apply CSS properties to control image display within the container
      productItem.style.width = '100%';
      productItem.style.height = '100%';
      productItem.style.objectFit = 'cover'; // or other desired value
  
      // Append product item to container
      productItemContainer.appendChild(productItem);
  
      // Add click event listener to view product details
      productItem.addEventListener('click', () => {
        window.location.href = `product.html?id=${product.id}`;
      });
  
      return productItemContainer;
    }
  
    // Fetch products from the API
    fetch('https://api.noroff.dev/api/v1/rainy-days')
        .then(response => response.json())
        .then(products => {
            // Create product containers
            products.forEach(product => {
                const productContainer = createProductContainer(product.image, product.title);
                productList.appendChild(productContainer);
                productContainers.push(productContainer);
            });
  
            // Render the initial set of products
            renderProducts();
  
            // Add event listeners for navigation buttons
            prevButton.addEventListener('click', () => {
                currentIndex = Math.max(currentIndex - 1, 0);
                renderProducts();
            });
  
            nextButton.addEventListener('click', () => {
                currentIndex = Math.min(currentIndex + 1, productContainers.length - 1);
                renderProducts();
            });
        })
        .catch(error => console.error('Error fetching products:', error));
  
    // Function to render the current set of products
    function renderProducts() {
        // Hide all product containers
        productContainers.forEach(container => {
          container.style.display = 'none';
        });
  
        // Display current product container
        productContainers[currentIndex].style.display = 'block';
  
        // Update button visibility
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === productContainers.length - 1;
    }
  });
  
  


  // This is the last good one:

  document.addEventListener("DOMContentLoaded", function() {
    const productList = document.querySelector('.product-list');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const productImages = [];
    let currentIndex = 0;
  
    // Fetch products from the API
    fetch('https://api.noroff.dev/api/v1/rainy-days')
        .then(response => response.json())
        .then(products => {
            // Create product images
            products.forEach(product => {
                const imgContainer = document.createElement('div'); // Create a container for the image
                imgContainer.classList.add('product-image-container'); // Add a class for styling
                const img = new Image();
                img.src = product.image;
                img.alt = product.title;
                imgContainer.appendChild(img); // Append the image to the container
                productImages.push(imgContainer); // Push the container to the productImages array
            });
  
            // Render the initial set of products
            renderProducts();
  
            // Add event listeners for navigation buttons
            prevButton.addEventListener('click', () => {
                currentIndex = Math.max(currentIndex - 1, 0);
                renderProducts();
            });
  
            nextButton.addEventListener('click', () => {
                currentIndex = Math.min(currentIndex + 1, productImages.length - 1);
                renderProducts();
            });
        })
        .catch(error => console.error('Error fetching products:', error));
  
    // Function to render the current set of products
    function renderProducts() {
        // Clear existing content
        productList.innerHTML = '';
  
        // Display current product
        const currentProduct = productImages[currentIndex];
        productList.appendChild(currentProduct);
  
        // Update button visibility
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === productImages.length - 1;
    }
  });
  


  // updated with price:

document.addEventListener("DOMContentLoaded", function() {
  const productList = document.querySelector('.product-list');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const productImages = [];
  let currentIndex = 0;

  // Fetch products from the API
  fetch('https://api.noroff.dev/api/v1/rainy-days')
      .then(response => response.json())
      .then(products => {
          // Create product images
          products.forEach(product => {
              // Create container for the image
              const imgContainer = document.createElement('div');
              imgContainer.classList.add('product-image-container'); // Add a class for styling

              // Create image element
              const img = new Image();
              img.src = product.image;
              img.alt = product.title;
              imgContainer.appendChild(img);

              // Create price overlay element
              const priceOverlay = document.createElement('div');
              priceOverlay.classList.add('price-overlay');
              priceOverlay.innerText = `$${product.price.toFixed(2)}`;

              // Append the price overlay to the image container
              imgContainer.appendChild(priceOverlay);

              // Push the container to the productImages array
              productImages.push(imgContainer);
          });

          // Render the initial set of products
          renderProducts();

          // Add event listeners for navigation buttons
          prevButton.addEventListener('click', () => {
              currentIndex = Math.max(currentIndex - 1, 0);
              renderProducts();
          });

          nextButton.addEventListener('click', () => {
              currentIndex = Math.min(currentIndex + 1, productImages.length - 1);
              renderProducts();
          });
      })
      .catch(error => console.error('Error fetching products:', error));

  // Function to render the current set of products
  function renderProducts() {
      // Clear existing content
      productList.innerHTML = '';

      // Display current product
      const currentProduct = productImages[currentIndex];
      productList.appendChild(currentProduct);

      // Update button visibility
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === productImages.length - 1;
  }
});




// MENS SHOP:

// check if fetch with .then(products => {} and all the other info in the content from school. thats how its usually done?

document.addEventListener("DOMContentLoaded", function() {
  const productList = document.getElementById("products-men");
  const productImages = [];
  let currentIndex = 0;

  fetch("https://api.noroff.dev/api/v1/rainy-days")
    .then(response => response.json())
    .then(products => {

      const maleProducts = products.filter(product => product.gender.toLowerCase() === "male");

      maleProducts.forEach(product => {
          const imgContainer = document.createElement("div");
          imgContainer.classList.add("product-image-container");

          const img = new Image();
          img.src = product.image;
          img.alt = product.title;
          imgContainer.appendChild(img);

          const titleOverlay = document.createElement("div");
          titleOverlay.classList.add("title-overlay");
          titleOverlay.innerText = product.title;

          const priceOverlay = document.createElement("div");
          priceOverlay.classList.add("price-overlay");
          priceOverlay.innerText = "$${product.price.toFixed(2)}";

          imgContainer.appendChild(titleOverlay);
          imgContainer.appendChild(priceOverlay);

          imgContainer.addEventListener("mouseover", () => {
              titleOverlay.style.display = "block";
              priceOverlay.style.display = "block";
          });

          imgContainer.addEventListener("mouseout", () => {
              titleOverlay.style.display = "none";
              priceOverlay.style.display = "none";
          });

          productImages.push(imgContainer);
      });

      renderProducts();
    })
    .catch(error => console.error("Error fetching products", error));

  function renderProducts() {
      productList.innerHTML = "";

      const currentProduct = productImages[currentIndex];
      productList.appendChild(currentProduct);
  }

});


API: [
  {
    "id": "b8b528fc-6c60-41f6-a5a9-9a8b27a9482a",
    "title": "Rainy Days Akra Jacket",
    "description": "The Women's Rainy Days Akra jacket is bound to be your new go-to water-repellent rain jacket.",
    "gender": "Female",
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "baseColor": "Red",
    "price": 129.99,
    "discountedPrice": 119.99,
    "onSale": true,
    "image": "https://static.cloud.noroff.dev/api/rainy-days/0-akra-jacket.jpg",
    "tags": ["jacket", "womens"],
    "favorite": true
  },
  {
    "id": "97e77845-a485-4301-827f-51b673d4230f",
    "title": "Rainy Days M83 Jacket",
    "description": "The Women's Rainy Days M83 jacket delivers waterproof, breathable protection from head to waist. Perfect for the adventure seekers.",
    "gender": "Female",
    "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "baseColor": "Black",
    "price": 109.99,
    "discountedPrice": 99.99,
    "onSale": true,
    "image": "https://static.cloud.noroff.dev/api/rainy-days/1-m83-jacket.jpg",
    "tags": ["jacket", "womens"],
    "favorite": true
  }
  // ...
]


single product: 
{
  "id": "b8b528fc-6c60-41f6-a5a9-9a8b27a9482a",
  "title": "Rainy Days Akra Jacket",
  "description": "The Women's Rainy Days Akra jacket is bound to be your new go-to water-repellent rain jacket.",
  "gender": "Female",
  "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
  "baseColor": "Red",
  "price": 129.99,
  "discountedPrice": 119.99,
  "onSale": true,
  "image": "https://static.cloud.noroff.dev/api/rainy-days/0-akra-jacket.jpg",
  "tags": ["jacket", "womens"],
  "favorite": true
}

Prop	Type	Default
id

string
-
title

string
-
description

string
-
gender

string
-
sizes

Array<string>
-
baseColor

string
-
price

float
-
discountedPrice

float
-
onSale

boolean
-
image

string
-
tags

Array<string>
-
favorite

boolean
-




// akra details 
document.addEventListener("DOMContentLoaded", function () {
  // Fetch the list of products from the API
  fetch('https://api.noroff.dev/api/v1/rainy-days')
      .then(response => response.json())
      .then(products => {
          // Assuming you have an array of products
          products.forEach(product => {
              // Create a product link for each product
              const productLink = document.createElement('a');
              productLink.href = `details-akra.html?id=${product.id}`;

              // Create HTML elements for the product details
              const productDetails = createProductDetails(product);

              // Append the product details to the container
              productLink.appendChild(productDetails);

              // Append the product link to the container where you display the products
              const productContainer = document.getElementById('your-product-container-id');
              productContainer.appendChild(productLink);
          });
      })
      .catch(error => console.error('Error fetching product list:', error));
});



// Function to create HTML elements for a single product details
function createProductDetails(product) {
  const productDetails = document.createElement('div');
  productDetails.classList.add('product-details');

  const img = new Image();
  img.src = product.image;
  img.alt = product.title;

  const textContainer = document.createElement('div');
  textContainer.classList.add('product-text');

  const title = document.createElement('div');
  title.classList.add('product-title');
  title.textContent = product.title;

  const price = document.createElement('div');
  price.classList.add('product-price');

  // Display percentage discount for on-sale items
  if (product.onSale) {
      const discountPercentage = ((product.price - product.discountedPrice) / product.price) * 100;
      price.innerHTML = `<span class="original-price">$${product.price.toFixed(2)}</span> $${product.discountedPrice.toFixed(2)} <span class="discount-percentage">(${discountPercentage.toFixed(0)}% off)</span>`;
  } else {
      price.textContent = `Price: $${product.price.toFixed(2)}`;
  }

  const description = document.createElement('div');
  description.classList.add('product-description');
  description.textContent = product.description;

  const baseColor = document.createElement('div');
  baseColor.classList.add('product-base-color');
  baseColor.textContent = `Base Color: ${product.baseColor}`;

  const gender = document.createElement('div');
  gender.classList.add('product-gender');
  gender.textContent = `Gender: ${product.gender}`;

  textContainer.appendChild(title);
  textContainer.appendChild(price);
  textContainer.appendChild(description);
  textContainer.appendChild(baseColor);
  textContainer.appendChild(gender);

  // Create a dropdown for selecting sizes
  const sizeDropdown = createSizeDropdown(product.sizes);
  textContainer.appendChild(sizeDropdown);

  // Add "Add to Cart" button
  const addToCartButton = createAddToCartButton(product);
  textContainer.appendChild(addToCartButton);

  productDetails.appendChild(img);
  productDetails.appendChild(textContainer);

  return productDetails;
}


burger menu 

const burgerMenu = document.getElementById("burger-menu");
const burgerIcon = document.createElement("div");
burgerIcon.classList.add("burger-icon");
burgerMenu.appendChild(burgerIcon);

const burgerLines = [];

for(let i = 0; i < 3; i++) {
    const line = document.createElement("div");
    line.classList.add("burger-line");
    burgerIcon.appendChild(line);
    burgerLines.push(line);
}

burgerMenu.addEventListener("click", function(event) {
    document.querySelector("header nav ul").classList.toggle("show-menu");
});




productItem.setAttribute("id", `product-${product.id}`);

const productId = window.location.hash.substring(1);

scrollToProduct(productId);


function scrollToProduct(productId) {
  const targetProduct = document.getElementById(`product-${productId}`);
  if (targetProduct) {
      targetProduct.scrollIntoView({
          behavior: "smooth", 
          block: "start"
      });
  }
}

product detail:

const discount = document.createElement('div');
discount.classList.add('product-discount');
discount.textContent = `$${product.discountedPrice.toFixed(2)}`;














// product-detail.js

document.addEventListener("DOMContentLoaded", function () {
  const productsContainer = document.getElementById('product-details');
  updateCartCount();  // Update cart count on page load

  fetch('https://api.noroff.dev/api/v1/rainy-days')
      .then(response => response.json())
      .then(products => {
          const productId = window.location.hash.substring(1);
          const product = products.find(p => p.id === productId);

          if (product) {
              const productItem = createProductItem(product);
              productsContainer.appendChild(productItem);
          } else {
              console.error('Product not found.');
          }
      })
      .catch(error => console.error('Error fetching products:', error));
});

function createProductItem(product) {
  const productItem = document.createElement("div");
  productItem.classList.add("product-item");

  const img = new Image();
  img.src = product.image;
  img.alt = product.title;

  const title = document.createElement("div");
  title.classList.add("product-title");
  title.textContent = product.title;

  const price = document.createElement("div");
  price.classList.add("product-price");
  price.textContent = `$${product.price.toFixed(2)}`;

  if (product.onSale) {
      const discountPercentage = ((product.price - product.discountedPrice) / product.price) * 100;
      price.innerHTML = `<span class="original-price">$${product.price.toFixed(2)}</span> $${product.discountedPrice.toFixed(2)} <span class="discount-percentage">(${discountPercentage.toFixed(0)}% off)</span>`;
  } else {
      price.textContent = `$${product.price.toFixed(2)}`;
  }

  const description = document.createElement("div");
  description.classList.add("product-description");
  description.textContent = product.description;

  const baseColor = document.createElement("div");
  baseColor.classList.add("product-base-color");
  baseColor.textContent = `Base Color: ${product.baseColor}`;

  const gender = document.createElement("div");
  gender.classList.add("product-gender");
  gender.textContent = `Gender: ${product.gender}`;

  const sizes = document.createElement("div");
  sizes.classList.add("product-sizes");

  const sizeDropdown = document.createElement("select");
  sizeDropdown.classList.add("size-dropdown");

  product.sizes.forEach(size => {
      const sizeOption = document.createElement('option');
      sizeOption.value = size;
      sizeOption.textContent = size;
      sizeDropdown.appendChild(sizeOption);
  });

  sizeDropdown.addEventListener('change', function () {
      console.log('Selected size:', this.value);
  });

  sizes.appendChild(sizeDropdown);

  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("add-to-cart-button");
  addToCartButton.textContent = "Add to cart";

  addToCartButton.addEventListener("click", function () {
      const selectedSize = sizeDropdown.value;

      const productDetails = {
          id: product.id,
          title: product.title,
          price: price.textContent,
          size: selectedSize
      };

      addToCart(productDetails);
  });

  const removeFromCartButton = document.createElement("button");
  removeFromCartButton.classList.add("remove-from-cart-button");
  removeFromCartButton.textContent = "Remove";

  removeFromCartButton.addEventListener("click", function () {
      removeItemFromCart(product.id);

      removeFromCartButton.style.display = "none";
  });


  const clearCartButton = document.createElement("button");
  clearCartButton.classList.add("clear-cart-button");
  clearCartButton.textContent = "Clear Cart";

  clearCartButton.addEventListener("click", function() {
      localStorage.removeItem("cart");
      updateCartCount();
  })

  productItem.appendChild(img);
  productItem.appendChild(title);
  productItem.appendChild(price);
  productItem.appendChild(description);
  productItem.appendChild(baseColor);
  productItem.appendChild(gender);
  productItem.appendChild(sizes);
  productItem.appendChild(addToCartButton);
  productItem.appendChild(removeFromCartButton);
  productItem.appendChild(clearCartButton);

  return productItem;
}



const clearCartButton = document.createElement("button");
clearCartButton.classList.add("clear-cart-button");
clearCartButton.textContent = "Clear Cart";

clearCartButton.addEventListener("click", function() {
    localStorage.removeItem("cart");
    updateCartCount();
})

productItem.appendChild(clearCartButton);