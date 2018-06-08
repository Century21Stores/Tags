document.addEventListener("submit", function(e){
  var checkbox = e.target.querySelector("#email_signup");
  if (checkbox && checkbox.checked)
    WEBLINC.cookie.create("email_subscribe", 1);
  else if (checkbox)
    WEBLINC.cookie.create("email_subscribe", 0);
});
document.addEventListener("DOMContentLoaded", function(){
  $(document).on("submit", function(e){
    if (e.target.id == "footer_email_signup_form")
      WEBLINC.cookie.create("email_signup_form", "FOOTER");
    else if (e.target.id == "dialog_email_signup_form")
      WEBLINC.cookie.create("email_signup_form", "LIGHTBOX");
  });
});
function handleEmailRegistration() {
  var signupForm = WEBLINC.cookie.read("email_signup_form");
  WEBLINC.cookie.create("email_signup_form", "");
  if (signupForm && signupForm !== ""){
    cmCreateConversionEventTag("EMAIL SIGN UP " + signupForm, 2, "JOIN", 3);
    var signup_email = decodeURIComponent(WEBLINC.cookie.read("signup_email"))
    if(signup_email && signup_email != ""){
      cmCreateRegistrationTag(signup_email, signup_email);
    }
  }
}
document.addEventListener("userEmailSubscription", function(){
  if (WEBLINC)
    handleEmailRegistration();
  else
    document.addEventListener("DOMContentLoaded", handleEmailRegistration);
});