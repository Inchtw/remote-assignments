/* Request 1: Click to Change Text. */

const welcome = document.getElementById('welcome');

welcome.addEventListener('click',() => {
    welcome.textContent = 'Have a Good Time!';
});

/* Request 2: Click to Show/Close Menu. */

const menu_btn = document.querySelector('.menu_btn');
const menu = document.querySelector('#menu');
const close_btn = document.querySelector('#close');

menu_btn.addEventListener('click',()=>{
    menu.classList.add('open');
    close_btn.classList.remove('none');
    menu_btn.classList.add('none');
    // console.log('hi');
});
close_btn.addEventListener('click',()=>{
    menu.classList.remove('open');
    menu_btn.classList.remove('none');
    close_btn.classList.add('none');
    // console.log('hi');
});


/* Request 3: Click to Show More Content Boxes.*/

const call_to_action = document.querySelector('.call');
const addition = document.querySelector('#addition')
call_to_action.addEventListener('click',()=>{
    // addition.className ='free-now'; 直接把none的class改掉也可
    addition.style.display = 'block';
    // 順便把call to action隱藏
    document.querySelector('#Shop').style.display = 'none';
    // console.log('hi');


})