var number = null;

function hidde_show(id, id2) {
    if(number == null){
        var warning = document.getElementById("alert")
        warning.style.opacity = "1"
        return
    }

    else{
        var section = document.getElementById(id);
        section.classList.add("hidden");


        var section2 = document.getElementById(id2);
        section2.classList.remove("hidden");

        var warning = document.getElementById("alert")
        warning.style.opacity = "0"
    }
}

function alterValue(value){
    var number2 = document.getElementById("number");
    number2.innerHTML = value;
    number = value;
}
