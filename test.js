const nums = [10, 3, 4, 8, 5, 2, 6];
const nums2 = [1, 3, 7, 20, 30];

Array.prototype.customFilter = function() {
  // Finish implementation
  // return new array of numbers greater than 5
  // const newArray = [];
  // for (let i = 0; i < this.length; i++) {
  //   const val = this[i]
  //     if (val > 5) {
  //       newArray.push(val);
  //     }
  //   }
  // return newArray
  return this.filter(val => val > 5);
};

// here should be numbers only greater than 5
// filteredNums should hold [10, 8, 6]
const filteredNums = nums.customFilter();
console.log(filteredNums);

// filteredNums2 should hold [7, 20, 30]
const filteredNums2 = nums2.customFilter();
console.log(filteredNums2);