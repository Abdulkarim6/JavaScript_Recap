const button = document.getElementById("EventButton");

function Hello() {
    console.log("log by event handler");
}

button.addEventListener("click", Hello);