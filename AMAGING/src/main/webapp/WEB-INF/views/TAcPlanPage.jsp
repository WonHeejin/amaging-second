<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>선생님 학사일정 페이지</title>
<link rel="stylesheet" type="text/css" href="resources/css/tc.css" />
 <script src="resources/js/common.js"></script>
 <script src="resources/js/acPlan.js"></script>
 
 
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
   
   background-size: 30% 55%;
   background-repeat: no-repeat;
   background-position: center center;
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
   background-color: #00A6EF ;
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

#acPlanList{opacity :1.2;
			float:right;
			width: 35%;
			height: 50%;
            margin-right : 13%;
            background-color: transparent;
            color:white;
	
}

.bothC {
	width: 85%;
	height: 13%;

	margin: 1% 2%;
	background-color: transparent;
	border-top: 3px solid #fff;
	border-left: 3px solid #fff;
	border-right: 3px solid #00A6EF;
	border-bottom: 3px solid #00A6EF;
	color :white;
	cursor:pointer;
}

.bothC:active {
	width: 85%;
	height: 13%;

	margin: 1% 2%;
	background-color: #00A6EF;
}


#jan{	
		
		height: 9%;
		width: 10%;
		font-size: large;
	
}

#feb{	
		height: 9%;
		width: 10%;
		font-size: large;
	
}

#mar{	
		height: 9%;
		width: 10%;
		font-size: large;
	
}

#apr{	
		height: 9%;
		width: 10%;
		font-size: large;
	
}


#may{	
		height: 9%;
		width: 10%;
		font-size: large;
	
}


#jun{	
		height: 9%;
		width: 10%;
		font-size: large;
	
}


#jul{	
		height: 9%;
		width: 10%;
		font-size: large;
	
}

#aug{	
		height: 9%;
		width: 10%;
		font-size: large;
	
}


#sep{	
		height: 9%;
		width: 10%;
		font-size: large;
	
}


#oct{	
		height: 9%;
		width: 10%;
		font-size: large;
	
}


#nov{	
		height: 9%;
		width: 10%;
		font-size: large;
	
}


#dec{	
		height: 9%;
		width: 10%;
		font-size: large;
	
}


</style>

</head>
<body onload="getTSPlanList('${sessionInfo.userId}','1')">
   <form name="tmainservices" action="" method="post">
      <div id="basic">
         <div id="frame">
            <div id="logo" onclick="getPage('tmainservices','/MoveMainservice')"></div>
             <div id="sessionBox"><span id="session">${sessionInfo.userName}님 환영합니다.</span>
             	<input	type="hidden" value='${sessionInfo.userId}' name="userId" />
				<input	type="hidden" value='${sessionInfo.userCode}' name="userCode" />
             </div>
            <div id="logOut">
               <input type="button" id="btn" value="로그아웃" onclick="accessOut()" onmouseover="mouseOver(this)" onmouseout="mouseLeave(this)">
            </div>
         </div>
         
         <div id="body">
            <div id="colorline"></div>
               <div class="servicebutton">
                  <input type="button" class="bothB" id="oneB" onclick="getPage('tmainservices','/AcPlanPage')">
                  <input type="button" class="bothB" id="twoB" onclick="getPage('tmainservices','/TGradePage')"> 
                  <input type="button" class="bothB" id="threeB" onclick="getPage('tmainservices','/TAttendancePage')"> 
                  <input type="button" class="bothB" id="fourB" onclick="getPage('tmainservices','/TClassPage')">
                   <input type="button" class="bothB" id="fiveB" onclick="getPage('tmainservices','/TQnAPage')">
                   <input type="button" class="bothB" id="sixB" onclick="getPage('tmainservices','/InfoPage')">  
                    
               </div>
            <div id="mainpage">
            	<<br><br><br>
					<span><input type="button" class="bothC" id="jan" onclick="getTSPlanList('${sessionInfo.userId}','202201')" value="2022년 1월">
						  <input type="button" class="bothC" id="feb" onclick="getTSPlanList('${sessionInfo.userId}','202202')" value="2022년 2월">
						  <input type="button" class="bothC" id="mar" onclick="getTSPlanList('${sessionInfo.userId}','202203')" value="2022년 3월">
					</span><span><div id="acPlanList"></div></span><br>
            	    <span><input type="button" class="bothC" id="apr" onclick="getTSPlanList('${sessionInfo.userId}','202204')" value="2022년 4월">
						  <input type="button" class="bothC" id="may" onclick="getTSPlanList('${sessionInfo.userId}','202205')" value="2022년 5월">
						  <input type="button" class="bothC" id="jun" onclick="getTSPlanList('${sessionInfo.userId}','202206')" value="2022년 6월">
					</span><br>
					<span><input type="button" class="bothC" id="jul" onclick="getTSPlanList('${sessionInfo.userId}','202207')" value="2022년 7월">
						  <input type="button" class="bothC" id="aug" onclick="getTSPlanList('${sessionInfo.userId}','202208')" value="2022년 8월">
						  <input type="button" class="bothC" id="sep" onclick="getTSPlanList('${sessionInfo.userId}','202209')" value="2022년 9월">
					</span><br>
					<span><input type="button" class="bothC" id="oct" onclick="getTSPlanList('${sessionInfo.userId}','202210')" value="2022년 10월">
						  <input type="button" class="bothC" id="nov" onclick="getTSPlanList('${sessionInfo.userId}','202211')" value="2022년 11월">
						  <input type="button" class="bothC" id="dec" onclick="getTSPlanList('${sessionInfo.userId}','202212')" value="2022년 12월">
					</span>
            </div>
         </div>
      </div>
   </form>

<script>
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
</script>
</body></html>