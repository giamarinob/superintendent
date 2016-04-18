var Move = function() {
  this.si = document.getElementById('superintendent');
  this.animation = null;
  console.log(this.si);
}

Move.prototype.slide = function() {
    $(this.si).animate({left: event.pageX, top: event.pageY}, "slow");
    new Effect.Morph($(this.si), $(this.si).attr('src').val('http://orig14.deviantart.net/12df/f/2011/055/a/0/odst_virgil__happy_by_skipperthepilot-d3a9uu4.png'))
}

Move.prototype.reset = function() {
    $(this.si).animate({right: '0px', top: '0px'});
}
