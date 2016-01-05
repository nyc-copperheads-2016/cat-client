function Cat(json) {
  Object.assign(this, json);
  this.bornOn = new Date(this.born_on);
  this.createdAt = new Date(this.created_at);
  this.updatedAt = new Date(this.updated_at);
}

Cat.prototype.age = function() {
  var s =  moment(this.bornOn).fromNow();
  return s.replace(' ago', '');
}

Cat.loadCats = function() {
  return $.get('https://stark-harbor-5038.herokuapp.com/cats')
  .then(function(response){
    var cats = [];
    response.forEach(function(ele) {
      cats.push(new Cat(ele));
    });
    return cats;
  });
};

Cat.createCat = function(params) {
  return $.ajax({
    url: 'https://stark-harbor-5038.herokuapp.com/cats',
    dataType: 'json',
    method: 'POST',
    data: params
  }).then(function(response){
    return new Cat(response);
  });
};
