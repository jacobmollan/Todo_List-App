"use strict";
console.log("index.js file loaded!");
const version = "1.0";
console.log("app version:", version);
const version_display = document.querySelector("#version-display");
console.log(version_display);
version_display === null || version_display === void 0 ? void 0 : version_display.append(version);
//App starts here
function dismiss(el) {
    el.parentNode.style.display = 'none';
}
;
const submitbtn = document.querySelector("#button");
submitbtn === null || submitbtn === void 0 ? void 0 : submitbtn.addEventListener("click", (event) => {
    console.log("button click detected");
    //Code starts here
    let formdata = document.getElementById("todo");
    if (formdata.value.length == 0) {
        alert("Please enter a value!");
        return false;
    }
    let div = document.createElement("div");
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let text = document.createTextNode(formdata.value);
    //Div code
    div.appendChild(li);
    div.className = "block bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 w-96 min-h-min m-auto max-w-lg";
    //Button code
    btn.appendChild(document.createTextNode("X"));
    btn.className = "inline-block bg-red-500 text-white font-bold py-2 px-4 rounded ml-72";
    li.appendChild(text);
    li.appendChild(btn);
    li.className = "inline-block break-words break-all";
    ul === null || ul === void 0 ? void 0 : ul.appendChild(div);
    div.appendChild(li);
    let parent = btn.parentElement;
    parent.setAttribute("onClick", "dismiss(this)");
});
