let icon = document.getElementById("icon-menu");
let ul = document.getElementById("heddin");

let links = document.getElementsByClassName("link-header");


// console.log(link);
// let ul = document.getElementsByTagName("ul")[0];

icon.addEventListener("click",function(){
    ul.classList.toggle("show")
    // console.log("hello")
})
Array.from(links).forEach(function(link){
    link.addEventListener("click",function(){
        ul.classList.toggle("show")
        
    })
})

let scrollG = 50;
window.addEventListener("scroll", function() {
    if (window.scrollY > scrollG && ul.classList.contains("show")) {
        ul.classList.remove("show");
    }
});