<<<<<<< HEAD
var CART_KEY = "ranCart";
var toast = document.getElementById("toast");
var toastText = document.getElementById("toast-text");
var toastTimer;

function getCart() {
	try {
		return JSON.parse(localStorage.getItem(CART_KEY)) || {};
	} catch (e) {
		return {};
	}
}

function saveCart(cart) {
	try {
		localStorage.setItem(CART_KEY, JSON.stringify(cart));
	} catch (e) {}
}

function showToast(text) {
	toastText.textContent = text;
	toast.classList.add("show");
	clearTimeout(toastTimer);
	toastTimer = setTimeout(function () {
		toast.classList.remove("show");
	}, 2500);
}

document.querySelectorAll(".add-to-cart").forEach(function (btn) {
	btn.addEventListener("click", function () {
		var cart = getCart();
		var id = btn.dataset.id;
		cart[id] = Math.min((cart[id] || 0) + 1, 20); // max 20, same as the cart page
		saveCart(cart);
		showToast("" + btn.dataset.name + " added to cart");
	});
=======
var CART_KEY = "ranCart";
var toast = document.getElementById("toast");
var toastText = document.getElementById("toast-text");
var toastTimer;

function getCart() {
	try {
		return JSON.parse(localStorage.getItem(CART_KEY)) || {};
	} catch (e) {
		return {};
	}
}

function saveCart(cart) {
	try {
		localStorage.setItem(CART_KEY, JSON.stringify(cart));
	} catch (e) {}
}

function showToast(text) {
	toastText.textContent = text;
	toast.classList.add("show");
	clearTimeout(toastTimer);
	toastTimer = setTimeout(function () {
		toast.classList.remove("show");
	}, 2500);
}

document.querySelectorAll(".add-to-cart").forEach(function (btn) {
	btn.addEventListener("click", function () {
		var cart = getCart();
		var id = btn.dataset.id;
		cart[id] = Math.min((cart[id] || 0) + 1, 20); // max 20, same as the cart page
		saveCart(cart);
		showToast("" + btn.dataset.name + " added to cart");
	});
>>>>>>> 6ce5b51cf9fd906f00cf652e13f3bc503bed2885
});