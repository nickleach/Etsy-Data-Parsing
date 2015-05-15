//var answer1 = document.querySelector('#answer1');
//answer1.innerText= '';
//items.forEach(function (item) {
  //answer1.appendChild(document.createTextNode(item.price +
//  '\n'));
//});
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');
var answer5 = document.querySelector('#answer5');
var answer6 = document.querySelector('#answer6');
//Get all prices
var allPrices = items.map(function(item){
  return item.price;
});
//get the sum
var priceSum = allPrices.reduce(function(a,b){
  return a + b;
});
// average
var priceAvg = priceSum / allPrices.length;

//answer1

var answerOne = priceAvg.toFixed(2);
document.querySelector('#answer1').textContent= "The average price is $" + answerOne;

// answer 2

var lowItems = items.filter(function(item){
  return (item.price > 14 && item.price < 18);
});

answer2.innerText= '';
lowItems.forEach( function(item) {
  answer2.appendChild(document.createTextNode(item.title +
    '\n\n\n'));
});
//answer 3
var britPound = items.filter (function (item) {
  return (item.currency_code === "GBP");
});
answer3.innerText= '';
britPound.forEach( function(item) {
  answer3.appendChild(document.createTextNode(item.title + " costs \u00A3" + item.price));
});
//answer 4
var woodItems = items.filter(function (item){
    if( item.materials.indexOf("wood")  !== -1 )
        return item.materials;
});

answer4.innerText= '';
woodItems.forEach( function(item) {
  answer4.appendChild(document.createTextNode(item.title +" is made of wood" + '\n\n\n'));
});

//answer 5
var largeItems = items.filter(function(item){
  if (item.materials.length > 7 )
    return item.materials;
  // }else;
  // {null;
  // }
});

// var itemMaterials = largeItems.map(function(item){
//   return item.materials;
// });

answer5.innerText= '';
largeItems.forEach(function(item){
  var materials = item.materials;
  var title = item.title;
  answer5.appendChild(document.createTextNode(title + " has " +
    item.materials.length + " materials " + '\n'));
      materials.forEach(function(item){
      answer5.appendChild(document.createTextNode(item + '\n\n'));
  });
});
//answer 6
var meMade = items.filter(function (item){
    return item.who_made === "i_did";
});
answer6.innerText= meMade.length + " were made by their sellers";
