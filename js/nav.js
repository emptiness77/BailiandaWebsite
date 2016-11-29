// JavaScript Document
window.onload = function (){
	var aList = document.getElementById("navBox").children;
	for(var i=0; i<aList.length; i++){
		aList[i].onmouseover = function (){mouseover(this);}
		aList[i].onmouseout = function (){mouseout(this);}
	}
}
function mouseover(thisBtn){
	thisBtn.style.backgroundColor = "#ec5844";
	thisBtn.firstElementChild.style.color = "#fff";
	var aSubList = thisBtn.getElementsByTagName("ul");
	if(aSubList.length == 1){
		aSubList[0].style.display = "block";
		var aSubNav = aSubList[0].children;
		for(var i=0; i<aSubNav.length; i++){
			aSubNav[i].onmouseover = function (){mouseover_sub(this);}
			aSubNav[i].onmouseout = function (){mouseout_sub(this);}
		}
		function mouseover_sub(thisLi){
			thisLi.style.backgroundColor = "#f4aa8a";
		}
		function mouseout_sub(thisLi){
			thisLi.style.backgroundColor = "";
		}
	}
}
function mouseout(thisBtn){
	thisBtn.style.backgroundColor = "";
	thisBtn.firstElementChild.style.color = "";
	var aSubList = thisBtn.getElementsByTagName("ul");
	if(aSubList.length == 1){
		aSubList[0].style.display = "none";
	}
}