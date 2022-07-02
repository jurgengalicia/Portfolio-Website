const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


//Button click active class
function PageTransitions(){
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currBtn = document.querySelectorAll('.active-btn');
            currBtn[0].className = currBtn[0].className.replace('active-btn',"")
            this.className += ' active-btn';
        })
    }

    //sections active class
    allSections.addEventListener('click', (e) =>{
        console.log(e.target)
    })
}


PageTransitions();