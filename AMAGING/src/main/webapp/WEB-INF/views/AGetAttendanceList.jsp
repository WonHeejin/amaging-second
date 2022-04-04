<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리자 인사관리 페이지</title>
 <script src="resources/js/common.js"></script>
 <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
 <link rel="stylesheet" type="text/css" href="resources/css/ad.css" />
<style>
#frame {
   width: 100%;
   height: 100%;
   position: absolute;
   top: 5%;

}

#logo {
   width: 30%;
   height: 10%;
   position: absolute;
   left: 5%;
   top:2.5%;
   float: left;
   background-image: url(resources/images/관리자로고1.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: left center;
}

#logOut {
   width: 15%;
   height: 10%;
   position: absolute;
   top: 1%;
   right: 1%;
   
}



#body {
   outline: 0;
   width: 99.8%;
   height: 85%;
   margin-top: 1%;
   float: left;
   background-color: #ffffff;
   position: absolute;
   top: 15%;
}

#basic {
   position: fixed;
   width: 99%;
   height: 100%;
}

.servicebutton {
   width: 15%;
   height: 100%;
   float: left;
   margin-left: 4.2%;
   margin-top: -2%;
 
 
}

#mainpage {
   width: 73%;
   height: 80%;
   float: right;
   margin-right: 5.5%;
   background-size: 30% 55%;
   background-repeat: no-repeat;
   background-position: center center;
}



.bothB:active {
   width: 85%;
   height: 13%;
   border-radius: 20px;
   margin: 2% 4%;
   background-color: #EF90FF;
}

#oneB {
   margin-top: 5%;
   margin-bottom: 3%;
   float: left;
   background-image: url(resources/images/학사일정4.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: center center;
   cursor: pointer;
   height: 9%;

}

#twoB {
   margin-bottom: 3%;
   float: left;
   background-image: url(resources/images/수업관리.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: right center;
   cursor: pointer;
   height: 9%;
 
}

#threeB {
 
   margin-bottom: 3%;
   float: left;
   background-image: url(resources/images/납부내역.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: right center;
   cursor: pointer;
   height: 9%;
   
}

#fourB {

   margin-bottom: 3%;
   float: left;
   background-image: url(resources/images/인사관리.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: right center;
   cursor: pointer;
   height: 9%;
    background-color:#EF90FF;
}

#fiveB {
  margin-top:21%;
   float: left;
   background-image: url(resources/images/상담.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: right center;
   cursor: pointer;
   height: 9%;
}

#btn {
   width: 50%;
   height: 50%;
   border-radius: 10px;
   margin-left: 15%;
   margin-top: 10%;
   border-bottom: 5px solid #E14FCA;
   border-top: 5px solid #E14FCA;
   border-left: 5px solid #E14FCA;
   border-right: 5px solid #E14FCA;
   background-color: #E14FCA;
   text-align: center;
   font-size: 130%;
   cursor: pointer;
   
}

#btn:active {
   border-top: 5px solid #EF90FF;
   border-left: 5px solid #EF90FF;
   border-right: 5px solid #EF90FF;
   border-bottom: 5px solid #EF90FF;
   background-color: #ffffff;
   width: 50%;
   height: 50%;
   text-align: center;
}

#photo {
   position: absolute;
   top: 22%;
   width: 4%;
   left: 13%;
   box-shadow: none;
}
#session{ width:100%;  height:50%; 

position:absolute; top:44%; left:60%;
text-align:center;
 font-size:130%;
 
	
	}

#sessionBox{ width:30%; height:10%; 
position:absolute; left:45%; top:1%;
}

.div1{ font-size:120%; width:100%; height:30%;

}

.div2 {
       position: relative; top:-3%;
        width: 70%;
        height: 13%;
        display: flex;
        align-items: center;
       margin-left:13%;
       cursor: pointer;
       font-weight:600;
       font-size: 100%;
      
      
}
 .clicked {
        color: #EF90FF;
       font-weight:800;
       font-size:130%;
      }
      
#mainOne			{width: 40%;
					height: 10%;
					float:left;}/*border:2px solid black;*/
					
#mainFour			{width: 40%;
					height: 60%;
					clear:left;}
					
#mainTwo			{width: 58%;
					height: 20%;
					float:right;}
						
#mainThree			{width: 58%;
					height: 50%;
					float:right;}
</style>

</head>
<body onload="deleteS();">
   <form name="amainservice" action="" method="post">
      <div id="basic">
         <div id="frame">


            <span id="logo" onclick="getPage('amainservice','/MoveMainservice')"></span>
            <div id="sessionBox"><span id="session">${sessionInfo.userName}님 환영합니다.</span></div>
            <input	type="hidden" value='${sessionInfo.userId}' name="userId" />
				<input	type="hidden" value='${sessionInfo.userCode}' name="userCode" />
				<input	type="hidden" value='${sessionInfo.acCode}' name="acCode" />
				<input	type="hidden" value='${sessionInfo.tier}' name="tier" />   
            <div id="logOut">
               <span><input type="button" id="btn" value="로그아웃" onclick="accessOut()"
                  onmouseover="mouseOver(this)" onmouseout="mouseLeave(this)"></span>
            </div>
         </div>

         <div id="body">
            <div id="colorline"></div>
            <div class="servicebutton">

               <input type="button" class="bothB" id="oneB" onclick="getPage('amainservice','/AcPlanPage')">                             
               <input type="button" class="bothB" id="twoB" onclick="getPage('amainservice', '/AClassPage')"> 
               <input type="button" class="bothB" id="threeB" onclick="getPage('amainservice','AFeePage')">
               <input type="button" class="bothB" id="fourB" onclick="getPage('amainservice','/AGetAttendanceL')">
               <div class="div1">
                    <div class="div2" onclick="deleteS();" >
                   ●&nbsp;&nbsp;회원탈퇴
                     </div>
                    <div class="div2" onclick="approveWS();">
                 ●&nbsp;&nbsp;대기회원
                      </div>
               </div>
               <input type="button" class="bothB" id="fiveB" onclick="getPage('amainservice','/AQnAPage')">

            </div>
            <div id="mainpage">
            	<div id="mainOne" name="mainOne"></div>
            	<div id="mainTwo" name="mainTwo"></div>
            	<div id="mainThree" name="mainThree"></div>
            	<div id="mainFour" name="mainFour"></div>
            </div>
         </div>
      </div>
   </form>
<style>
#mainTwo			{padding-top:5%;}
#displayS			{width:100px;
					height:40px;
					border: 2px solid #EF90FF;
					border-radius: 5px;
					font-family: "BMHANNAAir";
					font-weight:bolder;
					font-size:15px;}
				
input[type="text"] {background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    				background-position: 13px center;
   	 				background-size: contain;
    				background-repeat: no-repeat;
    				box-shadow:5px 5px 5px #8C8C8C;
    				text-indent: 80px;
    				width: 300px;
    				height:50px;
    				font-family: "BMHANNAAir";
    				font-size:15pt;
    				margin-left:20%;
    				margin-right:0.2%;
    				border:none;}

/*-------------------------------------------------------------------------*/   

#nameTitle			{margin-left:35%;
					margin-right:42%;
					border-bottom:5px solid #EF90FF;
					font-size:20pt;
					font-family: "BMHANNAAir";
					padding-top:50px;
					font-weight:bolder;
					color:#EF90FF;}
					
.nameTitleC			{margin-left:37%;
					margin-right:40%;
					border-bottom:5px solid #EF90FF;
					font-size:20pt;
					font-family: "BMHANNAAir";
					padding-top:70px;
					font-weight:bolder;
					color:#EF90FF;}
 
.inputBOL			{height:52px;
					width:50px;
					position:fixed;
    				cursor:pointer;
    				background-color:#D5D5D5;
    				font-weight:bolder;
    				font-size:15px;
    				border:none;
    				font-family: "BMHANNAAir";
    				box-shadow:5px 5px 5px #8C8C8C;
    				margin-left:5px;}
.inputBOL:active	{box-shadow:none;
					margin-left:5px;
					margin-top:5px;}   				
.inputBOL:hover		{background-color: #747474;
    				color: #D5D5D5;}
 
.delSTopTitle		{width:600px;
    				height:200px;
    				padding-top:30px;
    				margin-left:110px;}
     				
.delSTOne			{display:inline-block;
					box-shadow:5px 5px 5px #EF90FF;
					border-bottom-right-radius: 5px;
					width:120px;
    				height:50px;
    				text-align:left;
    				padding-top:15px;
    				padding-left:2%;
    				color:#EF90FF;
    				font-family: "BMHANNAAir";
    				font-size:15pt;}    				
    				
.delSTTwo			{display:inline-block;
					box-shadow:5px 5px 5px #EF90FF;
					border-bottom-right-radius: 5px;
					width:350px;
    				height:50px;
    				margin-left:8px;
    				text-align:left;
    				padding-top:15px;
    				padding-left:2%;
    				color:#EF90FF;
    				font-family: "BMHANNAAir";
    				font-size:15pt;}   
     				   				
.delSDOne			{display:inline-block;
					border-bottom: 2px solid #8C8C8C;
					width:120px;
    				height:50px;
    				font-size:15pt;
    				font-family: "BMHANNAAir";
    				padding-top:15px;
    				padding-left:2%;
    				text-align:left;}

#delSDTwo			{display:inline-block;
					border-bottom: 2px solid #8C8C8C;
					width:307px;
    				height:50px;
    				font-size:15pt;
    				font-family: "BMHANNAAir";
    				padding-top:15px;
    				padding-left:2%;
    				margin-left:8px;
    				text-align:left;}


.delSDOneL			{display:inline-block;
					border-bottom: 2px solid #8C8C8C;
					width:120px;
    				height:30px;
    				font-size:15pt;
    				font-family: "BMHANNAAir";
    				padding-top:15px;
    				padding-left:2%;
    				text-align:left;}

   				
#delSDTwoL			{display:inline-block;
					border-bottom: 2px solid #8C8C8C;
					margin-left:7px;
					width:350px;
    				height:30px;
    				font-size:15pt;
    				font-family: "BMHANNAAir";
    				padding-top:15px;
    				padding-left:2%;
    				text-align:left;}
    				
#delSDThree			{display:inline-block;
					border-bottom: 2px solid #8C8C8C;
					width:30px;
    				height:50px;
    				font-size:15pt;
    				font-family: "BMHANNAAir";
    				padding-top:15px;
    				padding-left:2%;
    				margin-left:8px;
    				text-align:left;}
    									
#delSButton			{margin-left:360px;
					margin-top:7px;
					height:50px;
					font-family: "BMHANNAAir";
					font-weight:bolder;
					cursor:pointer;
					width:150px;
					box-shadow:5px 5px 5px #8C8C8C;
					border-radius: 5px;
					border:none;}
#delSButton	:active	{box-shadow:none;}   				
#delSButton	:hover	{background-color: #747474;
    				color: #D5D5D5;}
					
.pRButton			{cursor:pointer;
					height:30px;
					box-shadow:5px 5px 5px #8C8C8C;
					border-radius: 5px;
					border:none;
					font-family: "BMHANNAAir";
					margin-left:7px;
					font-weight:bolder;
					font-size:15px;}
.pRButton:active	{box-shadow:none;}   				
.pRButton:hover		{background-color: #747474;
    				color: #D5D5D5;}

#studentNum			{font-size:20px;
					font-weight:bolder;
					color:#EF90FF;
					font-family: "BMHANNAAir";
					margin-left:30%;
					margin-top:5%;}
#psnnName			{display:inline-block;
					/*border-right: 2px solid #4374D9;
					border-bottom: 2px solid #4374D9;*/
					border-bottom-right-radius: 5px;
					box-shadow:5px 5px 5px #EF90FF;
					color:#EF90FF;
					font-weight:bolder;
					margin-top:4px;
					width:120px;
    				height:22px;
    				font-family: "BMHANNAAir";
    				text-align:left;
    				padding-left:20px;}
#psnnEmail			{display:inline-block;
					border-bottom: 2px solid #EF90FF;
					margin-top:4px;
					margin-left:4px;
					width:220px;
    				height:22px;
    				font-family: "BMHANNAAir";
    				text-align:left;
    				padding-left:20px;}
    				
.nPosition			{display:inline-block;
					border: 2px solid #fff;
					border-radius: 5px;
					width:100px;
    				height:22px;
    				font-family: "BMHANNAAir";
					text-align:right;}
</style>
<script type="text/javascript">
function approveWS(){
	let twoData = document.getElementById("mainTwo");
	while(twoData.hasChildNodes()){
		twoData.removeChild(twoData.lastChild);
	}
	let threeData = document.getElementById("mainThree");
	while(threeData.hasChildNodes()){
		threeData.removeChild(threeData.lastChild);
	}
	let fourData = document.getElementById("mainFour");
	while(fourData.hasChildNodes()){
		fourData.removeChild(fourData.lastChild);
	}
	return displaySW();
}
function displaySW(){	
	var nameData = document.getElementsByName("userId")[0].value;
	
	var actionO = "approveWS";
	var sendOData = "adCode=" + encodeURIComponent(nameData);
	getAjax(actionO, sendOData, "resultWS");
	
	var actionT = "presentSN";
	var sendTData = "acCode=" + encodeURIComponent(nameData);
	getAjax(actionT, sendTData, "resultPSN");
	
	var actionTh = "presentSNN";
	var sendThData = "acCode=" + encodeURIComponent(nameData);
	getAjax(actionTh, sendThData, "resultPSNN");
}
function resultPSNN(data){
	let psnnList; 
	psnnList = JSON.parse(data);
	let dTitle = document.getElementById("mainFour");
	dTitle.style.overflow ="auto";
	dTitle.style.border = "7px solid #EF90FF";
	dTitle.style.borderRadius = "15px";
	
	let	outLine = '</div>';
	for(let idx =0 ; idx < psnnList.length ; idx++){
		outLine += '<div>';
		outLine += '<span class="nPosition" >'+(idx+1)+' : &nbsp</span>';
		outLine += '<span id="psnnName" >' + psnnList[idx].sname +'</span>';
		outLine += '<span id="psnnEmail" >' + psnnList[idx].semail +'</span>';
		outLine += '</div>';
	}
	outLine += '</div>';
	
	dTitle.innerHTML = outLine;
}
function resultPSN(data){//학생수
	let psnList; 
	psnList = JSON.parse(data);
	let upTitle = document.getElementById("mainOne");
	
	let outULine = '<div id="studentNum"><재학중인 원생 : '+ psnList[0].userId +'명></div>';
	
	upTitle.innerHTML = outULine;
}

function resultWS(data){
	let wsList; 
	wsList = JSON.parse(data);
	let upTitle = document.getElementById("mainTwo");
	let dTitle = document.getElementById("mainThree");
	
	let outULine = '<div id="nameTitle">&nbsp&nbsp&nbsp요&nbsp&nbsp청&nbsp&nbsp목&nbsp&nbsp록</div>';
		
	let	outLine = '<div class="delSTopTitle">';
		outLine += '<div>';
		outLine += '<span class="delSTOne">학생 이름</span>';
		outLine += '<span class="delSTTwo"> 이메일</span>';
		outLine += '</div>';
		for(let idx =0 ; idx < wsList.length ; idx++){
			outLine += '<span id="waitSID('+idx+')"  class="delSDOneL" value="'+ wsList[idx].userId+'">' + wsList[idx].sname +'</span>';
			outLine += '<span id="delSDTwoL" >' + wsList[idx].semail +'</span>';
			outLine += '<input type="button" class="pRButton" value="수락" onClick="permissionB('+idx+')"/>';
			outLine += '<input type="button" class="pRButton" value="거절" onClick="rejectB('+idx+')"/></br>';
		}
		outLine += '</div>';
		
		 upTitle.innerHTML = outULine;
		 dTitle.innerHTML = outLine;
}
function permissionB(idx){
	var getData = document.getElementById("waitSID("+idx+")");
	var sendData = getData.getAttribute("value");
	
	var nameData = document.getElementsByName("userId")[0].value;
	
	var action = "permissionWS";
	var sendData = "adCode=" + encodeURIComponent(nameData) +  "&acCode=" + encodeURIComponent(sendData);
	getAjax(action, sendData, "resultWS");
	
	var actionT = "presentSN";
	var sendTData = "acCode=" + encodeURIComponent(nameData);
	getAjax(actionT, sendTData, "resultPSN");
	
	var actionTh = "presentSNN";
	var sendThData = "acCode=" + encodeURIComponent(nameData);
	getAjax(actionTh, sendThData, "resultPSNN");
	
}
function rejectB(idx){
	var getData = document.getElementById("waitSID("+idx+")");
	var sendData = getData.getAttribute("value");

	var nameData = document.getElementsByName("userId")[0].value;
	
	var action = "rejectWS";
	var sendData = "adCode=" + encodeURIComponent(nameData) +  "&acCode=" + encodeURIComponent(sendData);
	return getAjax(action, sendData, "resultWS");
}
//----------------------------------------------------------------------------------회원탈퇴
function deleteS(){
	let oneData = document.getElementById("mainOne");
	while(oneData.hasChildNodes()){
		oneData.removeChild(oneData.lastChild);
	}
	let twoData = document.getElementById("mainTwo");
	while(twoData.hasChildNodes()){
		twoData.removeChild(twoData.lastChild);
	}
	let threeData = document.getElementById("mainThree");
	while(threeData.hasChildNodes()){
		threeData.removeChild(threeData.lastChild);
	}
	let dTitle = document.getElementById("mainFour");
		dTitle.style.overflow ="";
		dTitle.style.border = "";
		dTitle.style.borderRadius = "";
	
	let searchData = '<div>';
		searchData += '<span >';
		searchData += '<input type="text" id="studentNameInfo" value="" placeholder="학생 이름"/>';
		searchData += '</span>';
		searchData += '<span>';
		searchData += '<input type="button" class="inputBOL" value="검색" onClick="checkS();"/>';
		searchData += '</span>';
		searchData += '</div>';
	
	twoData.innerHTML = searchData;
	getChart();
}
function getChart(){
	var aNameData = document.getElementsByName("userId")[0].value;
	
	const action = "getGraph";
	var sendData = "acCode=" + encodeURIComponent(aNameData);
	getAjax(action, sendData, "getChartR");
}
var oneD;
var twoD;
var threeD;
var fourD;
function getChartR(graphD){
	let cData;
	cData = JSON.parse(graphD);
	oneD = parseInt(cData[0].smCode);
	twoD = parseInt(cData[0].crCode);
	threeD = parseInt(cData[0].crName);
	fourD = parseInt(cData[0].acName);
	
	return getChartRD();
}


google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(getChartRD);

function getChartRD(){
	
	var data = google.visualization.arrayToDataTable([
        ['Date', '1월', '2월', '3월','4월'],
        ['2022년', oneD, twoD, threeD,fourD],
    ]);
 
    var options = {
        chart: {
        title: 'The person who quit the cram school',
        width: '100%'
        }
    };
 
    var chart = new google.charts.Bar(document.getElementById('mainFour'));
 
    chart.draw(data, google.charts.Bar.convertOptions(options));
}

function checkS(){
		var nameDate = document.getElementById("studentNameInfo").value;
		var aNameData = document.getElementsByName("userId")[0].value;
		
		const action = "stListInfo";
		const sendData = "acCode=" + encodeURIComponent(nameDate) + "&adCode=" + encodeURIComponent(aNameData);
		return getAjax(action, sendData, "studentInfoL");
}

function studentInfoL(data){
	let dSList;
	dSList = JSON.parse(data);
	let threeData = document.getElementById("mainThree");
	
	if(dSList[0].semail == '0'){
		alert("대상자가 존재하지 않습니다.");
	}else{
		var idx = 0;
		
		let searchData = '<div class="delSTopTitle" >';
			searchData += '<span class="delSTOne" >학생이름</span>';
			searchData += '<span class="delSTTwo" >이메일</span>';
			searchData += '<div>';
		for(idx ; idx < dSList.length ; idx++){
			searchData += '<label><a>';
			searchData += '<span class="delSDOne" >'+dSList[idx].sname+'</span>';
			searchData += '<span id="delSDTwo" >'+dSList[idx].semail+'</span>';
			searchData += '</a>';
			searchData += '<span id="delSDThree" ><input type="checkbox" id="delB('+idx+')" value="'+ dSList[idx].semail +'"/></span></label>';
		}
			searchData += '<div>';
			searchData += '<input type="button" id="delSButton" value="삭제" onClick="deleteStudent('+idx+');"/>';
			searchData += '</div>';
		
			return threeData.innerHTML = searchData;
	}
}
function deleteStudent(data){
	var rData = data -1 ;
	var emailData = document.getElementById("delB("+rData+")").value;
	var nameData = document.getElementById("studentNameInfo").value;
	var aNameData = document.getElementsByName("userId")[0].value;
	
	const action = "delSResult";
	var sendData = "adCode=" + encodeURIComponent(nameData) + "&tier=" + encodeURIComponent(emailData) + "&acCode=" + encodeURIComponent(aNameData);
	return getAjax(action, sendData, "delSR");
}

function delSR(data){
	if(data == "success"){
		alert("대상자가 삭제 되었습니다.");
		window.location.reload();
	}
	window.location.reload();
}
//------------------------------------------------------------------------------------------------------------------
function getAjax(action, data, fn) {
	let ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			window[fn](ajax.responseText);
		}
	};
	ajax.open("POST", action, true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send(data);	
}
   function mouseOver(obj) {
      let fColor = (obj.id == "btn") ? "#000000" : "#FFFFFF";
      obj.style.color = fColor;
      obj.style.background = "#EF90FF ";

   }

   function mouseLeave(obj) {

      let fColor = (obj.id == "btn") ? "#ffffff" : "#FF0000";
      obj.style.color = fColor;
      obj.style.background = "#E14FCA ";
      obj.style.border = ""

   }
   var div2 = document.getElementsByClassName("div2");

   function handleClick(event) {
     console.log(event.target);
     // console.log(this);
     // 콘솔창을 보면 둘다 동일한 값이 나온다

     console.log(event.target.classList);

     if (event.target.classList[1] === "clicked") {
       event.target.classList.remove("clicked");
     } else {
       for (var i = 0; i < div2.length; i++) {
         div2[i].classList.remove("clicked");
       }

       event.target.classList.add("clicked");
     }
   }

   function init() {
     for (var i = 0; i < div2.length; i++) {
       div2[i].addEventListener("click", handleClick);
     }
   }

   init();
</script>
</body>
</html>