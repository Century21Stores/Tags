// Conversion Event Start, Conversion Event End, Registration

window.addEventListener("DOMContentLoaded", function() {
  $(document).on("click", "#bwt-rsvp-button", function(){
    cmCreateConversionEventTag("RSVP - " + $(".bwt-event-details-title").text(), "1", "RSVP", "0");
  });
  $("#new_customer").submit(function(){
    cmCreateConversionEventTag("RSVP - " + $(".bwt-event-details-title").text(), "2", "RSVP", "1");
    cmCreateRegistrationTag(document.getElementById("customer_email").value, document.getElementById("customer_email").value);
  });
});