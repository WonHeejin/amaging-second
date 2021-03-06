<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학부모 학사일정 페이지</title>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
 <style>
 
 </style>
 <script src="resources/js/common.js"></script>
 <script src="resources/js/acPlan.js"></script>
 <script src="resources/js/childList.js"></script>
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
   font-family: "BMHANNAAir"; 
}

#body {
	background-repeat:  no-repeat ;
 	background-position : 75% 33%;
 	background-size : 1350px 550px;
   border: 0;
   outline: 0;
   width: 99.8%;
   height: 85%;
   margin-top: 1%;
   float: left;
   background-color: #ffffff;
   position:absolute; top:15%;
   color :white;
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
   background-color:#99E000;
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

#childBox{			width: 20%;
					height: 8%;
					float:left;
					margin-left:4%;
				
}

#childSelect{
			height : 40px;
			width :  200px;
			font-size :large;
			 border : 2px solid #99E000;
			 border-radius : 5px;
			 font-family: "BMHANNAAir"; 
}



#acPlanList{
			float:right;
			width: 30%;
			height: 50%;
			border-radius : 10px;
            margin-right : 15%;
            background-color: transparent;
            font-family: "BMHANNAAir"; 
			font-size : xx-large;
}

.bothC {
	width: 85%;
	height: 13%;
	margin: 1% 2%;
	background-color: transparent;
	border-top: 3px solid #fff;
	border-left: 3px solid #fff;
	border-right: 3px solid #63AA00;
	border-bottom: 3px solid #63AA00;
	color :white;
	cursor:pointer;
}

.bothC:active {
	width: 85%;
	height: 13%;
	margin: 1% 2%;
	background-color: #63AA00;
}


#jan{	
		font-family: "BMHANNAAir"; 
		height: 9%;
		width: 10%;
		font-size: large;
	
}

#feb{	font-family: "BMHANNAAir"; 
		height: 9%;
		width: 10%;
		font-size: large;
	
}

#mar{	font-family: "BMHANNAAir"; 
		height: 9%;
		width: 10%;
		font-size: large;
	
}

#apr{	font-family: "BMHANNAAir"; 
		height: 9%;
		width: 10%;
		font-size: large;
	
}


#may{	font-family: "BMHANNAAir"; 
		height: 9%;
		width: 10%;
		font-size: large;
	
}


#jun{	font-family: "BMHANNAAir"; 
		height: 9%;
		width: 10%;
		font-size: large;
	
}


#jul{	font-family: "BMHANNAAir"; 
		height: 9%;
		width: 10%;
		font-size: large;
	
}

#aug{	font-family: "BMHANNAAir"; 
		height: 9%;
		width: 10%;
		font-size: large;
	
}


#sep{	font-family: "BMHANNAAir"; 
		height: 9%;
		width: 10%;
		font-size: large;
	
}


#oct{	font-family: "BMHANNAAir"; 
		height: 9%;
		width: 10%;
		font-size: large;
	
}


#nov{	font-family: "BMHANNAAir"; 
		height: 9%;
		width: 10%;
		font-size: large;
	
}


#dec{	font-family: "BMHANNAAir";
		height: 9%;
		width: 10%;
		font-size: large;
}

</style>

</head>
<body onload="getChildList1('${sessionInfo.userId}')">
   <form name="pmainservice" action="" method="post">
      <div id="basic">
         <div id="frame">
            <div id="logo" onclick="getPage('pmainservice','/MoveMainservice')"></div>
             <div id="sessionBox"><span id="session"><span id='childName'></span>${sessionInfo.userName}님 환영합니다.
             	<input	type="hidden" value='${sessionInfo.userId}' name="userId" />
				<input	type="hidden" value='${sessionInfo.userCode}' name="userCode" />
				<input	type="hidden" value="" name="sEmail" id ="sEmail" />
				<input	type="hidden" value="" name="sCode" id ="sCode" />
			</span></div>
            <div id="logOut">
               <input type="button" id="btn" value="로그아웃" onclick="accessOut()" onmouseover="mouseOver(this)" onmouseout="mouseLeave(this)">
            </div>
         </div>
         
         <div id="body">
            <div id="colorline"></div>
               <div class="servicebutton">
                 <!-- <input type="button" class="bothB" id="oneB" onclick="getChildList1('${sessionInfo.userId}')">  --> 
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
            		<span><input type="button" class="bothC" id="jan" onclick="getPlanList( '202201')" value="2022년 1월">
						  <input type="button" class="bothC" id="feb" onclick="getPlanList( '202202')" value="2022년 2월">
						  <input type="button" class="bothC" id="mar" onclick="getPlanList( '202203')" value="2022년 3월">
					</span><span><div id="acPlanList"></div></span><br>
            	    <span><input type="button" class="bothC" id="apr" onclick="getPlanList( '202204')" value="2022년 4월">
						  <input type="button" class="bothC" id="may" onclick="getPlanList( '202205')" value="2022년 5월">
						  <input type="button" class="bothC" id="jun" onclick="getPlanList( '202206')" value="2022년 6월">
					</span><br>
					<span><input type="button" class="bothC" id="jul" onclick="getPlanList( '202207')" value="2022년 7월">
						  <input type="button" class="bothC" id="aug" onclick="getPlanList( '202208')" value="2022년 8월">
						  <input type="button" class="bothC" id="sep" onclick="getPlanList( '202209')" value="2022년 9월">
					</span><br>
					<span><input type="button" class="bothC" id="oct" onclick="getPlanList( '202210')" value="2022년 10월">
						  <input type="button" class="bothC" id="nov" onclick="getPlanList( '202211')" value="2022년 11월">
						  <input type="button" class="bothC" id="dec" onclick="getPlanList( '202212')" value="2022년 12월">
					</span>
            			
            	
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
</body></html>