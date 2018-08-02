document.addEventListener("checkoutOrderPlaced", function(){
  function irConversion(){
    var txn = $(".order-confirmation .view").data("analytics").payload;
    irEvent.setOrderId(txn.number);
    for (var i = txn.items.length; i--;) {
      irEvent.addItem(txn.items[i].category_id, txn.items[i].sku, txn.items[i].price, txn.items[i].quantity);
    }
    if (txn.promo_codes.length){
      irEvent.setPromoCode(txn.promo_codes[0]);
    }
    irEvent.setCustomerId(md5(digitalData.transaction.profile.profileInfo.profileID));
    var discount = ((txn.total_price - (txn.tax_total + txn.shipping_total + txn.subtotal_price)) * -1).toFixed(2);
    if (discount > 0) {
      irEvent.setRebate(discount);
    }
    irEvent.fire();
  }
  $.getScript("https://d33wwcok8lortz.cloudfront.net/js/4237/9501/irv3.js", function(){
    if (typeof md5 == "function"){
      irConversion();
    }
    else {
      $.getScript("https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTUvMDkvMjEvMTQvMzIvMzAvNjEzL21kNS5taW4uanMiXV0/md5.min.js?sha=a94aad09a915d4f0", irConversion);
    }
  });
});