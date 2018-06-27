document.addEventListener("coremetricsComplete", function(e){
  for (var i = digitalData.product.length; i--;){
    if (!digitalData.product[i].category.primaryCategory){
      digitalData.product[i].category.primaryCategory = digitalData.page.category.primaryCategory;
    }
    cmCreateProductviewTag(
      digitalData.product[i].productInfo.productID,
      digitalData.product[i].productInfo.productName,
      digitalData.product[i].category.primaryCategory
    );
  }
});