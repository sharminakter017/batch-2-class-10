
// email pattern ..........

let email    = 'mssharminakter2000@gmail.com';
let patterns = /^[a-z0-9._]*@[a-z]{2,10}\.[a-z]{3,6}$/;
console.log(patterns.test(email));



//  UserName pattern.............

let usename     = 'coder_sharmin@';
let patternUser = /^[a-z@_]{8,16}$/;
console.log(patternUser.test(usename));





// Bangladeshi phone number pattern ..............

let number = '01790169442';
let pattern = /^(\+8801|01|008801)[0-9]{9}$/;
console.log(pattern.test(number));




// Password pattern .................

let pass        = 'Sharmin2000@';
let passPattern = /^[a-zA-z0-9@#$%^&]{8,12}$/ ;
console.log(passPattern.test(pass));



// Zipcode Pattern .................

let zip = '3610';
let zipPattern = /^[0-9]{4}$/ ;
console.log(zipPattern.test(zip));








   


