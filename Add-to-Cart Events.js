document.addEventListener("DOMContentLoaded", function(){
  $("#top .page-content").on("submit", function(e){
    if (BrTrk){
      var addToBagForm = $(e.target).data("analytics");
      if (addToBagForm && addToBagForm.event == "addToCart"){
        var addToBag = addToBagForm.payload;
        BrTrk.getTracker().logEvent('cart', 'click-add', {'prod_id': addToBag.id, 'sku': addToBag.sku});
        if (digitalData.cart.item.length === 0)
          cmCreateConversionEventTag("CART CREATION", 2, "SHOP", 2);
      }
    }
  });
});