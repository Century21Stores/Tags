document.addEventListener("coremetricsComplete", function(){
  $(".view").on("click", ".product-summary__media a, .product-summary__info a", function(e){
    var p = $(e.target).data("analyticsProductImpression");
    if (!p){
      var p = $(e.target).parents(".product-summary").find(".product-summary__media-link").data("analyticsProductImpression")
      if (!p){
        console.log("GA Product Click Failed");
        e.preventDefault();
        return false;
      }
    }
    var gaObj = {
      "id": p.id,
      "name": p.name,
      "list": p.category,
      "price": p.price
    };
    var pos = $(".product-summary").index($(e.target).parents(".product-summary"));
    if (pos > -1){
      gaObj.position = pos + 1;
    }
    if (typeof ga == "function"){
      ga('ec:addProduct', gaObj);
      ga('ec:setAction', 'click');
      ga('send', 'event', 'product', 'click');
    }
    else {
      document.addEventListener("gaReady", function(){
        ga('ec:addProduct', gaObj);
        ga('ec:setAction', 'click');
        ga('send', 'event', 'product', 'click');
      });
    }
  });
  $(".view").on("click", ".product-summary__quickview a", function(e){
    var p = $(e.target).parents(".product-summary").find(".product-summary__media-link").data("analyticsProductImpression");
    if (!p){
      console.log("GA Product QV Failed");
      e.preventDefault();
      return false;
    }
    var gaObj = {
      "id": p.id,
      "name": p.name,
      "list": p.category,
      "price": p.price
    };
    var pos = $(".product-summary").index($(e.target).parents(".product-summary"));
    if (pos > -1){
      gaObj.position = pos + 1;
    }
    if (typeof ga == "function"){
      ga('ec:addProduct', gaObj);
      ga('ec:setAction', 'click');
      ga('send', 'event', 'product', 'quickview');
    }
    else {
      document.addEventListener("gaReady", function(){
        ga('ec:addProduct', gaObj);
        ga('ec:setAction', 'click');
        ga('send', 'event', 'product', 'quickview');
      });
    }
  });
});