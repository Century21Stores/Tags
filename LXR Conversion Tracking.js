document.addEventListener("checkoutOrderPlaced", function() {
  $.getScript('https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTUvMDkvMjEvMTQvMzIvMzAvNjEzL21kNS5taW4uanMiXV0/md5.min.js?sha=a94aad09a915d4f0&_=1507234437214', function() {
    var lytics = $('.view').data('analytics').payload;
    window.LXRSerialize(lytics);
    window._neq = window._neq || [];
    window._neq.push(['_nebusassid', '1424']);
    window._neq.push(['_nedomain', location.hostname]);
    window._neq.push(['_neconv', '1']);
    var ne = document.createElement('script');
    ne.async = true;
    ne.src = '//www.adelixir.com/v2track/ne.js';
    var l = document.getElementsByTagName('script')[0];
    l.parentNode.insertBefore(ne, l);
  });
});