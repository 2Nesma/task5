//1
for(let i=0;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
}
console.log("#######################");
//2

for (let i = 1; i <=10; i++) {
    let row = '';
    
   
    for (let j = 1; j <= 10; j++) {
       
        let product = i * j;
        
     
        row += product + '\t'; 
    }
   
    console.log(row);
}
console.log("#######################");
//3
let string= "Hello,   every body    ,how are      you";
let stringWithoutSpaces = string.replaceAll(' ', '');
console.log(stringWithoutSpaces); 
console.log("#######################");
//4

const visible=(num)=>{
   
    if (num%10==0){
        console.log("true")
        return;
    }
    else{
        console.log("false")
       return;
    }
}
visible(15)
console.log("#######################");
//5
function countVowels(inputString) {

    inputString = inputString.toLowerCase();
    
   
    let vowelCount = 0;
    for (let i = 0; i < inputString.length; i++) {
       
        if (/[aeiou]/.test(inputString[i])) {
           
            vowelCount++;
        }
    }
    return vowelCount;
}
let inputString = "Hello people ,how are you ";
let numVowels = countVowels(inputString);
console.log("Number of vowels:", numVowels); 
    
    
    






