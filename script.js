let number = null;

function hidde_show(id, id2) {
    if(number == null){
        let warning = document.getElementById("alert");
        warning.classList.add("shake");
        warning.style.opacity = "1";
        return
    }

    else{
        let section = document.getElementById(id);
        section.classList.add("hidden");


        let section2 = document.getElementById(id2);
        section2.classList.remove("hidden");

        let warning = document.getElementById("alert");
        warning.classList.remove("shake");
        warning.style.opacity = "0";
    }
}

function alterValue(value){
    let number2 = document.getElementById("number");
    number2.innerHTML = value;
    number = value;
}
