document.addEventListener("DOMContentLoaded", function(){
  $(document).on("submit", "#c21status_form", function(e){
    if (e.target.join_c21status.checked){
      if (e.target.enroll.value == "Y"){
        cmCreateConversionEventTag("LOYALTY COMPLETE PROFILE", 2, "UPDATE", 2);
      }
      else {
        cmCreateConversionEventTag("LOYALTY JOIN", 2, "JOIN", 3);
      }
    }
  });
});