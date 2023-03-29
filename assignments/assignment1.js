alert("assignment 1");

// 1. create a function called displayName
// 2. inside of function create 2 variables which will hold
// my firstName and my lastName
// 3. add these 2 variables together and store the result into
// another variable
// 4. console log the results of these 2 variables.
// 5. execute "displayName" 2 times

function displayName(){
  const firstName = "Virginie";
  const lastName = "Allflatt";
  // const fullName = firstName + " " + lastName;
  const fullName = `${firstName} ${lastName}`
  console.log(fullName);
}
displayName();
displayName();
