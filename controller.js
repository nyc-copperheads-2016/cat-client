function Controller(view) {
  this.view = view;
  view.controller = this;
}

Controller.prototype.createCat = function(params) {
  Cat.createCat(params).then(function(cat){
    this.view.prependOneCat(cat);
  }.bind(this));
};

Controller.prototype.index = function() {
  Cat.loadCats()
  .then(function(cats){
    this.view.showListOfCats(cats);
  }.bind(this));
};

$(document).ready(function(){
  var view = new View();
  var ctrl = new Controller(view);
  ctrl.index();
});