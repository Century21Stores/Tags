var gaCheckout = function(){
  var step = Object.freeze({
    "checkoutLoginView": 1,
    "checkoutAddressesView": 2,
    "checkoutShippingView": 3,
    "checkoutPaymentView": 4
  });
  var lytics = $(".view").data("analytics");
  for (var i = lytics.payload.items.length; i--;){
    var p = lytics.payload.items[i];
    ga("ec:addProduct", {
      "id": p.product_id,
      "name": p.product_name,
      "variant": p.sku,
      "price": p.unit_price,
      "quantity": p.quantity
    });
  }
  if (lytics.event == "checkoutOrderPlaced") {
    var gaObj = {
      "id": lytics.payload.number,
      "revenue": lytics.payload.total_price,
      "tax": lytics.payload.tax_total,
      "shipping": lytics.payload.shipping_total,
    };
    if (lytics.payload.promo_codes.length){
      gaObj.coupon = lytics.payload.promo_codes[0];
    }
    ga("ec:setAction", "purchase", gaObj);
  }
  else {
    ga("ec:setAction", "checkout", { "step": step[lytics.event] });
  }
  window.gaPageView = "sent";
  ga("send", "pageview");
}
document.addEventListener("coremetricsComplete", function(e){
  if (window.gaPageView && window.gaPageView == "sent"){
    return false;
  }
  if (typeof ga == "function"){
    gaCheckout();
  }
  else {
    $("document").one("gaReady", gaCheckout);
  }
});