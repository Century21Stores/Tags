document.addEventListener("checkoutOrderPlaced", function() {
  var lytics = $(".view").data("analytics").payload;
  var skuArr = [];
  for(var i = lytics.items.length; i--;)
  {
    skuArr.push(lytics.items[i].sku);
  };
  var skuStringList = skuArr.join();
  var convpix = new Image();
  convpix.id = "polyvore_conversion_pixel";
  convpix.src = "https://www.polyvore.com/conversion/beacon.gif?adv=" + encodeURIComponent(location.hostname) + "&amt=" + encodeURIComponent(lytics.subtotal_price) + "&oid=" + encodeURIComponent(lytics.number) + "&skus=" + encodeURIComponent(skuStringList) + "&cur=usd"
  document.body.appendChild(convpix);
});