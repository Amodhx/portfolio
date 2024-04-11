let nodeListOf = document.querySelectorAll("section");

document.addEventListener('scroll', function (){
    const  current = window.pageYOffset;
    nodeListOf.forEach((section, index) => {
        const sectionTop = section.offsetTop;

        if (current == sectionTop){
            // console.log(sectionTop+"adsd")
        }else {
            // console.log(sectionTop);
        }
    });
});

document.addEventListener('scrollend' , function (){
    for (let i = 0; i < nodeListOf.length; i++) {
        if (nodeListOf[i].pageYOffset == window.pageYOffset){
            console.log("A")
        }
    }
})



