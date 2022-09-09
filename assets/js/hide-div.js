let btns = document.querySelectorAll(".list-itens");
let divs = document.querySelectorAll(".hide-div");

divs[0].style.display = "block";

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(index) {
        for (let j = 0; j < divs.length; j++) {
            if (j == index) 
                divs[j].style.display = "block";
            else
                divs[j].style.display = "none";
        }
    }.bind(null, i));
}
