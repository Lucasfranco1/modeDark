/* reference storage */
const storage = window.localStorage;

/* reference dom */
const check = document.querySelector('.toggle');
const body = document.querySelector('.body');

/* dark */
let dark = Boolean(storage.getItem('dark'));

/* test */
const testDark = dark =>{
    if(dark){
        body.classList.add('change-color');
        check.checked = true;
    }else{
        body.classList.remove('change-color');
        check.checked = false;
    }
}

testDark(dark);

check.addEventListener('click',function(){
    console.log(this)
    if(this.checked){
        body.classList.add('change-color');
        storage.setItem('dark', true);
    }else{
        body.classList.remove('change-color');
        storage.removeItem('dark');
    }
})