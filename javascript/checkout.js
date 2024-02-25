// checkout js

document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const totalPriceElement = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout-button");

    checkoutButton.addEventListener("click", function () {
        if (!validateCheckoutForm()) {
            alert("Please fill out all fields and choose a payment method before checking out.");
            return;
        }

        if (!hasItemsInCart()) {
            alert("No items in the cart. Can't proceed to checkout.");
            return;
        }

        window.location.href = "checkout-success.html";
    });

    function hasItemsInCart() {
        const cartItems = getCartItems();
        return cartItems.length > 0;
    }

    function calculateTotalPrice(products) {
        const totalPrice = products.reduce((total, product) => {
            return total + parseFloat(product.price.replace("$", ""));
        }, 0);

        return totalPrice.toFixed(2);
    }

    function getCartItems() {
        const cartItems = localStorage.getItem("cart");
        return cartItems ? JSON.parse(cartItems) : [];
    }

    function removeProductFromCart(productId) {
        let cartItems = getCartItems();
        cartItems = cartItems.filter(item => item.id !== productId);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        renderOrderSummary();
    }

    function renderOrderSummary() {
        const cartItems = getCartItems();

        productList.innerHTML = "";

        cartItems.forEach(product => {
            const listItem = document.createElement("li");

            const productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.title;
            productImage.classList.add("order-summary-image");

            listItem.appendChild(productImage);

            const titleSpan = document.createElement("span");
            titleSpan.textContent = product.title;
            titleSpan.classList.add("order-summary-title");

            const sizeSpan = document.createElement("span");
            sizeSpan.textContent = `Size: ${product.size}`;
            sizeSpan.classList.add("order-summary-size");

            const priceSpan = document.createElement("span");
            priceSpan.textContent = `Price: ${product.price}`;
            priceSpan.classList.add("order-summary-price");

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-button");
            removeButton.addEventListener("click", function() {
                removeProductFromCart(product.id);
            });

            listItem.appendChild(titleSpan);
            listItem.appendChild(sizeSpan);
            listItem.appendChild(priceSpan);
            listItem.appendChild(removeButton);
            
            productList.appendChild(listItem);
        });

        totalPriceElement.textContent = `Total: $${calculateTotalPrice(cartItems)}`;
    }

    function validateCheckoutForm() {
        const requiredFields = [
            "name",
            "last-name",
            "phone",
            "email",
            "address",
            "country",
            "city",
            "postal-code"
        ];

        const paymentMethods = document.querySelectorAll('input[name="payment"]');

        for (const field of requiredFields) {
            const value = document.getElementById(field).value.trim();
            if (value === "") {
                return false;
            }
        }

        let paymentSelected = false;
        paymentMethods.forEach(method => {
            if (method.checked) {
                paymentSelected = true;
            }
        });
        return paymentSelected;
    }

    renderOrderSummary();
});

