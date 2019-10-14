function () {
  var pageType, page, pageData, pageQuery, pageIdentifier;
  
  page = document.querySelector('.page');
  pageData = page.dataset.action;
  pageQuery = page.dataset.querystring;
  
  switch (pageData) {
    case 'Product-Show':
      pageType = 'product';
      break;
    case 'Search-Show':
      if (pageQuery.includes('cgid=')) {
        pageType = 'category';
      } else if (pageQuery.includes('q=')) {
      	pageType = 'search';
      }
      break;
    case 'Home-Show':
    case 'Sites-C21-Site':
      pageType = 'homepage';
      break;
    case 'Page-Show':
      pageType = 'content';
      break;
    default:
      pageType = 'other';
      break;
  }
  
  return pageType; 
}