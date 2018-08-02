document.addEventListener("productQuickView", function(){
  if (fbq && typeof fbq == 'function') {
    var curr = digitalData.product[digitalData.product.length - 1];
    fbq('track', 'ViewContent', {
      content_name: curr.productInfo.productName,
      content_category: curr.category.primaryCategory,
      content_ids: [curr.productInfo.productID],
      content_type: 'product_group'
    });
  }
});