document.getElementById("hamb-menu").addEventListener("click", function(){
    if(this.classList.contains("active")){
        this.classList.remove("active");
        document.getElementById("menu").style.display = "none";
    }else{
        this.classList.add("active");
        document.getElementById("menu").style.display = "block";
    }
});

window.addEventListener("resize", function(){
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(w >= 640){
        document.getElementById("menu").style.display = "block";
    }else{
        document.getElementById("menu").style.display = "none";
    }
    
});

document.querySelector("input[name=darkmode]").addEventListener('change', function(){
    if (this.checked){
        document.body.classList.add("dark");
        document.querySelector("label[for=darkmode]").innerHTML = "Light Mode";
    }else{
        document.body.classList.remove("dark");
        document.querySelector("label[for=darkmode]").innerHTML = "Dark Mode";
    }
});