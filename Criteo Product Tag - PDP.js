document.addEventListener("coremetricsComplete", function() {
  if (digitalData.product.length == 1)
    var items = digitalData.product[0].productInfo.productID;
  else {
    var items = []
    for (var i = 0; i < digitalData.product.length; i++)
      items.push(digitalData.product[i].productInfo.productID);
  }
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