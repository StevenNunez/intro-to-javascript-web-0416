// // function sayHello(name){
// //   console.log("Hello, " + name);
// //   return "beef";
// // }
// //
// // var returned = sayHello();
//
// function compute(num1, num2, computor) {
//   // computor = add;
//   // add(num1, num2)
//   debugger;
//   console.log("Allocating resources");
//   console.log("Constructing additional pylons");
//   return computor(num1, num2);
// }
// //
// function add(n1, n2) {
//   debugger
//   return n1 + n2
// }
//
// function mult(n1, n2) {
//   return n1 * n2;
// }
//
// var result = compute(10, 20, add);
// debugger
// var result2 = compute(10, 20, mult);
// // var subtract = function(n1,n2) {
// //   return n1 - n2;
// // }
// var result3 = compute(10, 20, function(n1,n2) {
//   return n1 - n2;
// });

// var outer = 42
//
// function printOuter(){
//   console.log(outer)
// }
//
// printOuter()

// function definesInner(){
//   var inner = 42
// }
//
// console.log(inner);

// var outer = 42
//
// function updateOuter(){
//   var outer = 110
// }
//
// updateOuter()
// console.log(outer);

// "use strict";
// rage;
// function initializeRage() {
//   function maximizeRage () {
//     rage = "really fucking true"
//   }
//   return maximizeRage();
// }
//
// initializeRage()

// var names = ["Steven", "Sophie", "Antoin"]
// // names.each {|name| puts name}
// names.forEach(function(name){
//   console.log(name);
// })

// var me = {
//   name: "Steven",
//   age: "Old",
//   properties: {
//     hobbies: ["Salsa"]
//   }
// }

function setup() {
  console.log(zorp);
  var zorp;
  startCompressers();
  function startCompressers() {
    console.log("Starting");
  }
}

function setup() {
  function startCompressers() {
    console.log("Starting");
  }
  console.log(zorp);
  startCompressers();
}
var zorp;

setup()
