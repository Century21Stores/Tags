document.addEventListener("coremetricsComplete", function(e){
  if (fbq && typeof fbq == 'function') {
    var lytics = $('.view').data('analytics').payload;
    var payload = {
      content_name: lytics.name,
      content_category: lytics.category_id,
      content_ids: [],
      content_type: 'product_group'
    };
    for (var i = digitalData.product.length; i--;){
      payload.content_ids.push(digitalData.product[i].productInfo.productID);
    }
    if (payload.content_ids.length > 1) {
      payload.content_ids.push(lytics.id);
    }
    fbq('track', 'ViewContent', payload);
  }
});