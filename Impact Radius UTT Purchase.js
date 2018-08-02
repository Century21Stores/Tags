window.irTrackConversion = function() {
  var lytics = $('.view').data('analytics').payload;
  var payload = {
    orderId: lytics.number,
    customerId: md5(digitalData.transaction.profile.profileInfo.profileID),
    currencyCode: "USD",
    orderDiscount: lytics.subtotal_price - (lytics.total_price - lytics.tax_total - lytics.shipping_total),
    orderPromoCode: (lytics.promo_codes && lytics.promo_codes[0]) || '',
    items: lytics.items.map(function(curr) {
      return {
        subTotal: curr.price,
        category: curr.category_id,
        sku: curr.sku,
        quantity: curr.quantity
      };
    })
  };
  ire('trackConversion', 11991, payload);
};
document.addEventListener('checkoutOrderPlaced', function() {
  if (typeof md5 === "function") {
    irTrackConversion();
  } else {
    $.getScript("https://www.c21stores.com/media/W1siZiIsIjIwMTUvMDkvMjEvMTQvMzIvMzAvNjEzL21kNS5taW4uanMiXV0/md5.min.js?sha=a94aad09a915d4f0", irTrackConversion);
  }
});