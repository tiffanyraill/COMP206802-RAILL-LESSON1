/** Created by Tiffany Raill  on 1/11/2017. ..*/

//reference the filesystem modules that ships with node

var fs = require('fs');

//drinks
var drinks = fs.readFile('drinks.txt', 'utf8', function
(err, drinks) {
    if (err) {
        console.log(err);
        return;
    }
//if we get drinks, print them out
console.log(drinks);
//food heading
console.log('\nFOOD:');
});
//drink heading
console.log('DRINKS:');

//food
var food = fs.readFile('food.txt', 'utf8', function
(err, food) {
 console.log(food);   
});




