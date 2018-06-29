function nvHashEmail(){
  var email_regex = /.*@.*\.[a-zA-Z]*/;
  email_cookie = WEBLINC.cookie.read("signup_email");
  if (email_cookie && email_regex.test(email_cookie)){
    window.tmpemail = email_cookie;
  }
  else if (digitalData.user[0].profile.profileInfo.profileEmail && email_regex.test(digitalData.user[0].profile.profileInfo.profileEmail)){
    window.tmpemail = digitalData.user[0].profile.profileInfo.profileEmail;
  }
  else {
    return false;
  }
  $.getScript("https://www.c21stores.com/media/W1siZiIsIjIwMTUvMDkvMjEvMTQvMzIvMzAvNjEzL21kNS5taW4uanMiXV0/md5.min.js?sha=a94aad09a915d4f0",
    function(){
      if (window.tmpemail != WEBLINC.cookie.read("criteo_hash")){
        WEBLINC.cookie.create("criteo_hash", md5(window.tmpemail), 3652);
      }
      delete tmpemail;
    }
  );
}
document.addEventListener("userEmailSubscription", nvHashEmail);
document.addEventListener("userSignIn", nvHashEmail);
document.addEventListener("userSignUp", nvHashEmail);
document.addEventListener("userCheckoutSignUp", nvHashEmail);