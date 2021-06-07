const thumb = document.querySelector('.thumb');
const title = document.querySelector('.title');
const sec = document.querySelector('.sec');
const cola = document.querySelector('.cola');
const productType = document.querySelector('.tipo-de-produto');
const color = document.querySelector('.color');
const faFacebook = document.querySelector('.fa-facebook');
const faInstagram = document.querySelector('.fa-instagram');
const faTwitter = document.querySelector('.fa-twitter');
const saiba = document.querySelector('.saiba');
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav')

thumb.addEventListener('click', (e) => {
    const el = e.target;
    changeTitle(el.className);
    changeBody(el.className);
    changeImage(el.className);
    changeProductType(el.className);
    changeColorBtn(el.className);
    changeNav(el.className);
    
})

function changeTitle(btnClass){
    if(btnClass == 'coca') title.innerText = 'Fresh Cola';
    if(btnClass == 'orange') title.innerText = 'Orange';
    if(btnClass == 'limao') title.innerText = 'Lemon';
    if(btnClass == 'abacaxi') title.innerText = 'Abacaxi';
}

function changeProductType(btnClass){
    if(btnClass == 'coca') productType.innerText = 'FRESH COLA';
    if(btnClass == 'orange') productType.innerText = 'ORANGE';
    if(btnClass == 'limao') productType.innerText = 'LEMON';
    if(btnClass == 'abacaxi') productType.innerText = 'ABACAXI';
}

function changeBody(btnClass){
    if(btnClass == 'coca'){
        sec.style.backgroundColor = 'var(--cola)';
        sec.setAttribute('class','text-cola');
        sec.classList.add('sec');
    } 
    if(btnClass == 'orange'){
        sec.style.backgroundColor = 'var(--orange)';
        sec.setAttribute('class','text-orange');
        sec.classList.add('sec');
    } 
    if(btnClass == 'limao'){
        sec.style.backgroundColor = 'var(--limao)';
        sec.setAttribute('class','text-limao');
        sec.classList.add('sec');
    } 
    if(btnClass == 'abacaxi'){
        sec.style.backgroundColor = 'var(--abacaxi)';
        sec.setAttribute('class','text-limao');
        sec.classList.add('sec');
        
    } 
}

function changeImage(btnClass){
    if(btnClass == 'coca') cola.src = 'assets/image/COLA.PNG';
    if(btnClass == 'orange') cola.src = 'assets/image/ORANGE.PNG';
    if(btnClass == 'limao') cola.src = 'assets/image/LIMAO.PNG';
    if(btnClass == 'abacaxi') cola.src = 'assets/image/ABACAXI.PNG';
}

    function changeColorBtn(btnClass){
    if(btnClass == 'coca'){
        faFacebook.style.backgroundColor = 'var(--color-black)';
        faInstagram.style.backgroundColor = 'var(--color-black)';
        faTwitter.style.backgroundColor = 'var(--color-black)';
        saiba.style.backgroundColor = 'var(--color-black)';
    } 
    if(btnClass == 'orange'){
        faFacebook.style.backgroundColor = 'var(--box-orange)';
        faInstagram.style.backgroundColor = 'var(--box-orange)';
        faTwitter.style.backgroundColor = 'var(--box-orange)';
        saiba.style.backgroundColor = 'var(--box-orange)';
    }
    if(btnClass == 'limao'){
        faFacebook.style.backgroundColor = 'var(--box-green)';
        faInstagram.style.backgroundColor = 'var(--box-green)';
        faTwitter.style.backgroundColor = 'var(--box-green)';
        saiba.style.backgroundColor = 'var(--box-green)';
    }
    if(btnClass == 'abacaxi'){ 
        faFacebook.style.backgroundColor = 'var(--box-lightgreen)';
        faInstagram.style.backgroundColor = 'var(--box-lightgreen)';
        faTwitter.style.backgroundColor = 'var(--box-lightgreen)';
        saiba.style.backgroundColor = 'var(--box-lightgreen)';
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
}








