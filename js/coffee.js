//Black coffee remove bg

document.getElementById("coffee").addEventListener("click", function(){
    document.querySelector(".owl").style.display = "none";
})

document.getElementById("coffee").addEventListener("click", function(){
    document.querySelector(".poison").style.display = "none";
})

document.getElementById("coffee").addEventListener("click", function(){
    document.querySelector(".coffeebg").style.display = "none";
})

document.getElementById("coffee").addEventListener("click", function(){
    document.querySelector(".cover").style.display = "none";
})

document.getElementById("coffee").addEventListener("click", function(){
    document.querySelector(".owl").style.display = "none";
})

//Black coffee select reveal yez

document.getElementById("coffee").addEventListener("click", function(){
    document.querySelector(".bc").style.display = "flex";
})

document.getElementById("coffee").addEventListener("click", function(){
    document.querySelector(".backbtn").style.display = "flex";
})

document.getElementById("coffee").addEventListener("click", function(){
    document.querySelector(".bct").style.display = "flex";
})

document.getElementById("coffee").addEventListener("click", function(){
    document.querySelector(".recipes").style.display = "flex";
})

document.getElementById("coffee").addEventListener("click", function(){
    document.querySelector(".origin").style.display = "flex";
})

//Origin Pop up button

document.getElementById("origin").addEventListener("click", function(){
    document.querySelector(".originpopup").style.display = "flex";
})

document.getElementById("origin").addEventListener("click", function(){
    document.querySelector(".origindescBC").style.display = "flex";
})

//close button

document.querySelector(".closeorigin").addEventListener("click", function(){
    document.querySelector(".originpopup").style.display = "none";
})

document.querySelector(".closeorigin").addEventListener("click", function(){
    document.querySelector(".origindescBC").style.display = "none";
})

//HAHAHAHA BLUR NANAMAN SER DAMI ONTE EWAN IDK HEHE HAHA

document.getElementById("origin").addEventListener("click", function(){
    document.querySelector(".recipes").style.filter = "blur(4px)";
})

document.getElementById("origin").addEventListener("click", function(){
    document.querySelector(".mainrec").style.filter = "blur(4px)";
})

document.getElementById("origin").addEventListener("click", function(){
    document.querySelector(".origin").style.filter = "blur(4px)";
})

document.getElementById("origin").addEventListener("click", function(){
    document.querySelector(".bc").style.filter = "blur(4px)";
})

document.getElementById("origin").addEventListener("click", function(){
    document.querySelector(".bct").style.filter = "blur(4px)";
})

document.getElementById("origin").addEventListener("click", function(){
    document.querySelector(".mainrec1").style.filter = "blur(4px)";
})

document.getElementById("origin").addEventListener("click", function(){
    document.querySelector(".mainell").style.filter = "blur(4px)";
})

document.getElementById("origin").addEventListener("click", function(){
    document.querySelector(".cat1").style.filter = "blur(4px)";
})

document.getElementById("origin").addEventListener("click", function(){
    document.querySelector(".maincapulus").style.filter = "blur(4px)";
})

document.getElementById("origin").addEventListener("click", function(){
    document.querySelector(".home").style.filter = "blur(4px)";
})

document.getElementById("origin").addEventListener("click", function(){
    document.querySelector(".about").style.filter = "blur(4px)";
})

document.getElementById("origin").addEventListener("click", function(){
    document.querySelector(".menu").style.filter = "blur(4px)";
})

//Remove blur ser pagka klik ng klowz
document.getElementById("closeorigin").addEventListener("click", function(){
    document.querySelector(".mainrec").style.filter = "none";
})

document.getElementById("closeorigin").addEventListener("click", function(){
    document.querySelector(".recipes").style.filter = "none";
})

document.getElementById("closeorigin").addEventListener("click", function(){
    document.querySelector(".origin").style.filter = "none";
})

document.getElementById("closeorigin").addEventListener("click", function(){
    document.querySelector(".about").style.filter = "none";
})

document.getElementById("closeorigin").addEventListener("click", function(){
    document.querySelector(".menu").style.filter = "none";
})

document.getElementById("closeorigin").addEventListener("click", function(){
    document.querySelector(".bc").style.filter = "none";
})

document.getElementById("closeorigin").addEventListener("click", function(){
    document.querySelector(".bct").style.filter = "none";
})

document.getElementById("closeorigin").addEventListener("click", function(){
    document.querySelector(".mainrec1").style.filter = "none";
})

document.getElementById("closeorigin").addEventListener("click", function(){
    document.querySelector(".mainell").style.filter = "none";
})

document.getElementById("closeorigin").addEventListener("click", function(){
    document.querySelector(".cat1").style.filter = "none";
})

document.getElementById("closeorigin").addEventListener("click", function(){
    document.querySelector(".maincapulus").style.filter = "none";
})

document.getElementById("closeorigin").addEventListener("click", function(){
    document.querySelector(".home").style.filter = "none";
})


//hide hide hide sa bg ser
window.addEventListener('mouseup', function(event){
    var hidediv = document.querySelector(".originpopup");
    if(event.target != hidediv){
        hidediv.style.display = 'none';
    }
})

window.addEventListener('mouseup', function(event){
    var hidediv = document.querySelector(".origindescBC");
    if(event.target != hidediv){
        hidediv.style.display = 'none';
    }
})

window.addEventListener('mouseup', function(event){
    var hidediv = document.querySelector(".about");
    if(event.target != hidediv){
        hidediv.style.filter = 'none';
    }
})

window.addEventListener('mouseup', function(event){
    var hidediv = document.querySelector(".menu");
    if(event.target != hidediv){
        hidediv.style.filter = 'none';
    }
})



