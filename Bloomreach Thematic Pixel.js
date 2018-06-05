document.addEventListener("coremetricsComplete", function(){
  window.br_data = {
    "acct_id": "5327",
    "ptype": "thematic"
  };
  (function() {
    var brtrk = document.createElement('script');
    brtrk.type = 'text/javascript';
    brtrk.async = true;
    brtrk.src = 'https:' == document.location.protocol ? "https://cdns.brsrvr.com/v1/br-trk-" + window.br_data.acct_id + ".js" : "http://cdn.brcdn.com/v1/br-trk-" + window.br_data.acct_id + ".js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(brtrk, s);
  })();
});