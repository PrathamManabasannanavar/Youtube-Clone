let searchicon = document.getElementById("searchIcon");
let searchBox = document.getElementById("searchbar");
let voiceTypingImg = document.getElementById("voiceTypingBox");
let cancelImage = document.getElementById("cancelImage");

searchBox.addEventListener('keyup', ()=>{
    if(window.innerWidth <= 400){
        voiceTypingImg.style.display = "none";
        if(searchBox.value == ""){
            voiceTypingImg.style.display = "block";
        }
        return
    }
    if(searchBox.value == ""){
        searchicon.style.display = "block";
        voiceTypingImg.style.display = "block"
        searchBox.style.width = "200px";
        cancelImage.style.visibility = "hidden";
        return;
    }
    searchicon.style.display = "none";
    voiceTypingImg.style.display = "none"
    searchBox.style.width = "400px";
    cancelImage.style.visibility = "visible";
});

cancelImage.addEventListener('click', ()=>{
    searchBox.value = "";
});

searchicon.addEventListener('click', ()=>{
    searchBox.focus();
});