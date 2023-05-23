//your JS code here. If required.

// const screenSize = document.createElement("h1");
const screenSize = document.getElementById("sizeInfo")
screenSize.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;

document.body.append(screenSize);

// onresize is a property that takes a function value. which is why
// we write window.onresize = function(){}... here function is value

window.onresize = function(){
    screenSize.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}
