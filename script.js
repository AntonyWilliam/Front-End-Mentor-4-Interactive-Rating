function hidde(id) {
    var section = document.getElementById(id);
    section.classList.add("hidden");
}

function show(id){
    var section = document.getElementById(id);
    section.classList.remove("hidden");
}

function myFunction(value){
    var number = document.getElementById("number");
    number.innerHTML = value;
}
