
window.addEventListener("keydown",function(e){
    console.log(e)
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.CurrentTime=0

    audio.play()
})