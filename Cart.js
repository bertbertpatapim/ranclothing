<<<<<<< HEAD
var CART_KEY = "ranCart";

var form = document.getElementById("order-form");
var qtyInputs = document.querySelectorAll(".qty-input");
var grandTotal = document.getElementById("grand-total");
var totalQty = document.getElementById("total-qty");
var message = document.getElementById("cart-message");
var thanksTotal = document.getElementById("thanks-total");

function formatPeso(amount) {
	return "₱" + amount.toLocaleString("en-US");
}

// Keeps each quantity between 0 and 20
function cleanQty(input) {
	var qty = parseInt(input.value, 10);
	if (isNaN(qty) || qty < 0) { qty = 0; }
	if (qty > 20) { qty = 20; }
	input.value = qty;
	return qty;
}

// Loads the items added from the product page
function loadSavedCart() {
	var saved = {};
	try {
		saved = JSON.parse(localStorage.getItem(CART_KEY)) || {};
	} catch (e) {}

	qtyInputs.forEach(function (input) {
		var id = input.closest("tr").id;
		if (saved[id]) { input.value = saved[id]; }
	});
}

// Remembers the current quantities so they stay when you leave the page
function saveCart() {
	var cart = {};
	qtyInputs.forEach(function (input) {
		var qty = Number(input.value);
		if (qty > 0) { cart[input.closest("tr").id] = qty; }
	});
	try {
		localStorage.setItem(CART_KEY, JSON.stringify(cart));
	} catch (e) {}
}

// Recalculates every line, the item count and the grand total
function updateTotals() {
	var total = 0;
	var items = 0;

	qtyInputs.forEach(function (input) {
		var qty = cleanQty(input);
		var lineTotal = qty * Number(input.dataset.price);
		input.closest("tr").querySelector(".line-total").textContent = formatPeso(lineTotal);
		total += lineTotal;
		items += qty;
	});

	grandTotal.textContent = formatPeso(total);
	totalQty.textContent = items + (items === 1 ? " item" : " items");
	if (items > 0) { message.textContent = ""; }

	saveCart();

	return { total: total, items: items };
}

qtyInputs.forEach(function (input) {
	input.addEventListener("input", updateTotals);
	input.addEventListener("change", updateTotals);
});

// Place Order: need at least one item, then show the thank-you popup
form.addEventListener("submit", function (event) {
	var cart = updateTotals();

	event.preventDefault();

	if (cart.items === 0) {
		message.textContent = "Your cart is empty. Set a quantity for at least one item.";
		qtyInputs[0].focus();
		return;
	}

	thanksTotal.textContent = "Order total: " + formatPeso(cart.total);
	window.location.hash = "thanks";
	form.reset();
	updateTotals();
});

// Clear button also resets the totals and message
form.addEventListener("reset", function () {
	setTimeout(function () {
		updateTotals();
		message.textContent = "";
	}, 0);
});

loadSavedCart();
=======
var CART_KEY = "ranCart";

var form = document.getElementById("order-form");
var qtyInputs = document.querySelectorAll(".qty-input");
var grandTotal = document.getElementById("grand-total");
var totalQty = document.getElementById("total-qty");
var message = document.getElementById("cart-message");
var thanksTotal = document.getElementById("thanks-total");

function formatPeso(amount) {
	return "₱" + amount.toLocaleString("en-US");
}

// Keeps each quantity between 0 and 20
function cleanQty(input) {
	var qty = parseInt(input.value, 10);
	if (isNaN(qty) || qty < 0) { qty = 0; }
	if (qty > 20) { qty = 20; }
	input.value = qty;
	return qty;
}

// Loads the items added from the product page
function loadSavedCart() {
	var saved = {};
	try {
		saved = JSON.parse(localStorage.getItem(CART_KEY)) || {};
	} catch (e) {}

	qtyInputs.forEach(function (input) {
		var id = input.closest("tr").id;
		if (saved[id]) { input.value = saved[id]; }
	});
}

// Remembers the current quantities so they stay when you leave the page
function saveCart() {
	var cart = {};
	qtyInputs.forEach(function (input) {
		var qty = Number(input.value);
		if (qty > 0) { cart[input.closest("tr").id] = qty; }
	});
	try {
		localStorage.setItem(CART_KEY, JSON.stringify(cart));
	} catch (e) {}
}

// Recalculates every line, the item count and the grand total
function updateTotals() {
	var total = 0;
	var items = 0;

	qtyInputs.forEach(function (input) {
		var qty = cleanQty(input);
		var lineTotal = qty * Number(input.dataset.price);
		input.closest("tr").querySelector(".line-total").textContent = formatPeso(lineTotal);
		total += lineTotal;
		items += qty;
	});

	grandTotal.textContent = formatPeso(total);
	totalQty.textContent = items + (items === 1 ? " item" : " items");
	if (items > 0) { message.textContent = ""; }

	saveCart();

	return { total: total, items: items };
}

qtyInputs.forEach(function (input) {
	input.addEventListener("input", updateTotals);
	input.addEventListener("change", updateTotals);
});

// Place Order: need at least one item, then show the thank-you popup
form.addEventListener("submit", function (event) {
	var cart = updateTotals();

	event.preventDefault();

	if (cart.items === 0) {
		message.textContent = "Your cart is empty. Set a quantity for at least one item.";
		qtyInputs[0].focus();
		return;
	}

	thanksTotal.textContent = "Order total: " + formatPeso(cart.total);
	window.location.hash = "thanks";
	form.reset();
	updateTotals();
});

// Clear button also resets the totals and message
form.addEventListener("reset", function () {
	setTimeout(function () {
		updateTotals();
		message.textContent = "";
	}, 0);
});

loadSavedCart();
>>>>>>> 6ce5b51cf9fd906f00cf652e13f3bc503bed2885
updateTotals();