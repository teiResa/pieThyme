
let currNums = document.getElementById('nums_curr');
let btnNext = document.getElementById('btn_next');


// .push() to add to the display of past numbers 
// .pop() to put everything back to the beginning?

let grHundred = ['123', '456', '789'] //was groupingHundred

/*
grHundred[0]  would return '123'
grHundred[1]  would return '456'

so like let's console.log to test that. Works.
Now, we need it to move on to the next one every time the "next" button is clicked.

I think this would use .length for something like for(i=0; i)


*/

function nextSet() {
  console.log("clicked!")
  //console.log(groupingHundred.toString());   //123,456,789

//      https://www.freecodecamp.org/news/how-to-loop-through-an-array-in-javascript-js-iterate-tutorial/#:~:text=How%20to%20Loop%20Through%20an%20Array%20with%20a,This%20function%20is%20known%20as%20a%20callback%20function.

for (let i = 0; i < grHundred.length; i++) {
 console.log(grHundred[i]);
}

console.log(grHundred[1])

}

/* 
Works! Now to put it after click. 

for (let i = 0; i < grHundred.length; i++) {
 console.log(grHundred[i]);
}
 */


// when next is clicked
// update curr numbers to the past number (on the end), but i never want past numbers to clear, just keep adding the curr numbs to the end. Unless the clear button is clicked.
// clear curr numbers and display the next set of curr numbers


// two modes? Grouping and user input? Grouping first.



