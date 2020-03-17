const imgA = document.getElementsByTagName('img')[0];
const imgB = document.getElementsByTagName('img')[1];
const text = document.getElementsByClassName('text')[0];

window.addEventListener('scroll',()=>{
    console.log(window.scrollY);
        imgA.style.opacity = `${(window.scrollY-380)/200}`;
        imgB.style.opacity = `${(window.scrollY-200)/200}`;
        text.style.opacity = `${(window.scrollY-320)/200}`;
        if(window.scrollY<450){
            imgB.style.transform= `translateX(-${window.scrollY*2}px)`;
            imgA.style.transform=`translateX(${window.scrollY*2}px)`;
            text.style.transform=`translateX(-${window.scrollY*2}px)`;
        }
});