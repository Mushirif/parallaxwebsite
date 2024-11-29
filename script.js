let text = document.getElementById("text");
let navimg =document.getElementById("navimg")
let hometextp1 = document.getElementById("hometextp1")
let hometextp2 = document.getElementById("hometextp2")

window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;

    // Parallax effect
    text.style.marginTop = scrollValue * -3 + "px";
    navimg.style.left = scrollValue * 1 + "px";
    hometextp1.style.left = scrollValue *1 +"px";
    hometextp2.style.left = scrollValue * -1 +"px";
    
});
