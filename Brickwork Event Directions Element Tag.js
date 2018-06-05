window.addEventListener("DOMContentLoaded", function() {
  $(document).on("click", ".bwt-events-map-link", function() {
    cmCreateElementTag("Directions - " + $(".bwt-event-details-store-name").text(), "Get Directions");
  });
});