var playOrPauseButton, player;

function onYouTubeIframeAPIReady(){
    player = new YT.Player('player', {
        height: '600',
        width: '800',
        videoId: 'LTzy8NF3BDo',
        playerVars:{
            'autoplay':0,
            'controls':0,
            //'start':410,
            //'end':415,
            'showinfo':0, //將上面那一行去掉~
            'rel':0,  //去掉最後的相關影片~
            'iv_load_policy':3 //我不要的廣告~
        },
        events:{
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event){
    playOrPauseButton = document.getElementById("playOrPauseButton");
    playOrPauseButton.onclick = playOrPauseHandler;
};

function onPlayerStateChange(event){
    //狀態改變，如果end的話 ==> 將Pause改成Play
    console.log(event.data);
    if(event.data === 0){
        playOrPauseButton.value="Play";
    }
};

function playOrPauseHandler(){
    switch(player.getPlayerState()){
        case 1://playing
            player.pauseVideo();
            playOrPauseButton.value="Play";
            break;
        case 2://paused
            player.playVideo();
            playOrPauseButton.value="Pause";
            break;
        case 5://video cued
            player.playVideo();
            playOrPauseButton.value="Pause";
            break;
        defult:
            break;
    }
}