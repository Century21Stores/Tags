document.addEventListener("checkoutOrderPlaced", function() {
  var convPix = new Image();
  convPix.src = '//shop.c21stores.com/pub/cct?_ri_=X0Gzc2X%3DWQpglLjHJlYQGnM5PMqGIcvvzcFaza8whhmEh&_ei_=EqgfZgq_XZfnWUHOpb7HGMA&OrderID=' + digitalData.transaction.transactionID + '&OrderTotal=' + digitalData.transaction.total.basePrice + '&NumItems=' + digitalData.transaction.item.length + '&CustomerID=' + digitalData.user[0].profile.profileInfo.profileID;
});