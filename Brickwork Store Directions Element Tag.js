window.addEventListener("DOMContentLoaded", function() {
  $(document).on("click", ".bwt-store-map-link", function() {
    cmCreateElementTag("Directions - " + $(this).attr("data-bw-track-event-value"), "Get Directions");  
  });
});