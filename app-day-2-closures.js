// // function certify() {
// //   // var certifiedBy = "Steven"
// //   return function(){
// //     console.log("Totally Valid. Certified By: " + certifiedBy)
// //   }
// //   // pass this function into another with certifiedBy defined
// //   // change certifiedBy
// // }
// //
// // var thingReturner = certify()
// //
// // var confusion = function(aFunction) {
// //   var certifiedBy = "Antoin"
// //   aFunction()
// // }
// //
// // confusion(thingReturner)
//
// function stepBy(interval) {
//   var total = 0
//   return function(){
//     return total += interval
//   }
// }
//
// var stepBy5 = stepBy(5)
// var stepBy2 = stepBy(2)
// // stepBy5() // 5
// // stepBy2() // 2
// // stepBy5() // 10
// // stepBy2() // 4
// // stepBy5() // 15
// // stepBy2() // 6
// // stepBy5() // 20
