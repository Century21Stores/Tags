document.addEventListener("pageInfo", function(){
  var breadcrumbs = [];
  $(".breadcrumbs__node").each(function(i,e){
    breadcrumbs.push($(e).text().trim());
  });
  window.br_data = {
    "acct_id": "5327",
    "ptype": "category",
    "type": "pageview",
    "cat_id": digitalData.page.category.primaryCategory,
    "cat": breadcrumbs.join('|')
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