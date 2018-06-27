document.addEventListener("productQuickView", function(){
  var curr = digitalData.product[digitalData.product.length - 1];
  cmCreateProductviewTag(curr.productInfo.productID, curr.productInfo.productName, curr.category.primaryCategory);
});