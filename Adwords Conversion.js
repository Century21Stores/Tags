document.addEventListener("checkoutOrderPlaced", function(){
  $.getScript("//www.googleadservices.com/pagead/conversion_async.js", function() {
    window.google_trackConversion({
      google_conversion_id: 1049676960,
      google_conversion_language: "en",
      google_conversion_format: "3",
      google_conversion_color: "ffffff",
      google_conversion_label: "XhDhCIjXyQIQoJnD9AM",
      google_conversion_value: digitalData.transaction.total.basePrice,
      google_conversion_currency: "USD",
      google_remarketing_only: false
    });
  });
});