const allImages=document.querySelectorAll(".items img");
console.log(allImages);
if (window.screen.width <=429){
    allImages.forEach(img => {
        if(img.src.includes("desktop")){
            img.src = img.src.replace("desktop","mobile");
            console.log(img.src);
        }
    });
}


// handel menu button
const menuBt=document.getElementById("menuBt");
const navBar= document.querySelector("header nav");

menuBt.addEventListener("click", () => {
    if (navBar.style.display === "" || navBar.style.display === "none"){
        navBar.style.display = "flex";
        menuBt.querySelector("img").src = "assets/images/icon-close.svg";
        document.body.style.overflow="hidden";
    }
    else{
        navBar.style.display = "none";
        menuBt.querySelector("img").src = "assets/images/icon-menu.svg";
        document.body.style.overflow="auto";
    }
});














