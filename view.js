function View() {
  var catSource   = $("#cat-template").html();
  Handlebars.registerPartial('catTemplate', catSource);
  this.singleCatTemplate = Handlebars.compile(catSource);
  var listSource   = $("#cat-list-template").html();
  this.listTemplate = Handlebars.compile(listSource);
  $('form').on('submit', this.handleFormSubmit.bind(this));
}

View.prototype.showListOfCats = function (cats) {
  var context = {cats: cats};
  var htmlOutput = this.listTemplate(context);
  $('#cat-list').html(htmlOutput);
};

View.prototype.prependOneCat = function(cat) {
  var catSource   = $("#cat-template").html();
  var context = {cat: cat};
  var output = this.singleCatTemplate(context);
  $('#cat-list').html(output);
};

View.prototype.handleFormSubmit = function(event) {
  event.preventDefault();
  this.controller.createCat($(event.target).serialize());
};