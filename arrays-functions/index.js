//QUESTION 1
// Mutating method changes the object after the method has been used
//1.. push
//2. .unshift
//3. .shift 
//4. .sort
//5. .splice
//Non- Mutating method does not change the object after it has been used
//1. . slice
//2.  .concat
//3.  .map
//4.   .filter

//QUESTION 2
let languages = ["C#" , "JavaScript" , "Ruby" , "PHP" ,"Python"];
//console.log(languages);
//Question 2a Adding element to the end of an array
//languages.push("Kotlin");
//console.log(languages);
//Question 2b adding elements in the middle of an array
 //languages.splice(3 , 0 , 'Java');
//console.log (languages)
//Question2c Removing the first item in an array
//languages.splice(0,1)
//console.log(languages);
//Question 2d Adding element to the beginning of an array
//languages.unshift("Scala" , "Swift");
//console.log(languages);
//Question 2e Replacing elements in an array
//languages.splice(3,1,'Go' , 'Rust' )
//console.log(languages);

//Question 3
//let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
fruit[2] = "orange";
return fruit;
}
//console.log (fruit);

//Question 4
function findMaximumValue(numbers) {
  return Math.max(...numbers); 
};
let showResult = findMaximumValue([2, 3, 18, 21, -6, -9]); 
//console.log(showResult); //logs out 21 as the maximum value

//Question 5

        //question 5
		//Write a function called valTimesIndex which accepts an array of numbers and returns 
		//a new array with each value multiplied by the index it is at in the array:
		function valTimesIndex(arr) {
		 	let newArr = [];
			for (let i = 0; i < arr.length; i++) {
			  newArr.push(arr[i] * i);
			}
		 	return newArr;
		  }
		//  console.log(newArr(1,2,3,4))
