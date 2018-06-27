document.addEventListener("coremetricsComplete", function() {
  digitalData.page.pageInfo.onsiteSearchTerm = typeof digitalData.page.pageInfo.onsiteSearchTerm === undefined ? null : digitalData.page.pageInfo.onsiteSearchTerm;
  digitalData.page.pageInfo.onsiteSearchResults = typeof digitalData.page.pageInfo.onsiteSearchResults === undefined ? null : digitalData.page.pageInfo.onsiteSearchResults;
  var pageident = digitalData.page.pageInfo.pageID;
  if ($(".view").data("analytics")){
  	var lytics = $(".view").data("analytics").payload;
  }
  var breadcrumbs = [];
  if ($(".breadcrumbs__node").length){
    $(".breadcrumbs__node").each(function(i){
      if (i > 0){
        breadcrumbs.push($(this).text().trim());
      }
    });
  }
  switch (pageident) {
    case "LANDING PAGE":
      pageident += ": " + (breadcrumbs.length ? breadcrumbs.join(" > ") : $("h1").text());
      break;
    case "BROWSE PAGE":
      pageident = "CATEGORY: " + (breadcrumbs.length ? breadcrumbs.join(" > ") : lytics.name);
      break;
    case "SEARCH RESULTS":
      pageident = "SEARCH RESULTS: Successful";
      break;
    case "ZERO RESULTS":
      pageident = "SEARCH RESULTS: Zero Results";
      break;
    default:
      if (digitalData.page.category.primaryCategory && ~digitalData.page.category.primaryCategory.indexOf("CHECKOUT")){
        pageident = digitalData.page.category.primaryCategory + ": " + pageident;
      }
      if ($(".product-detail-container").length){
        if ($(".product-details__designer-name").length){
          pageident = pageident.replace(":", "] " + $(".product-details__designer-name").text().trim().toUpperCase());
        }
        else {
          pageident = pageident.replace(":", "]");
        }
        if (lytics["package"]){
          pageident = pageident.replace("[PKG]", "PACKAGE: [");
        }
        else {
          pageident = "PRODUCT: [" + pageident;
        }
      }
  }
  cmCreatePageviewTag(pageident, digitalData.page.category.primaryCategory, digitalData.page.pageInfo.onsiteSearchTerm, digitalData.page.pageInfo.onsiteSearchResults);
});