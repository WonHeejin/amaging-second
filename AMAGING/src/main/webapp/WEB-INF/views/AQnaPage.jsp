<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리자 상담 페이지</title>
<link rel="stylesheet" type="text/css" href="resources/css/ad.css" />
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
<script src="resources/js/common.js"></script>
<script src="resources/js/qna.js"></script>
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
   
	width: 55%;
	height: 350px;
	float: right;
	margin-right: 15%;
	overflow:auto;
	background-size: 45% 65%;
	background-repeat: no-repeat;
	background-position: center center;
	overflow:auto;
	border-radius: 20px;
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
 
}

#threeB {
 
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
   background-color:#EF90FF;
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
       position: relative; top:-3%;
        width: 70%;
        height: 13%;
        display: flex;
        align-items: center;
       margin-left:13%;
       cursor: pointer;
       font-weight:600;
       font-size: 100%;
      
      
}
 .clicked {
        color: #EF90FF;
       font-weight:800;
       font-size:130%;
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
            }
 #mbody{           
 			 height : 220px;
			 border-radius : 10px;
			 border : 2px solid #92acbb;
			 position : relative;
			 left : "85%";
			 top : "1%";
		}
		
 #mheader	{           
 			 height : 30px;
			 border-radius : 10px;
			 border : 2px solid #92acbb;
			 position : relative;
			 left : "85%";
			 top : "1%";
		}
#answer {           
 			 height : 100px;
 			 width : 98%;
			 border-radius : 10px;
			 border : 2px solid #92acbb;
			 position : relative;
			 left : "85%";
			 top : "1%";
			 font-size : large;
			 text-align : center;
		}
	
#answer::placeholder {color:black;}		
		
#btn-close{float : right;}
#mbtn{float : right;}
 
#btn-close1{float : right;}
#mbtn1{float : right;}
 
 /*요약정보 CSS*/
#undermain{
			width : 55%;
			height : 100px;
			float : left;
			position : relative;
			left : 12%;
			top : 0%;
}
.simple_table { width: 100%; border: none; border-collapse: separate; border-spacing: 2px;}
.simple_table th { padding: 15px; border: none; border-bottom: 5px solid #EF90FF  ; border-right: 5px solid #EF90FF; background: #fff ; font-size: large; color:#E14FCA; text-align:center; vertical-align: middle;}
.simple_table td { padding: 15px; border: none; border-bottom: 1px solid #DDD; text-align: center; vertical-align: baseline; font-size: x-large;}

/*비밀번호 입력 모달*/
 #pwexampleModal {width: 100%;
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
 		}	
 		
    #pwmdialog {background: #FFFFFF;
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 13.5px );
            -webkit-backdrop-filter: blur( 13.5px );
            border-radius: 10px;
            border: 5px solid #92acbb;
            width: 450px;
            height: 150px;
            position: relative;
            top: -100px;
            padding: 10px;
            }   		

#password {           
 			 height : 50px;
 			 width : 98%;
			 border-radius : 10px;
			 border : 2px solid #92acbb;
			 position : relative;
			 left : "85%";
			 top : "1%";
			 font-size : large;
			 text-align : center;
		}
 
</style>

</head>
<body onload="adminCounsel('${sessionInfo.userId}','${sessionInfo.acCode}','${sessionInfo.userCode}')">
   <form name="amainservice" action="" method="post">
      <div id="basic">
         <div id="frame">
            <span id="logo" onclick="getPage('amainservice','/MoveMainservice')"></span>
            	<div id="sessionBox"><span id="session">${sessionInfo.userName}님 환영합니다.
            	<input	type="hidden" value='${sessionInfo.userId}' name="userId" />
				<input	type="hidden" value='${sessionInfo.userCode}' name="userCode" />
				<input	type="hidden" value='${sessionInfo.acCode}' name="acCode" />
				<input	type="hidden" value='${sessionInfo.tier}' name="tier" />                         
            	</span></div>
            <div id="logOut">
               <span><input type="button" id="btn" value="로그아웃" onclick="accessAdminOut()"
                  onmouseover="mouseOver(this)" onmouseout="mouseLeave(this)"></span>
            </div>
         </div>

         <div id="body">
            <div id="colorline"></div>
            <div class="servicebutton">

                <input type="button" class="bothB" id="oneB" onclick="getPage('amainservice','/AcPlanPage')">              
               <input type="button" class="bothB" id="twoB" onclick="getPage('amainservice', '/AClassPage')"> 
               <input type="button" class="bothB" id="threeB" onclick="getPage('amainservice','AFeePage')">
               <input type="button" class="bothB" id="fourB" onclick="getPage('amainservice','/AGetAttendanceL')">
               <input type="button" class="bothB" id="fiveB" onclick="getPage('amainservice','/AQnAPage')">

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
            
         </div>
      </div>
   </form>
   
    <form name='dynamicFormData'>
   <!-- The Modal BackGround -->
      <div class="container" id="exampleModal">
         <div id="mdialog">
            <div class="mcontent">
            
         <!-- 답변등록 모달 -->
         
            <!-- The Modal header -->
               <div><input type="reset" id="btn-close" class="btn-close" value="X" onClick="closeModalA();"/></div><br>
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
               <br><div><input type="text" class="mfooter" id="answer" value="" /></div>
                 <br> 
              <input type="button" class="mbtn" id="mbtn" name="command" value="등록" onClick="openModal1()"/>
            </div>
         </div>
      </div>
   </form>
    
   <!-- 답변비밀번호입력모달 -->
   
   <form name='dynamicFormData'>
   <!-- The Modal BackGround -->
      <div class="container" id="pwexampleModal">
         <div id="pwmdialog">
            <div class="pwmcontent">
         
            <!-- The Modal header -->
               <div><input type="reset" id="btn-close1" class="btn-close" value="X" onClick="closeModalA1();"/></div>
                      
            <!-- The Modal footer -->
               <br><div><input type="password" class="mfooter" id="password" placeholder="EMAIL_비밀번호입력" value="" ></div>
                 <br> 
               </input><input type="button" class="mbtn" id="mbtn1" name="command" value="확인" onClick="sendReplyAEmail()"/>
            </div>
         </div>
      </div>
   </form>  
   
   
</body>
   <script>
   closeModalA();
   closeModalA1();
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

</html>