document.addEventListener("DOMContentLoaded", function () {
    const productDetails = document.getElementById('product-details');
    const productId = '07a7655a-7927-421b-ba6a-b6742d5a75b8';

    fetch(`https://api.noroff.dev/api/v1/rainy-days/${productId}`)
       .then(response => response.json())
       .then(product => {
           console.log("Product:", product);
           const productItem = createProductItem(product);
           productDetails.appendChild(productItem);
       })
       .catch(error => console.error('Error fetching product:', error));

       const burgerMenu = document.getElementById("burger-menu");
       const burgerIcon = document.createElement("div");
       burgerIcon.classList.add("burger-icon");
   
       for (let i = 0; i < 3; i++) {
           const line = document.createElement("div");
           line.classList.add("burger-line");
           burgerIcon.appendChild(line);
       }
       
       burgerMenu.appendChild(burgerIcon);

       burgerMenu.addEventListener("click", function () {
           document.querySelector("header nav ul").classList.toggle("show-menu");
       });

    

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

    addToCartButton.addEventListener("click", function() {
        console.log(`Product ${product.title} added to cart!`);
    });




    if (product.onSale) {
        const discountPercentage = ((product.price - product.discountedPrice) / product.price) * 100;
        price.innerHTML = `<span class="original-price">$${product.price.toFixed(2)}</span> $${product.discountedPrice.toFixed(2)} <span class="discount-percentage">(${discountPercentage.toFixed(0)}% off)</span>`;
    } else {
        price.textContent = `$${product.price.toFixed(2)}`;
    }

    const discount = document.createElement('div');
    discount.classList.add('product-discount');
    discount.textContent = `$${product.discountedPrice.toFixed(2)}`;


    productItem.appendChild(img);
    productItem.appendChild(title);
    productItem.appendChild(price);
    productItem.appendChild(description);
    productItem.appendChild(baseColor);
    productItem.appendChild(gender);
    productItem.appendChild(sizes);
    productItem.appendChild(addToCartButton);

    return productItem;
}