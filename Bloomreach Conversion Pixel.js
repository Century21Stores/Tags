document.addEventListener("checkoutOrderPlaced", function(){
  var subtotal = 0;
  window.br_data = {
    "acct_id": '5327',
    "ptype": 'other',
    "is_conversion": 1,
    "order_id": digitalData.transaction.transactionID,
    "basket": {
      "items": []
    }
  };
  digitalData.transaction.item.forEach(function(item, i, arr){
    var curr = {};
    curr.prod_id = item.productInfo.productID;
    curr.name = item.productInfo.productName;
    curr.quantity = item.quantity;
    curr.price = item.price;
    subtotal += item.price * item.quantity;
    window.br_data.basket.items.push(curr);
  });
  window.br_data.basket_value = subtotal;
  (function() {
    var brtrk = document.createElement('script');
    brtrk.type = 'text/javascript';
    brtrk.async = true;
    brtrk.src = 'https:' == document.location.protocol ? "https://cdns.brsrvr.com/v1/br-trk-" + window.br_data.acct_id + ".js" : "http://cdn.brcdn.com/v1/br-trk-" + window.br_data.acct_id + ".js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(brtrk, s);
  })();
});