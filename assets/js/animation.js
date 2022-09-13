/*back to top*/
var btn = $("#back-to-top");
        btn.click(function() {
        $('html, body').animate({scrollTop:0}, 'slow');
        
        });

(function () {
    var btn1 = document.getElementById('back-to-top');
        window.addEventListener('scroll', function () {
            var st = window.pageYOffset || document.documentElement.scrollTop;

            if (st > 10) {
                btn1.classList.remove('back-to-top-none');
            }else {
                btn1.classList.add('back-to-top-none');
            }
        });
        
})();


/* removing # of url */
$('nav a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight - 200
    }, 200);
    
});


/* fix top padding */
window.addEventListener('resize', () => {
    var tela = document.getElementById('topo');    
        var width = window.innerWidth;
            if(width > 1280) {
                tela.classList.remove('inicio');
            } else {
                tela.classList.add('inicio');
            }
});
    
    
/* hidden bg of menu */
(function () {
    var menu = document.getElementById('menu');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            menu.classList.add('bg-dark');
            document.getElementById("menu").style.transition;
        }else {
        menu.classList.remove('bg-dark');
        document.getElementById("menu").style.transition;
        }

    });
})();

/* transition animation*/
debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

/* transition animation */
(function() { 
var $target = $('.anime'),
    animationClass = 'anime-start',
    offset = $(window).height() * 3/4;

function animeScroll() {
    var documentTop = $(document).scrollTop();

    $target.each(function(){
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop - offset) {
            $(this).addClass(animationClass);
        } else {
            $(this).removeClass(animationClass);
        }
    })
}

animeScroll();

$(document).scroll(debounce(function(){
    animeScroll();
},200))
}());

