//1.Arrow function with add
const sum = function add(a,b){
    return [a,b]
}
const [a,b] = sum(10,5)
console.log(`Total ${a} + ${b} = ${a + b}`)

//2.short arrow function with mul
const mul = (a,b)=> a*b
const Sum = mul(10,5)
console.log(`Mul ${a} + ${b} = ${Sum}`)

//3.short arrow functio n with div
const div = (a,b)=> a/b
const Div = div(10,5)
console.log(`Div ${a} + ${b} = ${Div}`)

//4.short arrow function with del
const del = (a,b)=> a-b
const Del = del(10,5)
console.log(`Del ${a} + ${b} = ${Del}`)