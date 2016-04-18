

$(document).ready(function() {
  var counter = 0;
  var mover = null;
  $(document).on("click", function() {
    if($(this).find('body').find('#superintendent').length === 0){
      $('body').append("<img id='superintendent' src='/assets/superintendent'>");
      mover = new Move();
    }
    else {
      mover.slide();
      counter++;
      if(counter > 3){
        counter = 0;
        alert("[superintendent] // Can I help you?!");
        alert("[superintendent] // Your Tax-Payer Dollars Hard At Work!");

        $(document).on('dblclick', function() {
          mover.reset();
        })
      }
    }
  });

  $('body').on('mouseenter', '#superintendent', function() {
    event.stopImmediatePropagation();
    alert("[superintendent] // Hello! Keep it Clean!");
  });

  $('a').on('mouseenter', function() {
    alert("[superintendent] // Click here to " + $(this).text())
    console.log($(this));
  });

});



