window.addEventListener("DOMContentLoaded", function() {
  $(document).on("click", ".bwt-store-header-title a", function() {
    cmCreateElementTag("Store Name Hyperlink - " + $(this).text(), "Store Locator", $(this).parents("li").index() + 1);
  });
  $(document).on("click", ".bwt-store-detail-link", function() {
    cmCreateElementTag("Explore Store - " + $(this).parents(".bwt-store-body").prev().find("a").text(), "Store Locator", $(this).parents("li").index() + 1);
  });
  $(document).on("click", ".bwt-store-map-link", function() {
    cmCreateElementTag("Directions - " + $(this).attr("data-bw-track-event-value"), "Store Locator", $(this).parents("li").index() + 1);
  });
  $(document).on("click", ".bwt-store-phone-number-link", function() {
    cmCreateElementTag("Click to Call - " + $(this).attr("data-bw-track-event-value"), "Store Locator", $(this).parents("li").index() + 1);
  });
});