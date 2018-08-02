document.addEventListener('coremetricsComplete', function () {
	window.sidecar = window.sidecar || {};
	var lytics = $('.product-detail-container').data('analytics').payload;
	if (lytics['package']) {
		return;
	}
	window.sidecar.product_info = {
		group_id: lytics.id
	};
});