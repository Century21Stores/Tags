function () {
  var pageType, page, pageData, pageQuery, pageIdentifier;
  
  page = document.querySelector('.page');
  pageData = page.dataset.action;
  pageQuery = page.dataset.querystring;
  
  switch (pageData) {
    case 'Product-Show':
      pageType = 'PDP: product page';
      break;
    case 'Search-Show':
      if (pageQuery.includes('cgid=')) {
        pageType = 'PLP: category page';
      }
      else if (pageQuery.includes('q=')) {
      	pageType = 'search';
      }
      else if (pageQuery.includes('prefn1=brand')) {
        pageType = 'Designer Index search';
      }
      break;
    case 'Home-Show':
    case 'Sites-C21-Site':
      pageType = 'homepage';
      break;
    case 'Page-Show':
      pageType = 'content';
      break;
    case 'Cart-Show':
      pageType = 'shopping cart';
      break;
    default:
      pageType = window.location.href;
      break;
  }
  
  return pageType; 
}