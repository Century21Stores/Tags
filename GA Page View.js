if (typeof ga == "function"){
  ga('send', 'pageview');
}
else {
  document.addEventListener("gaReady", function(){
    ga('send', 'pageview');
  });
}