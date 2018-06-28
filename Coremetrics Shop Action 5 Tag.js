window.nvCreateShopAction5 = function() {
  for (var i = digitalData.cart.item.length; i--;)
    cmCreateShopAction5Tag(digitalData.cart.item[i].productInfo.productID,digitalData.cart.item[i].productInfo.productName,digitalData.cart.item[i].quantity,digitalData.cart.item[i].price,digitalData.cart.item[i].category.primaryCategory);
  cmDisplayShops();
}
document.addEventListener("cartView", function(){
  if (digitalData.cart.item.length > 0)
    nvCreateShopAction5();
  else
    document.addEventListener("activeCartData", nvCreateShopAction5);
});