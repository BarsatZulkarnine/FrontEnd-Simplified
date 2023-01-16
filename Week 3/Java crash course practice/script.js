function add (num1, num2) {
    return num1 + num2;
}

console.log(add(-3,-6))

function hoursIntoSecond(sec){
    return sec * 60 * 60;
}

console.log(hoursIntoSecond(2))

function calcPreimeters(num1, num2){
    return num1*2 + num2*2;
}

console.log(calcPreimeters(2,9))

function appendForntend (stng) {
    return stng + "Fontend"
}

console.log(appendForntend('Apple'))

function sumGreaterThan100(one,two){
    if ((one+two) > 100) return true;
    else return false;
}

console.log(sumGreaterThan100(200,10))

function isNotZero(num){
    if (num != 0) return true;
    else return false; 
}

console.log(isNotZero(4))

function calcRemainder(num1, num2){
    return num1%num2;
}

console.log(calcRemainder(7,8))

function isOdd(num1){
    if (num1%2 != 0){
        return true
    }
}

console.log(isOdd())


function progressiveSum(num1){
    let sum = 0;
    for (let i=1; i<= num1; ++i)
    {
        sum += i;
    }
    return sum;

}

console.log(progressiveSum(600))


function clacTime(num1){
    let second = num1%60;
    let min = Math.floor(num1/60);
    console.log(min);
}

clacTime(66)


function reverseString(str){
    let newstr = '';
    for(let i=0; i<str.length; i++)
    {
        newstr=str[i] + newstr;
    }

    return newstr;


}

console.log(reverseString('david'))

console.log('abc'.split('').reverse().join(''))


function convertToZeros(arr){
    return arr.map(element => 0)
}

console.log(convertToZeros([1,2,2,3,4]))

function removeApples(arr){
   // return arr.filter(element => "Apple")
   /*let newarr = [];
   for(let i=0; i<arr.length; i++){
    if(arr[i] != "Apple"){
        newarr.push(arr[i])
    }
}
   return newarr*/

   return arr.filter(element=> element!="Apple")
}

console.log(removeApples(["banana","Apple","Orange","Apple"]))


function filterOutFalsy(arr){
    //return arr.filter(elem=> !!elem === true)
    let noFalsy = [];

    for(let i=0; i<arr.length; i++){
        if(!!arr[i] === true){
            noFalsy.push(arr[i]);
        }
    }
    return noFalsy
}

console.log(filterOutFalsy(["",[],0,null,undefined,"0"]))
console.log(filterOutFalsy(["banana","Apple","orange",false]))


function convertToBoolearn(arr){
    return arr.map(elem=> !!elem)
}

console.log(convertToBoolearn([500,0,"david","",[]]))

function showRating(num1){
    let stars=""
    for(let i=0; i<Math.floor(num1); ++i)
    {
        stars += "* ";
    }
    if(num1%1!=0){
        stars+="."
    }
    console.log(stars)
    stars = ""
}

showRating(3.5)


function sortLowToHigh(arr){
    let sortedAry= arr
    let temp = 0;
    for (let i=0; i<arr.length; i++){
        for(let j = 0; j < arr.length-1; j++){
            if(sortedAry[i]<sortedAry[j]){
                temp= sortedAry[i]
                sortedAry[i] = sortedAry[j];
                sortedAry[j] = temp
            }
        }
    }

    console.log(sortedAry)
}

sortLowToHigh([10,20,40,30,50,10])

function sortv2 (arr){
    return arr.sort((a,b)=>(a-b))
}

console.log(sortv2([1,5,0,100,15]))


function sortv3(arr){
    return arr.sort((a,b)=>(a.price-b.price))

}

console.log(sortv3([{id:1,price:50},{id:2,price:30},{id:3,price:60},{id:4,price:10}]))

/*async function postByUser(uid){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await res.json()

    const post = result.filter(element => element.userId === uid )
    console.log(post)
}

postByUser(4)


*/

async function firstSinIncomplete(){
    const res = await fetch ("https://jsonplaceholder.typicode.com/todos")
    const result =  await res.json()
    let count = 0
    const post = result.filter(elem=> {
       
        if(count <= 6){
            count +=1;
            return elem.completed === false
        }
    })
    console.log(post)
}
firstSinIncomplete()