const nav = document.getElementById('navigation')
const images = document.getElementById('images')
const left=document.getElementById('left')
const right=document.getElementById('right')
const imgs = document.querySelectorAll('#images img')
const comment = document.getElementById('submit')
const commenter = document.getElementById('commenter')
const commentList = document.getElementById('comment-list')
const nameBox = document.getElementById('name')
const sectionBox = document.getElementById('section')
const emailBox = document.getElementById('email')
const commentBox = document.getElementById('comment-text')
const commentForm = document.getElementById('comment-form')
const home = document.getElementById('home')
const about = document.getElementById('about')
const contact = document.getElementById('contact')

/*nav bar*/
window.addEventListener('scroll',fixNav)
function fixNav(){
    if(window.scrollY >= 640){
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}
//==================

/*photo changing */
let index = 0;
let picInterval = setInterval(change,4000)
function change(){
    index++
    if(index>imgs.length-1){
        index=0
        images.style = 'transform : translateX('+index*-400+'px)'
    }
    else{
        images.style = 'transform : translateX('+index*-400+'px)'
    }
}
function changeReverse(){

    if(index<0){
        images.style = 'transform : translateX('+(imgs.length-1)*-400+'px)'
        index = imgs.length-1
    }
    else{
        images.style = 'transform : translateX('+index*-400+'px)'
    }
    index--
}

//======================

// adding comment
// nameBox.addEventListener('keyup' ,(e)=> console.log(e.key))
names = ''
nameBox.addEventListener('keyup' ,(e)=>names = e.target.value)
sections = ''
sectionBox.addEventListener('keyup' ,(e)=>sections = e.target.value)
emails = ''
emailBox.addEventListener('keyup' ,(e)=>emails = e.target.value)
comments = ''
commentBox.addEventListener('keyup' ,(e)=>comments = e.target.value)

function addComment(){
    const comm = document.createElement('div')
    comm.classList.add('first-comment')
    let name = names
    let string= comments
    comm.innerHTML=`
    <span class="comments">${name}</span>
    <p>${string}</p>
    `
    commentList.appendChild(comm)
}

//==================================
function validate(){   

    if(names=='') alert('Name field can not be empity!')
    else if (sections=='') alert('Section field cannot be empity!')
    else if (emails=='') alert('Emails field cannot be empity!')
    else if (comments=='') alert('Comments field cannot be empity!')
    else{
        addComment()
    }
}

//===================================elementelement

// if(names.contains('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0')){
//     alert('enter valid input!')
// }

window.animate()

home.click(function(){
    $('html').animate({scrollto:200})
})
