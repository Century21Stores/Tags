window.addEventListener("DOMContentLoaded", function() {
  $('.bwt-store-nav-list a[href="#appointments"]').click(function() {
    cmCreateElementTag("Services and Appointments - " + $(".bwt-store-show").attr("data-bw-track-event-value"), "Services and Appointments");
  });
  $('.bwt-store-nav-list a[href="#events"]').click(function() {
    cmCreateElementTag("Events - " + $(".bwt-store-show").attr("data-bw-track-event-value"), "Store Events");
  });
  $('.bwt-store-nav-list a[href="#stylists"]').click(function() {
    cmCreateElementTag("Associates - " + $(".bwt-store-show").attr("data-bw-track-event-value"), "Associates");
  });
});