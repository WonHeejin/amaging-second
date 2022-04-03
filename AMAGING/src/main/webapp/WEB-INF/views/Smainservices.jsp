<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학생 메인 페이지</title>
 <script src="resources/js/common.js"></script>
 <script src="resources/js/acPlan.js"></script>
 <link rel="stylesheet" type="text/css" href="resources/css/st.css" />
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
   margin-top:-2%;

}
#mainpage {
	width: 73%;
	height: 80%;
	float: right;
	margin-right: 5.5%;
}

.bothB:active {
	width: 85%;
	height: 13%;
	border-radius: 20px;
	margin: 2% 4%;
	background-color: #FFBB00;
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
height:9%;
	margin-bottom: 3%;
	float: left;
	background-image: url(resources/images/성적.png);
	background-size: 100% 80%;
	background-repeat: no-repeat;
	background-position: right center;
	cursor: pointer;
}

#threeB {
height:9%;
	margin-bottom: 3%;
	float: left;
	background-image: url(resources/images/출석.png);
	background-size: 100% 80%;
	background-repeat: no-repeat;
	background-position: right center;
	cursor: pointer;
}

#fourB {
height:9%;
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
height:9%;
	float: left;
	background-image: url(resources/images/상담.png);
	background-size: 100% 80%;
	background-repeat: no-repeat;
	background-position: right center;
	cursor: pointer;
}
#sixB{height:9%;
	float: left;
	background-image: url(resources/images/정보수정.png);
	background-size: 100% 80%;
	background-repeat: no-repeat;
	background-position: right center;
	cursor: pointer;}

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
#session{ width:100%;  height:50%; 

position:absolute; top:44%; left:60%;
text-align:center;
 font-size:130%;
 
	
	}

#sessionBox{ width:30%; height:10%; 
position:absolute; left:45%; top:1%;
}
 figure {
  width: 210px;
  height: 210px;
  animation: rotation 7s linear infinite;
  position: absolute;
  top: 45%;
  left: 55%;
  margin-top: -105px;
  margin-left: -105px;
  transform-style: preserve-3d;
}

.face {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-origin: center;
}

.face div {
  border: 6px double #000  ;
  width: 70px;
  height: 70px;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
}

.front {
  transform: translate3d(0,0,105px);
}

.back {
  transform: rotateY(180deg) translate3d(0,0,105px);
}

.left {
  transform: rotateY(-90deg) translate3d(0,0,105px);
}

.right {
  transform: rotateY(90deg) translate3d(0,0,105px);
}

.top {
  transform: rotateX(90deg) translate3d(0,0,105px);
}

.bottom {
  transform: rotateX(-90deg) translate3d(0,0,105px);
}

@keyframes rotation {
  from { transform: rotateY(0) rotateX(0); }
  to   { transform: rotateY(-360deg) rotateX(360deg); }
}     
						/*컬러큐브*/
.wrapper {
  width: 100%;
  perspective: 400;
  position:absolute; left:25%;
}

.cube {
  position: relative;
  top: 180px;
  left:-375px;
  margin: 0 auto;
  height: 200px;
  width: 200px;

  animation : spin 5s infinite linear;
  transform-style: preserve-3d;
}

@keyframes spin {
  from { transform: rotateY(0) rotateX(0); }
  to   { transform: rotateY(-360deg) rotateX(360deg); }
}

.cube > div {
  position: absolute;
  height: 180px;
  width: 180px;
  border: 1px solid #333;
  opacity: .8;
}

.cube > div:hover {
  opacity: 1;
  transition: opacity .3s linear;
}

.one { 
  transform: rotateX(90deg) translateZ(180px); 
  background-color: #E3493B;
}

.two { 
  transform: translateZ(180px); 
  background-color: #0054FF;
}

.three { 
  transform: rotateY(90deg) translateZ(180px); 
  background-color: #E8487F;
}

.four { 
  transform: rotateY(180deg) translateZ(180px); 
  background-color: #28B78D;
}

.five { 
  transform: rotateY(-90deg) translateZ(180px); 
  background-color: #FF5B00;
}

.six { 
  transform: rotateX(-90deg) translateZ(160px); 
  background-color: #FEEB51;
}
</style>

</head>
<body onload="">
	<form name="Smainservices" action="" method="post">
		<div id="basic">
			<div id="frame">
				<div id="logo"></div>
				 	<div id="sessionBox"><span id="session">${sessionInfo.userName}님 환영합니다.
				 	<input	type="hidden" value='${sessionInfo.userId}' name="userId" />
					<input	type="hidden" value='${sessionInfo.userCode}' name="userCode" />
			    	</span></div>
				<div id="logOut">
					<input type="button" id="btn" value="로그아웃" onclick="accessOut()"	onmouseover="mouseOver(this)" onmouseout="mouseLeave(this)">
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
				</div>
				<div id="mainpage">
				    <figure>
  <div class="face front">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
  </div>

  <div class="face top">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
  </div>
  
  <div class="face right">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
  </div>

  <div class="face left">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
  </div>

  <div class="face bottom"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
  </div>

  <div class="face back"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
  </div>
</figure>
<div class="wrapper">
  <div class="cube">
    <div class="one"></div>
    <div class="two"></div>
    <div class="three"></div>
    <div class="four"></div>
    <div class="five"></div>
    <div class="six"></div>
  </div>
</div>
				</div>
			</div>
		</div>
	</form>

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
</script>
</body>
</html>