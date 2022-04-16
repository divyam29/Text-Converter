import ui, {a,c,b} from './Practice2.mjs'
// {} curly braces required for specifying something that is a function of other module
// ui is not a function in Practice2.mjs so it will deafult export and print d
// a,c,b are functions so they will return their own values
// ui can be replaced with any other name as it is not a function 

console.log(ui);
console.log(a);