// product-detail.js

document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById('product-details');
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
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
        updateCartCount();
    });
  
    const removeFromCartButton = document.createElement("button");
    removeFromCartButton.classList.add("remove-from-cart-button");
    removeFromCartButton.textContent = "Remove";
  
    removeFromCartButton.addEventListener("click", function () {
        removeItemFromCart(product.id);

        updateCartCount();
    });
  
  
    productItem.appendChild(img);
    productItem.appendChild(title);
    productItem.appendChild(price);
    productItem.appendChild(description);
    productItem.appendChild(baseColor);
    productItem.appendChild(gender);
    productItem.appendChild(sizes);
    productItem.appendChild(addToCartButton);
    productItem.appendChild(removeFromCartButton);
  
    return productItem;
  }


