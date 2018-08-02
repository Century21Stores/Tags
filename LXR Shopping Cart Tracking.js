document.addEventListener("cartView", function() {
  var lytics = $('.view').data('analytics').payload;
  window.LXRSerialize(lytics);
  window._neq = window._neq || [];
  window._neq.push(['_nebusassid', '1424']);
  window._neq.push(['_nedomain', location.hostname]);
  window._neq.push(['_neconv', '0']);
  window._neq.push(['_nectype', '3']);
  var ne = document.createElement('script');
  ne.async = true;
  ne.src = '//www.adelixir.com/v2track/ne.js';
  var l = document.getElementsByTagName('script')[0];
  l.parentNode.insertBefore(ne, l);
});