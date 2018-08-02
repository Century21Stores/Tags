document.addEventListener("checkoutOrderPlaced", function(){
  document.write('<iframe src="https://4396006.fls.doubleclick.net/activityi;src=4396006;type=Purch0;cat=Purch0;qty=' + digitalData.transaction.item.length + ';cost=' + digitalData.transaction.total.basePrice + ';ord=' + digitalData.transaction.transactionID + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
});