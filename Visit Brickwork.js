if(nvGetCookie("nv-bwt-visited") == "") {
  cmCreateConversionEventTag("VISIT STORE LOCATOR", "2", "STORE", "0.5");
  document.cookie = "nv-bwt-visited=true; domain=c21stores.com; path=/;";
}