let btn = document.querySelector('#list-itens1');
let div = document.querySelector('#hide-iten1')

btn.addEventListener('click', function(){
    if(div.style.display === 'block'){
        div4.style.display = 'none'
        div3.style.display = 'none'
        div2.style.display = 'none'
        div.style.display = 'none'
    }else{
        div4.style.display = 'none'
        div3.style.display = 'none'
        div2.style.display = 'none' 
        div.style.display = 'block'
        
        
  
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
    }else{
        div4.style.display = 'none'
        div3.style.display = 'none'
        div2.style.display = 'block'
        div.style.display = 'none'
        
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

    }else{
        div4.style.display = 'none'
        div3.style.display = 'block'
        div2.style.display = 'none'
        div.style.display = 'none'
     
        
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

    }else{
        div4.style.display = 'block'
        div3.style.display = 'none'
        div2.style.display = 'none'
        div.style.display = 'none'
     
        
    }
})