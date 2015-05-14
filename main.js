//var answer1 = document.querySelector('#answer1');
//answer1.innerText= '';
//items.forEach(function (item) {
  //answer1.appendChild(document.createTextNode(item.price +
//  '\n'));
//});

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
