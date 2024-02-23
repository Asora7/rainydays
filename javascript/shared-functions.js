
// shared js

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = cart.length;
    console.log("Updating cart count:", cartCount);
    document.getElementById("cart-count").textContent = cartCount;
}

function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isInCart = cart.some(item => item.id === product.id && item.size === product.size);

    if (!isInCart) {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            size: product.size
        });

        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(`Product ${product.title} added to cart!`);
        updateCartCount();  // Update cart count after adding to cart
    }
}

function removeItemFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(`Product removed from cart!`);
    updateCartCount();  // Update cart count after removing from cart
}

updateCartCount();





