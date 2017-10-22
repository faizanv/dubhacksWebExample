function sayBoo() {
  $.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes/5', function(result) {
    for(var i = 0; i < result.length; i++) {
      console.log(result[i]);
      $('#quotes').append('<li class="italy">' + result[i] + '</li>');
    }
  });
}