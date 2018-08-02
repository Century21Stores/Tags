document.addEventListener('coremetricsComplete', function() {
  var checkoutInit = WEBLINC.cookie.read('checkoutInit');
  if (~location.href.indexOf('checkout')) {
    if ((!checkoutInit || checkoutInit == '') && fbq && typeof fbq == 'function') {
      var lytics = $('.view').data('analytics').payload;
      var payload = {
        value: lytics.subtotal_price,
        currency: 'USD',
        content_name: digitalData.page.pageInfo.pageID,
        content_category: digitalData.page.category.primaryCategory,
        content_type: 'product',
        content_ids: [],
        num_items: lytics.items.length
      };
      for (var i = lytics.items.length; i--;) {
        payload.content_ids.push(lytics.items[i].sku);
      }
      fbq('track', 'InitiateCheckout', payload);
      WEBLINC.cookie.create('checkoutInit', 'yes');
    }
  } else if (checkoutInit && checkoutInit != '') {
    WEBLINC.cookie.create('checkoutInit', '');
  }
});