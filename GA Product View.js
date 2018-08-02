document.addEventListener("coremetricsComplete", function(){
  var _ga = function() {
    (_ga.q = _ga.q || []).push(arguments);
  };
  var p = $(".product-detail-container").data("analytics").payload;
  if (!p){
    console.log("GA Product Detail Failed");
    return false;
  }
  var gaObj = {
    'id': p.id,
    'name': p.name,
    'category': p.category
  };
  if ($(".product-details--package-child").length){
    _ga('ec:addProduct', gaObj);
    for (var i = $(".product-details--package-child").length; i--;){
      var pp = $($(".product-details--package-child")[i]).data("analytics").payload;
      _ga('ec:addProduct', {
        "id": pp.id,
        "name": pp.name,
        "category": p.category,
        "price": pp.price,
        "position": i + 1
      });
    }
  }
  else {
    gaObj.price = p.price;
    _ga('ec:addProduct', gaObj);
  }
  _ga('ec:setAction', 'detail');
  _ga('send', 'pageview');
  if (typeof ga == "function"){
    for (var j = 0; j < _ga.q.length; j++){
      ga.apply(this, _ga.q[j]);
    }
  }
  else {
    document.addEventListener("gaReady", function(){
      for (var j = 0; j < _ga.q.length; j++){
        ga.apply(this, _ga.q[j]);
      }
    });
  }
});