<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학생 정보수정 페이지</title>
<script src="resources/js/common.js"></script>
<script src="resources/js/info.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
<link rel="stylesheet" type="text/css" href="resources/css/st.css" />
<link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square-round.css" rel="stylesheet">
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
	top: 2.5%;
	float: left;
	background-image: url(resources/images/학생로고.png);
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
	background-size: 45% 65%;
	background-repeat: no-repeat;
	background-position: center center;
}

.bothB:active {
	width: 85%;
	height: 13%;
	border-radius: 20px;
	margin: 2% 4%;
	background-color: #FFBB00;
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
	height: 9%;
	margin-bottom: 3%;
	float: left;
	background-image: url(resources/images/성적.png);
	background-size: 100% 80%;
	background-repeat: no-repeat;
	background-position: right center;
	cursor: pointer;
}

#threeB {
	height: 9%;
	margin-bottom: 3%;
	float: left;
	background-image: url(resources/images/출석.png);
	background-size: 100% 80%;
	background-repeat: no-repeat;
	background-position: right center;
	cursor: pointer;
}

#fourB {
	height: 9%;
	margin-bottom: 3%;
	float: left;
	background-image: url(resources/images/시간표.png);
	background-size: 100% 80%;
	background-repeat: no-repeat;
	background-position: right center;
	cursor: pointer;
}

#fiveB {
	margin-bottom: 3%;
	height: 9%;
	float: left;
	background-image: url(resources/images/상담.png);
	background-size: 100% 80%;
	background-repeat: no-repeat;
	background-position: right center;
	cursor: pointer;
}

#sixB {
	height: 9%;
	float: left;
	background-image: url(resources/images/정보수정.png);
	background-size: 100% 80%;
	background-repeat: no-repeat;
	background-position: right center;
	cursor: pointer;
	background-color: #FFBB00;
}

#btn {
	width: 50%;
	height: 50%;
	border-radius: 10px;
	margin-left: 15%;
	margin-top: 10%;
	border-bottom: 5px solid #EA7B03;
	border-top: 5px solid #EA7B03;
	border-left: 5px solid #EA7B03;
	border-right: 5px solid #EA7B03;
	background-color: #EA7B03;
	text-align: center;
	font-size: 130%;
	cursor: pointer;
}

#btn:active {
	border-top: 5px solid #FFBB00;
	border-left: 5px solid #FFBB00;
	border-right: 5px solid #FFBB00;
	border-bottom: 5px solid #FFBB00;
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

#session {
	width: 100%;
	height: 50%;
	position: absolute;
	top: 44%;
	left: 60%;
	text-align: center;
	font-size: 130%;
}

#sessionBox {
	width: 30%;
	height: 10%;
	position: absolute;
	left: 45%;
	top: 1%;
}

.div1 {
	font-size: 120%;
	width: 100%;
	height: 30%;
}

.div2 {
	position: relative;
	top: -1%;
	width: 72%;
	height: 13%;
	display: flex;
	align-items: center;
	margin-left: 13%;
	cursor: pointer;
	font-weight: 600;
	font-size: 100%;
}

.clicked {
	color: #FFBB00;
	font-weight: 800;
	font-size: 130%;
}

.container {
	background-color: gray;
	background: rgba(0, 0, 0, 0.4);
	position: absolute;
	width: 100%;
	min-height: 100%;
	left: 0;
	top: 0;
	text-align: center;
}

.mdialog {
	border: 2px solid white;
	border-radius: 25px;
	background-color: #ffffff;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 50%;
	height: 450px;
	transform: translate(-50%, -50%);
}
.mbody {
	border: 2px solid white;
	margin-left:10%;
	margin-top:10px;
	width:80%;
	pont-size: 100pt;
}
.record{
	border-radius: 10px;
}
.hacCode{		
	border-Bottom: 2px solid #EA7B03; 
	border-Right: 2px solid #EA7B03;
	border-radius: 5px;
	float: left;
	width:19%;
	height:100%;
	padding: 2px;
}
.hacName{
	border-Bottom: 2px solid #EA7B03; 
	border-Right: 2px solid #EA7B03;	
	border-radius: 5px;
	float: left;
	width:21%;
	height:100%;
	margin-left:6px;
	padding: 2px;
}
.hacAddress{
	border-Bottom: 2px solid #EA7B03; 
	border-Right: 2px solid #EA7B03;	
	float:right;
	border-radius: 5px;	
	width:56%;
	height:100%;
	padding: 2px;
}
.acCode{		
	cursor: pointer;
	border-Bottom: 2px solid #FFBB00;
	float: left;
	width:19%;
	height:100%;
	padding: 2px;
}
.acName{	
	cursor: pointer;
	border-Bottom: 2px solid #FFBB00;
	float: left;
	width:21%;
	height:100%;
	margin-left:6px;
	padding: 2px;
}
.acAddress{	
	float:right;
	cursor: pointer;
	border-Bottom: 2px solid #FFBB00;	
	width:56%;
	height:100%;
	padding: 2px;
}
.mfooter{
	top:85%;
	left:30%;
  	position: fixed;
	clear:both;
	margin-bottom:10%;
	width:40%;
	height:50px;
}
.acbox{
	margin-left:20%;
	margin-top:10%;
	width: 50%;	
	height: 20%;
}
.box {	
	border: 8px solid #FFBB00;
	width: 100%;
	font-size: 200%;
	text-align:center;	
	height: 100%;
	border-radius: 10px;   font-family: "BMHANNAAir";
}
.regButton {
	border-top: 5px solid #FFBB00;
	border-left: 5px solid #FFBB00;
	border-right: 5px solid #FFBB00;
	border-bottom: 5px solid #FFBB00;
	background-color: #FFBB00;
	margin-left:28%;
	margin-top:5%;
	width: 50%;
	height: 50%;
	text-align: center;
	font-size:150%;
	cursor: pointer;
	border-radius: 10px;	
	font-family: "BMHANNAAir";
}
.mbtn{float:left;
 border-radius: 10px;background-color: #FFBB00; width:50%; height:100%; border: 1px solid #FFBB00;
 cursor:pointer;font-size: 13pt;   font-family: "BMHANNAAir";
}
.searchBtn{
 border-radius: 10px; background-color: #FFBB00; width:15%; height:40px; border: 1px solid #FFBB00;
 cursor:pointer;   font-family: "BMHANNAAir";
} 
.prbox{
	margin-left:15%;
	margin-top:10%;
	width: 80%;	
	height: 20%;
	font-family: "BMHANNAAir";
}
.prinputbox {	
	border: 5px solid #FFBB00;
	width: 40%;
	font-size: 200%;
	text-align:center;	
	height: 90%;
	border-radius: 10px;
	font-family: "BMHANNAAir";
}
#emailform{
	border: 5px solid #FFBB00;
	width: 40%;
	font-size: 200%;
	text-align:center;	
	height: 100%;
	border-radius: 10px;
	font-family: "BMHANNAAir";
}
.swal2-confirm{
	background-color:#FFBB00 !important;
}
.prregButton {
	border-top: 5px solid #FFBB00;
	border-left: 5px solid #FFBB00;
	border-right: 5px solid #FFBB00;
	border-bottom: 5px solid #FFBB00;
	background-color: #FFBB00;
	margin-left:20%;
	margin-top:5%;
	width: 35%;
	height: 50%;
	text-align: center;
	font-size:150%;
	cursor: pointer;
	border-radius: 10px;	
	font-family: "BMHANNAAir";
}
</style>

</head>
<body onload="closeModal()">
	<form name="Smainservices" action="" method="post">
		<div id="basic">
			<div id="frame">
				<div id="logo" onclick="getPage('Smainservices','/MoveMainservice')"></div>
				<div id="sessionBox"><span id="session">${sessionInfo.userName}님 환영합니다.
				 	<input	type="hidden" value='${sessionInfo.userName}' name ="userName" />
				 	<input	type="hidden" value='${sessionInfo.userId}' name="userId" />
					<input	type="hidden" value='${sessionInfo.userCode}' name="userCode" />
			    </span></div>
				<div id="logOut">
					<input type="button" id="btn" value="로그아웃" onclick="accessOut()"
						onmouseover="mouseOver(this)" onmouseout="mouseLeave(this)">
				</div>
			</div>

			<div id="body">
				<div id="colorline"></div>
				<div class="servicebutton">
					<input type="button" class="bothB" id="oneB" onclick="getPage('Smainservices','/AcPlanPage')"> <input
						type="button" class="bothB" id="twoB" onclick="getPage('Smainservices','/GradePage')"> <input
						type="button" class="bothB" id="threeB" onclick="getPage('Smainservices','/AttendancePage')"> <input
						type="button" class="bothB" id="fourB" onclick="getPage('Smainservices','/PSClassPage')"> <input
						type="button" class="bothB" id="fiveB" onclick="getPage('Smainservices','/SQnAPage')">
						<input
						type="button" class="bothB" id="sixB" onclick="getPage('Smainservices','/InfoPage')">
					<div class="div1">
						<div class="div2" id="regAcademy" onclick="regAcForm()">●&nbsp;&nbsp;학원 등록
						</div>
						<div class="div2" id="regParents" onclick="parentRegForm()">●&nbsp;&nbsp;부모님 등록</div>
						<div class="div2" onclick="">●&nbsp;&nbsp;비밀번호 변경</div>
						<div class="div2" onclick="">●&nbsp;&nbsp;회원탈퇴</div>
					</div>
				</div>
				<div id="mainpage"></div>
				
			</div>
		</div>
	</form>
	<div class='container' id='container'>
		<div class='mdialog'>
			<div class='mcontent' >
				<div class='mheader' style='font-size:180%'>
				<h5 id='mheader' class='mtitle' style="margin-top:50px%; margin-bottom: 30px;" >학원 검색</h5></div>
				<input type='text' name='acName' placeholder='학원이름 입력' style=' height:35px; border-radius: 10px; border:3px solid #FFBB00; padding-left: 7px; font-size: 13pt; margin-bottom:10px%;font-family: "BMHANNAAir";'/>
				<input type='button' value='검색' onClick='searchAc()' class='searchBtn' style="font-size: 13pt;"/>
				<div class='mbody' id='mbody' value='' style="font-size: 13pt;">
					<div class='hacCode'>등록번호</div>
					<div class='hacName'>이름</div>
					<div class='hacAddress'>주소</div></div>
				<div class='mfooter' style="font-size: 15pt;">
				<input type='button' class='mbtn' value='선택' onclick='selectList()'/>
				<input type='button' class='mbtn' value='닫기'
					onclick='closeModal()' style='border-radius: 10px;background-color: #EAEAEA;width:50%; height:100%; border: 1px solid #EAEAEA;'/>
				</div>
			</div>
		</div>
	</div>
</body>
	<script>
   function mouseOver(obj) {
      let fColor = (obj.id == "btn") ? "#000000" : "#FFFFFF";
      obj.style.color = fColor;
      obj.style.background = "#FFBB00";

   }

   function mouseLeave(obj) {

      let fColor = (obj.id == "btn") ? "#ffffff" : "#FF0000";
      obj.style.color = fColor;
      obj.style.background = "#EA7B03";
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