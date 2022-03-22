<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>관리자 학사일정 페이지</title>
 <script src="resources/js/common.js"></script>
  <script src="resources/js/acPlan.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" integrity="sha512-uto9mlQzrs59VwILcLiRYeLKPPbS/bT71da/OEBYEwcdNUk8jYIy+D176RYoop1Da+f9mvkYrmj5MCLZWEtQuA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" integrity="sha512-aOG0c6nPNzGk+5zjwyJaoRUgCdOrfSDhmMID2u4+OIslr0GjpLKo7Xm0Ao3xmpM4T8AmIouRkqwj1nrdVsLKEQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script>
    $.datepicker.setDefaults({
    	  dateFormat: 'yymmdd',    	
    	  prevText: '이전 달',
    	  nextText: '다음 달',
    	  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    	  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    	  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    	  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    	  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    	  showMonthAfterYear: true,
    	  yearSuffix: '년',
    	 
    	});
    
    $( function() {
        var dateFormat = "yymmdd",
          from = $( "#sd" )
            .datepicker({
              defaultDate: "+1w",
              changeMonth: true
             
            })
            .on( "change", function() {
              to.datepicker( "option", "minDate", getDate( this ) );
            }),
          to = $( "#ed" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true
          })
          .on( "change", function() {
            from.datepicker( "option", "maxDate", getDate( this ) );
          });
     
        function getDate( element ) {
          var date;
          try {
            date = $.datepicker.parseDate( dateFormat, element.value );
          } catch( error ) {
            date = null;
          }
     
          return date;
        }
      } );
  	 </script>
<style>
/*Jquery 달력 css
#datepicker {
	float: left;
}

.ui-widget-header {
	border: 0px solid #dddddd;
	background: #fff;
}

.ui-datepicker-calendar>thead>tr>th {
	font-size: 14px !important;
}

.ui-datepicker .ui-datepicker-header {
	position: relative;
	padding: 10px 0;
}

.ui-state-default, .ui-widget-content .ui-state-default,
	.ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover,
	html .ui-button.ui-state-disabled:active {
	border: 0px solid #c5c5c5;
	background-color: transparent;
	font-weight: normal;
	color: #454545;
	text-align: center;
}

.ui-datepicker .ui-datepicker-title {
	margin: 0 0em;
	line-height: 16px;
	text-align: center;
	font-size: 14px;
	padding: 0px;
	font-weight: bold;
}

.ui-datepicker {
	display: none;
	background-color: #fff;
	border-radius: 4px;
	margin-top: 10px;
	margin-left: 0px;
	margin-right: 0px;
	padding: 20px;
	padding-bottom: 10px;
	width: 300px;
	box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.1);
}

.ui-widget.ui-widget-content {
	border: 1px solid #eee;
}

#datepicker:focus>.ui-datepicker {
	display: block;
}

.ui-datepicker-prev, .ui-datepicker-next {
	cursor: pointer;
}

.ui-datepicker-next {
	float: right;
}

.ui-state-disabled {
	cursor: auto;
	color: hsla(0, 0%, 80%, 1);
}

.ui-datepicker-title {
	text-align: center;
	padding: 10px;
	font-weight: 100;
	font-size: 20px;
}

.ui-datepicker-calendar {
	width: 100%;
}

.ui-datepicker-calendar>thead>tr>th {
	padding: 5px;
	font-size: 20px;
	font-weight: 400;
}

.ui-datepicker-calendar>tbody>tr>td>a {
	color: #000;
	font-size: 12px !important;
	font-weight: bold !important;
	text-decoration: none;
}

.ui-datepicker-calendar>tbody>tr>.ui-state-disabled:hover {
	cursor: auto;
	background-color: #fff;
}

.ui-datepicker-calendar>tbody>tr>td {
	border-radius: 100%;
	width: 44px;
	height: 30px;
	cursor: pointer;
	padding: 5px;
	font-weight: 100;
	text-align: center;
	font-size: 12px;
}

.ui-datepicker-calendar>tbody>tr>td:hover {
	background-color: transparent;
	opacity: 0.6;
}

.ui-state-hover, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-hover,
	.ui-state-focus, .ui-widget-content .ui-state-focus, .ui-widget-header .ui-state-focus,
	.ui-button:hover, .ui-button:focus {
	border: 0px solid #cccccc;
	background-color: transparent;
	font-weight: normal;
	color: #2b2b2b;
}

.ui-widget-header .ui-icon {
	background-image: url('resources/images/btns.png');
}

.ui-icon-circle-triangle-e {
	background-position: -20px 0px;
	background-size: 36px;
}

.ui-icon-circle-triangle-w {
	background-position: -0px -0px;
	background-size: 36px;
}

.ui-datepicker-calendar>tbody>tr>td:first-child a {
	color: red !important;
}

.ui-datepicker-calendar>tbody>tr>td:last-child a {
	color: #0099ff !important;
}

.ui-datepicker-calendar>thead>tr>th:first-child {
	color: red !important;
}

.ui-datepicker-calendar>thead>tr>th:last-child {
	color: #0099ff !important;
}

.ui-state-highlight, .ui-widget-content .ui-state-highlight,
	.ui-widget-header .ui-state-highlight {
	border: 0px;
	background: #f1f1f1;
	border-radius: 50%;
	padding-top: 10px;
	padding-bottom: 10px;
}

.inp {
	padding: 10px 10px;
	background-color: #f1f1f1;
	border-radius: 4px;
	border: 0px;
}

.inp:focus {
	outline: none;
	background-color: #eee;
}*/

/*달력 css끝*/
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

#colorline {
	border: 0;
	outline: 0;
	height: 1.5%;
	width: 90%;
	float: left;
	margin: 2% 4.5%;
	border-radius: 20px;
	background-color: #EF90FF;
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
	height: 50%;
	float: right;
	margin-right: 5.5%;
	background-size: 30% 55%;
	background-repeat: no-repeat;
	background-position: center center;
}

.bothB {
	width: 85%;
	height: 13%;
	border-radius: 20px;
	margin: 2% 4%;
	background-color: transparent;
	border-top: 5px solid #EF90FF;
	border-left: 5px solid #EF90FF;
	border-right: 5px solid #EF90FF;
	border-bottom: 5px solid #EF90FF;
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
	background-color: #EF90FF;
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

#acPlanList {
	float: right;
	width: 30%;
	height: 80%;
	border-radius: 10px;
	border: 2px solid #EF90FF;
	margin-right: 20%;
	background-color: transparent;
	border-top: 5px solid #EF90FF;
	border-left: 5px solid #EF90FF;
	border-right: 5px solid #EF90FF;
	border-bottom: 5px solid #EF90FF;
	overflow : auto;
}

.bothC {
	width: 85%;
	height: 13%;
	border-radius: 20px;
	margin: 1% 2%;
	background-color: transparent;
	border-top: 5px solid #EF90FF;
	border-left: 5px solid #EF90FF;
	border-right: 5px solid #EF90FF;
	border-bottom: 5px solid #EF90FF;
}

.bothC:active {
	width: 85%;
	height: 13%;
	border-radius: 20px;
	margin: 1% 2%;
	background-color: #EF90FF;
}

#jan {
	height: 15%;
	width: 10%;
	font-size: large;
}

#feb {
	height: 15%;
	width: 10%;
	font-size: large;
}

#mar {
	height: 15%;
	width: 10%;
	font-size: large;
}

#apr {
	height: 15%;
	width: 10%;
	font-size: large;
}

#may {
	height: 15%;
	width: 10%;
	font-size: large;
}

#jun {
	height: 15%;
	width: 10%;
	font-size: large;
}

#jul {
	height: 15%;
	width: 10%;
	font-size: large;
}

#aug {
	height: 15%;
	width: 10%;
	font-size: large;
}

#sep {
	height: 15%;
	width: 10%;
	font-size: large;
}

#oct {
	height: 15%;
	width: 10%;
	font-size: large;
}

#nov {
	height: 15%;
	width: 10%;
	font-size: large;
}

#dec {
	height: 15%;
	width: 10%;
	font-size: large;
}
</style>

</head>
<body onload="getAPlanList('1')">
   <form name="" action="" method="get">
      <div id="basic">
         <div id="frame">


            <span id="logo"></span>
            <div id="sessionBox"><span id="session">${sessionInfo.userName}님 환영합니다.</span>
				<input	type="hidden" value='${sessionInfo.userId}' name="userId" />
				<input	type="hidden" value='${sessionInfo.userCode}' name="userCode" />
				<input	type="hidden" value='${sessionInfo.acCode}' name="acCode" />
				<input	type="hidden" value='${sessionInfo.tier}' name="tier" />            
			</div>
            <div id="logOut">
               <span><input type="button" id="btn" value="로그아웃" onclick="accessOut()"
                  onmouseover="mouseOver(this)" onmouseout="mouseLeave(this)"></span>
            </div>
         </div>

         <div id="body">
            <div id="colorline"></div>
            <div class="servicebutton">

               <input type="button" class="bothB" id="oneB" onclick="getAPlanList('1')">              
               <input type="button" class="bothB" id="twoB" onclick=""> 
               <input type="button" class="bothB" id="threeB" onclick="">
               <input type="button" class="bothB" id="fourB" onclick="">
               <input type="button" class="bothB" id="fiveB" onclick="">

            </div>
            <div id="mainpage">
            	<br>
					<span><input type="button" class="bothC" id="jan" onclick="getAPlanList( '202201')" value="2022년 1월">
						  <input type="button" class="bothC" id="feb" onclick="getAPlanList( '202202')" value="2022년 2월">
						  <input type="button" class="bothC" id="mar" onclick="getAPlanList( '202203')" value="2022년 3월">
					</span><span><div id="acPlanList"></div></span><br>
            	    <span><input type="button" class="bothC" id="apr" onclick="getAPlanList( '202204')" value="2022년 4월">
						  <input type="button" class="bothC" id="may" onclick="getAPlanList( '202205')" value="2022년 5월">
						  <input type="button" class="bothC" id="jun" onclick="getAPlanList( '202206')" value="2022년 6월">
					</span><br>
					<span><input type="button" class="bothC" id="jul" onclick="getAPlanList( '202207')" value="2022년 7월">
						  <input type="button" class="bothC" id="aug" onclick="getAPlanList( '202208')" value="2022년 8월">
						  <input type="button" class="bothC" id="sep" onclick="getAPlanList( '202209')" value="2022년 9월">
					</span><br>
					<span><input type="button" class="bothC" id="oct" onclick="getAPlanList( '202210')" value="2022년 10월">
						  <input type="button" class="bothC" id="nov" onclick="getAPlanList( '202211')" value="2022년 11월">
						  <input type="button" class="bothC" id="dec" onclick="getAPlanList( '202212')" value="2022년 12월">
					</span>
            	
            </div>
            <div id="undermainpage">
      			    <input placeholder="시작일" type="text" id="sd">
       	   			<input placeholder="종료일" type="text" id="ed">
       	   			<input type="text" id="contents" placeholder="내용입력">
       	   			
					<input id="rbtn" type="button" onClick="setPlanList('${sessionInfo.acCode}')" value ="등록"/>
					<input id="mbtn" type="button" onClick="updPlanList('${sessionInfo.acCode}')" value ="수정"/>
					<input id="dbtn" type="button" onClick="delPlanList('${sessionInfo.acCode}')" value ="삭제"/>      	
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