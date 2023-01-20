var logo = document.getElementById("logo");
var mouse = document.getElementById("mouse");

logo.addEventListener("click", function runMouse() {
  mouse.style.visibility = "visible";
  mouse.style.animation = "run 10s linear";
  mouse.addEventListener("animationend", function(){
    mouse.style.visibility = "hidden";
  });
  logo.removeEventListener("click", runMouse);
});
