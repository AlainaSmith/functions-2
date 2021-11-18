////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

const multiply = (num1, num2, cb) => {        //three different paramters. cb is a paramter in and of itself
  return cb(num1 * num2) 
}
 
// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

   multiply(4, 3, answer => {                       //the entire answer function is whats being passed in as CB in the multiplied function 
   console.log('The answer is ' + answer)                   //should console.log 12   //answer is a function. everything within the squrily bracket is what is being sent in AS THE CB
   })



////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.

// Do not edit the code above.



////////// PROBLEM 2 //////////
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/
//var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
first = (arr, cb) => {
  return cb(arr[0])
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

first(names, firstName => {
  console.log('The first name in names is ' + firstName)
 })



////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

last = (arr, cb) => {
  return cb(names[6])
}


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

last(names, lastName => {
  console.log('The last name in names is ' + lastName)
})



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array.  **must make for loop to check
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/


contains = (arr, name, cb) => {
   for(let i = 0; i < arr.length; i++){
   if (name === arr[i]){
     cb(true)
   } else {
     cb(false)
   }
  }
}


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

contains(names, 'Colt', result => {
  if(result === true){
    console.log('Colt is in the array')
  } else {
    console.log('Colt is not in the array')
  }
})



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/


 const uniq = (arr, cb) => {
   for (let i = 0; i < arr.length; i++)             //
   for (let j = 0; i < arr.length; j++)
    if(i !== j){                          //this says if it is not equal to any other names int he array. no duplicates
      if(arr[i] === arr[j]){              //at this point we found a duplicate now we want to splice something out 
        arr.splice(j, 1)                //we are going to use the j index and then remove at 1
    }
    }
 }
 
 cb(arr)
}

//anotehr example of for each, it will just do it for each item, we dont need to filter anything or make a copy so lets jus tmake a basic high order method tha tjust loops through.
const uniq = (arr, cb) => {
  arr.forEach((name, index) => {
    arr.forEach((element, index) => {
      if(nameIndex !== index){   //this is saying if ther are NOT duplicates
      if (name === element){
        arr.splice(index, 1)
      }
      }

    })
  })
  cb(arr)
}






/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/

//going to pass in as a seperate function and then pass it in as an argument



const printUniqArr = (uniqArr) => {             //the uniq arr is being passed in 
  console.log(`The new names array with all the duplicate items removed is ${uniqArr}`)
}

uniq (names, printUniqArr)

//the cb(arr isg oing to become the value uniqArr, and thats what were console logging)




////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*///var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']

function each = (arr, cb) => {
  arr.forEach(names)
  cb(names[i])
}


/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two paremeters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

each(names, cb(item, index) => `The item at index ${index} is ${item}`)
//we are invoking the function forEach by putting the word each first
//then passing in the 2 parameters which are names and cb function which has two paramters, item and index. 
//the cb is then printing a template literal, represented by the ${} that I put.

////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/


}
// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.

const getUserById = (arr, id, cb) => {
 for (let i = 0; i < arr.length) {
   if(arr[i].id === id)                //the array here is searching for an id that matches one in the array, meaning it also needs to declare that is the type of array of products its going through, so we need to assign arr[i].id to it. 
   return cb(arr[i])
 }
}
}


// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

getUserById(users, '16t', user => {
console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
 })

////////// CHALLENGE //////////

/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

// CODE HERE

/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

// CODE HERE

/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

// CODE HERE

/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

// CODE HERE