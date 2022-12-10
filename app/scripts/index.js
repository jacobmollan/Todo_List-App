"use strict";
console.log("index.js file loaded!");
const version = "1.0";
console.log("app version:", version);
const version_display = document.querySelector("#version-display");
console.log(version_display);
version_display === null || version_display === void 0 ? void 0 : version_display.append(version);
//App starts here
const submitbtn = document.querySelector("#button");
submitbtn === null || submitbtn === void 0 ? void 0 : submitbtn.addEventListener("click", (event) => {
    console.log("button click detected");
    //Code starts here
    let formdata = document.getElementById("todo");
    if (formdata.value.length == 0) {
        alert("please enter a value");
        return false;
    }
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let text = document.createTextNode(formdata.value);
    li.appendChild(text);
    ul === null || ul === void 0 ? void 0 : ul.appendChild(li);
});
