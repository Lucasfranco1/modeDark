/* select elements dom */
const check= document.querySelector('.toggle');
const body= document.querySelector('.body');

check.addEventListener('click',function(){
    console.log(this)
    if(this.checked){
        body.classList.add('change-color');
    }else{
        body.classList.remove('change-color');
    }
})