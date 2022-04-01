<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리자 메인 페이지</title>
 <script src="resources/js/common.js"></script>
 <script src="resources/js/acPlan.js"></script>
  <link rel="stylesheet" type="text/css" href="resources/css/ad.css" />
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
   width: 73%;
   height: 80%;
   float: right;
   margin-right: 5.5%;
    background: #fff;
/*   background-image: url(resources/images/관리자.png);
   background-size: 30% 55%;
   background-repeat: no-repeat;
   background-position: center center; */
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
/*
 #circle1 {
      width: 200px;
      height: 200px;
      background: white;
      border-radius: 50%;
      position:absolute;left:38%;top:15%; border:1px solid #000;
      background: linear-gradient(red, blue);

    }
   #circle2 {
      width: 200px;
      height: 200px;
      background: white;
      border-radius: 50%;
      position:absolute;left:30%; border:1px solid #000;
      background: linear-gradient(red, blue);

    }
     #circle3 {
      width: 200px;
      height: 200px;
      background: white;
      border-radius: 50%;
      position:absolute;left:58%;top:50%;
       border:1px solid #000;
    }
     #circle4 {
      width: 200px;
      height: 200px;
      background: white;
      border-radius: 50%;
      position:absolute;left:85%; top:80%; 
      border:1px solid #ff0000;
    }
     #circle5 {
      width: 200px;
      height: 200px;
      background: white;
      border-radius: 50%;
      position:absolute;left:97%; top:60%; 
      border:1px solid #000;
    } 
     #circle6 {
      width: 200px;
      height: 200px;
      background: white;
      border-radius: 50%;
      position:absolute;left:92%; top:10%; 
      border:1px solid #000;
    } 
     #circle7 {
      width: 200px;
      height: 200px;
      background: white;
      border-radius: 50%;
      position:absolute;left:63%; top:40%; 
      border:1px solid #000;
    } 
      #circle8 {
      width: 200px;
      height: 200px;
      background: white;
      border-radius: 50%;
      position:absolute;left:25%; top:53%; 
      border:1px solid #000;
    }     
      #circle9 {
      width: 200px;
      height: 200px;
      background: white;
      border-radius: 50%;
      position:absolute;left:27%; top:68%; 
      border:1px solid #000;
      background: linear-gradient(45deg, yellow, Orange);
    }  
    */  
  figure {
  width: 210px;
  height: 210px;
  animation: rotation 7s linear infinite;
  position: absolute;
  top: 50%;
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
  border: 6px double #FFD9FA;
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
</style>

</head>
<body onload="">
   <form name="amainservice" action="" method="post">
      <div id="basic">
         <div id="frame">


            <span id="logo"></span>
            <div id="sessionBox"><span id="session">${sessionInfo.userName}님 환영합니다.
               <input   type="hidden" value='${sessionInfo.userId}' name="userId" />
            <input   type="hidden" value='${sessionInfo.userCode}' name="userCode" />
            <input   type="hidden" value='${sessionInfo.acCode}' name="acCode" />
            <input   type="hidden" value='${sessionInfo.tier}' name="tier" />                         
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
   /*function getCheckPage(formName,action){
      const checkLevel = document.getElementsByName("tier")[0].value;
      
      if(checkLevel == 1){
            const form = document.getElementsByName(formName)[0];
               form.setAttribute("action",action);
               return form.submit();
      }else if(checkLevel == 2){
         if(action == "/AQnAPage"){
            const form = document.getElementsByName(formName)[0];
                 form.setAttribute("action",action);
                 return form.submit();
         }
      }else if(checkLevel == 3){
         
      }
      alert("볼수없는 기능입니다.");
      
   }*/
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