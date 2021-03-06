<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학생 출석 페이지</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src='http://fullcalendar.io/js/fullcalendar-2.1.1/lib/jquery.min.js'></script>
<script src="http://fullcalendar.io/js/fullcalendar-2.1.1/lib/jquery-ui.custom.min.js"></script>
<script src='http://fullcalendar.io/js/fullcalendar-2.1.1/fullcalendar.min.js'></script>
<link href='resources/fullcalendar/main.css' rel='stylesheet' />
<script src='resources/fullcalendar/main.js'></script>
<script src='resources/fullcalendar/ko.js'></script>
<script src="resources/js/common.js"></script>
<script src="resources/js/psAttendance.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
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
	background-color: #FFBB00;
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
#sixB{
	height:9%;
	float: left;
	background-image: url(resources/images/정보수정.png);
	background-size: 100% 80%;
	background-repeat: no-repeat;
	background-position: right center;
	cursor: pointer;
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
#session{ 
	width:100%;
	height:50%; 
	position:absolute; 
	top:44%; 
	left:60%;
	text-align:center;
 	font-size:130%;
	}

#sessionBox{ 
	width:30%; 
	height:10%; 
	position:absolute; 
	left:45%;
	 top:1%;
}
#calendar {
	float: left;
	margin-left: 7%;
	width: 80%;
	height: 93%;
}
/*event 글씨 진하게*/
.fc-event{
	font-weight: bold;
	cursor:pointer;
}
.legend{
	padding:0px 30px; border-radius:5px; font-weight: bold;
	whidth:1%; height: 0%; margin-left:10%; font-size:17px;
}
.fc .fc-button-primary {
	background-color: #FFBB00;
	border-color: #FFBB00;
}
.fc table {
  	border: 5px solid #FFBB00;
  }
 .tippy-box{
 	width:190px;
 	text-align:center;
 	padding:5px;
 }
.swal2-confirm{
	background-color:#FFBB00 !important;
}
</style>

</head>
<body onload="calendar()">
	<form name="Smainservices" action="" method="post">
		<div id="basic">
			<div id="frame">
				<div id="logo" onclick="getPage('Smainservices','/MoveMainservice')"></div>
				 <div id="sessionBox">
				 	<span id="session">${sessionInfo.userName}님 환영합니다.</span> <input
						type="hidden" value='${sessionInfo.userName}' name="userName" />
					<input type="hidden" value='${sessionInfo.userId}' name="userId" />
					<input type="hidden" value=2 name="userCode" />
					<input type="hidden" value='${sessionInfo.userCode}'
						name="userCode" />
					<input type="hidden" value="at" id="pageId"/>	
				 </div>
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
				</div>
				<div id="mainpage" >
				<div id= 'legend' style=" whidth:5%; height: 0%;margin-top:0%">
							<span class="legend"style="background-color: #79ABFF; color: white; display: inline-block; height: 20px;"><img src="resources/images/출석완료.png" width="16" height="16"/> : 출석</span><br/>
							<span class="legend"style="background-color: #FF8383; color: white; display: inline-block; height: 20px;"><img src="resources/images/결석.png" width="16" height="16"/> : 결석</span><br/>
							<span class="legend"style="background-color: #F2CB61; color: white; display: inline-block; height: 20px;"><img src="resources/images/지각.png" width="16" height="16"/> : 지각</span>
				</div>
					<div id='calendar'></div>
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
<script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></script>
<script src="https://unpkg.com/tippy.js@6"></script>
</body>
</html>