document.addEventListener("coremetricsComplete", function(){
  if (digitalData.user && digitalData.user[0] && digitalData)
  $(document).on("dialogopen", function(e){
    var form = e.target.querySelector("#preferences_form");
    if(form){
      window.sms_state = form.querySelector("#mobile_optin").checked;
      window.email_state = form.querySelector("#email_signup").checked;
      window.relate_bitsum = 0;
      var emailPrefs = form["email_preference[]"];
      for (var i = emailPrefs.length; i--;){
        if (emailPrefs[i].checked){
          window.relate_bitsum += parseInt(emailPrefs[i].value);
        }
      }
      form.addEventListener("submit", function(e){
        if (window.sms_state === !1 && e.target.querySelector("#mobile_optin").checked === !0){
          cmCreateConversionEventTag("SMS SIGN UP", 2, "JOIN", 3);
        }
        if (window.email_state === !1 && e.target.querySelector("#email_signup").checked === !0){
          cmCreateConversionEventTag("EMAIL SIGN UP", 2, "JOIN", 3);
        }
        var bitsum = 0;
        var emailPrefs = e.target["email_preference[]"];
        for (var i = emailPrefs.length; i--;){
          if (emailPrefs[i].checked){
            bitsum += parseInt(emailPrefs[i].value);
          }
        }
        if (window.relate_bitsum && bitsum != window.relate_bitsum){
          cmCreateConversionEventTag("EMAIL PREFERENCE UPDATE", 2, "UPDATE", 2);
        }
      });
    }
  });
});