document.addEventListener("coremetricsComplete", function(){
  $(".view").submit(function(e){
    if ($(e.target).hasClass("product-details__add-to-cart-form")){
      var lytics = $(e.target).data("analytics").payload;
      var gaObj = {
        "id": lytics.id,
        "name": lytics.name,
        "category": lytics.category,
        "variant": e.target.sku.value,
        "price": lytics.price,
        "quantity": e.target.quantity.value
      };
      if (typeof ga == "function"){
        ga('ec:addProduct', gaObj);
        ga('ec:setAction', 'add');
        ga('send', 'event', 'UX', 'click', 'Add To Bag');
      }
      else {
        document.addEventListener("gaReady", function(){
          ga('ec:addProduct', gaObj);
          ga('ec:setAction', 'add');
          ga('send', 'event', 'UX', 'click', 'Add To Bag');
        });
      }
    }
  });
  $("body").submit(function(e){
    if ($(e.target).hasClass("action-group__item")){
      var lytics = $(e.target).data("analytics");
      if (lytics.event != "removeFromCart"){
        return false;
      }
      var gaObj = {
        "id": lytics.payload.product_id,
        "name": lytics.payload.product_name,
        "variant": lytics.payload.sku,
        "price": lytics.payload.unit_price,
        "quantity": lytics.payload.quantity
      };
      if (typeof ga == "function"){
        ga('ec:addProduct', gaObj);
        ga('ec:setAction', 'remove');
        ga('send', 'event', 'UX', 'click', 'Remove From Bag');
      }
      else {
        document.addEventListener("gaReady", function(){
          ga('ec:addProduct', gaObj);
          ga('ec:setAction', 'remove');
          ga('send', 'event', 'UX', 'click', 'Remove From Bag');
        });
      }
    }
  });
});