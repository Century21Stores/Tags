document.addEventListener("productList", function(){
  window.criteo_q = window.criteo_q || [];
  var deviceType = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(navigator.userAgent) ? "m" : "d";
  var items = [];
  for (var i = 0; i < digitalData.product.length; i++)
    items.push(digitalData.product[i].productInfo.productID);
  var hashedEmail = WEBLINC.cookie.read("criteo_hash");
  if (hashedEmail && hashedEmail != ""){
    window.criteo_q.push(
      {event: "setAccount", account: 18573},
      {event: "setSiteType", type: deviceType},
      {event: "setHashedEmail", email: [hashedEmail]},
      {event: "viewList", item: items}
    );
  }
  else {
    window.criteo_q.push(
      {event: "setAccount", account: 18573},
      {event: "setSiteType", type: deviceType},
      {event: "viewList", item: items}
    );
  }
});