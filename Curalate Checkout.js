// CHECKOUT
document.addEventListener('coremetricsComplete', function () {
				//var curalateLytics = $(e.target).data("analytics").payload;
				var curalateLytics = $('.view').data("analytics").payload;
				var curalateLytics2 = $('body').data("analytics").payload;
				var transactionData = {
					transactionId: curalateLytics.number,
					userId: curalateLytics2.user[0].profile.profileInfo.profileEmail,
					cartValue: curalateLytics.total_price,
					taxValue: curalateLytics.tax_total,
					shippingValue: curalateLytics.shipping_total,
					shippingCity: curalateLytics2.user[0].profile.address.postalcode,
					shippingCountry: 'US',
					currency: 'USD'
				};
	    	crl8('addTransactionInfo', transactionData);
			var losItems = curalateLytics.items;
			for (var i = Object.keys(losItems).length; i--;) {
				var curalateLytics = losItems[i];
				var productData = {
					productId: curalateLytics.id,
					productName: curalateLytics.product_name,
					price: curalateLytics.price,
					//displayPrice: curalateLytics.price,
					quantity: curalateLytics.quantity,
					sku: curalateLytics.sku,
					category: curalateLytics.category_id
				};      		
				crl8('addProduct', productData);
			}									
     	crl8('send');	
});