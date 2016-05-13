var myVideo,playButton,videoURL,fullScreenButton,timeDisplay,progressSlider;

function playOrPause()
{   
    if(myVideo.paused)
    {
        myVideo.play();
        playButton.value="Pause";
    }else
    {
        myVideo.pause();
        playButton.value="Play";
    }
    myVideo.addEventListener("timeupdate",updateProgress);
    progressSlider.max=myVideo.duration;
}

function updateProgress()
{
    timeDisplay.innerHTML=
        Math.floor(myVideo.currentTime)+"/"+
        Math.floor(myVideo.duration)+"秒";
    progressSlider.value=myVideo.currentTime;
}   
function changeProgress()
{
    myVideo.currentTime=progressSlider.value;
}

function fullScreen()
{
    myVideo.webkitEnterFullscreen();
}


window.onload=function()
{  
     myVideo=document.getElementById("myVideo");
     playButton=document.getElementById("playButton");
     playButton.onclick=playOrPause;
    fullScreenButton=document.getElementById("fullScreenButton");
    fullScreenButton.onclick=fullScreen;
    timeDisplay=document.getElementById("timeDisplay");
    progressSlider=document.getElementById("progressSlider");
    progressSlider.onchange=changeProgress;
};
