<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>선생님 출석 페이지</title>
 <script src="resources/js/common.js"></script>
<style>
#frame {width:100%; height:100%;
   position:absolute; top:5%;}
#logo {
   width: 30%;
   height: 10%;
   position: absolute;
   left: 5%;
   top:2.5%;
   float: left;
   background-image: url(resources/images/선생님로고1.png);
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
   background-color: #00A6EF ;
}

#body {
   border: 0;
   outline: 0;
   width: 99.8%;
   height: 85%;
   margin-top: 1%;
   float: left;
   background-color: #ffffff;
   position:absolute; top:15%;
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
   margin-top:-2%;

}

.bothB {
     width: 85%;
   height: 13%;
   border-radius: 20px;
   margin: 2% 4%;
   background-color: transparent;
   border-top: 5px solid #00A6EF  ;
   border-left: 5px solid #00A6EF  ;
   border-right: 5px solid #00A6EF  ;
   border-bottom: 5px solid #00A6EF  ;
}

.bothB:active {
    width: 85%;
   height: 13%;
   border-radius: 20px;
   margin: 2% 4%;
   background-color: #00A6EF  ;
}

#oneB {
   margin-top:5%;
   margin-bottom:3%;
   float: left;
   background-image: url(resources/images/학사일정4.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: center center;
   cursor: pointer;
   height:9%;
   
}

#twoB {
margin-bottom:3%;
   float: left;
   background-image: url(resources/images/성적.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: right center;
   cursor: pointer;
   height:9%;
   
   
}

#threeB {
margin-bottom:3%;
   float: left;
   background-image: url(resources/images/출석.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: right center;
   cursor: pointer;
   height:9%;
  
  background-color: #00A6EF ;
}

#fourB {
margin-top:34%;
margin-bottom:3%;
   float: left;
   background-image: url(resources/images/시간표.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: right center;
   cursor: pointer;
   height:9%;
}

#fiveB {
margin-bottom:3%;
   float: left;
   background-image: url(resources/images/상담.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: right center;
   cursor: pointer;
   height:9%;
}
#sixB{ float: left;
   background-image: url(resources/images/정보수정.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: right center;
   cursor: pointer;
   height:9%;}



#btn {
   width: 50%;
   height: 50%;
   border-radius: 10px;
   margin-left: 15%;
   margin-top: 10%;
   border-bottom: 5px solid #0042ED  ;
   border-top: 5px solid #0042ED  ;
   border-left: 5px solid #0042ED ;
   border-right: 5px solid #0042ED ;
   background-color: #0042ED ;
   text-align: center;
   font-size: 130%;
   cursor: pointer;
}

#btn:active {
   border-top: 5px solid #00A6EF  ;
   border-left: 5px solid #00A6EF  ;
   border-right: 5px solid #00A6EF  ;
   border-bottom: 5px solid #00A6EF  ;
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
       position: relative; top:-1%;
        width: 72%;
        height: 13%;
        display: flex;
        align-items: center;
       margin-left:13%;
       cursor: pointer;
       font-weight:600;
       font-size: 100%;
      
      
}
 .clicked {
        color: #00A6EF;
       font-weight:800;
       font-size:130%;
      }
      
	.container		{background-color:gray;
					background: rgba(0,0,0,0.4);
					position:absolute;
					width:100%;
					height:100%;
					left:0;
					top:0;
					text-align:center;
					display:flex;}
	.mdialog		{border:2px solid white;
					border-radius:25px;
					background-color:#fff;
					position:absolute;
					top:30%;
					left:38.2%;
					width:39%;
					height:450px;
					transform:translate(-50%,-50%);}

#mainpage {
   width: 73%;
   height: 80%;
   float: right;
   margin-right: 5.5%;
   
   background-size: 30% 55%;
   background-repeat: no-repeat;
   background-position: center center;
}

#mainOne			{width: 10%;
					height: 20%;
					float:left;}/*border:2px solid black;*/
#mainThree			{width: 89%;
					height: 20%;
					float:right;}		
#mainTwo			{width: 90%;
					height: 80%;
					clear:both;
					overflow:auto;}

</style>

</head>
<body onload="closeModal();">
      <div id="basic">
         <div id="frame">
            <div id="logo"></div>
             <div id="sessionBox">
             	<span id="academySession" value="as"></span>
             	<span id="nameSession" >${sessionInfo.userName}님 환영합니다.</span>
             	<input type="hidden" name= "tCode" value="${sessionInfo.userId}" />
             </div>
            <div id="logOut">
               <input type="button" id="btn" value="로그아웃" onclick="accessOut();" onmouseover="mouseOver(this)" onmouseout="mouseLeave(this)">
               <input type="hidden" value='${sessionInfo.userId}' name="userId" />
			   <input type="hidden" value='${sessionInfo.userCode}' name="userCode"/>
            </div>
         </div>
         
         <div id="body">
            <div id="colorline"></div>
               <div class="servicebutton">
                  <input type="button" class="bothB" id="oneB" onclick=""> 
                  <input type="button" class="bothB" id="twoB" onclick="">
                  <input type="button" class="bothB" id="threeB" onclick="">
                       <div class="div1">
                    <div class="div2" id="div1" onclick="attandanceStart('${sessionInfo.userId}');" >
                   ●&nbsp;&nbsp;출석체크
                     </div>
                    <div class="div2" id="cAS" value="${sessionInfo.userId}" onclick="searchStudent('${sessionInfo.userId}');">
                 ●&nbsp;&nbsp;학생조회
                      </div>
                     </div>  
                  <input type="button" class="bothB" id="fourB" onclick="">
                  <input type="button" class="bothB" id="fiveB" onclick="">
                  <input type="button" class="bothB" id="sixB" onclick="">  
               </div>
            <div id="mainpage">
            	<div id="mainOne" name="mainOne"></div>
            	<div id="mainThree" name="mainThree"></div>
            	<div id="mainTwo" name="mainTwo"></div>
            </div>
         </div>
      </div>
  
	<form name='dynamicFormData'>
	<!-- The Modal BackGround -->
		<div class="container" id="container">
			<div class="mdialog">
				<div class="mcontent">
			
				<!-- The Modal header -->
					<div class="mheader">
						<h4 class="mtitle" id="mheader"></h4>
						<input type="button" id="btn-close" class="btn-close" value="X" onClick="closeModalS();"/>
					</div>
				
				<!-- The Modal body -->
					<div class="mboby" id="mbody" value="">Modal Body</div>
				
				<!-- The Modal footer -->
					<div class="mfooter">
						<input type="button" class="mbtn" name="command" />
					</div>
				</div>
			</div>
		</div>
	</form>
</body>
<style>
input[type="text"] {background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    				background-position: 13px center;
   	 				background-size: contain;
    				background-repeat: no-repeat;
    				border-top:3px solid #00A6EF;
    				border-left:30px solid #00A6EF;
    				border-right:3px solid #00A6EF;
    				border-bottom:5px solid #00A6EF;
    				text-indent: 80px;
    				width: 300px;
    				height:50px;
    				font-size:20pt;
    				border-top-left-radius: 30px;
    				border-bottom-left-radius: 30px;
    				margin-left:10%;
    				margin-right:0.2%;}
    				
#dateInfo			{height:52px;
					border-top:3px solid #00A6EF;
    				border-left:3px solid #00A6EF;
    				border-right:3px solid #00A6EF;
    				border-bottom:5px solid #00A6EF;
    				font-size:20pt;
    				position:fixed;}

#selectSButton		{height:59px;
					position:fixed;
					background-color:#00A6EF;
    				cursor:pointer;
    				border-top-right-radius: 30px;
    				border-bottom-right-radius: 30px;
    				font-weight:bolder;
    				font-size:15px;
    				margin-left:12.4%;}
    				
.spanName			{display:inline-block;
					border: 2px solid #00A6EF;
					border-radius: 5px;
					width:120px;
    				height:22px;
    				text-align:center;
    				background-color:#5CD1E5;
    				margin-left:26.5%;
    				margin-top:3%;}
.spanSchool			{display:inline-block;
					border: 2px solid #00A6EF;
					border-radius: 5px;
					width:120px;
    				height:22px;
    				text-align:center;
    				background-color:#5CD1E5;}
.spanSubject		{display:inline-block;
					border: 2px solid #00A6EF;
					border-radius: 5px;
					width:120px;
    				height:22px;
    				text-align:center;
    				background-color:#5CD1E5;}
.spanAttendance		{display:inline-block;
					border: 2px solid #00A6EF;
					border-radius: 5px;
					width:120px;
    				height:22px;
    				text-align:center;
    				background-color:#5CD1E5;}
    				
.spanNameA			{display:inline-block;
					border: 2px solid #00A6EF;
					border-radius: 5px;
					width:120px;
    				height:22px;
    				text-align:center;
    				margin-left:26.5%;}
.spanSchoolA		{display:inline-block;
					border: 2px solid #00A6EF;
					border-radius: 5px;
					width:120px;
    				height:22px;
    				text-align:center;}
.spanSubjectA		{display:inline-block;
					border: 2px solid #00A6EF;
					border-radius: 5px;
					width:120px;
    				height:22px;
    				text-align:center;}
#attendanceStatus	{width:123px;
    				height:26px;
    				border: 2px solid #00A6EF;
    				text-align:center;
    				border-radius: 5px;
    				font-size:18px;
    				font-weight:bolder;
    				background-color:#5CD1E5;}
    				
#modButton			{margin-left:62.7%;
					margin-top:2px;
					cursor:pointer;
					border-radius: 5px;
					background-color:#00A6EF;}
					
.spanAttendanceEnd	{display:inline-block;
					width:120px;
    				height:22px;
    				border: 2px solid #00A6EF;
    				text-align:center;
    				border-radius: 5px;}
    				
#aInfo				{width:100px;
					height:40px;
					border: 2px solid #00A6EF;
					border-radius: 5px;
					font-family:"jinji";
					font-weight:bolder;
					font-size:15px;}
.aSB				{width:100px;
					height:40px;
					border-radius: 5px;
					cursor:pointer;
					background-color:#00A6EF;}
					
.attendanceBoard	{width:123px;
    				height:50px;
    				border-radius: 5px;
    				background-color:#00A6EF;
    				cursor:pointer;
    				margin-left:10%;
    				margin-top:2%;
    				font-weight:bolder;
    				font-size:20px;}
.attendanceSBoard	{width:123px;
    				height:50px;
    				margin-left:1%;
    				margin-top:2%;
    				font-size:20px;}
/*----------------------------------------------------------------------------------------hanjoonghee-------------학생조회--*/

</style>
<script>
attandanceS('${sessionInfo.userId}');
startS();

function searchStudent(userIdData){
	
	let oneData = document.getElementById("mainOne");
	let twoData = document.getElementById("mainTwo");
	let threeData = document.getElementById("mainThree");
	while(oneData.hasChildNodes()){
		oneData.removeChild(oneData.lastChild);
	}
	while(twoData.hasChildNodes()){
		twoData.removeChild(twoData.lastChild);
	}
	while(threeData.hasChildNodes()){
		threeData.removeChild(threeData.lastChild);
	}
	
	if(sessionStorage.getItem("ID") != null){
		return overlapC();
	}else{
		alert("교육기관을 선택해 주세요")
	}
			
}
function overlapC(){
	let threeData = document.getElementById("mainThree");
	
	let searchData = '<div>';
	searchData += '<span>';
	searchData += '<input type="text" id="studentNameInfo" value="" placeholder="학생이름"/>';
	searchData += '</span>';
	searchData += '<span>';
	searchData += '<input type="date" id="dateInfo" value="" />';
	searchData += '</span>';
	searchData += '<span>';
	searchData += '<input type="button" id="selectSButton" value="Search" onClick="beforeSearchSI();"/>';
	searchData += '</span>';
	searchData += '</div>';
	
	threeData.innerHTML = searchData;
}
function beforeSearchSI(){
	const sNI = document.getElementById("studentNameInfo").value;
	
	const action = "checkMessage";
	const data = "userId=" + encodeURIComponent(sNI);
	getAjax(action, data, "resultM");
}
function resultM(data){
	if(data == 'success'){
		return searchSI();
	}else{
		alert("입력정보에 오류가 있습니다.");
		let threeData = document.getElementById("mainTwo");
		while(threeData.hasChildNodes()){
			threeData.removeChild(threeData.lastChild);}
	}
}
function searchSI(){
	const sNI = document.getElementById("studentNameInfo").value;
	var tId = document.getElementsByName("userId")[0].value;
	
	const dI = document.getElementById("dateInfo").value;
	var yearD = dI.substring(0,4);
	var monD = dI.substring(5,7);
	var dayD = dI.substring(8,10);
	
	var aDI = yearD + monD + dayD;
	
	const action = "searchList";
	const data = "userId=" + encodeURIComponent(sNI) + "&teacherId=" + encodeURIComponent(tId) + "&weedDay=" + encodeURIComponent(aDI);
	getAjax(action, data, "searchResult");
}

function searchResult(searchData){
	let sData;
	sData = JSON.parse(searchData);
	
	let upTitle = document.getElementById("mainTwo");
	
	let rightData = '<div>';
		rightData += '<div>';
		rightData += '<span class="spanName" >이름</span>';
		rightData += '<span class="spanSchool" >교육기관</span>';
		rightData += '<span class="spanSubject" >과목</span>';
		rightData += '<span class="spanAttendance" >출석상태</span>';
		rightData += '</div>';
		rightData += '<div>';
		rightData += '<span class="spanNameA" >'+ sData[0].studentName +'</span>';
		rightData += '<span class="spanSchoolA" >'+ sData[0].dayDate +'</span>';
		rightData += '<span class="spanSubjectA" >'+ sData[0].subjectCode +'</span>';
		rightData += '<span><input type="hidden" id="status" value="'+ sData[0].atStatus +'" ></span>';
		rightData += '<span><select id="attendanceStatus">';
		rightData += '<option value="21">출석';
		rightData += '<option value="22">지각';
		rightData += '<option value="23">결석';
		rightData += '<select></span>';
		rightData += '</div>';
		rightData += '<div>';
		rightData += '<input type="button" id="modButton" value="수정" onClick="modDatasend();">';
		rightData += '</div>';
		rightData += '</div>';
		
		upTitle.innerHTML = rightData;
		
		autoChange();
}
function autoChange(){
	var ac = document.getElementById("status").value;
	if(ac == '21'){
		document.getElementById("attendanceStatus").selectedIndex = "0";
	}else if(ac == '22'){
		document.getElementById("attendanceStatus").selectedIndex = "1";
	}else if(ac == '23'){
		document.getElementById("attendanceStatus").selectedIndex = "2";
	}
}

function modDatasend(){
	const sNI = document.getElementById("studentNameInfo").value;
	var tId = document.getElementsByName("userId")[0].value;
	const sC = document.getElementById("attendanceStatus").value;
	
	const dI = document.getElementById("dateInfo").value;
	var yearD = dI.substring(0,4);
	var monD = dI.substring(5,7);
	var dayD = dI.substring(8,10);
	
	var aDI = yearD + monD + dayD;
	
	const action = "upSI";
	const data = "userId=" + encodeURIComponent(sNI) + "&teacherId=" + encodeURIComponent(tId) + "&weedDay=" + encodeURIComponent(aDI) + "&smCode=" + encodeURIComponent(sC);
	getAjax(action, data, "upAfterM");
}

function upAfterM(data){
	let threeData = document.getElementById("mainTwo");
	while(threeData.hasChildNodes()){
		threeData.removeChild(threeData.lastChild);
	}
	
	if(data == 'success'){
		alert("수정이 완료되었습니다.");
		return reOpen();
	}else{
		alert("입력정보에 오류가 있습니다.");
	}
}

function reOpen(){
	const sNI = document.getElementById("studentNameInfo").value;
	var tId = document.getElementsByName("userId")[0].value;
	
	const dI = document.getElementById("dateInfo").value;
	var yearD = dI.substring(0,4);
	var monD = dI.substring(5,7);
	var dayD = dI.substring(8,10);
	
	var aDI = yearD + monD + dayD;
	
	const action = "searchList";
	const data = "userId=" + encodeURIComponent(sNI) + "&teacherId=" + encodeURIComponent(tId) + "&weedDay=" + encodeURIComponent(aDI);
	getAjax(action, data, "lastResult");
}
function lastResult(searchData){
	let sData;
	sData = JSON.parse(searchData);
	
	let upTitle = document.getElementById("mainTwo");
	
	let rightData = '<div>';
		rightData += '<div>';
		rightData += '<span class="spanName" >이름</span>';
		rightData += '<span class="spanSchool" >교육기관</span>';
		rightData += '<span class="spanSubject" >과목</span>';
		rightData += '<span class="spanAttendance" >출석상태</span>';
		rightData += '</div>';
		rightData += '<div>';
		rightData += '<span class="spanNameA" >'+ sData[0].studentName +'</span>';
		rightData += '<span class="spanSchoolA" >'+ sData[0].dayDate +'</span>';
		rightData += '<span class="spanSubjectA" >'+ sData[0].subjectCode +'</span>';
		rightData += '<span><input type="hidden" id="status" value="'+ sData[0].atStatus +'" ></span>';
		if(sData[0].atStatus == '21'){
			rightData += '<span class="spanAttendanceEnd" >출석</span>';
		}else if(sData[0].atStatus == '22'){
			rightData += '<span class="spanAttendanceEnd" >지각</span>';
		}else if(sData[0].atStatus == '23'){
			rightData += '<span class="spanAttendanceEnd" >결석</span>';
		}
		rightData += '</div>';
		rightData += '</div>';
		
		upTitle.innerHTML = rightData;
		
		autoChange();
}
/*---------------------------------------------------------------------------------------------------------학생조회----END-----------*/
function startS(){
	if(sessionStorage.getItem("ID") != ""){
		var han = sessionStorage.getItem("ID");
		var upTitle = document.getElementById("academySession");
		upTitle.setAttribute("value",han);
	}else{
		let upTitle = document.getElementById("academySession");
		upTitle.setAttribute("value","as");
	}
}
function attandanceStart(userIdData){
	let twoData = document.getElementById("mainTwo");
	let threeData = document.getElementById("mainThree");
	while(threeData.hasChildNodes()){
		threeData.removeChild(threeData.lastChild);
	}
	while(twoData.hasChildNodes()){
		twoData.removeChild(twoData.lastChild);
	}
	if(sessionStorage.getItem("ID") != null){
		abcd();
	}else{
		alert("교육기관을 선택해 주세요")
	}
	
	const action = "GetASchoolList";
	const data = "userId=" + encodeURIComponent(userIdData);
	getAjax(action, data, "academyList");
}

function attandanceS(userIdData){//학원 리스트 갖고 오기
	const action = "GetASchoolList";
	const data = "userId=" + encodeURIComponent(userIdData);
	getAjax(action, data, "academyList");
}

let acList;
function academyList(AcList){
	var aIdx = document.getElementById("academySession");
	var han = aIdx.getAttribute("value");

	if(sessionStorage.getItem("ID") == han){
		abcd();
	}
	acList = JSON.parse(AcList);
	
	let upTitle = document.getElementById("mainOne");
	let r=0;
	let rightData = '<span>';
		rightData += '<select name="aInfo" id="aInfo" onchange="insertA(this)">';
		rightData += '<option value="교육기관">교육기관';
		rightData += '</option>';
	for(r;r<acList.length;r++){
		rightData += '<option name="selectACList" value="'+ acList[r].acName +'">'+ acList[r].acName;
		rightData += '</option>';
	}
		rightData += '</select>';
		rightData += '</span>';
		
		upTitle.innerHTML = rightData;
}

function insertA(e){
	const value = e.value;
	
	let upTitle = document.getElementById("academySession");
	upTitle.setAttribute("value",value);
	
	if(sessionStorage.getItem("ID") == value){	
		return abcd();
	}else{
		
		let mheader = document.getElementById("mheader");
		let mbody = document.getElementById("mbody");
		let command = document.getElementsByName("command")[0];
	
		command.setAttribute("onClick","secondLogin('"+value+"')");
		command.setAttribute("value","로그인");
	
		mheader.innerText = "PW 입력 해주세요";
		let slf = "<div>";
			slf += "<div><input type='password' name='secondPassword' placeholder='PASSWORD'/></div>";
			slf += "<div><span name='wrongMessage' value='as'></span></div>";
			slf += "</div>";
		mbody.innerHTML = slf;
		openModal();
	}
}
function abcd(){
	var aIdx = document.getElementById("academySession");
	var han = aIdx.getAttribute("value");
	
	sessionStorage.setItem('ID',han);
	
	const userId =document.getElementsByName("tCode")[0].value;
	const action = "selectClass";
	const dataAcName = "userId=" + encodeURIComponent(userId) + "&acName=" + encodeURIComponent(han);
	getAjax( action, dataAcName, "selectClassBar");
}
function sClass(data){
	if(data == "success"){
		alert("교육기관이 선택되었습니다.");
		return abcd();
	}else{
		alert("비번이 틀렸습니다.");
		var aIdx = document.getElementById("academySession");
		aIdx.innerText = "";
		let upTitle = document.getElementById("academySession");
		upTitle.setAttribute("value","as");
		aInfo.selectedIndex = "교육기관";
		let aData = document.getElementById("mainThree");
		while(aData.hasChildNodes()){
			aData.removeChild(aData.lastChild);
		}
		sessionStorage.clear();
		closeModal();
		
	}
}
let clList;
function selectClassBar(ClList){
	closeModal();
	clList = JSON.parse(ClList);
	let upTitle = document.getElementById("mainThree");
	let a = 0;
	let rightData = '<span>';
	for(a;a<clList.length;a++){
			rightData += '<input type="button" class="aSB" id="crList('+a+')" name="crList('+a+')" value="'+ clList[a].clName +'" placeholder="'+ clList[a].clCode +'" onClick="stList('+a+');"/>';
	}
	rightData += '</span>';	
	
		upTitle.innerHTML = rightData;
}

function stList(idx){
	var dataClName = document.getElementsByName("crList("+idx+")")[idx].value;
	var dataTId = document.getElementsByName("userId")[0].value;
	
	const action = "attendanceCheck";
	const dataAcName = "userId=" + encodeURIComponent(dataTId) + "&acName=" + encodeURIComponent(dataClName);
	getAjax( action, dataAcName, "checkSA");
}

function checkSA(SAList){
	let sAList;
	sAList = JSON.parse(SAList);
	if(sAList[0].atStatus == '11'){
		alert("수업시간이 아닙니다.");
	}
	let downTitle = document.getElementById("mainTwo");
	let a = 0;
	let saData = '<div>';
	for(a;a<sAList.length;a++){
		saData += '<span>';
		if(a != 0 && a%4 == 3){
			if(sAList[a].atStatus == '21'){
				saData += '<input type="button" class="attendanceBoard" name="checkSA('+a+')" value="'+ sAList[a].studentName +'" onClick="modSA('+a+');"/>';
				saData += '<span id="checkSA('+a+')" class="attendanceSBoard" value="'+ sAList[a].dayDate +'" >출석</span></p>'
			}else if(sAList[a].atStatus == '22'){
				saData += '<input type="button" class="attendanceBoard" name="checkSA('+a+')" value="'+ sAList[a].studentName +'" onClick="modSA('+a+');"/>';
				saData += '<span id="checkSA('+a+')" class="attendanceSBoard" value="'+ sAList[a].dayDate +'" >지각</span></p>'
			}else if(sAList[a].atStatus == '23'){
				saData += '<input type="button" class="attendanceBoard" name="checkSA('+a+')" value="'+ sAList[a].studentName +'" onClick="modSA('+a+');"/>';
				saData += '<span id="checkSA('+a+')" class="attendanceSBoard" value="'+ sAList[a].dayDate +'" >결석</span></p>'
			}
		}else{
			if(sAList[a].atStatus == '21'){
				saData += '<input type="button" class="attendanceBoard" name="checkSA('+a+')" value="'+ sAList[a].studentName +'" onClick="modSA('+a+');"/>';
				saData += '<span id="checkSA('+a+')" class="attendanceSBoard" value="'+ sAList[a].dayDate +'" >출석</span>'
			}else if(sAList[a].atStatus == '22'){
				saData += '<input type="button" class="attendanceBoard" name="checkSA('+a+')" value="'+ sAList[a].studentName +'" onClick="modSA('+a+');"/>';
				saData += '<span id="checkSA('+a+')" class="attendanceSBoard" value="'+ sAList[a].dayDate +'" >지각</span>'
			}else if(sAList[a].atStatus == '23'){
				saData += '<input type="button" class="attendanceBoard" name="checkSA('+a+')" value="'+ sAList[a].studentName +'" onClick="modSA('+a+');"/>';
				saData += '<span id="checkSA('+a+')" class="attendanceSBoard" value="'+ sAList[a].dayDate +'" >결석</span>'
			}
		}
		saData += '</span>';
	}
		saData += '</div>';	
	
	downTitle.innerHTML = saData;
}

function modSA(idx){
	const dataTId = document.getElementsByName("userId")[0].value;
	const dataSI = document.getElementsByName("checkSA("+idx+")")[0].value;
	var dataTI = document.getElementById("checkSA("+idx+")");
	var dataT = dataTI.getAttribute("value");
	/*acName::학생이름 , 출첵시간::acCode, 선생아뒤::userId*/
	const action = "modStudentA";
	var sendData = "acName=" + encodeURIComponent(dataSI) + "&acCode=" + encodeURIComponent(dataT) + "&userId=" + encodeURIComponent(dataTId);
	getAjax(action, sendData, "checkSA");
}
//-----------------------------------------------------------------------------------------------------------------------------2차로그인
function secondLogin(data){
	let pw = document.getElementsByName("secondPassword")[0].value;
	let tId = document.getElementsByName("tCode")[0].value;
	
	const action = "ssecondLogin";
	const dataAcName = "tCode=" + encodeURIComponent(tId) + "&acName=" + encodeURIComponent(data) + "&password=" + encodeURIComponent(pw);
	getAjax( action, dataAcName, "sClass");
}
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

function openModal(){
	let container = document.getElementById("container");
	container.style.filter="alpha(Opacity=50)";//반투명
	container.style.display = "block";//화면띄우기
}
function closeModal(){
	let container = document.getElementById("container");
	container.style.display = "none";
}
function closeModalS(){
	let container = document.getElementById("container");
	container.style.display = "none";
	document.getElementById("aInfo").selectedIndex = "0";
}

   function mouseOver(obj) {
      let fColor = (obj.id == "btn") ? "#000000" : "#FFFFFF";
      obj.style.color = fColor;
      obj.style.background = "#00A6EF ";

   }

   function mouseLeave(obj) {

      let fColor = (obj.id == "btn") ? "#ffffff" : "#FF0000";
      obj.style.color = fColor;
      obj.style.background = "#0042ED  ";
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
</html>