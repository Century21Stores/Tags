function () {
  var items_In_Cart;
  items_In_Cart = document.querySelector('.minicart-quantity');
  
  if (items_In_Cart) {
    items_In_Cart_Value = items_In_Cart.innerText;
  	return items_In_Cart_Value; 
  	// console.log(items_In_Cart_Value);
  }
}