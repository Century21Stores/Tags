document.addEventListener("productQuickView", function() {
  var items = digitalData.product[digitalData.product.length - 1].productInfo.productID;
  window.criteo_q = window.criteo_q || [];
  var deviceType = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(navigator.userAgent) ? "m" : "d";
  var hashedEmail = WEBLINC.cookie.read("criteo_hash");
  if (hashedEmail && hashedEmail != ""){
    window.criteo_q.push(
      {event: "setAccount", account: 18573},
      {event: "setSiteType", type: deviceType},
      {event: "setHashedEmail", email: [hashedEmail]},
      {event: "viewItem", item: items}
    );
  }
  else {
    window.criteo_q.push(
      {event: "setAccount", account: 18573},
      {event: "setSiteType", type: deviceType},
      {event: "viewItem", item: items}
    );
  }
});