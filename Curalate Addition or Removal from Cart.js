// ADD TO CART and REMOVE FROM CART
document.addEventListener("coremetricsComplete", function (){
	//ADD TO CART
	$(".view").submit(function(e){
	    //IF ADD TO CART FORM EXCIST
	    if ($(e.target).hasClass("product-details__add-to-cart-form")){
	    	//payload object
			var curalateLytics = $(e.target).data("analytics").payload;
			var addToCartData = {
			productId: curalateLytics.id,
			productName: curalateLytics.name,
			price: curalateLytics.price,
			displayPrice: curalateLytics.price,
			quantity: e.target.quantity.value,
			sku: curalateLytics.sku.value,			
			category: curalateLytics.category
 			//userId: ''
		  };	      	
    	crl8('addToCart', addToCartData);
     	crl8('send');
 }
	});	
	//REMOVE FROM CART
	$(".product-list__remove").submit(function(e){
		//IF REMOVE FORM EXCIST
	    //if ($(e.target).hasClass("action-group__item")){	
			var curalateLytics = $(e.target).data("analytics");
//       		if (curalateLytics.event != "removeFromCart"){
//         		return false;
//       		}
      		var removeFromCartData = {
        		productId: curalateLytics.payload.product_id,
		        productName: curalateLytics.payload.product_name,
    		    price: curalateLytics.payload.unit_price,
    		    displayPrice: curalateLytics.price,
	    	    quantity: curalateLytics.payload.quantity,
    	    	sku: curalateLytics.payload.sku,
    	    	category: ''
    	    	//userId: ''
      		};
    	//}
    	crl8('removeFromCart', removeFromCartData);
     	crl8('send');	
	});
	// REMOVE FROM FULL CART PAGE
	$(".action-group__item").submit(function(e){
	    //IF ADD TO CART FORM EXCIST
		var curalateLytics = $(e.target).data("analytics");
	    if (curalateLytics.event === 'removeFromCart'){
	    	//payload object
			var removeFromCartData = {
        		productId: curalateLytics.payload.product_id,
		        productName: curalateLytics.payload.product_name,
    		    price: curalateLytics.payload.unit_price,
    		    displayPrice: curalateLytics.price,
	    	    quantity: curalateLytics.payload.quantity,
    	    	sku: curalateLytics.payload.sku,
    	    	category: ''
    	    	//userId: ''
		  };	      	
    	crl8('removeFromCart', removeFromCartData);
     	crl8('send');
	    }
	});	
});