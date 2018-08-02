document.addEventListener("coremetricsComplete", function() {
  if (digitalData.page.pageInfo.onsiteSearchResults && fbq && typeof fbq == 'function') {
    fbq('track', 'Search', { search_string: digitalData.page.pageInfo.onsiteSearchTerm });
  }
});