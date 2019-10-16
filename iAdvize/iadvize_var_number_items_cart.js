function () {
  
  var items_In_Cart = document.querySelector('.minicart-quantity');
  var items_In_Cart_Value;
  
	if(window.location.href.indexOf("/checkout") > -1) {
		if(window.location.href.indexOf("/complete") > -1){
			items_In_Cart_Value = window.dataLayer[1].ecommerce.purchase.products.length;
		}
		else{
			items_In_Cart_Value = window.dataLayer[1].ecommerce.products.length;	
		};
	}
	else{
		if (items_In_Cart) {
    		items_In_Cart_Value = items_In_Cart.innerText;
  		}		
	};

	return items_In_Cart_Value; 

}