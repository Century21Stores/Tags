function () {
var cat_breadcrumbs, category;

  if(window.location.href.indexOf("/categories/") > -1) {
    if(window.location.href.indexOf("/designers") > -1) {
      cat_breadcrumbs = "Designer Index";
    }
    else{
      category = document.querySelector('.product-grid');
      cat_breadcrumbs = category.dataset.crumbs;
    }
  }
  else if(window.location.href.indexOf("/products/") > -1) {
      category = document.querySelector('.product-detail');
      cat_breadcrumbs = category.dataset.breadcrumbsinline.replace(/\//g, '|');
  }
  else if(window.location.href.indexOf("/search") > -1) {
      cat_breadcrumbs = document.querySelector('h1').innerText;
  }
  else{
      cat_breadcrumbs = document.querySelector('h1').innerText;
  };

    if (cat_breadcrumbs != null) {
      return cat_breadcrumbs;
    };
}