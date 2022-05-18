var yes = document.querySelector(".yes")
var ayes = document.querySelector(".ayes")
var easter = document.querySelector("#do")

yes.addEventListener("click",function(){
    document.querySelector("img").style.width = "3000px"
    document.querySelector("#ans").style.opacity = 0
    document.querySelector("#do").style.opacity = 0
    setTimeout(function() {
        document.querySelector(".heart").style.opacity = 0
        document.querySelector("img").style.display = "none"
        document.querySelector("#main").style.backgroundColor = "red"
        
        
    },2000 )
    setTimeout(function() {
        document.querySelector("#chaal").style.opacity = 100
    },2200 )
})
ayes.addEventListener("click",function(){
    document.querySelector("img").style.width = "3000px"
    document.querySelector("#ans").style.opacity = 0
    document.querySelector("#do").style.opacity = 0
    setTimeout(function() {
        document.querySelector(".heart").style.opacity = 0
        document.querySelector("img").style.display = "none"
        document.querySelector("#main").style.backgroundColor = "red"    
    },2000 )
    setTimeout(function() {
        document.querySelector("#love").style.opacity = 100
    },2200 )
})
easter.addEventListener("click",function(){
    
    document.querySelector(".heart").style.opacity = 0
    setTimeout(function() {
        
        document.querySelector("#card").style.top = "0"    
    },1000 )
})
