function add(a,b){
    return a + b
}
const mul = (a,b) => {
    return a * b
}
//create the object
const obj={
    name:"yas",
    age:20,
    message:function(){
        let name=obj.name 
        return `hello I am ${name}`
    }
}
//map-return new array after executing function on every element
const numbers=[1,3,4,88,21,-35,-26]
const mappednum=numbers.map((num)=>num*3)
//console.log(mappednum);

//filter-return new array with element satisfying the condition
const posNum=numbers.filter((n)=>n>0)
//console.log(posNum);
const evenNum=numbers.filter((n)=>n%2==0)
//console.log(evenNum);
const oddNum=numbers.filter((n)=>n%2!=0)
//console.log(oddNum);
//reduce-reduced to single element
const total=numbers.reduce((sum,n)=>sum+n,0)
//console.log(total);

const products=[
    {namr:"mobile",price:20000},
    {name:"laptop",price:50000},
    {name:"tablet",price:30000},
    {name:"watch",price:10000},
    {name:"headphone",price:5000},
    {name:"speaker",price:15000}
]
const totalPrice=products.reduce((sum,n)=>sum+n.price,0)
//console.log(totalPrice);

const price=products.filter((n)=>n.price>10000,0)
//console.log(price);
//Destructing

const user={name:"yas",password:"yas@9277"}
const {name,password}=user
console.log(password);

//destructuring array
const arr=[1,2,3,4,5]
const [first,second,third]=arr
console.log(first);
console.log(second);
console.log(third);

//spread operator
const arr1=[1,2,3]
const arr2=[4,5,6]
const copyArr=[...arr1,...arr2,7]
console.log(copyArr);

//callback function
function function1() {
    console.log("fromm inside function1");
}
function fun(name,callback) {
    callback()
    return `${name} from outside function`
}
console.log(fun("function1",() => {console.log("from inside callback function")}));

//async function

async function fetchUser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()
        //console.log(data);
        data.map((a))=> {
            console.log(a.name);
        }
    }
    catch(error){
        console.log(error);

}
}
fetchUser()