var showPriceButtons = document.querySelectorAll(".card .card-body .show");
var prices = document.querySelectorAll(".card .card-body .price");
var addButtons = document.querySelectorAll(".card .card-body .add");
var totalPriceElement = document.getElementById("totalPrice");
var totalPrice = 0;

showPriceButtons.forEach(function (button, index) {
    button.onclick = function () {
        prices[index].style.visibility = "visible";
    };
});

addButtons.forEach(function (button, index) {
    button.onclick = function () {
        var priceText = prices[index].textContent;
        var priceValue = parseFloat(priceText.replace('$', ''));
        totalPrice += priceValue;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    };
});