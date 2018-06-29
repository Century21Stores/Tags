document.addEventListener("coremetricsComplete", function(){
  window.criteo_q = window.criteo_q || [];
  var deviceType = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(navigator.userAgent) ? "m" : "d";
  var hashedEmail = WEBLINC.cookie.read("criteo_hash");
  if (hashedEmail && hashedEmail != "") {
    window.criteo_q.push(
      {event: "setAccount", account: 18573},
      {event: "setSiteType", type: deviceType},
      {event: "setHashedEmail", email: [hashedEmail]},
      {event: "viewHome"}
    );
  } else {
    window.criteo_q.push(
      {event: "setAccount", account: 18573},
      {event: "setSiteType", type: deviceType},
      {event: "viewHome"}
    );
  }
});