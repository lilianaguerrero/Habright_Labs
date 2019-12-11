"use strict";

const items = [1,2,4,6]
const nums = [1, 30, 4, 21, 100000]

/** 1. printIndices */
function printIndices(items){
// Loop over elements
  for (const x in items) {
    console.log(x, items[x]);
  }
}


/** 2. everyOtherItem */
function everyOtherItem(items) {
	// Replace this with your code
  let result = [];

  for (const x in items) {
    if (x % 2 === 0) {
      result.push(items[x]);
    }
  }
  console.log(result);
}


/** 3. smallestNItems */
function smallestNItems(items, n) {
	// Replace this with your code
  let sortedItems = nums.sort((a,b) => a - b);
  let SortedItems = 
  sortedItems.reverse();
}

