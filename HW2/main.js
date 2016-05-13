var newTopic, newDate, confirmButton, topicH1, end, countDownlable, bgSelect;

var secondUnit = 1000;
var minuteUnit = secondUnit * 60;
var hourUnit = minuteUnit * 60;
var dayUnit = hourUnit * 24;
var timer;

window.onload = function(){
    newTopic = document.getElementById("newTopic");
    newDate = document.getElementById("newDate");
    confirmButton = document.getElementById("confirmButton");
    topicH1 = document.getElementById("topicH1");
    bgSelect = document.getElementById("bgSelect");
    //alert(newTopic.value);
    confirmButton.addEventListener("click",updateTopicAndTime);
    
    countDownlable=document.getElementById("countDownlable");
    bgSelect.addEventListener("change",updateBackgroundImage);
};    
function updateBackgroundImage(){
    //變更背景圖片
    //alert(bgSelect.value);
    document.getElementById("page").style.backgroundImage="url('HW2/" + bgSelect.value + ".jpg')";
    document.getElementById("page").style.backgroundRepeat=" no-repeat";
    document.getElementById("page").style.backgroundPosition="center top";
}
function updateTopicAndTime(){
    //把使用者輸入的主題設定到上面的標題
    topicH1.innerHTML = newTopic.value;
    topicDate.innerHTML = newDate.value;

    end = new Date(newDate.value);
    end.setHours(0);
    //var now = new Date();    
    timer = setInterval(showRemaining,1000);
}
function showRemaining(){
    var now = new Date();
    var timeDifference = end-now;    
    //開始計算天時分秒   
    var days = Math.floor(timeDifference/dayUnit);
    var hours=Math.floor((timeDifference%dayUnit)/hourUnit);
    var minutes=Math.floor((timeDifference%hourUnit)/minuteUnit);
    var seconds=Math.floor((timeDifference%minuteUnit)/secondUnit);
    
    countDownlable.innerHTML="還剩下"+days+"天"+hours+"時"+minutes+"分"+seconds+"秒";
    
    
    
}

