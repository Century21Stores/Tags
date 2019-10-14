‘‘‘‘‘‘document.addEventListener("checkoutOrderPlaced", function() {
  var lytics = $(".view").data("analytics").payload;
  var skulist = '';
  for (var i = lytics.items.length; i--;) {
    skulist += lytics.items[i].product_id;
    if (i) {
      skulist += ",";
    }
  }
  var convpix = new Image();
  convpix.id = "bluecore_purchase_pixel";
  convpix.src = encodeURI("https://www.bluecore.com/api/track/purchase_pixel?token=century21&email=" + digitalData.transaction.profile.profileInfo.profileEmail + "&total=" + lytics.subtotal_price + "&order_id=" + lytics.number + "&product_ids=" + skulist);
  document.body.appendChild(convpix);
});