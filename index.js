var finances = [
['Jan-2010', 4],
['Feb-2010', -5],
['Mar-2010', 13],
['Apr-2010', -7]
];

console.log("Total Number of Month: " + finances.length)

var total = 0;

for(var i=0; i<finances.length; i++){
    for(var j=0; j<1; j++){
        total = total+ finances[i][1];
    }
}

console.log("The net total amount of Profit/Losses=" + total )

console.log("The average of the changes in Profit/Losses over the entire period=" + (total/finances.length) )