document.addEventListener('checkoutOrderPlaced', function() {
      var lytics = $('.view').data('analytics').payload;
      var payload = {
        value: (lytics.total_price - lytics.tax_total - lytics.shipping_total).toFixed(2),
        currency: 'USD',
        content_name: digitalData.page.pageInfo.pageID,
        content_category: digitalData.page.category.primaryCategory,
        content_type: 'product',
        content_ids: [],
        num_items: lytics.items.length,
        order_id: digitalData.transaction.transactionID
      };
      for (var i = lytics.items.length; i--;) {
        payload.content_ids.push(lytics.items[i].sku);
      }
      fbq('track', 'Purchase', payload);
});