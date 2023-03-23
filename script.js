let title = document.getElementById("title")

console.log(title)

let redDiv = document.getElementById("red")
let yellowDiv = document.getElementById("yellow")
let greenDiv = document.getElementById("green")

redDiv.onclick = () => {
    console.log("you click red")
}

yellowDiv.onclick = () => console.log("yellow")
greenDiv.onclick = () => console.log("green")
