document.addEventListener("checkoutOrderPlaced", function() {
  var skuList = '';
  var qList = '';
  var amtList = '';
  var nameList = '';
  var txn = $(".order-confirmation .view").data("analytics").payload;
  for (var i = txn.items.length; i--;) {
    skuList += encodeURIComponent(txn.items[i].sku) + '|';
    qList += txn.items[i].quantity + '|';
    amtList += Math.round(100 * txn.items[i].price) + '|';
    nameList += encodeURIComponent(txn.items[i].product_name) + '|';
  }
  var discount = Math.round((txn.total_price - (txn.tax_total + txn.shipping_total + txn.subtotal_price)) * 100);
  if (discount != 0) {
    skuList += "Discount";
    qList += "0";
    amtList += discount.toString();
    nameList += "Discount";
  }
  else {
    skuList = skuList.slice(0, -1);
    qList = qList.slice(0, -1);
    amtList = amtList.slice(0, -1);
    nameList = nameList.slice(0, -1);
  }
  var convPix = new Image();
  convPix.src = '//track.linksynergy.com/ep?mid=38939&ord=' + digitalData.transaction.transactionID + '&skulist=' + skuList + '&qlist=' + qList + '&amtlist=' + amtList + '&cur=USD&img=1&namelist=' + nameList;
});