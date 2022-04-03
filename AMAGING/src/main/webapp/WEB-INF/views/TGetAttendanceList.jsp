<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>선생님 출석 페이지</title>
<script src="resources/js/common.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="resources/css/tc.css" />
 
 
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
      
	.container		{background-color:rgba(255,255,255,0.5);
					position:absolute;
					width:100%;
					height:100%;
					left:0;
					top:0;
					text-align:center;
					display:flex;}
	.mdialog		{
					background-color:#fff;
					background-color: rgba(255,255,255,0.5);
					position:absolute;
					top:50%;
					left:50%;
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
					
#mainFour			{width: 35%;
					height: 80%;
					float:left;}
					
#mainThree			{width: 89%;
					height: 20%;
					float:right;}
						
#mainTwo			{width: 99%;
					height: 80%;
					clear:right;}

</style>

</head>
<body onload="">
	<form name="tmainservices" action="" method="post">
      <div id="basic">
         <div id="frame">
            <div id="logo" onclick="getPage('tmainservices','/MoveMainservice')"></div>
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
                  <input type="button" class="bothB" id="oneB" onclick="getPage('tmainservices','/AcPlanPage')"> 
                  <input type="button" class="bothB" id="twoB" onclick="getPage('tmainservices','/TGradePage')">
                  <input type="button" class="bothB" id="threeB" onclick="getPage('tmainservices','/TAttendancePage')">
                       <div class="div1">
                    <div class="div2" id="div1" onclick="attandanceStart('${sessionInfo.userId}');" >
                   ●&nbsp;&nbsp;출석체크
                     </div>
                    <div class="div2" id="cAS" value="${sessionInfo.userId}" onclick="searchStudent('${sessionInfo.userId}');">
                 ●&nbsp;&nbsp;학생조회
                      </div>
                     </div>  
                  <input type="button" class="bothB" id="fourB" onclick="getPage('tmainservices','/TClassPage')">
                  <input type="button" class="bothB" id="fiveB" onclick="getPage('tmainservices','/TQnAPage')">
                  <input type="button" class="bothB" id="sixB" onclick="getPage('tmainservices','/InfoPage')">  
               </div>
            <div id="mainpage">
            	<div id="mainOne" name="mainOne"></div>
            	<div id="mainThree" name="mainThree"></div>
            	<div id="mainFour" name="mainFour"></div>
            	<div id="mainTwo" name="mainTwo"></div>
            </div>
         </div>
      </div>
  </form>
	<form name='dynamicFormData'>
	<!-- The Modal BackGround -->
		<div class="container" id="container">
			<div class="mdialog">
				<div class="mcontent">
			
				<!-- The Modal header -->
					<div class="mheader">
						<h4 class="mtitle" id="mheader"></h4>
						<input type="button" id="btn-close" class="btn-close" title="종료버튼" value="X" onClick="closeModalS();"/>
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
#pwText				{font-size:20px;
					font-weight:bolder;
					padding-top:5px;}
					
#btn-close			{position:absolute;
					left:75%;
					font-size:15;
					cursor:pointer;
					border:none;
					background-color:#fff;
					top:0px;}
#secondPaword		{width:250px;
					height:30px;
					border:none;
					box-shadow:5px 5px 5px black;
					background-color:#F6F6F6;
					padding-left:20px;
					border-radius:5px;}
					
.mbtn				{margin-top:10px;
					margin-left:42%;
					border:none;
					width:70px;
					height:30px;
					cursor:pointer;
					border-radius:5px;
					font-size:12px;
					background-color:#D5D5D5;
					box-shadow:5px 5px 5px black;}
.mbtn:active		{box-shadow:none;}
.mbtn:hover			{background-color:#747474;
					color:#fff;}

input[type="text"] {background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    				background-position: 13px center;
   	 				background-size: contain;
    				background-repeat: no-repeat;
    				box-shadow:5px 5px 5px #8C8C8C;
    				text-indent: 80px;
    				width: 300px;
    				height:50px;
    				font-size:15pt;
    				margin-left:30%;
    				margin-right:0.2%;
    				border-radius:5px;
    				border:none;}
    				
#dateInfo			{height:52px;
					border:none;
					border-radius:5px;
					position:fixed;
    				font-size:15pt;
    				text-align:center;
    				box-shadow:5px 5px 5px #8C8C8C;
    				margin-left:5px;}

#selectSButton		{height:52px;
					border-radius:5px;
					position:fixed;
    				cursor:pointer;
    				background-color:#D5D5D5;
    				font-weight:bolder;
    				font-size:15px;
    				border:none;
    				box-shadow:5px 5px 5px #8C8C8C;
    				margin-left:193px;}
#selectSButton:active{box-shadow:none;}   				
#selectSButton:hover{background-color: #747474;
    				color: #D5D5D5;}				
    				
.spanName			{display:inline-block;
					box-shadow:5px 5px 5px #00A6EF;
					border-bottom-right-radius: 5px;
					width:120px;
    				height:50px;
    				text-align:left;
    				margin-left:3%;
    				margin-top:3%;
    				padding-top:8px;
    				padding-left:2%;
    				color:#00A6EF;
    				font-size:15pt;}
.spanSchool			{display:inline-block;
					box-shadow:5px 5px 5px #00A6EF;
					border-bottom-right-radius: 5px;
					width:150px;
    				height:50px;
    				margin-left:8px;
    				color:#00A6EF;
    				text-align:left;
    				padding-top:8px;
    				padding-left:2%;
    				font-size:15pt;}
.spanSubject		{display:inline-block;
					box-shadow:5px 5px 5px #00A6EF;
					border-bottom-right-radius: 5px;
					width:120px;
    				height:50px;
    				margin-left:8px;
    				color:#00A6EF;
    				text-align:left;
    				padding-top:8px;
    				padding-left:2%;
    				font-size:15pt;}
.spanAttendance		{display:inline-block;
					box-shadow:5px 5px 5px #00A6EF;
					border-bottom-right-radius: 5px;
					width:150px;
    				height:50px;
    				color:#00A6EF;
    				margin-left:8px;
    				text-align:left;
    				padding-top:8px;
    				padding-left:2%;
    				font-size:15pt;}
    				
.spanNameA			{display:inline-block;
					border-bottom: 2px solid #8C8C8C;
					width:120px;
    				height:50px;
    				font-size:15pt;
    				padding-top:8px;
    				padding-left:2%;
    				margin-top:20px;
    				text-align:left;
    				margin-left:3%;}
.spanSchoolA		{display:inline-block;
					border-bottom: 2px solid #8C8C8C;
					width:150px;
    				height:50px;
    				margin-left:8px;
    				font-size:15pt;
    				padding-top:8px;
    				padding-left:2%;
    				text-align:left;}
.spanSubjectA		{display:inline-block;
					border-bottom: 2px solid #8C8C8C;
					width:120px;
    				height:50px;
    				margin-left:8px;
    				font-size:15pt;
    				padding-top:8px;
    				padding-left:2%;
    				text-align:left;}
#attendanceStatus	{width:178px;
    				height:50px;
    				border-top:#fff;
    				border-left:#fff;
    				border-right:#fff;
    				border-bottom: 2px solid #8C8C8C;
    				font-size:15pt;
    				padding-bottom:19px;
    				padding-left:2%;
    				text-align:left;
    				margin-top:7px;
    				font-weight:bolder;
    				margin-left:8px;}
    				
#modButton			{margin-left:39.2%;
					margin-top:7px;
					height:50px;
					font-weight:bolder;
					cursor:pointer;
					width:178px;
					font-size:15pt;
					box-shadow:5px 5px 5px #8C8C8C;
					border-radius: 5px;
					border:none;}
#modButton:active	{box-shadow:none;}   				
#modButton:hover	{background-color: #747474;
    				color: #D5D5D5;}
					
.spanAttendanceEnd	{display:inline-block;
					border-bottom: 2px solid #8C8C8C;
					width:150px;
    				height:50px;
    				margin-left:8px;
    				font-size:15pt;
    				padding-top:8px;
    				padding-left:2%;
    				text-align:left;}
    				
#aInfo				{width:100px;
					height:40px;
					border: 2px solid #00A6EF;
					border-radius: 5px;
					font-family:"jinji";
					font-weight:bolder;
					font-size:15px;}
					
.aSB				{width:120px;
					height:40px;
					border-radius: 5px;
					cursor:pointer;
					background-color:#D5D5D5;
					border:none;
					box-shadow:5px 5px 5px #747474;}
					
.aSB:active			{box-shadow:none;}
					
.attendanceBoard	{width:123px;
    				height:50px;
    				border-radius: 5px;
    				background-color:#00A6EF;
    				cursor:pointer;
    				margin-top:2%;
    				font-weight:bolder;
    				font-size:20px;
    				border:none;
    				box-shadow:5px 5px 5px black;
    				margin-left:2.3%;
    				margin-right:4.8%;}
    				
.attendanceBoard:active{box-shadow:none;}
  				
.attendanceSBoard	{width:123px;
    				height:50px;
    				margin-left:1%;
    				margin-top:2%;
    				font-size:20px;}
    				
#outLineBox			{border: 2px solid #00A6EF;
					width:35%;
					height:160px;
					margin-left:20%;
					margin-top:10%;
					border-radius:5px;}    				

#aBox				{width:123px;
    				height:20px;
    				background-color:#79ABFF;
    				border-radius: 5px;
    				margin-left:20px;
    				margin-top:25px;
    				text-align:center;
    				text-weight:bolder;
    				color:#FFF;}  				
    				
#lBox				{width:123px;
    				height:20px;
    				background-color:#F2CB61;
    				border-radius: 5px;
    				margin-left:20px;
    				margin-top:25px;
    				text-align:center;
    				text-weight:bolder;
    				color:#FFF;}
    				
#fBox				{width:123px;
    				height:20px;
    				background-color:#FF8383;
    				border-radius: 5px;
    				margin-left:20px;
    				margin-top:25px;
    				text-align:center;
    				text-weight:bolder;
    				color:#FFF;}
/*----------------------------------------------------------------------------------------hanjoonghee-------------학생조회--*/

</style>
<script>
attandanceS('${sessionInfo.userId}');
window.onload =function(){
	if(sessionStorage.getItem("acCode") != ""){
		if(sessionStorage.getItem("acCode") == "3568745688"){
			sessionStorage.setItem("ID",'성공학원');
		}else if(sessionStorage.getItem("acCode") == "1024588469"){
			sessionStorage.setItem("ID",'ICAA');
		}else if(sessionStorage.getItem("acCode") == "2222234343"){
			sessionStorage.setItem("ID",'합격학원');
		}else if(sessionStorage.getItem("acCode") == "7808700034"){
			sessionStorage.setItem("ID",'기가스터디');
		}
	}
	if(sessionStorage.getItem("ID") == 'ICAA'){
		document.getElementById("aInfo").selectedIndex = "2";
	}else if(sessionStorage.getItem("ID") == '합격학원'){
		document.getElementById("aInfo").selectedIndex = "4";
	}else if(sessionStorage.getItem("ID") == '성공학원'){
		document.getElementById("aInfo").selectedIndex = "3";
	}else if(sessionStorage.getItem("ID") == '기가스터디'){
		document.getElementById("aInfo").selectedIndex = "1";
	}
	startS();
	closeModal();
}

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
	
	if(sessionStorage.getItem("ID") != null || sessionStorage.getItem("acCode") != null){
		overlapC();
		apidata();
		todayDate();
	}else{
		alert("교육기관을 선택해 주세요")
	}
			
}
function overlapC(){
	let threeData = document.getElementById("mainThree");
	
	let searchData = '<div>';
	searchData += '<span>';
	searchData += '<input type="text" id="studentNameInfo" value="" placeholder="학생이름" onkeypress="if(event.keyCode==\'13\'){event.preventDefault(); beforeSearchSI();}">';
	searchData += '</span>';
	searchData += '<span>';
	searchData += '<input type="date" id="dateInfo" />';
	searchData += '</span>';
	searchData += '<span>';
	searchData += '<input type="button" id="selectSButton" name="selectSButtonE" value=" 검 색 " onClick="beforeSearchSI();"/>';
	searchData += '</span>';
	searchData += '</div>';
	
	threeData.innerHTML = searchData;
}
function todayDate() {
    var today = new Date();
    today.setDate(today.getDate());
    var yyyy = today.getFullYear();
    var mm = ("0" + (today.getMonth() + 1)).slice(-2);
    var dd = ("0" + today.getDate()).slice(-2);
    document.getElementById("dateInfo").value = yyyy + '-' + mm + '-' + dd;
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
	var han = sessionStorage.getItem("ID");
	
	const dI = document.getElementById("dateInfo").value;
	var yearD = dI.substring(0,4);
	var monD = dI.substring(5,7);
	var dayD = dI.substring(8,10);
	
	var aDI = yearD + monD + dayD;
	
	const action = "searchList";
	const data = "userId=" + encodeURIComponent(sNI) + "&teacherId=" + encodeURIComponent(tId) + "&weekDay=" + encodeURIComponent(aDI) + "&endDay=" + encodeURIComponent(han);
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
	var han = sessionStorage.getItem("ID");
	
	const dI = document.getElementById("dateInfo").value;
	var yearD = dI.substring(0,4);
	var monD = dI.substring(5,7);
	var dayD = dI.substring(8,10);
	
	var aDI = yearD + monD + dayD;
	
	const action = "upSI";
	const data = "userId=" + encodeURIComponent(sNI) + "&teacherId=" + encodeURIComponent(tId) + "&weekDay=" + encodeURIComponent(aDI) + "&smCode=" + encodeURIComponent(sC) + "&endDay=" + encodeURIComponent(han);
	
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
	var han = sessionStorage.getItem("ID");
	
	const dI = document.getElementById("dateInfo").value;
	var yearD = dI.substring(0,4);
	var monD = dI.substring(5,7);
	var dayD = dI.substring(8,10);
	
	var aDI = yearD + monD + dayD;
	
	const action = "searchList";
	const data = "userId=" + encodeURIComponent(sNI) + "&teacherId=" + encodeURIComponent(tId) + "&weekDay=" + encodeURIComponent(aDI) + "&endDay=" + encodeURIComponent(han);
	getAjax(action, data, "lastResult");
}

function apidata(){
	var tId = document.getElementsByName("userId")[0].value;
	var han = sessionStorage.getItem("ID");
	
	const action = "attgraph";
	const data = "acCode=" + encodeURIComponent(tId) + "&adCode=" + encodeURIComponent(han);;
	getAjax(action, data, "getChartR");
}
var oneD;
var twoD;
var threeD;
function getChartR(graphD){
	let cData;
	cData = JSON.parse(graphD);
	oneD = parseInt(cData[0].userId);
	twoD = parseInt(cData[0].sname);
	threeD = parseInt(cData[0].semail);
	
	return getChartRD();
} 

google.charts.load('current', {'packages':['bar','corechart']});

function getChartRD() {
    var data = google.visualization.arrayToDataTable([
          ['name','score'],
		  ['출석',oneD],
		  ['결석',threeD],
		  ['지각',twoD],
   ]);

   var barChartOption = {
		width: '100%'
    };

   var chart = new google.visualization.PieChart(document.getElementById('mainFour'));

   chart.draw(data, barChartOption);
}




function lastResult(searchData){
	google.charts.setOnLoadCallback(getChartRD);
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
		apidata();
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
	let udData = document.getElementById("mainFour");
	while(threeData.hasChildNodes()){
		threeData.removeChild(threeData.lastChild);
	}
	while(twoData.hasChildNodes()){
		twoData.removeChild(twoData.lastChild);
	}
	while(udData.hasChildNodes()){
		udData.removeChild(udData.lastChild);
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

function attandanceS(userIdData){
	const hans = document.getElementById("mainFour");
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
	
		command.setAttribute("onclick","secondLogin('"+value+"')");
		command.setAttribute("value","로그인");
	
		mheader.innerText = "비밀번호를 입력 해주세요";
		let slf = "<div>";
			slf += "<div><span id='pwText' >PassWord : </span><input type='password' id='secondPaword' name='secondPassword' placeholder='PASSWORD' onkeypress='if(event.keyCode==\"13\"){event.preventDefault(); secondLogin();}'/></div>";
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
	if(han == 'ICAA'){
		sessionStorage.setItem('acCode','1024588469');
	}else if(han == '합격학원'){
		sessionStorage.setItem('acCode','2222234343');
	}else if(han == '성공학원'){
		sessionStorage.setItem('acCode','3568745688');
	}else if(han == '기가스터디'){
		sessionStorage.setItem('acCode','7808700034');
	}
	
	const userId =document.getElementsByName("tCode")[0].value;
	const action = "selectClass";
	const dataAcName = "userId=" + encodeURIComponent(userId) + "&acName=" + encodeURIComponent(han);
	getAjax( action, dataAcName, "selectClassBar");
}
function autoselectbarD(){
	if(sessionStorage.getItem("ID") != ""){
		if(sessionStorage.getItem("ID") == 'ICAA'){
			aInfo.selectedIndex = 'ICAA';
		}else if(sessionStorage.getItem("ID") == '합격학원'){
			aInfo.selectedIndex = '합격학원';
		}else if(sessionStorage.getItem("ID") == '성공학원'){
			aInfo.selectedIndex = '성공학원';
		}
	}
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
	var dataClName = document.getElementsByName("crList("+idx+")")[idx].value;/*T1001의 경우::하버드반*/
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
				saData += '<input type="button" id="colorB('+a+')" class="attendanceBoard" name="checkSA('+a+')" value="'+ sAList[a].studentName +'" onClick="modSA('+a+');"/>';
				saData += '<span id="checkSA('+a+')" class="attendanceBoardText" value="'+ sAList[a].dayDate +'" ></span></p>'
				saData += '<input type="hidden" id="colorC('+a+')" value="'+sAList[a].atStatus+'">'
			}else if(sAList[a].atStatus == '22'){
				saData += '<input type="button" id="colorB('+a+')" class="attendanceBoard" name="checkSA('+a+')" value="'+ sAList[a].studentName +'" onClick="modSA('+a+');"/>';
				saData += '<span id="checkSA('+a+')" class="attendanceBoardText" value="'+ sAList[a].dayDate +'" ></span></p>'
				saData += '<input type="hidden" id="colorC('+a+')" value="'+sAList[a].atStatus+'">'
			}else if(sAList[a].atStatus == '23'){
				saData += '<input type="button" id="colorB('+a+')" class="attendanceBoard" name="checkSA('+a+')" value="'+ sAList[a].studentName +'" onClick="modSA('+a+');"/>';
				saData += '<span id="checkSA('+a+')" class="attendanceBoardText" value="'+ sAList[a].dayDate +'" ></span></p>'
				saData += '<input type="hidden" id="colorC('+a+')" value="'+sAList[a].atStatus+'">'
			}
		}else{
			if(sAList[a].atStatus == '21'){
				saData += '<input type="button" id="colorB('+a+')" class="attendanceBoard" name="checkSA('+a+')" value="'+ sAList[a].studentName +'" onClick="modSA('+a+');"/>';
				saData += '<span id="checkSA('+a+')" class="attendanceBoardText" value="'+ sAList[a].dayDate +'" ></span>'
				saData += '<input type="hidden" id="colorC('+a+')" value="'+sAList[a].atStatus+'">'
			}else if(sAList[a].atStatus == '22'){
				saData += '<input type="button" id="colorB('+a+')" class="attendanceBoard" name="checkSA('+a+')" value="'+ sAList[a].studentName +'" onClick="modSA('+a+');"/>';
				saData += '<span id="checkSA('+a+')" class="attendanceBoardText" value="'+ sAList[a].dayDate +'" ></span>'
				saData += '<input type="hidden" id="colorC('+a+')" value="'+sAList[a].atStatus+'">'
			}else if(sAList[a].atStatus == '23'){
				saData += '<input type="button" id="colorB('+a+')" class="attendanceBoard" name="checkSA('+a+')" value="'+ sAList[a].studentName +'" onClick="modSA('+a+');"/>';
				saData += '<span id="checkSA('+a+')" class="attendanceBoardText" value="'+ sAList[a].dayDate +'" ></span>'
				saData += '<input type="hidden" id="colorC('+a+')" value="'+sAList[a].atStatus+'">'
			}
		}
		saData += '</span>';
	}
		saData += '</div>';	
	
	downTitle.innerHTML = saData;
	
	return colorChange(sAList);
}

function colorChange(data){
	
	for(let idx=0 ; idx<data.length ; idx++){
		let dTitle = document.getElementById("colorB("+idx+")");
		if(document.getElementById("colorC("+idx+")").value == '21'){
			dTitle.style.backgroundColor = "#79ABFF";
			dTitle.style.color = "#FFF";
		}else if(document.getElementById("colorC("+idx+")").value == '22'){
			dTitle.style.backgroundColor = "#F2CB61";
			dTitle.style.color = "#FFF";
		}else if(document.getElementById("colorC("+idx+")").value == '23'){
			dTitle.style.backgroundColor = "#FF8383";
			dTitle.style.color = "#FFF";
		}
	}
	
	exampleData();
}
function exampleData(){
	
	let downLTitle = document.getElementById("mainFour");
	
	let exampleD = '<div id="outLineBox" >';
		exampleD += '<div title="수업시작 10분전까지" id="aBox" >출&nbsp&nbsp&nbsp석</div>';
		exampleD += '<div title="수업시작 10분후부터" id="lBox" >지&nbsp&nbsp&nbsp각</div>';
		exampleD += '<div id="fBox" >결&nbsp&nbsp&nbsp석</div>';
		exampleD += '</div>';
		
		downLTitle.innerHTML = exampleD;
	
}
function modSA(idx){
	const dataTId = document.getElementsByName("userId")[0].value;
	const dataSI = document.getElementsByName("checkSA("+idx+")")[0].value;
	var dataTI = document.getElementById("checkSA("+idx+")");
	var dataT = dataTI.getAttribute("value");
	var hanD =  document.getElementsByClassName("aSB")[0].value; 
	/*acName::학생이름 , 출첵시간::acCode, 선생아뒤::userId*/
	const action = "modStudentA";
	var sendData = "tCode=" + encodeURIComponent(dataSI) + "&acCode=" + encodeURIComponent(dataT) + "&userId=" + encodeURIComponent(dataTId) + "&acName=" + encodeURIComponent(hanD);
	
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