function nvAccountLogin(){
  cmCreateConversionEventTag("ACCOUNT LOGIN",2,"SHOP",2);
}
document.addEventListener("userSignIn", nvAccountLogin);
document.addEventListener("userCheckoutSignIn", nvAccountLogin);
document.addEventListener("userSignUp", function(){
  cmCreateConversionEventTag("ACCOUNT CREATION",2,"JOIN",3);
});
document.addEventListener("userCheckoutSignUp", function(){
  cmCreateConversionEventTag("ACCOUNT CREATION CHECKOUT",2,"JOIN",3);
});
document.addEventListener("coremetricsComplete", function(){
  if (digitalData.user && digitalData.user[0]){
    cmCreateRegistrationTag(digitalData.user[0].profile.profileInfo.profileID, digitalData.user[0].profile.profileInfo.profileEmail);
  }
});