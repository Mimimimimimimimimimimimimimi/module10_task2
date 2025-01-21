const myBtn = document.querySelector(".btn");
myBtn.addEventListener('click', showWidth);
function showWidth(){
    const myWidth = window.screen.width;
    const myHeight = window.screen.height;
    const windWidth = window.innerWidth;
    const windHeight = window.innerHeight;

    alert(`Ширина монитора: ${myWidth} px, высота монитора: ${myHeight} px \nШирина окна: ${windWidth} px, высота окна: ${windHeight} px `);
}