<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리자 수업관리 페이지</title>
<script src="resources/js/common.js"></script>
<script src="resources/js/ATimeTable.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
 <link rel="stylesheet" type="text/css" href="resources/css/ad.css" />
<style>
#yaritakunai{width:10%; height:10%; line-height: 1%;font-size:150%;text-align:center;
           box-shadow : 5px 5px 5px black; transition-duration:0.3s;
           position:absolute; top:75%; left:49%;cursor: pointer;
           border:5px solid #EF90FF ; background-color:#fff; color:#000;
            border-radius: 30px 10px;}
#yaritakunai:active{background-color: #D1B2FF  ; color:#FFFFFF; height: 10%;
              line-height: 10%;width:10%;
                font-size:150%;text-align:center;
                 box-shadow : none; margin-left:1%; margin-top:1%;  border:5px solid #D1B2FF ;}
#btn2{width:10%; height:10%; line-height: 1%;font-size:150%;text-align:center;
           box-shadow : 5px 5px 5px black; transition-duration:0.3s;
           position:absolute; top:75%; left:49%;cursor: pointer;
           border:5px solid #EF90FF ; background-color:#fff; color:#000;
            border-radius: 30px 10px;}
#btn2:active{background-color: #D1B2FF  ; color:#FFFFFF; height: 10%;
              line-height: 10%;width:10%;
                font-size:150%;text-align:center;
                 box-shadow : none; margin-left:1%; margin-top:1%;  border:5px solid #D1B2FF ;}    
#torokubtn{width:8.5%;
		height:8.5%;
		border:7px solid #F084C5;
		border-radius:30px 10px 50px;
		position:absolute; left:65%; top:50.5%; 
		text-align:center;
		font-size:120%;
		background-color:#fff;}
#torokubtn:active{background-color: #F084C5  ; color:#E14FCA; height: 8.5%;
              line-height: 10%;width:8.5%;
                font-size:120%;text-align:center;
                 box-shadow : none; margin-left:1%; margin-top:1%;}
#sanbtn{width:7.5%;
height:7.5%;
border:6px inset #FF62C3;
border-radius:30px 10px;
position:absolute; left:66%; top:48%; 
text-align:center;
font-size:120%;
background-color:#fff;
 box-shadow : 5px 5px 5px black;
 transition-duration:0.3s;line-height: 1%;}                     
#sanbtn:active{
		background-color: #FF62C3; color:#000; height: 7.5%;
              line-height: 10%;width:7%;
                font-size:120%;text-align:center;
                 box-shadow : none; margin-left:1%; margin-top:1%; color:#FFFFFF;
}                       
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
/*	border:3px dashed #EF90FF; */
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
	background-color: #EF90FF;
}

#threeB {
	margin-top: 35%;
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
}

#fiveB {
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
	cursor: pointer;
}

.div2 {
	position: relative;
	top: -3%;
	width: 70%;
	height: 13%;
	display: flex;
	align-items: center;
	margin-left: 13%;
	cursor: pointer;
	font-weight: 600;
	font-size: 100%;
}

.clicked {
	color: #EF90FF;
	font-weight: 800;
	font-size: 130%;
}

.container {
	background-color: gray;
	background: rgba(0, 0, 0, 0.4);
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	text-align: center;
	display: flex;
}

.mdialog {
	border: 2px solid white;
	border-radius: 25px;
	background-color: #ffffff;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 35%;
	height: 40%;
	transform: translate(-50%, -50%)
}

.mbtn {
	border: 3px solid gray;
	border-radius: 5px;
	position: absolute;
	left: 93%;
	top: 3%;
	width: 4%;
	height: 5%;
	background-color: #D5D5D5;
	cursor: pointer;
	color:#ff0000;
	font-size:80%;
}
/*선생 검색 모달*/
.scontainer {
	background-color: gray;
	background: rgba(0, 0, 0, 0.4);
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	text-align: center;
	display: flex;
}

.smdialog {
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

.smbody {
	border: 2px solid #A175F0;
	margin-left: 10%;
	width: 80%;
	pont-size: 100pt;
	overflow-x: hidden;
    overflow-y: auto;
 	margin-top:6%;

}

.tName {
	border:2px solid #A175F0;
	float: left;
	width: 20%;
	height: 100%;
	text-align:center;

}

.tEmail {
	border: 2px solid #A175F0;
	width: 100%;
	height: 100%;
	text-align:center;
	
}

.smfooter {
	top: 85%;
	left: 30%;
	position: fixed;
	clear: both;
	margin-bottom: 10%;
	width: 40%;
	height: 50px;
	
}

.teacherId {
	float: left;
	width: 20%;
}
/*학생등록 모달*/
.gcontainer {
	background-color: gray;
	background: rgba(0, 0, 0, 0.4);
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	text-align: center;
	display: flex;
}

.gmdialog {
	border: 2px solid white;
	border-radius: 25px;
	background-color: #ffffff;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 60%;
	height: 60%;
	transform: translate(-50%, -50%);

	
}

.gmbtn {
	border: 2px solid gray;
	border-radius: 5px;
	position: absolute;
	left: 93%;
	top: 3%;
	width: 4%;
	height: 5%;
	background-color: #D5D5D5;
	cursor: pointer;
}

.gmbody {
	
	margin-left: 10%;
	width: 70%;
	height:50%;
	pont-size: 200pt;
	position:absolute; top:27%; left:5.3%;	
	float:left;
	margin-bottom:30%;
	overflow-x: hidden;
    overflow-y: auto;
}


.sNAME {
	float: left;
	width: 37%;
	height: 8%;
	border:3px solid #D1B2FF;
}
 .sEmail {
	width: 61%;
	height: 8%;
	position:left:20%;
	float: left;
	border:3px solid #D1B2FF;
}


.gmfooter {
	top: 85%;
	left: 30%;
	position: fixed;
	clear: both;
	margin-bottom: 10%;
	width: 40%;
	height: 50px;
}
/**/
.gcontainer2 {
	background-color: gray;
	background: rgba(0, 0, 0, 0.4);
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	text-align: center;
	display: flex;
}

.gmdialog2 {
	border: 2px solid white;
	border-radius: 25px;
	background-color: #ffffff;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 60%;
	height: 60%;
	transform: translate(-50%, -50%)
}

.gmbody2 {
	
	margin-left: 10%;
	width: 70%;
	height:60%;
	pont-size: 100pt;
	position:absolute; top:16%; left:7%;	
	float:left;
	margin-bottom:30%;
	overflow-x: hidden;
    overflow-y: auto;
}


.sNAME2 {
	float: left;
	width: 34%;
	height: 6%;
	border:2px solid #000;
}
 .sEmail2 {
	width: 64%;
	height: 6%;
	position:left:20%;
	float: left;
	border:2px solid #000;
}


.gmfooter2 {
	top: 85%;
	left: 30%;
	position: fixed;
	clear: both;
	margin-bottom: 10%;
	width: 40%;
	height: 50px;
}
.section::-webkit-scrollbar { width: 16px; } 
.section::-webkit-scrollbar-track { background-color: #e4e4e4; border-radius: 100px; }
 .section::-webkit-scrollbar-thumb { background-color: #d4aa70; border-radius: 100px; } 
 .section { scrollbar-color: #D4AA70 #e4e4e4; } 
 .section::-webkit-scrollbar-thumb { background-image: linear-gradient(180deg, #D0368A 0%, #708AD4 99%); box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5); border-radius: 100px; }
.section{border-radius:5px;}

.box {
  width: 80%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 30px rgba(black, .2);
  background: lighten(#f0f4c3, 10%);
  position: relative;left:40%;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.wave {
  opacity: .4;
  position: absolute;
  top: 3%;
  left: 50%;
  background: #FFB2F5;
  width: 500px;
  height: 500px;
  margin-left: -250px;
  margin-top: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 3000ms infinite linear;
}

.wave.-three {
  animation: drift 5000ms infinite linear;
}

.wave.-two {
  animation: drift 7000ms infinite linear;
  opacity: .1;
  background: yellow;
}

.box:after {
  content: '';
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(#e8a, 1), rgba(#def, 0) 80%, rgba(white, .5));
  z-index: 11;
  transform: translate3d(0, 0, 0);
}

.title {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  line-height: 300px;
  text-align: center;
  transform: translate3d(0, 0, 0);
  color: white;
  text-transform: uppercase;
  font-family: 'Playfair Display', serif;
  letter-spacing: .4em;
  font-size: 24px;
  text-shadow: 0 1px 0 rgba(black, .1);
  text-indent: .3em;
}
@keyframes drift {
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
}

</style>

</head>
<body onload="closeModal()">
	<form name="amainservice" action="" method="post">
		<div id="basic">
			<div id="frame">


				<span id="logo" onclick="getPage('amainservice','/MoveMainservice')"></span>
				<div id="sessionBox">
					<span id="session">${sessionInfo.userName}님 환영합니다. <input
						type="hidden" value='${sessionInfo.userId}' name="userId" /> <input
						type="hidden" value='${sessionInfo.userCode}' name="userCode" />
						<input type="hidden" value='${sessionInfo.acCode}' name="acCode" />
						<input type="hidden" value='${sessionInfo.tier}' name="tier" />
					</span>
				</div>
				<div id="logOut">
					<span><input type="button" id="btn" value="로그아웃" onclick="accessAdminOut()"
						onmouseover="mouseOver(this)" onmouseout="mouseLeave(this)"></span>
				</div>
			</div>

			<div id="body">
				<div></div>
				<div id="colorline"></div>
				<div class="servicebutton">

					<input type="button" class="bothB" id="oneB" onclick="getPage('amainservice','/AcPlanPage')"> <input
						type="button" class="bothB" id="twoB" onclick="getPage('amainservice', '/AClassPage')">
					<div class="div1">
						<div class="div2" id="regClassForm"
							onclick="getCourseList('${sessionInfo.acCode}')">
							●&nbsp;&nbsp;수업등록</div>
						<div class="div2" onclick="getAClassList('${sessionInfo.acCode}')">
							●&nbsp;&nbsp;수업수정</div>
						<div class="div2"
							onclick="subjectFormList('${sessionInfo.acCode}')">
							●&nbsp;&nbsp;과목등록</div>
						<div class="div2" id="modSubject" onclick="getASubjectList('${sessionInfo.acCode}')">
							●&nbsp;&nbsp;과목수정</div>
						<div class="div2" onclick="modStudentList('${sessionInfo.acCode}')">
							●&nbsp;&nbsp;반배정</div>
					</div>
					<input type="button" class="bothB" id="threeB" onclick="getPage('amainservice','AFeePage')">
					<input type="button" class="bothB" id="fourB" onclick="getPage('amainservice','/AGetAttendanceL')">
				    <input type="button" class="bothB" id="fiveB" onclick="getPage('amainservice','/AQnAPage')">

				</div>
				<div id="mainpage"></div>

			</div>
			<div class="container" id="container">
				<div class="mdialog">
					<div class="mcontent">
						<!-- Modal Header -->
						<div class="mheader">
							<h4 id="mheader" class="mtitle"></h4>
						</div>
						<!-- Modal body -->
						<div class="mbody" id="mbody" value=""></div>
						<!-- Modal footer -->
						<div class="mfooter">
							<input type="button" class="mbtn" value="X"
								onclick="closeModal()" />
						</div>
					</div>
				</div>
			</div>

			<div class='scontainer' id='scontainer'>
				<div class='smdialog'>
					<div class='smcontent'>
						<div class='smheader' style='font-size: 200%'>
							<h4 id='smheader' class='mtitle'>선생님 검색</h4>
						</div>
						<input type='text' name='tName' placeholder='선생님이름 입력'
							style='height: 35px; width: 30%; position: absolute; top: 19%; left: 30%; border-radius: 5px; border-color: #A175F0; ' />
						<input type='button' value='검색' onClick='teacherSerchForm()'
							class='searchBtn'
							style='position: absolute; top: 21%; left: 62%; border-radius: 5px; background-color:#fff; border:3px solid #EF90FF;cursor: pointer;' />
						<div class='smbody' id='smbody' value=''>
							<div class='teacherId'>선생코드</div>
							<div class='tName'>이름</div>
							<div class='tEmail'>이메일</div>
						</div>
						<div class='smfooter'>
							<input type='button' class='mbtn1' value='선택' onclick='selectList(this)'
								style='border-radius: 5px; background-color: #FFF; width: 30%; height: 50%; border:3px solid #EF90FF; cursor: pointer; ' />
							<input type='button' class='mbtn2' value='닫기' onclick='closeModal()'
								style='border-radius: 5px; background-color: #FFF; width: 30%; height: 50%; border:3px solid #EF90FF; cursor: pointer;' />
						</div>
					</div>
				</div>
			</div>
			
			<div class='gcontainer' id='gcontainer'>
				<div class='gmdialog'>
					<div class='gmcontent'>
						<div class='gmheader' style='font-size: 200%'>
							<h4 id='smheader' class='mtitle'>학생 검색</h4>	
						</div>
						<input type='text' name='sName' id='splace' placeholder='학생이름 입력'
							style='height: 35px; width: 30%; position: absolute; top: 19%; left: 30%; border-radius: 5px; border-color: #F29FF0' />
						<input type='button' value='조회' onClick='searchStudent()'
							class='searchBtn'
							style='position: absolute; top: 21%; left: 62%; border-radius: 5px; background-color:#fff; border:3px solid #F29FF0;cursor: pointer;'' />
						<div class='gmbody' id='gmbody' value=''>
							
							<div class='sNAME'>학생이름</div>
							<div class='sEmail'>이메일</div>
												
						</div>
						<div class='gmfooter'>
							<input type='button' class='mbtn3' value='등록' onclick='regStudent(this)'
								style='border-radius: 5px; background-color: #FFF; width: 30%; height: 50%; border:3px solid #F29FF0; cursor: pointer; ' />
							<input type='button' class='mbtn3' value='닫기' onclick='closeModal()'
								style='border-radius: 5px; background-color: #FFF; width: 30%; height: 50%; border:3px solid #F29FF0; cursor: pointer;' />
						</div>
					</div>
				</div>
			</div>
		
		<div class='gcontainer2' id='gcontainer2' >
				<div class='gmdialog2'>
					<div class='gmcontent2'>
						<div class='gmheader2' style='font-size: 200%'>
							<h4 id='smheader' class='mtitle'>학생 삭제</h4>	
						</div>
						<div class='gmbody2' id='gmbody2' value=''>
							<div class='sNAME2'>학생이름</div>
							<div class='sEmail2'>이메일</div>
													
						</div>
						<div class='gmfooter2'>
							<input type='button' class='mbtn3' value='삭제' onclick='delBelong()'
								style='border-radius: 5px; background-color: #FFF; width: 30%; height: 50%; border:3px solid #C09AF0; cursor: pointer; ' />
							<input type='button' class='mbtn3' value='닫기' onclick='closeModal()'
								style='border-radius: 5px; background-color: #FFF; width: 30%; height: 50%; border:3px solid #C09AF0; cursor: pointer; ' />
						</div>
					</div>
				</div>
			</div>	
	</form>

	<script type="text/javascript">
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