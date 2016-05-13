//Task1.每五秒就換背景

var count,timeLable;

//有一個地方儲存對應5張不同的圖片的時間與文子的屬性
//屬性包括:文字的位置x,y、大小、顏色、傾斜度

//建立一個物件模板，物件裡有四個屬性
function lableStyle(locationX,locationY,fontSize,color,rotateAngle){
    this.locationX=locationX;
    this.locationY=locationY;
    this.fontSize=fontSize;
    this.color=color;
    this.rotateAngle=rotateAngle;
}
//把一個一個物件依據對應背景的屬性建立起來

var lableStyle0=new lableStyle("600px","380px","50px","gray",10); 
var lableStyle1=new lableStyle("500px","340px","100px","red",13); 
var lableStyle2=new lableStyle("570px","390px","80px","brown",358); 
var lableStyle3=new lableStyle("590px","300px","60px","green",2); 
var lableStyle4=new lableStyle("450px","520px","130px","deeppink",0); 

//把這些物件放在陣列
var lableStyleArray=
    [lableStyle0,lableStyle1,lableStyle2,lableStyle3,lableStyle4];


window.onload=function(){
    
    timeLable = document.getElementById("timeLable");
	document.getElementById("page").style.background="url('" + "HW3/images/come.jpg') no-repeat center";
    setInterval(changeBGImages,4000);
    setInterval(updateTimeLable,1000);
    count=0;
};
function addZero(timeString){
    timeString="0"+timeString;
    return timeString.slice(-2);
}

function updateTimeLable(){
    var now=new Date();
    timeLable.innerHTML=
    addZero(now.getHours())+":"+addZero(now.getMinutes())+":"+addZero(now.getSeconds());
    //00,01,02.....,09,10,11,12
    //只抓取兩位數字 從後面數來第二個
}
function changeBGImages(){
    if(count>4){
        count=0;
    }
    document.getElementById("page").style.background="url('" + "HW3/images/Board" +count+ ".png') no-repeat center";
	/*document.getElementById("page").style.backgroundRepeat=" no-repeat";
	document.getElementById("page").style.backgroundPosition="center";*/
    
    timeLable.style.visibility="visible";
    
    
    //設定timelable
    timeLable.style.top=lableStyleArray[count].locationY;
    timeLable.style.left=lableStyleArray[count].locationX;
    timeLable.style.fontSize=lableStyleArray[count].fontSize;
    timeLable.style.color=lableStyleArray[count].color;
    timeLable.style.transform="rotate("+lableStyleArray[count].rotateAngle+"deg)";
    count++;   
}






