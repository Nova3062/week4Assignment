//code to put here:

//1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
    //*  Do not use numbers to reference the last element, find it programmatically, 
    //*  ages[7] – ages[0] is not allowed
    //1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    //1c. Use a loop to iterate through the array and calculate the average age. 

let agesArray = [3, 9, 23, 64, 2, 8, 28, 93]; 
console.log(agesArray) // shows array in  browser
console.log(agesArray.length); // shows # of elements within the Array

let result = agesArray[agesArray.length -1] - agesArray[0]; //substrats first element value from last element value in array
console.log(result); // prints result 90

agesArray.push(44); //adds a new element to the array
console.log(agesArray);// prints ages array with new element
let newResult = agesArray[agesArray.length -1] - agesArray[0];
console.log(newResult);


let sum = 0; //initializing sum to 0 to store the sum of all the elements in the array
    for  (let i = 0; i < agesArray.length; i++)  { // iterates through the elements in the array to add together to store in the sum variable
        sum += agesArray[i];
    }
let average = sum / agesArray.length;// divides the sum but the number of elements in the array producing the average
 console.log("the Average age is "  + average); // generates the average age in given array - 'agesArray'


//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
    //2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
    //2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
// code to put here;

let namesArray = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];// setting the array
let Letters = 0// initializing  letters in the array to zero
    for (let i = 0; i < namesArray.length; i++) //iterates through the elements in the array by lenght of name and adds them together 
        Letters += namesArray[i].length; // += performs addition, both numeric and string concatenation and assigns the result stored in the variable
    
let namesAverage = Letters / namesArray.length; //takes value stored in letters divided by the total names resulting in average letters per name
console.log('Average number of letters per names is ' + namesAverage); // prints sentence concluding the average letters per name

let concatnamesArray = "";
for (let i = 0; i < namesArray.length; i++) {
  concatnamesArray += namesArray[i] + " ";
}
console.log(concatnamesArray.concat());


//3. How do you access the last element of any array?

lastElement = agesArray[agesArray.length -1]; //accessing last element
console.log(lastElement); // prints to console

//4. How do you access the first element of any array?

firstElement = agesArray[0]; //accessing first element 
console.log(firstElement); // prints to console


//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array

let namesLength = []; // new array to be created 
    for (let i = 0; i < namesArray.length; i++) { // for loop iterates through array to add the lenght of each name in namesArray to namesLenght array
    namesLength.push(namesArray[i].length);  //  '.push()' method used to add length of each name to new namesLength array
    }
console.log(namesLength);// prints new array with length of names 


//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let namelengthTotal = 0    
    for (let i = 0; i < namesLength.length; i++) {
        namelengthTotal += namesLength[i]; 
    }
    
console.log(namelengthTotal); //274 ***QUESTIONS HERE***


//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
    //(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’)
  
    function repeatWord(word, n) { // fucntion defined and two paraeters taken  
    let result = ''; //variable initialized called result to a string that is empty
    for (let i = 0; i < n; i++) { //for loop to concatenate first parameter to second parameter  ie. 'word' 'n' aount of times
        result = result + word; //result += word (shorthand)
    } 
    return result; //returning the new result variable
  }  
    let chantWord = repeatWord("Shots!", 7); // new variable 'chantword' set to function with the new paraeters or arguments 
console.log(chantWord); //prints arguments after passing through the function

      


//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
function getFullName(firstName, lastName){ // new function taking  two parameters/arguments
    return firstName + " " + lastName; //functnion returns arguments concatenated together
}
let fullName = getFullName("Seymore", "Butts"); //establishing new variable 'fullname' set equal to the function with new arguments
console.log(fullName); //prints new variable 'fullname'  after passing arguments through the function


//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers = [20, 3, 50, 45, 21];// new array numbers to  pass through function

function sumBiggerThan100(numbers) { //function with one paramenter being the array
    let sum = 0; //initializing variable sum to zero
    for (let i = 0; i < numbers.length; i++) { // iterates through array to add up numbers and storing the result in the sum variable

      sum += numbers[i];// 
    }
    return sum > 100; //returning  true or false pending result of  agruments passed through  function
  }
  
  let isGreaterThan100 = sumBiggerThan100(numbers);// new variable set to equal function with array elements passed through
  
  console.log(isGreaterThan100); //  recognizes output to be boolean; prints true or false




//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
let scores = [98, 99, 100, 83, 42, 78, 100]; // new array of numbers to get average of each element  within the scores array

function  getAverage(scores) { //function defined as getaverage with one parameter being the nummbers  of the array to be returned
    let sum = 0; //initializing the variable sum to zero
    for (let i = 0; i < scores.length; i++){ //for loop to iterate through the array and store the values to the sum variable all added together
        sum += scores[i];
    }
    return sum / scores.length;// takes the sum of the  elements divided by the total number of elements to generate the average
}
let newAverage = getAverage(scores);// new variable  'newaverage' set  to equal 'get average' funtion with array elements passed in by the  function
console.log(newAverage);// prints results of the function with arguements passed through it


//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array

let arr1 = [14, 15, 23, 45, 64, 43]; //arrays of elements to pass into funciton to get average of each
let arr2 = [12, 34, 53, 22, 22, 1];
function compareAverages(arr1, arr2) { //function taking in two parameters, being the averages of each  array respictively


let sum1 = 0;//initialing a variable 'sum' to zero
let sum2 = 0;

for (let i = 0; i < arr1.length; i++){//for loops to itereate through each element of the array to get the  average and store it within the  variable sum
    sum1 += arr1[i];
}
for (let i = 0; i < arr2.length; i++){// ""
    sum1 += arr2[i];
}
let avg1 = sum1 / arr1.length; //  taking the sum of the elements for each array  (respectfully) and  dividing them by the amount of elements within the array

let avg2 = sum2 / arr2.length;

return avg2 > avg1; //establishing return to be tested via assignment >  greater than,  returning a boolean  value

}
console.log(compareAverages(arr1, arr2));// returns false



//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;

}

console.log(willBuyDrink(true, 10.25));
console.log(willBuyDrink(true, 11.50));


//13. Create a function of your own that solves a problem.   In comments, write what the function does and why you created it
//write a function that takes two arrays where each array represents a different neighborhood, (neighborhood1 & neighborhood2) and each element in the arrays represents the amount of people in each household.
  //write this function to return true  if the  average people in each house hold (elements) of neighborhood1 is greater than neighborhood2.

let neighborhood1 =[4, 4, 5, 2, 3, 3, 4, 5, 6, 3, 2, 1];// neighborhood array showing number of people  per household in each house in the neighborhood
let neighborhood2 =[2, 3, 2, 4, 4, 4, 7, 1, 2, 2, 3, 2];// ''

function  myAverages(neighborhood1, neighborhood2){ //function taking in both neighborhood parameters

let num1 = 0;//initializing a variable num1 & 2 to zero
let num2 = 0;

for (let i = 0; i < neighborhood1.length; i++){ //for loops to itereate through each element of the array to get the  average and store it within the  variable num
    num1 += neighborhood1[i];
}
for (let i= 0; i < neighborhood2.length; i++){// smae as above
    num2 += neighborhood2[i];
}
let average1 = num1 / neighborhood1.length; // taking the sum of the elements for each array  (respectfully) and  dividing them by the amount of elements within the array
let average2 = num2 / neighborhood2.length;

return average1 < average2;// is theaverage of people/house in neighborhood1 < neighborhood2; true or false

}

console.log(myAverages(neighborhood1, neighborhood2));// prints to console






