function () {
  var category = document.querySelector('.product-grid');
  if (category && category.dataset.crumbs != null) {
    return category.dataset.crumbs; 
  };
}