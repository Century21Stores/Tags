document.addEventListener("checkoutOrderPlaced", function() {
  var _caq = window._caq || [];
  var products = [];
  for (i = 0, len = digitalData.transaction.item.length; i < len; i++)
    products.push({
      "Sku": digitalData.transaction.item[i].productInfo.productID,
      "UnitPrice": digitalData.transaction.item[i].price,
      "Quantity": digitalData.transaction.item[i].quantity
    });
  _caq.push(["Order", {
    "OrderId": digitalData.transaction.transactionID,
    "Revenue": digitalData.transaction.total.basePrice,
    "CurrencyCode": "USD",
    "Products": products}]);
});