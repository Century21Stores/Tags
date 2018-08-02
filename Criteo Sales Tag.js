document.addEventListener("checkoutOrderPlaced", function(){
  window.criteo_q = window.criteo_q || [];
  function criteoSales(){
    var deviceType = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(navigator.userAgent) ? "m" : "d";
    var items = [];
    var txn = digitalData.transaction;
    var processedEmail = digitalData.user[0].profile.profileInfo.profileEmail.trim();
    var processedEmail = processedEmail.toLowerCase();
    for (var i = txn.item.length; i--;){
      items.push({
        "id": txn.item[i].productInfo.productID,
        "price": txn.item[i].price,
        "quantity": txn.item[i].quantity
      });
    }
    window.criteo_q.push(
      {event: "setAccount", account: 18573},
      {event: "setSiteType", type: deviceType},
      {event: "setHashedEmail", email: [md5(processedEmail)]},
      {event: "trackTransaction", id: txn.transactionID, item: items}
    );
  }
  if (typeof md5 == "function"){
    criteoSales();
  }
  else{
    $.getScript("https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTUvMDkvMjEvMTQvMzIvMzAvNjEzL21kNS5taW4uanMiXV0/md5.min.js?sha=a94aad09a915d4f0", criteoSales);
  }
});