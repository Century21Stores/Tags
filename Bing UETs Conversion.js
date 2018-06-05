document.addEventListener('checkoutOrderPlaced', function() {
  window.uetq = window.uetq || [];
  window.uetq.push({'gv': $('.view').data('analytics').payload.total_price});
});