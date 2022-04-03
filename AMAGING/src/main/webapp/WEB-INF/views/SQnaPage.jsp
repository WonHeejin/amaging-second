<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학생 상담 페이지</title>
 <script src="resources/js/common.js"></script>
 <script src="resources/js/qna.js"></script>
 <link rel="stylesheet" type="text/css" href="resources/css/st.css" />
 <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
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
   font-family: "BMHANNAAir"; 
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
    
	width: 55%;
	height: 300px;
	float: right;
	margin-right: 14%;
	overflow:auto;
	background-size: 45% 65%;
	background-repeat: no-repeat;
	background-position: center center;
	overflow:auto;
	border-radius: 20px;
	font-family: "BMHANNAAir"; 
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
	background-color: #FFBB00;
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
/*상담글 리스트
#list{
	margin-left:4%;
}*/

/*글쓰기 등록버튼*/
.rw {
	font-family: "BMHANNAAir"; 
   width: 5%;
   height: 4%;
   border-radius: 20px;
   margin: 2% 4%;
   background: #FFFFFF;
   position: relative;
   left : 78%;
   top : 65%;
   font-size : large;
    border: 5px solid #FFBB00;
    cursor:pointer;
}

/*Modal CSS*/

#exampleModal {width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(1.5px);
            -webkit-backdrop-filter: blur(1.5px);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            font-family: "BMHANNAAir"; 
 		}
 
 #exampleModal1 {width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(1.5px);
            -webkit-backdrop-filter: blur(1.5px);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            font-family: "BMHANNAAir"; 
 		}
 		
 #mdialog {background: #FFFFFF;
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 13.5px );
            -webkit-backdrop-filter: blur( 13.5px );
            border-radius: 10px;
            border: 5px solid #92acbb;
            width: 450px;
            height: 520px;
            position: relative;
            top: -100px;
            padding: 10px;
            font-family: "BMHANNAAir"; 
            }
            
#mdialog1 {background: #FFFFFF;
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 13.5px );
            -webkit-backdrop-filter: blur( 13.5px );
            border-radius: 10px;
            border: 5px solid #92acbb;
            width: 450px;
            height: 400px;
            position: relative;
            top: -100px;
            padding: 10px;
            font-family: "BMHANNAAir"; 
            }            
            
 #mbody{     
 			font-size : x-large;
			padding-left : 10px;
			padding-top : 10px;      
 			 height : 220px;
			 border-radius : 10px;
			 border : 2px solid #92acbb;
			 position : relative;
			 left : "85%";
			 top : "1%";
			 overflow:auto;
			 font-family: "BMHANNAAir"; 
		}
		
 #mheader	{
 			font-size : x-large;
			padding-left : 10px;
			padding-top : 10px;          
 			 height : 55px;
			 border-radius : 10px;
			 border : 2px solid #92acbb;
			 position : relative;
			 left : "85%";
			 top : "1%";
			 font-family: "BMHANNAAir"; 
		}
#answer {    font-size : x-large;       
 			 height : 100px;
 			 width : 98%;
			 border-radius : 10px;
			 border : 2px solid #92acbb;
			 position : relative;
			 left : "85%";
			 top : "1%";
			 font-size : large;
			 text-align : center;
			 font-family: "BMHANNAAir"; 
		}
		
#btn-close{float : right;}
#mbtn{float : right;}

 #mbody1{           
 			 height : 220px;
 			 width : 98%;
			 border-radius : 10px;
			 border : 2px solid #92acbb;
			font-size : x-large;
			padding-left : 10px;
			padding-top : 10px;
			 overflow-x: auto;
    		 overflow-y: scroll;
			font-family: "BMHANNAAir"; 
		}
		
 #mheader1	{           
 			 font-size : x-large;
 			 padding-left : 10px;
 			 height : 55px;
 			 width : 98%;
			 border-radius : 10px;
			 border : 2px solid #92acbb;
			 position : relative;
			 left : "85%";
			 top : "1%";
			 font-family: "BMHANNAAir"; 
		}
#selectMom {
		float :left; 
		font-family: "BMHANNAAir"; 
	 }
	 
/*#aSelect3{
			width : "100px";
			height : "20px";
			borderRadius : "5px";
			border : "2px solid #92acbb";
			position : "relative";
			left : "0%";
			top : "1%";
			float : "left";
}	 */

/*요약정보 CSS*/
#undermain{
			width : 55%;
			height : 100px;
			float : left;
			position : relative;
			left : 12%;
			top : 0%;
}
.simple_table {font-family: "BMHANNAAir";  width: 100%; border: none; border-collapse: separate; border-spacing: 2px;}
.simple_table th { padding: 15px; border: none; border-bottom: 5px solid #FFBB00  ; border-right: 5px solid #FFBB00; background: #fff ; font-size: large; color:#EA7B03; text-align:center; vertical-align: middle;}
.simple_table td { padding: 15px; border: none; border-bottom: 1px solid #DDD; text-align: center; vertical-align: baseline; font-size: x-large;}

</style>

</head>
<body onload="stCounsel('${sessionInfo.userId}','${sessionInfo.userCode}')">
	<form name="Smainservices" action="" method="post">
		<div id="basic">
			<div id="frame">
				<div id="logo" onclick="getPage('Smainservices','/MoveMainservice')"></div>
				 	<div id="sessionBox"><span id="session">${sessionInfo.userName}님 환영합니다.
				 	<input	type="hidden" value='${sessionInfo.userId}' name="userId" />
					<input	type="hidden" value='${sessionInfo.userCode}' name="userCode" />
					<input	type="hidden" value="" name="acCode" id ="sCode" />
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
				</div>
				<div id="undermain">
					<table class="simple_table">
						<tbody>
							<tr>
								<th scope="row">미확인</th>
								<td id ="writing1"></td>
								<th scope="row">답변 대기중</th>
								<td id ="writing2"></td>
								<th scope="row">답변 완료</th>
								<td id ="writing3"></td>
								<th scope="row">합계</th>
								<td id ="writing4"></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div id="mainpage"></div>
				
				
			</div><input type="button" class="rw" value="글쓰기" onclick="openModa3()"> 
		</div>
	</form>
	
	<!-- 글읽는 모달창 -->
      <div class="container" id="exampleModal">
         <div id="mdialog">
            <div class="mcontent">
         
            <!-- The Modal header -->
               <div><input type="button" id="btn-close" class="btn-close" value="X" onClick="closeModal();"/></div><br>
               <br><div class="mtitle" id="mheader"class="mheader"> 
               </div>
            
            <!-- The Modal body -->
               <br><div class="mboby" id="mbody" value="">
               		<br>
               		<span id= "from"> </span>
               		<br><br>
               		<span id="question"> </span>
               		<span></span>
               </div>
            
            <!-- The Modal footer -->
               <br><div ><input type="text" class="mfooter" id="answer" readonly/></div>
                 <br> 
               
            </div>
         </div>
      </div>
   </form>
   
   <!-- 글쓰기 모달창 -->
   <form name='dynamicFormData'>
   <!-- The Modal BackGround -->
      <div class="container" id="exampleModal1">
         <div id="mdialog1">
            <div class="mcontent">
         
            <!-- The Modal header -->
           
               <div id="headclose"><div class="ss" id="selects"></div><div class="ss" id="selects1"></div><div class="ss" id="selects2"></div><input type="reset" id="btn-close" class="btn-close" value="X" onClick="closeModal1();"/></div>
               <br><br>
               <div><span><input type = "text" class="mtitle" id="mheader1"class="mheader" placeholder = "제목"/></span> </div>
               <div></div><br>
            	<div></div>
            <!-- The Modal body -->
               <br><span><textarea col="60" row="10" class="mboby" id="mbody1" value="" placeholder = "내용"></textarea></span>
              
            <!-- The Modal footer -->
               <br><br> 
               <div><input type="reset" class="mbtn" id="mbtn" name="command" value="등록" onClick="insertQnA()"/></div>
            </div>
         </div>
      </div>
   </form>
	
</body>
	<script>
	closeModal();
	closeModal1();
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

</html>