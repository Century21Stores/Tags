function () {
	var product_price, product_set_page, cart_price, checkout_price;

	if(window.location.href.indexOf("/products/") > -1) {

		product_set_page = document.querySelector('.product-set-detail');
		if(product_set_page != null){
			product_price = document.querySelector('.product-set-detail .price .range').innerText;
		}
		else{
			product_price = window.dataLayer[1].ecommerce.detail.products[0].price;
		}
	}
	else if(window.location.href.indexOf("/cart") > -1) {
		cart_price = document.querySelector('.subtotal-item .sub-total');
		if(cart_price != null){
			product_price = cart_price.innerText;			
		}
		else{
			product_price = 0;
		}

	}
	else if(window.location.href.indexOf("/checkout") > -1) {
		checkout_price = document.querySelector('.sub-total');

		if(window.location.href.indexOf("/complete") > -1){
			product_price = window.dataLayer[1].ecommerce.purchase.actionField.revenue;
		}
		else{
			if(checkout_price != null){
				product_price = checkout_price.innerText;			
			}
			else{
				checkout_price = 0;
			}	
		}
		
	}
	else{
		product_price = 0;
	}  
	return product_price;
}