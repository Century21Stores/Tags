window.LXRSerialize = window.LXRSerialize || function(lytics) {
  var payload = 'LXR:T|' + ([lytics.number, lytics.total_price.toFixed(2), lytics.tax_total.toFixed(2), lytics.shipping_total.toFixed(2)].join('|')) + "\n";
  for (var i = 0; i < lytics.items.length; i++) {
    payload += 'LXR:I|' + ([lytics.items[i].sku, lytics.items[i].product_name, lytics.items[i].category_id, lytics.items[i].unit_price.toFixed(2), lytics.items[i].quantity, lytics.items[i].price.toFixed(2)]).join('|') + "\n";
  }
  var discount_amt = (lytics.total_price - (lytics.subtotal_price + lytics.tax_total + lytics.shipping_total)).toFixed(2);
  if (discount_amt !== "0.00") {
    payload += 'LXR:I|DISCOUNT|DISCOUNT||' + discount_amt + '|1|' + discount_amt + "\n";
  }
  if (digitalData.transaction && digitalData.transaction.profile && digitalData.transaction.profile.profileInfo) {
    payload += 'LXR:U|' + md5(digitalData.transaction.profile.profileInfo.profileEmail) + '|'
  } else {
    payload += 'LXR:U||';
  }
  var textarea = document.createElement('textarea');
  textarea.id = 'lxrtrans';
  textarea.style = 'display:none;';
  textarea.innerHTML = payload;
  document.body.appendChild(textarea);
}