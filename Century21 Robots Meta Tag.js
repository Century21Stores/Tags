// This is tag is to add a robots meta tag with noindex nofollow to our staging site so tha it is not index by google or any other search bot.

var meta = document.createElement('meta');
meta.name = "robots";
meta.content = "noindex,nofollow";
document.getElementsByTagName('head')[0].appendChild(meta);