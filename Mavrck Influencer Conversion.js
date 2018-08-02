document.addEventListener('checkoutOrderPlaced', function() {
  var lytics = $('.view').data('analytics').payload;
  mvk('fireConversion', 'A6FCF93613DF425F96C80305F34F74B1', (lytics.total_price - lytics.tax_total - lytics.shipping_total).toFixed(2).toString(), '0', '');
});