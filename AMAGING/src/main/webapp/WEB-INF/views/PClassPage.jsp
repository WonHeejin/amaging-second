<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학부모 시간표 페이지</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src='http://fullcalendar.io/js/fullcalendar-2.1.1/lib/jquery.min.js'></script>
<script src="http://fullcalendar.io/js/fullcalendar-2.1.1/lib/jquery-ui.custom.min.js"></script>
<script src='http://fullcalendar.io/js/fullcalendar-2.1.1/fullcalendar.min.js'></script>
<link href='resources/fullcalendar/main.css' rel='stylesheet' />
<script src='resources/fullcalendar/main.js'></script>
<script src='resources/fullcalendar/ko.js'></script>
<script src="resources/js/common.js"></script>
<script src="resources/js/class.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
<link rel="stylesheet" type="text/css" href="resources/css/pr.css" />
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
   background-image: url(resources/images/부모님로고1.png);
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

#mainpage {
   width: 73%;
   height: 80%;
   float: right;
   margin-right: 5.5%;
   background-size: 25% 50%;
   background-repeat: no-repeat;
   background-position: center center;
}

.bothB:active {
   width: 85%;
   height: 13%;
   border-radius: 20px;
   margin: 2% 4%;
   background-color: #99E000 ;
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
     
}

#fourB {
margin-bottom:3%;
   float: left;
   background-image: url(resources/images/시간표.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: right center;
   cursor: pointer;
   height:9%;
    background-color:#99E000;
}

#fiveB {
	margin-bottom:3%;
   float: left;
   background-image: url(resources/images/납부내역.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: right center;
   cursor: pointer;
   height:9%;
}

#sixB{
margin-bottom:3%;
 float: left;
   background-image: url(resources/images/상담.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: right center;
   cursor: pointer;
   height:9%;
}
#sevenB{
 float: left;
   background-image: url(resources/images/정보수정.png);
   background-size: 100% 80%;
   background-repeat: no-repeat;
   background-position: right center;
   cursor: pointer;
   height:9%;
}


#btn {
   width: 50%;
   height: 50%;
   border-radius: 10px;
   margin-left: 15%;
   margin-top: 10%;
   border-bottom: 5px solid #63AA00 ;
   border-top: 5px solid #63AA00 ;
   border-left: 5px solid #63AA00;
   border-right: 5px solid #63AA00;
   background-color: #63AA00;
   text-align: center;
   font-size: 130%;
   cursor: pointer;
}

#btn:active {
   border-top: 5px solid #99E000 ;
   border-left: 5px solid #99E000 ;
   border-right: 5px solid #99E000 ;
   border-bottom: 5px solid #99E000 ;
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

position:absolute; top:44%; left:58%;
text-align:center;
 font-size:130%;
 
	
	}

#sessionBox{ width:30%; height:10%; 
position:absolute; left:45%; top:1%;
}

#childBox{			
	width: 20%;
	height: 8%;
	float:left;
	margin-left:4%;
				
}
#childSelect{
	height : 40px;
	width :  200px;
	border-radius: 5px;
	font-size :large;
	border : 2px solid #99E000;
	position: relateive;
	left: 10%;
	top: 1%;
}

#calendar {
	float: left;
	margin-left: 5%;
	width: 90%;
	height: 80%;
	
}
.fc-event{
	font-weight: 700;
	font-size: 18px;
}
.fc .fc-button-primary {
	background-color: #99E000;
	border-color: #99E000;
}
.fc table {
  	border: 5px solid #99E000;
  }
</style>

</head>
<body onload="getChildList('${sessionInfo.userId}')">
   <form name="pmainservice" action="" method="post">
      <div id="basic">
         <div id="frame">
            <div id="logo" onclick="getPage('pmainservice','/MoveMainservice')"></div>
             <div id="sessionBox"><span id="session"><span id='childName'></span>${sessionInfo.userName}님 환영합니다.
             	<input	type="hidden" value="${sessionInfo.userId}" name="userId" />
				<input	type="hidden" value="${sessionInfo.userCode}" name="userCode" />
				<input	type="hidden" value="${sessionInfo.userName}" id ="userName" />
				<input	type="hidden" value="" name="sEmail" id ="sEmail" />
				<input	type="hidden" value="" name="sCode" id ="sCode" />
				<input type="hidden" value="tt" id="pageId"/>	
			</span></div>
            <div id="logOut">
               <input type="button" id="btn" value="로그아웃" onclick="accessOut()" onmouseover="mouseOver(this)" onmouseout="mouseLeave(this)">
            </div>
         </div>
         
         <div id="body">
            <div id="colorline"></div>
               <div class="servicebutton">
                  <input type="button" class="bothB" id="oneB" onclick="getPage('pmainservice','/AcPlanPage')"> 
                  <input type="button" class="bothB" id="twoB" onclick="getPage('pmainservice','/GradePage')"> 
                  <input type="button" class="bothB" id="threeB" onclick="getPage('pmainservice','/AttendancePage')"> 
                  <input type="button" class="bothB" id="fourB" onclick="getPage('pmainservice','/PSClassPage')">
                   <input type="button" class="bothB" id="fiveB" onclick="getPage('pmainservice','/PFeePage')"> 
                   <input type="button" class="bothB" id="sixB" onclick="getPage('pmainservice','/PQnAPage')">
                    <input type="button" class="bothB" id="sevenB" onclick="getAcPlanPage('pmainservice','/InfoPage')"> 
               </div>
             <span><div id="childBox" name="childBox"></div></span>   
            <div id="mainpage">
            	<div id='calendar'></div>
            </div>
         </div>
      </div>
   </form>

<script>
   function mouseOver(obj) {
      let fColor = (obj.id == "btn") ? "#000000" : "#FFFFFF";
      obj.style.color = fColor;
      obj.style.background = "#99E000 ";

   }

   function mouseLeave(obj) {

      let fColor = (obj.id == "btn") ? "#ffffff" : "#FF0000";
      obj.style.color = fColor;
      obj.style.background = "#63AA00 ";
      obj.style.border = ""

   }
</script>
<script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></script>
<script src="https://unpkg.com/tippy.js@6"></script>
</body></html>