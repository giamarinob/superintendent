$(document).ready(function() {
  var counter = 0;
  $(document).on("click", function() {
    if($(this).find('body').find('.superintendent').length === 0){
      $('body').append("<img class='superintendent' src='/assets/superintendent'>");
    }
    else {
      console.log(counter);
      if(counter > 2){
        alert("[superintendent] // Can I help you?!");
        alert("[superintendent] // Your Tax-Payer Dollars Hard At Work!");
        counter = 0;
      }
      counter++;
    }
  });

  $('body').on('click', '.superintendent', function() {
    event.stopImmediatePropagation();
    alert("[superintendent] // Hello! Keep it Clean!");
  });

  $(document).on("click")
});
