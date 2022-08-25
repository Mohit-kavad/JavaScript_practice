const num = [1,2,3,4]
console.log(num);

const newAry = new Array(1,3,4,5);
console.log(newAry);

const aryFrom =  Array.from("hello world");
console.log(aryFrom);

const analyticsData = [[1,12.2,4],[3,34,5.6],[{name:'mohit',age:20}]]

for(const data of analyticsData){
    for(const insideAry of data){
        console.log(insideAry);
    }
}

const hobbies = ['reading','cooking'];

hobbies.push('singing')
hobbies.unshift('coding')
hobbies.pop()
hobbies.shift()
console.log(hobbies);

hobbies.splice(1,0,'good food','movies')
console.log(hobbies);
// hobbies.splice(0,2)
hobbies.splice(-2,2)
console.log(hobbies);

const testResult = [2,3.4,55.6,23,4,2,45,65,4.9,55.7];
const storedResults = testResult.slice(-5,-1);
testResult.push(55,34)
console.log(storedResults, testResult);

// concat()
const testAry = [2,3,4,5,6,78,9,87,78,43];
const newTest = testAry.concat([23,45,-5])
console.log(testAry,newTest);

console.log(testAry.indexOf(78));
console.log(testAry.lastIndexOf(78));

// find() 

const users = [
    {userId:1,usrName : "Mohit"},
    {userId:2,usrName : "Ayush"},
    {userId:3,usrName : "Mihir"},
    {userId:4,usrName : "khushal"},
    {userId:5,usrName : "Ashish"},
    {userId:6,usrName : "Amit"},
    {userId:7,usrName : "Mayur"}
]
// -->> will return same value from the array
const value = users.find((user)=> user.userId === 4);
console.log(value);
// findIndex()  -->> will return index of the array
const index = users.findIndex((userIndex)=>userIndex.usrName === "Amit")
console.log(index);

// foreach()
const prices = [10,20,50,50.50,49.50,37.56];
const tax = 0.19;
const taxAdjustedPrices = []

// for(const price of prices){
//     taxAdjustedPrices.push(price * (1 + tax));
// }
prices.forEach((price,index)=>{
    const priceObj = {index:index,taxAdjustedPrices:price *(1 + tax)}
    taxAdjustedPrices.push(priceObj)
})
console.log(prices, taxAdjustedPrices);

// map() --> creating new array

const newtaxAdjustedPrices = prices.map(((price,index)=>{
    const priceObj = {index:index,taxAdjustedPrices:price *(1 + tax)}
     return priceObj
}))
console.log(newtaxAdjustedPrices);

// sort()

const sortNum = [1200,20,4,30,1500,500]

const sortedNumber = sortNum.sort((a,b)=>a-b) //ascending order
console.log(sortedNumber);
console.log(sortedNumber.reverse()); //desending order

//filter()

const filteredNum = sortNum.filter((filnums)=>filnums > 500) 
console.log(filteredNum);

// reduce()

const userCart = [
    {prodId:1,prodName:"laptop",price:50000},
    {prodId:2,prodName:"mobile",price:10000},
    {prodId:3,prodName:"TV",price:12000},
];

const total= userCart.reduce((totalPrice,currentProd)=>{ 
    return totalPrice + currentProd.price
},0)
console.log(total); 

// split() --> convert string to array
const transformedData = 'hello; india; how are you?'.split(';');
console.log(transformedData);
// join() --> aray to string
const joinAry = ['hello','Mohit'].join(' ');
console.log(joinAry);

// destructuring

const nameData = ['max','schwarz','Mr',30];
const [firstName,lastName, ...otherInfo] = nameData;
console.log(firstName,lastName,otherInfo);

