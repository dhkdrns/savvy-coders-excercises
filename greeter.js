var name = prompt('What is your name?');
alert('Hello ' + name);
var myCountry = prompt('what is your favorite country?');
var freedomCheck = function(){
  if( myCountry === 'USA' ) alert('Sweet Land of Liberty');
  else if( myCountry === 'Korea' ) alert('GREAT FOODS!');
  else if( myCountry === 'Japan' ) alert('Manga?');
  else if( myCountry === 'Mexico' ) alert('Hola!');
  else alert('We can\'t cover whole world. Try again, Click Refresh.');
};
freedomCheck();
