//Product Details Page View Curalate
//Calling coremetrics Function
document.addEventListener("coremetricsComplete", function(e){
  //setting up global Variables
  var lytics = $('.view').data('analytics').payload;
  var ret = {
    productId: lytics.id,
    productName: lytics.designer.toUpperCase() + ": " + lytics.name,
    price: lytics.price,
    // displayPrice: WL DOES NOT EXPOSE, IT IS NOT REQUIRED BY CURULATE
    quantity: 1,
    category: lytics.category
  };
  //IF THERE IS A USER SET ADD userId to RET
	if (digitalData.user[0]) { 
    ret.userId = digitalData.user[0].profile.profileInfo.profileID;
  }
  //IF A PACKAGE
	if (lytics['package']) { //OLD version same as lytics.package in order to work in IBM
    crl8('viewProduct', ret); //SET TO RET PACKAGE PRODUCT
    //PREPARING MEMBERS OF PACKAGE
    var kids = $('.product-details--package-child');
    for (var i = kids.length; i--;) {
    	var lyticsforkids = $(kids[i]).data('analytics').payload;
      var retforkids = {
        productId: lyticsforkids.id,
        productName: lyticsforkids.designer.toUpperCase() + ": " + lyticsforkids.name,
        price: lyticsforkids.price,
        // displayPrice:  WL DOES NOT EXPOSE, IT IS NOT REQUIRED BY CURULATE
        quantity: 1,
        category: lyticsforkids.category,
        sku: lyticsforkids.sku
      };
      if (digitalData.user[0]) {
        retforkids.userId = digitalData.user[0].profile.profileInfo.profileID;
      }
      crl8('viewProduct', retforkids);
    }
    crl8('send');
  } else {
    ret.sku = lytics.sku;
    crl8('viewProduct', ret);
    crl8('send');
  }
});