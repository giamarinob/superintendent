var Move = function() {
  this.si = document.getElementById('superintendent');
  this.animation = null;
  console.log(this.si);
}

Move.prototype.slide = function() {
    $(this.si).animate({left: event.pageX, top: event.pageY}, "slow");
}

Move.prototype.reset = function() {
    $(this.si).animate({right: '0px', top: '0px'});
}
