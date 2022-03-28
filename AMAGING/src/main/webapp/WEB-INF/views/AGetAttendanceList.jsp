<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리자 인사관리 페이지</title>
 <script src="resources/js/common.js"></script>
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

#colorline {
   border: 0;
   outline: 0;
   height: 1.5%;
   width: 90%;
   float: left;
   margin: 2% 4.5%;
   border-radius: 20px;
   background-color: #EF90FF;
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

.bothB {
   width: 85%;
   height: 13%;
   border-radius: 20px;
   margin: 2% 4%;
   background-color: transparent;
   border-top: 5px solid #EF90FF;
   border-left: 5px solid #EF90FF;
   border-right: 5px solid #EF90FF;
   border-bottom: 5px solid #EF90FF;
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
#mainOne			{width: 10%;
					height: 20%;
					float:left;}/*border:2px solid black;*/
#mainThree			{width: 89%;
					height: 20%;
					float:right;}
						
#mainTwo			{width: 90%;
					height: 10%;
					clear:both;}
#mainDTwo			{width: 90%;
					height: 70%;
					float:left;
					overflow:auto;}

a:hover				{background-color: #E14FCA;}
</style>

</head>
<body onload="">
   <form name="amainservice" action="" method="post">
      <div id="basic">
         <div id="frame">


            <span id="logo"></span>
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
                    <div class="div2" onclick="approveWS();" >
                   ●&nbsp;&nbsp;등록
                     </div>
                    <div class="div2" onclick="deleteS();">
                 ●&nbsp;&nbsp;삭제
                      </div>
               </div>
               <input type="button" class="bothB" id="fiveB" onclick="">

            </div>
            <div id="mainpage">
            	<div id="mainOne" name="mainOne"></div>
            	<div id="mainThree" name="mainThree"></div>
            	<div id="mainTwo" name="mainTwo"></div>
            	<div id="mainDTwo" name="mainDTwo"></div>
            </div>
         </div>
      </div>
   </form>
<style>
#displayS			{width:100px;
					height:40px;
					border: 2px solid #EF90FF;
					border-radius: 5px;
					font-family:"jinji";
					font-weight:bolder;
					font-size:15px;}
				
input[type="text"] {background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    				background-position: 13px center;
   	 				background-size: contain;
    				background-repeat: no-repeat;
    				border-top:3px solid #EF90FF;
    				border-left:30px solid #EF90FF;
    				border-right:15px solid #EF90FF;
    				border-bottom:5px solid #EF90FF;
    				text-indent: 80px;
    				width: 300px;
    				height:50px;
    				font-size:20pt;
    				border-top-left-radius: 30px;
    				border-bottom-left-radius: 30px;
    				margin-left:30%;
    				margin-right:0.5%;}

#nameTitle			{margin-left:37%;
					margin-right:42%;
					border-bottom:5px solid #EF90FF;
					font-size:20pt;
					padding-top:70px;
					font-weight:bolder;
					color:#EF90FF;}
					
.nameTitleC			{margin-left:37%;
					margin-right:40%;
					border-bottom:5px solid #EF90FF;
					font-size:20pt;
					padding-top:70px;
					font-weight:bolder;
					color:#EF90FF;}
    				
.inputBOL			{width:70px;
    				height:60px;
    				background-color:#EF90FF;
    				cursor:pointer;
    				border-top-right-radius: 30px;
    				border-bottom-right-radius: 30px;
    				font-weight:bolder;
    				font-size:15px;
    				position:fixed}
 
.delSTopTitle		{width:600px;
    				height:200px;
    				padding-top:70px;
    				margin-left:310px;}
    				 				
.delSTOne			{display:inline-block;
					border: 2px solid #EF90FF;
					border-radius: 5px;
					width:120px;
    				height:22px;
    				text-align:center;
    				background-color:#FFB2F5;}
    				
.delSTTwo			{display:inline-block;
					border: 2px solid #EF90FF;
					border-radius: 5px;
					width:400px;
    				height:22px;
    				text-align:center;
    				background-color:#FFB2F5;}
    				
.delSDOne			{display:inline-block;
					border: 2px solid #EF90FF;
					border-radius: 5px;
					width:120px;
    				height:22px;
    				text-align:center;}
#delSDTwo			{display:inline-block;
					border: 2px solid #EF90FF;
					border-radius: 5px;
					width:365px;
    				height:22px;
    				text-align:center;}
#delSDTwoL			{display:inline-block;
					border: 2px solid #EF90FF;
					border-radius: 5px;
					width:315px;
    				height:22px;
    				text-align:center;}
#delSDThree			{display:inline-block;
					border: 2px solid #EF90FF;
					border-radius: 5px;
					width:30px;
    				height:22px;
    				text-align:center;}
#delSButton			{margin-left:485px;
					margin-top:2px;
					cursor:pointer;
					border-radius: 5px;
					background-color:#FFB2F5;}
.pRButton			{background-color:#FFB2F5;
					cursor:pointer;}

</style>
<script type="text/javascript">
function deleteS(){
	let threeData = document.getElementById("mainThree");
	while(threeData.hasChildNodes()){
		threeData.removeChild(threeData.lastChild);
	}
	let twoeData = document.getElementById("mainTwo");
	while(twoeData.hasChildNodes()){
		twoeData.removeChild(twoeData.lastChild);
	}
	let twoData = document.getElementById("mainDTwo");
	while(twoData.hasChildNodes()){
		twoData.removeChild(twoData.lastChild);
	}
	
	let upTitle = document.getElementById("mainOne");
	
	let outLine = '<div>';
		outLine += '<select id="displayS" onchange="displayDS(this)">';
		outLine += '<option value="11">변경대상';
		outLine += '<option value="12">학생';
		outLine += '<option value="13">선생님';
		outLine += '<option value="14">관리자';
		outLine += '</select>';
		outLine += '</div>';
	   
	   upTitle.innerHTML = outLine;
}

function displayDS(data){
	var pointD = data.value;
	let threeData = document.getElementById("mainTwo");
	let twoData = document.getElementById("mainDTwo");
	while(twoData.hasChildNodes()){
		twoData.removeChild(twoData.lastChild);
	}
	
	if(pointD == 12){
		let searchData = '<div>';
		searchData += '<span >';
		searchData += '<input type="text" id="studentNameInfo" value="" placeholder="학생 이름"/>';
		searchData += '</span>';
		searchData += '<span>';
		searchData += '<input type="button" class="inputBOL" value="검색" onmouseover="this.style.backgroundColor=\'#FFB2F5\'" onmouseout="this.style.backgroundColor=\'#EF90FF\'" onClick="checkS(1);"/>';
		searchData += '</span>';
		searchData += '</div>';
		
		threeData.innerHTML = searchData;
	}else if(pointD == 13){
		let searchData = '<div>';
		searchData += '<span>';
		searchData += '<input type="text" id="teacherNameInfo" value="" placeholder="선생님 이름"/>';
		searchData += '</span>';
		searchData += '<span>';
		searchData += '<input type="button" class="inputBOL" value="검색" onmouseover="this.style.backgroundColor=\'#FFB2F5\'" onmouseout="this.style.backgroundColor=\'#EF90FF\'" onClick="checkS(2);"/>';
		searchData += '</span>';
		searchData += '</div>';
		
		threeData.innerHTML = searchData;
		
		
	}else if(pointD == 14){
		let searchData = '<div>';
		searchData += '<span>';
		searchData += '<input type="text" id="adminNameInfo" value="" placeholder="관리자 이름"/>';
		searchData += '</span>';
		searchData += '<span>';
		searchData += '<input type="button" class="inputBOL" value="검색" onmouseover="this.style.backgroundColor=\'#FFB2F5\'" onmouseout="this.style.backgroundColor=\'#EF90FF\'" onClick="checkS(3);"/>';
		searchData += '</span>';
		searchData += '</div>';
		
		threeData.innerHTML = searchData;
	}
}

function checkS(data){
	let threeData = document.getElementById("mainDTwo");
	if(data == '1'){
		var nameDate = document.getElementById("studentNameInfo").value;
		var aNameData = document.getElementsByName("userId")[0].value;
		
		const action = "stListInfo";
		const sendData = "acCode=" + encodeURIComponent(nameDate) + "&adCode=" + encodeURIComponent(aNameData);
		return getAjax(action, sendData, "studentInfoL");
		
	}else if(data == '2'){
		threeData.style.marginLeft = "330px";
		threeData.style.marginTop = "40px";
		threeData.style.color = "red";
		threeData.style.fontSize = "40px";
		threeData.style.fontWeight = "bolder";
		threeData.innerText = "대상자가 존재하지 않습니다.";
		
	}else if(data == '3'){
		threeData.innerText = "대상자가 존재하지 않습니다.";
	}
}

function studentInfoL(data){
	let dSList;
	dSList = JSON.parse(data);
	let threeData = document.getElementById("mainDTwo");
	if(dSList[0].semail == '0'){
		threeData.style.marginLeft = "330px";
		threeData.style.marginTop = "40px";
		threeData.style.color = "red";
		threeData.style.fontSize = "40px";
		threeData.style.fontWeight = "bolder";
		return threeData.innerText = "대상자가 존재하지 않습니다.";
	}else{
		threeData.style.marginLeft = "";
		threeData.style.marginTop = "";
		threeData.style.color = "";
		threeData.style.fontSize = "";
		threeData.style.fontWeight = "";
		
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
		let threeData = document.getElementById("mainDTwo");
		threeData.style.marginLeft = "330px";
		threeData.style.marginTop = "40px";
		threeData.style.color = "red";
		threeData.style.fontSize = "40px";
		threeData.style.fontWeight = "bolder";
		threeData.innerText = "대상자가 삭제 되었습니다."
	}
	
}
//----------------------------------------------------------------------------------------------
approveWS();   
function approveWS(){
	let threeData = document.getElementById("mainThree");
	while(threeData.hasChildNodes()){
		threeData.removeChild(threeData.lastChild);
	}
	let twoeData = document.getElementById("mainTwo");
	while(twoeData.hasChildNodes()){
		twoeData.removeChild(twoeData.lastChild);
	}
	let twoData = document.getElementById("mainDTwo");
	while(twoData.hasChildNodes()){
		twoData.removeChild(twoData.lastChild);
	}
	
	let upTitle = document.getElementById("mainOne");
	
	let outLine = '<div>';
		outLine += '<select id="displayS" onchange="displaySW(this)">';
		outLine += '<option value="11">변경대상';
		outLine += '<option value="12">학생';
		outLine += '<option value="13">선생님';
		outLine += '<option value="14">관리자';
		outLine += '</select>';
		outLine += '</div>';
	   
	   upTitle.innerHTML = outLine;
}

function displaySW(a){
	var b = a.value;
	if(b == 12){
		var nameData = document.getElementsByName("userId")[0].value;
		
		var action = "approveWS";
		var sendData = "adCode=" + encodeURIComponent(nameData);
		return getAjax(action, sendData, "resultWS");
		
	}else if(b == 13){
		alert("대자가가 없습니다.");
		document.getElementById("displayS").selectedIndex = '0';
		
		let upTitle = document.getElementById("mainTwo");
		let dTitle = document.getElementById("mainDTwo");
		
		let outULine = '<div class="nameTitleC" >&nbsp&nbsp&nbsp&nbsp선생님&nbsp&nbsp요청목록</div>';
			
		let	outLine = '<div class="delSTopTitle">';
			outLine += '<span class="delSTOne">선생님 이름</span>';
			outLine += '<span class="delSTTwo"> 이메일</span>';
			outLine += '</div>';
		   
		   upTitle.innerHTML = outULine;
		   dTitle.innerHTML = outLine;
	}else if(b == 14){
		alert("대자가가 없습니다.");
		document.getElementById("displayS").selectedIndex = '0';
		
		let upTitle = document.getElementById("mainTwo");
		let dTitle = document.getElementById("mainDTwo");
		
		let outULine = '<div class="nameTitleC">&nbsp&nbsp&nbsp&nbsp관리자&nbsp&nbsp요청목록</div>';
			
		let	outLine = '<div class="delSTopTitle">';
			outLine += '<span class="delSTOne">관리자 이름</span>';
			outLine += '<span class="delSTTwo"> 이메일</span>';
			outLine += '</div>';
		   
		   upTitle.innerHTML = outULine;
		   dTitle.innerHTML = outLine;
	}
}

function resultWS(data){/*userId,sname,semail*/
	let wsList; 
	wsList = JSON.parse(data);
	let upTitle = document.getElementById("mainTwo");
	let dTitle = document.getElementById("mainDTwo");
	
	dTitle.style.marginLeft = "";
	dTitle.style.marginTop = "";
	dTitle.style.color = "";
	dTitle.style.fontSize = "";
	dTitle.style.fontWeight = "";
	
	let outULine = '<div id="nameTitle">&nbsp&nbsp&nbsp&nbsp학생&nbsp&nbsp&nbsp요청목록</div>';
		
	let	outLine = '<div class="delSTopTitle">';
		outLine += '<div>';
		outLine += '<span class="delSTOne">학생 이름</span>';
		outLine += '<span class="delSTTwo"> 이메일</span>';
		outLine += '</div>';
		for(let idx =0 ; idx < wsList.length ; idx++){
			outLine += '<span id="waitSID('+idx+')"  class="delSDOne" value="'+ wsList[idx].userId+'">' + wsList[idx].sname +'</span>';
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
	return getAjax(action, sendData, "resultWS");
}
function rejectB(idx){
	var getData = document.getElementById("waitSID("+idx+")");
	var sendData = getData.getAttribute("value");

	var nameData = document.getElementsByName("userId")[0].value;
	
	var action = "rejectWS";
	var sendData = "adCode=" + encodeURIComponent(nameData) +  "&acCode=" + encodeURIComponent(sendData);
	return getAjax(action, sendData, "resultWS");
}
/*-------------------------------------------------------------------------*/
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
/*-------------------------------------------------------------------------*/
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