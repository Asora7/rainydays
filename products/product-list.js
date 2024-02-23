// Product list

document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById('products-men');
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    fetch('https://api.noroff.dev/api/v1/rainy-days')
        .then(response => response.json())
        .then(products => {
            console.log("Products:", products);

            products.forEach(product => {
                const productItem = createProductItem(product);
                productsContainer.appendChild(productItem);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});



function createProductItem(product) {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');


    const productLink = document.createElement('a');
    console.log('Product ID:', product.id);
    productLink.href = `/products/product-detail.html#${product.id}`;

    const img = new Image();
    img.src = product.image;
    img.alt = product.title;

    const title = document.createElement('div');
    title.classList.add('product-title');
    title.textContent = product.title;

    const price = document.createElement('div');
    price.classList.add('product-price');

    if (product.onSale) {
        const discountPercentage = ((product.price - product.discountedPrice) / product.price) * 100;
        price.innerHTML = `<span class="original-price">$${product.price.toFixed(2)}</span> $${product.discountedPrice.toFixed(2)} <span class="discount-percentage">(${discountPercentage.toFixed(0)}% off)</span>`;
    } else {
        price.textContent = `$${product.price.toFixed(2)}`;
    }

    const discount = document.createElement('div');
    discount.classList.add('product-discount');
    discount.textContent = `$${product.discountedPrice.toFixed(2)}`;

    productLink.appendChild(img);
    productLink.appendChild(title);
    productLink.appendChild(price);
    productLink.appendChild(discount);
    productItem.appendChild(productLink);

    return productItem;
}






/// button to choose genre

function filterProducts(category) {
    const categoryButtons = document.querySelectorAll(".category-button");
    categoryButtons.forEach(button => {
        button.classList.remove("active");
        if (button.textContent.toLowerCase() === category) {
            button.classList.add("active");
        }
    });

    const clickedButton = document.querySelector(`.category-button[data-category="${category}"]`);
    if (clickedButton) {
        clickedButton.classList.add("active");
    }

    const productsContainer = document.getElementById("products-men");

    fetch('https://api.noroff.dev/api/v1/rainy-days')
        .then(response => response.json())
        .then(products => {
            const filteredProducts = filterProductsByCategory(products, category);

            productsContainer.innerHTML = ''; 

            filteredProducts.forEach(product => {
                const productItem = createProductItem(product);
                productsContainer.appendChild(productItem);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}

function filterProductsByCategory(products, category) {
    if (category === 'all') {
        return products;
    }
    return products.filter(product => {
        return (category === 'sale' && product.onSale) || (category !== 'sale' && product.gender.toLowerCase() === category);
    });
}

