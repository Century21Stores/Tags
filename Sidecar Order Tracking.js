document.addEventListener('coremetricsComplete', function () {
	window.sidecar = window.sidecar || {};
	var lytics = $('.view').data('analytics').payload;
	var sidecarTransactions = {
		add: true,
		data: {
			order_id: lytics.number,
			subtotal: lytics.subtotal_price,
			tax: lytics.tax_total,
			shipping: lytics.shipping_total,
			discounts: (lytics.subtotal_price + lytics.tax_total + lytics.shipping_total) - lytics.total_price,
			total: lytics.total_price,
			zipcode: digitalData.user[0].profile.address.postalcode
		},
		items: []
	};
	for (var i = lytics.items.length; i--;) {
		sidecarTransactions.items.push({
			product_id: lytics.items[i].sku,
			unit_price: lytics.items[i].unit_price,
			quantity: lytics.items[i].quantity
		});
	}
	window.sidecar.transactions = sidecarTransactions;
});