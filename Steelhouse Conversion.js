document.addEventListener("checkoutOrderPlaced", function() {
    var lytics = $('.view').data('analytics').payload;
    var x = null,
        p, q, m,
        o = "19640",
        l = digitalData.transaction.transactionID, // ORDER ID
        i = (lytics.total_price - lytics.tax_total - lytics.shipping_total).toFixed(2), // "TOTAL ORDER AMOUNT"
        c = "",
        k = lytics.items.map(function(e){return e.sku}).join(','), // "PRODUCT IDs"...actually using SKUs
        g = lytics.items.map(function(e){return e.quantity}).join(','), // "PRODUCT QUANTITIES
        j = lytics.items.map(function(e){return e.unit_price}).join(','), // "UNIT PRICES"
        u = "",
        shadditional = "";
    try {
        p = top.document.referer !== "" ? encodeURIComponent(top.document.referrer.substring(0, 512)) : ""
    } catch (n) {
        p = document.referrer !== null ? document.referrer.toString().substring(0, 512) : ""
    }
    try {
        q = window && window.top && document.location && window.top.location === document.location ? document.location : window && window.top && window.top.location && "" !== window.top.location ? window.top.location : document.location
    } catch (b) {
        q = document.location
    }
    try {
        m = parent.location.href !== "" ? encodeURIComponent(parent.location.href.toString().substring(0, 512)) : ""
    } catch (z) {
        try {
            m = q !== null ? encodeURIComponent(q.toString().substring(0, 512)) : ""
        } catch (h) {
            m = ""
        }
    }
    var A, y = document.createElement("script"),
        w = null,
        v = document.getElementsByTagName("script"),
        t = Number(v.length) - 1,
        r = document.getElementsByTagName("script")[t];
    if (typeof A === "undefined") {
        A = Math.floor(Math.random() * 100000000000000000)
    }
    w = "dx.steelhousemedia.com/spx?conv=1&shaid=" + o + "&tdr=" + p + "&plh=" + m + "&cb=" + A + "&shoid=" + l + "&shoamt=" + i + "&shocur=" + c + "&shopid=" + k + "&shoq=" + g + "&shoup=" + j + "&shpil=" + u + shadditional;
    y.type = "text/javascript";
    y.src = ("https:" === document.location.protocol ? "https://" : "http://") + w;
    r.parentNode.insertBefore(y, r)
});