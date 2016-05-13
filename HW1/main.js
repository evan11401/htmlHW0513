function showAlert(){
//    alert("hi");
	
    document.getElementsByTagName("h2")[0].innerHTML=
    document.getElementById("navbar").getElementsByTagName("li")[Math.floor(Math.random()*7)].innerHTML;
}