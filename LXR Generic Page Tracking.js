(function() {
  if (digitalData.pageInstanceID.match(/checkout|cart|confirmation/)) {
    return;
  } else {
    window._neq = window._neq || [];
    window._neq.push(['_nebusassid', '1424']);
    window._neq.push(['_nedomain', location.hostname]);
    var ne = document.createElement('script');
    ne.async = true;
    ne.src = '//www.adelixir.com/v2track/ne.js';
    var l = document.getElementsByTagName('script')[0];
    l.parentNode.insertBefore(ne, l);
  }
})();