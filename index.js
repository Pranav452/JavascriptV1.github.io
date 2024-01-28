const PI = 3.14159
let radius
let circumference
document.getElementById("mySubmit").onclick = function
(){
  radius =   document.getElementById("myText").value
  radius = Number(radius)
  circumference = 2 * PI * radius
document.getElementById("myH3").textContent = circumference + " cm"

}
const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
const countLabel = document.getElementById("countLabel")


 let count = 0
 increaseBtn.onclick = function(){
    count++
    countLabel.textContent = count
}
decreaseBtn.onclick = function(){
    count--
    countLabel.textContent = count
}
resetBtn.onclick = function(){
    count = 0
    countLabel.textContent = count
}
 const myButton = document.getElementById("myButton")
 const myLabel = document.getElementById("myLabel")
 const min  = 1
 const max = 6
 let randomNum
 myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min
    myLabel.textContent = randomNum
 } 


 const myText= document.getElementById("myText")
 const resultElement= document.getElementById("resultElement")
 const mySubmit= document.getElementById("mySubmit") 
 let age 



 mySubmit.onclick = function(){
    age = myText.value
    age = Number(age)
 if(age>= 100)
 {
    resultElement.textContent = "Get out!";
 }
 else if(age == 0 )
 {
   
    resultElement.textContent = `you were just born nigga`

 }
 else if(age>= 18){
    resultElement.textContent = `old enough i see my nigga`

 }
 else if(age<0){
    resultElement.textContent = `who the heck are u ma nigga`

 }
 else{
    resultElement.textContent = `must be 18+`

 }
}