let btn = document.querySelector('#list-itens');
let div = document.querySelector('#esconder')

btn.addEventListener('click', function(){
    if(div.style.display === 'block'){
        div.style.display = 'none'
        div2.style.display = 'none'
    }else{
        div.style.display = 'block'
        div2.style.display = 'none'
        
    }

})

let btn2 = document.querySelector('#list-itens2');
let div2 = document.querySelector('#esconder-rtx')

btn2.addEventListener('click', function(){
    if(div2.style.display === 'block'){
        div2.style.display = 'none'
        div.style.display = 'none'
    }else{
        div2.style.display = 'block'
        div.style.display = 'none'
        
    }
})