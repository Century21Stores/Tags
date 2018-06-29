document.addEventListener("activeCartData", function(){
  if (digitalData.cart.item.length == 0)
    return;
  window.criteo_q = window.criteo_q || [];
  var deviceType = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(navigator.userAgent) ? "m" : "d";
  var items = [];
  for (var i = 0; i < digitalData.cart.item.length; i++)
    items.push({
      "id": digitalData.cart.item[i].productInfo.productID,
      "price": digitalData.cart.item[i].price,
      "quantity": digitalData.cart.item[i].quantity
    });
  var hashedEmail = WEBLINC.cookie.read("criteo_hash");
  if (hashedEmail && hashedEmail != ""){
    window.criteo_q.push(
      {event: "setAccount", account: 18573},
      {event: "setSiteType", type: deviceType},
      {event: "setHashedEmail", email: [hashedEmail]},
      {event: "viewBasket", item: items}
    );
  }
  else {
    window.criteo_q.push(
      {event: "setAccount", account: 18573},
      {event: "setSiteType", type: deviceType},
      {event: "viewBasket", item: items}
    );
  }
});