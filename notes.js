//  ---------------------------------------
//  ---EVENT LISTENERS---
//  ---------------------------------------
const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

grandparent.addEventListener("click", e => {
    console.log("Grandparent 1")
})

grandparent.addEventListener(
    "click", 
    e => {
    console.log("Grandparent Capture")
    },
    {capture: true }
)

grandparent.addEventListener("click", e => {
    console.log("Grandparent Bubble")
})

parent.addEventListener(
    "click", 
    e=> {
    console.log("Parent Capture")
    },
    {capture: true }
)

parent.addEventListener("click", e => {
    console.log("Parent Bubble")
})

child.addEventListener(
    "click", 
    e => {
    console.log("Child Capture")
    },
    {capture: true }
)

child.addEventListener("click", e => {
    console.log("Child Bubble")
})

document.addEventListener(
    "click", 
    e => {
    console.log("Document Capture")
    },
    {capture: true }
)

document.addEventListener("click", e => {
    console.log("Document Bubble")
})
parent.addEventListener("click", e => {
    console.log("Parent 1")
})

child.addEventListener("click", e => {
    console.log("Child 1")
})

document.addEventListener("click", e => {
    console.log("Document 1")
})

//  Going from the closest element to the furthest is called Bubbling 

//  Capturing phase works from the things furthest away to closest to the center

//  Bubbling --> Bubbling floating up and OUT 
//  e.stopPropagation   stops the bubbling/capturing of events

//  If you only want an event to run once you can add a parameter 
//  { once: true})

//  You can also assign an event a certain # of times you want it to run 
//  .removeEventListener

function printHi() {
    console.log("Hi")
}
parent.addEventListener("click", printHi)

setTimeout(() => {
    parent.removeEventListener("click", printHi)
}, 2000)
//  This function is created seperately for the remove event listener to have a variable/function to identify

//  Now after 2 seconds, the console log Hi is gone and will not show up again 

//  ---------------------------------------
//  EVENT DELEGATION 
//  ---------------------------------------

const divs = document.querySelectorAll("div")

divs.forEach(div => {
    div.addEventListener("click", () => {
        console.log("hi")
    })
})

document.addEventListener("click", e => {
   if (e.target.matches('div')) {
    console.log("hi")
   }
})

//  You can turn this into a function to be used anywhere  

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}



const newDiv = document.createElement("div")
newDiv.style.width = '200px'
newDiv.style.height = '200px'
newDiv.style.backgroundColor = 'purple'
document.body.append(newDiv)

//  ---------------------------------------
//  ELEMENT SELECTORS
//  ---------------------------------------

//  Element selectors are methods used to target and manipulate HTML elements. They allow
//      you to select one or multiple HTML elements from the Document Object Model (DOM)

//  There are many ways you can select an element 

//  1. document.getElementById()            // ELEMENT OR NULL
//  2. document.getElementsClassName()      // HTML COLLECTION 
//  3. document.getElementsByTagName()      // HTML COLLECTION 
//  4. document.querySelector()             // ELEMENT OR NULL
//  5. document.querySelectorAll()          // NODELIST

