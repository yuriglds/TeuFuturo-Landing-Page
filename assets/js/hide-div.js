let btns = document.querySelectorAll(".list-itens");
let divs = document.querySelectorAll(".hide-div");

<<<<<<< HEAD
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
=======
btn.addEventListener('click', function(){
    if(div.style.display === 'block'){
        div4.style.display = 'none'
        div3.style.display = 'none'
        div2.style.display = 'none'
        div.style.display = 'none'
        btn.style.borderBottomColor = '#7116F2'
        btn2.style.borderBottomColor = '#7116F2'
        btn3.style.borderBottomColor = '#7116F2'
        btn4.style.borderBottomColor = '#7116F2'

    }else{
        div4.style.display = 'none'
        div3.style.display = 'none'
        div2.style.display = 'none' 
        div.style.display = 'block'
        btn.style.borderBottomColor = '#0066ff'
        btn2.style.borderBottomColor = '#7116F2'
        btn3.style.borderBottomColor = '#7116F2'
        btn4.style.borderBottomColor = '#7116F2'
  
    }

})

let btn2 = document.querySelector('#list-itens2');
let div2 = document.querySelector('#hide-iten2')

btn2.addEventListener('click', function(){
    if(div2.style.display === 'block'){
        div4.style.display = 'none'
        div3.style.display = 'none'
        div2.style.display = 'none'
        div.style.display = 'none'
        btn.style.borderBottomColor = '#7116F2'
        btn2.style.borderBottomColor = '#7116F2'
        btn3.style.borderBottomColor = '#7116F2'
        btn4.style.borderBottomColor = '#7116F2'

    }else{
        div4.style.display = 'none'
        div3.style.display = 'none'
        div2.style.display = 'block'
        div.style.display = 'none'
        btn.style.borderBottomColor = '#7116F2'
        btn2.style.borderBottomColor = '#0066ff'
        btn3.style.borderBottomColor = '#7116F2'
        btn4.style.borderBottomColor = '#7116F2'
        
    }
})

let btn3 = document.querySelector('#list-itens3');
let div3 = document.querySelector('#hide-iten3');

btn3.addEventListener('click', function(){
    if(div3.style.display === 'block'){
        div4.style.display = 'none'
        div3.style.display = 'none'
        div2.style.display = 'none'
        div.style.display = 'none'
        btn.style.borderBottomColor = '#7116F2'
        btn2.style.borderBottomColor = '#7116F2'
        btn3.style.borderBottomColor = '#7116F2'
        btn4.style.borderBottomColor = '#7116F2'

    }else{
        div4.style.display = 'none'
        div3.style.display = 'block'
        div2.style.display = 'none'
        div.style.display = 'none'
        btn.style.borderBottomColor = '#7116F2'
        btn2.style.borderBottomColor = '#7116F2'
        btn3.style.borderBottomColor = '#0066ff'
        btn4.style.borderBottomColor = '#7116F2'
         
    }
})

let btn4 = document.querySelector('#list-itens4');
let div4 = document.querySelector('#hide-iten4');

btn4.addEventListener('click', function(){
    if(div4.style.display === 'block'){
        div4.style.display = 'none'
        div3.style.display = 'none'
        div2.style.display = 'none'
        div.style.display = 'none'
        btn.style.borderBottomColor = '#7116F2'
        btn2.style.borderBottomColor = '#7116F2'
        btn3.style.borderBottomColor = '#7116F2'
        btn4.style.borderBottomColor = '#7116F2'

    }else{
        div4.style.display = 'block'
        div3.style.display = 'none'
        div2.style.display = 'none'
        div.style.display = 'none'
        btn.style.borderBottomColor = '#7116F2'
        btn2.style.borderBottomColor = '#7116F2'
        btn3.style.borderBottomColor = '#7116F2'
        btn4.style.borderBottomColor = '#0066ff'
         
    }
})
>>>>>>> b7845f9947ae84f5977a4d25143e6b6e369d9d79
