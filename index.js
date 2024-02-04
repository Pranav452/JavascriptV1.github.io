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
// const minNum = 1 
// const maxNum = 100
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)

// let attempts  = 0 
// let guess
// let running = true

// while(true){
//    guess= window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
//    guess=   Number(guess)
//    if(isNaN(guess)){
//      window.alert(`please enter a valid no`)


//    }
//      else if(guess < minNum || guess > maxNum)
//    {
//       window.alert(`please enter a valid no`)

//    }
//    else {
//       attempts++ 
//       if(guess< answer){
//          window.alert(`too low try again  `)
//       }
//       else if(guess> answer){
//       window.alert(`too high try again `)
//       }
//       else{
//          window.alert(`correct answer was ${answer} it took ypu ${attempts} attempts`)
//          running= false
//       }
//    }
   
// }
// const b =   documemt.querySelector('button.button--no')
// b.addEventListner("mouseover", moveHover)
// function moveHover(){
//    const i=Math.floor(Math.random()*500)+1;
//    const j=Math.floor(Math.random()*500)+1;
//    b.style.left=i+"px"
//    b.style.top=i+"px"
   
// }
