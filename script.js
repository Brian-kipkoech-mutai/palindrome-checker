

 const text_input= document.getElementById('text-input');
 const  check_btn = document.getElementById('check-btn');
 const result =document.getElementById('result');

 const palindromeChecker=(string)=>{
    const matched=string.match(/([a-z]|\d)/gi).join('').toLowerCase()
    const reversed=string.match(/([a-z]|\d)/gi).reverse().join('').toLowerCase()
     return matched==reversed?true:false

}

 check_btn.addEventListener('click',handleCheck)

 function handleCheck(){
 const inputValue=text_input.value;
if(inputValue.length==0){
  alert("Please input a value");
}
else{
    result.innerText=palindromeChecker(inputValue)?`${inputValue} is a  palindrome`:`${inputValue} is a not palindrome`;
    text_input.value='';
 
}
   
 

 }

   
