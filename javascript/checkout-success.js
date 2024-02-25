document.addEventListener("DOMContentLoaded", function () {
    localStorage.setItem("cart", "[]");

    if (window.opener) {
        window.opener.updateCartCount();
    }

    updateCartCount();
});