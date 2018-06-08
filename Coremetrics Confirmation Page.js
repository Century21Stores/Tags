document.addEventListener("coremetricsComplete", function(){
  for (var i = digitalData.transaction.item.length; i--;){
    var curr = digitalData.transaction.item[i];
    cmCreateShopAction9Tag(curr.productInfo.productID, curr.productInfo.productName, curr.quantity, curr.price, digitalData.transaction.profile.profileInfo.profileID, digitalData.transaction.transactionID, digitalData.transaction.total.basePrice, curr.category.primaryCategory);
  }
  cmDisplayShops();
  var lytics = $('.view').data('analytics').payload;
  var attributes = [];
  attributes.push(lytics.promo_codes.length);
  attributes.push(((lytics.subtotal_price + lytics.tax_total + lytics.shipping_total) - lytics.total_price).toFixed(2));
  if (lytics.promo_codes.length > 0) {
    attributes.push(lytics.promo_codes[0]);
  }
  cmCreateOrderTag(digitalData.transaction.transactionID, digitalData.transaction.total.basePrice, digitalData.transaction.total.shipping, digitalData.transaction.profile.profileInfo.profileID, digitalData.transaction.profile.address.city, digitalData.transaction.profile.address.state_province, digitalData.transaction.profile.postalcode, attributes.join('-_-'));
  cmCreateRegistrationTag(digitalData.transaction.profile.profileInfo.profileID, digitalData.transaction.profile.profileInfo.profileEmail, digitalData.transaction.profile.address.city, digitalData.transaction.profile.address.state_province, digitalData.transaction.profile.postalcode, digitalData.transaction.profile.country);
});