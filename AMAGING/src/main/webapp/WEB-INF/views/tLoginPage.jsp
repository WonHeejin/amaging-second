<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>선생님 로그인</title>
<script src="resources/js/common.js"></script>
<script src="resources/js/login.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
<link rel="stylesheet" type="text/css" href="resources/css/ad.css" />
</head>

<style>
.ocean { 
  height: 5%;
  width:100%;
  position:absolute;
  bottom:0;
  left:0;
  background: #015871;
}

.wave {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x; 
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
  top: -175px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
}


#basic  {
         position:fixed;
          width:99%;
          height:100%;
          } 

#body   {width:105%; height:105%;
         position:absolute; top:50%; left:50%;
         transform: translate(-50%, -50%); background:radial-gradient(ellipse at center, #ffffff 0%, #ffffff 35%, #B7E8EB 100%);
 	 	 overflow: hidden;
        }
#inBody   {width:30%; height:30%;
         position:absolute; top:45%; left:50%;
         transform: translate(-50%, -50%); 
         }
#welcome  {text-align:center; font-size:35px; color: #000000;
         position:absolute; top:-15%; left: 33%;
         }
.inputE    {height: 20%;width:72%;font-size:100%;border:1px solid #000 ; 
          position:absolute; top:27%; left: 8%;  border-radius:25px; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          padding-left :30px; border : none;}
          
.inputP  { height: 20%;width:72%; font-size:100%;border:1px solid #000 ; padding-left :10px;
          position:absolute; top:58%; left: 8%;border : none;  border-radius:25px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; padding-left :30px;}
          
#loginbtn {background-color: #00A6EF  ; color:#FFFFFF; height: 20%;
         line-height: 1%;width:70%;
           font-size:100%;text-align:center;
           border:0px; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; transition-duration:0.3s;
           position:absolute; top:56%; left: 17.5%;cursor: pointer;
           border-radius:25px;}
           
#loginbtn:active {background-color: #0042ED  ; color:#FFFFFF; height: 20%;
              line-height: 10%;width:70%;
                font-size:100%;text-align:center;
                 box-shadow : none; margin-left:1%; margin-top:1%;}
 #findPassword {height: 8%; width:24.5%;font-size:100%;
               position:absolute; top:82%; left:50%; 
               text-align:center;	color:#8C8C8C;
                background-size:15% 85%;  background-repeat : no-repeat; background-position:100% 90%; cursor: pointer;
               }
               
#join{height: 8%; width:17%;font-size:100%; color:#8C8C8C;
               position:absolute; top:82%; left:35%;  
               text-align:left;   background-size:20% 85%;  background-repeat : no-repeat; background-position:85% 85%;cursor: pointer;
           }
#bottombox { width:64%;  height:10%;
         margin-top:31.6%;}         
#pabox{ width:90%; height:75%;  position:fixed;left:10%; top:-11%;   }
</style>
<body class ="background" onLoad = "sendMessage('${msg}')">
<form name ="login" action="/Login" method="post">
<input	type="hidden" value='3' name="userCode" />
<div id="basic">
<div id="body">  
   <div id="inBody">
      <div id="welcome">선생님 로그인</div>
      <div id="pabox">
         <div>
            <input class = "inputE" type="text" name="email" placeholder="Email 입력 "/>
         </div>
         <div>
            <input class = "inputP" type="password" name="password" placeholder=" PASSWORD"/>
         </div>
      </div>
      <div>
          <div>
            <input type="button" id="loginbtn" value="LOGIN" onClick="authentication('3')"/>

         </div>
      </div>
   
      <div id="bottombox">
         <div id="findPassword"  onClick="">비밀번호 찾기 </div>
            <div id="join" onClick="getJoinPage(3)">회원가입</div>
      </div>
   </div>
   <div class="ocean">
  			<div class="wave"></div>
  			<div class="wave"></div>		
</div>
</div>
</div>
</form>
</body>
</html>