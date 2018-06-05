window.addEventListener("DOMContentLoaded", function() {
  $(document).on("click", ".bwt-store-phone-number-link", function() {
    cmCreateElementTag("Click to Call - " + $(this).attr("data-bw-track-event-value"), "Click to Call");
  });
});