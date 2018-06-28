document.addEventListener("DOMContentLoaded", function(){
  if (WEBLINC.cookie.read("email_signup") == 1){
    WEBLINC.cookie.create("email_signup", 0);
    WEBLINC.cookie.create("email_signup_dedupe", 1);
  }
  $("button[data-submit-multi-form-button]").on("click", function(){
    if (document.getElementById("first_name").value != "" && document.getElementById("last_name").value != ""){
      if(document.getElementById("join_c21status").checked){
        if(document.getElementById("enroll_Y").checked){
          cmCreateConversionEventTag("LOYALTY COMPLETE PROFILE", 2, "UPDATE", 2);
        }
        else {
          cmCreateConversionEventTag("LOYALTY JOIN", 2, "JOIN", 3);
        }
      }
      if (document.getElementById("mobile_optin").checked){
        cmCreateConversionEventTag("SMS SIGN UP", 2, "JOIN", 3);
      }
      if (document.getElementById("email_signup").checked && WEBLINC.cookie.read("email_signup_dedupe") != 1){
        cmCreateConversionEventTag("EMAIL SIGN UP", 2, "JOIN", 3);
      }
    }
  });
});