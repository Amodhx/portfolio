const observer = new IntersectionObserver((entries) =>{
   entries.forEach((entry) =>{
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      }else {
        entry.target.classList.remove('show');
      }
   });
});


let elementNodeListOf = document.querySelectorAll(".hidden");
elementNodeListOf.forEach((el) =>observer.observe(el));
var x = 0;

document.querySelector("#burgetbtn").addEventListener('click',function (){
    if (x == 0) {
        x = 1;
        let element = document.querySelector("#burgetbtn>div:nth-child(2)");
        element.classList.add('hide');
        let element1 = document.querySelector('#burgetbtn>div:nth-child(3)');
        element1.classList.add('rotate3');
        let element2 = document.querySelector('#burgetbtn>div:first-child');
        element2.classList.add('rotate1');

        let htmlElement = document.querySelector('header');
        htmlElement.classList.add('show');
    }else {
        let element = document.querySelector("#burgetbtn>div:nth-child(2)");
        element.classList.remove('hide');
        let element1 = document.querySelector('#burgetbtn>div:nth-child(3)');
        element1.classList.remove('rotate3');
        let element2 = document.querySelector('#burgetbtn>div:first-child');
        element2.classList.remove('rotate1');
        x = 0;

        let htmlElement = document.querySelector('header');
        htmlElement.classList.remove('show');
    }
})