//[^abc]
let inf01 = "javascript language with initial as java name";
let pattern2 = /[^a]/g;
let result2 = inf01.match(pattern2);

console.log(result2);

//[0-9]
let num = "9876543430";
let pattern3 = /[1-5]/g;
let result3 = num.match(pattern3);

console.log(result3);

//[^0-9]
let num1 = "9876543210";
let pattern4 = /[^0-4]/g;
let result4 = num1.match(pattern4);

console.log(result4);