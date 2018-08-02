document.addEventListener("checkoutOrderPlaced", function() {
  var lytics = $('.view').data('analytics').payload;
  var newScriptTag = document.createElement('script');
  newScriptTag.setAttribute('src', "//code.murdoog.com/onetag/C1C70E8ACBD7B8.js?orderId=" + lytics.number + "&orderTotal=" + (lytics.total_price - lytics.tax_total - lytics.shipping_total).toFixed(2));
  document.head.insertBefore(newScriptTag, document.head.firstChild);
});