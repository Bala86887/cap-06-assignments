
let container=document.getElementById("container")
let fetchdata=fetch("https://jsonplaceholder.typicode.com/todos")

.then(function(one){
    return one.json()
})


.then(function(two){

   showdata(two)
})




function showdata(array){


array.forEach((e)=>{
console.log(e)
let div=document.createElement("div")
let para1=document.createElement("p")
let para2=document.createElement("p")
let para3=document.createElement("p")
para1.innerText=e.id
para2.innerText=e.title
para3.innerText=e.completed

div.append(para1,para2,para3)
container.append(div)
})
    




}