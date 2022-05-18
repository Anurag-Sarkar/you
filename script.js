var yes = document.querySelector(".yes")
var ayes = document.querySelector(".ayes")
var easter = document.querySelector("#do")

yes.addEventListener("click",function(){
    document.querySelector("img").style.scale = 10
    document.querySelector("#ans").style.opacity = 0
    document.querySelector("#do").style.opacity = 0
    setTimeout(function() {
        document.querySelector(".heart").style.opacity = 0
        document.querySelector("img").style.display = "none"
        document.querySelector("#main").style.backgroundColor = "red"
        
        
    },1000 )
    setTimeout(function() {
        document.querySelector("#chaal").style.opacity = 100
    },1500 )
})
ayes.addEventListener("click",function(){
    document.querySelector("img").style.scale = 10
    document.querySelector("#ans").style.opacity = 0
    document.querySelector("#do").style.opacity = 0
    setTimeout(function() {
        document.querySelector(".heart").style.opacity = 0
        document.querySelector("img").style.display = "none"
        document.querySelector("#main").style.backgroundColor = "red"    
    },1000 )
    setTimeout(function() {
        document.querySelector("#love").style.opacity = 100
    },1500 )
})
easter.addEventListener("click",function(){
    
    document.querySelector(".heart").style.opacity = 0
    setTimeout(function() {
        
        document.querySelector("#card").style.top = "0"    
    },1000 )
})