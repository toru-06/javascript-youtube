const  accountId = 12345;
let accountEmail = "tarunsingh7210@gmail.com";
var accountPassword = "111222333";
accountCity = "Delhi";
let accountState;


// accountEmail="Abc@gmail.com";
// accountPassword = "12345";
// accountCity = "Hyderabad";

/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);