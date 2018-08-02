document.addEventListener("checkoutOrderPlaced", function() {
  var lytics = $('.view').data('analytics').payload;
  var newScriptTag = document.createElement('script');
  newScriptTag.setAttribute('src', "https://js.b1js.com/tagcontainer.js?id=c3f61a2eb9ca42808c40ae55451bcb3a&type=0&order_id=" + lytics.number + "&value=" + (lytics.total_price - lytics.tax_total - lytics.shipping_total).toFixed(2));
  document.head.insertBefore(newScriptTag, document.head.firstChild);
});