document.addEventListener("coremetricsComplete", function(){
  $(".view").submit(function(e){
    if ($(e.target).hasClass("product-details__add-to-cart-form") && fbq && typeof fbq == 'function'){
      var lytics = $(e.target).data("analytics").payload;
      var payload = {
        value: lytics.price,
        currency: 'USD',
        content_name: lytics.name,
        content_type: 'product',
        content_ids: [e.target.sku.value]
      };
      fbq('track', 'AddToCart', payload);
    }
  });
});