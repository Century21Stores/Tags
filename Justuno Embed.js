if (location.pathname.indexOf('/checkout/confirmation') == -1) {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = (('https:' == document.location.protocol) ? 'https' : 'http') + '://d2j3qa5nc37287.cloudfront.net/';
  window.ju_num = null;
  switch (location.hostname) {
    case 'www.c21stores.com':
    case 'locations.c21stores.com':
    case 'c21.brickworksoftware.com':
      window.ju_num = '63CEF492-CC52-46D4-8049-A94C63EEDF3B'; // PROD      
      break;
    default:
      window.ju_num = 'B0FDD9B6-E6B0-406D-BE13-60E5613D1C27'; // STAGING
  }
  s.src += 'coupon_code1.js'
  var x = document.getElementsByTagName('script')[0];
  x.parentNode.insertBefore(s, x);
}