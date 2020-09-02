var back= document.querySelector("img#back")
var podcast = document.querySelector('div#podcast')


back.addEventListener("click", function back(){
    history.go(-1)
    podcast.style.transition =  ".2s"
    podcast.style.height = "0";
    podcast.style.marginTop = "0";
})