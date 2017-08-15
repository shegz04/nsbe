//menu button script
function menubtn(x) {    
    x.classList.toggle("change");
    
    var open = document.querySelector('.sidebar');
    if (open.style.width === '200px') {
        open.style.width = '0';
    }
    else {
        open.style.width = '200px';
        open.style.display === 'block'
    }
       
    
}

function nav_close() {
    var close = document.querySelector('.sidebar');
    if (close.style.width === '200px') {
        close.style.width = '0';    
        toggle.classList.toggle("change");
    }
}


function imagebtn(y) {
    x = y.getElementsByClassName('show')[0];
    x.classList.toggle("hide");
    x.classList.toggle("reveal");
    /*var open = document.querySelector('.expand');
    if (open.style.display === 'none') {
        open.style.display = 'block';
    }
     else if (open.style.display === 'block') {
        open.style.display = 'none';
    }*/
     
    
}


/*function stopp() {
    var open = document.querySelector('.expand');
    open.style.display = 'none';
}*/