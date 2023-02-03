document.addEventListener('DOMContentLoaded', function(event) {
    let menu = document.getElementById("navbar");
    let icon = document.getElementById("hamb-btn");
    let elems = document.querySelectorAll("#navbar li");
    
    icon.addEventListener('click', function(){
        menu.classList.toggle('showHide');
    });
    
    elems.forEach(elem => {
        elem.addEventListener('click', () =>{
            menu.classList.toggle('showHide');
        });
    });
});