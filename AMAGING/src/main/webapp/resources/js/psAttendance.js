let earliestStartTime, lastEndTime
function calendar() {
	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		allDaySlot: false,
		contentHeight: 700,
		expandRows: true,
		/*calendar.setOption('slotMaxTime', `09:00:00`),*/
		locale: 'ko',
		//initialView: 'listMonth',
		initialView:'dayGridMonth',
		//initialDate: new Date(2022,3,24), // will be parsed as local
		timeZone: 'local',
		headerToolbar: {
			start: "",
			center: "prev title next",
			right: "today"
		},
		displayEventTime: true,
		eventTimeFormat: { // like '14:30:00'
			hour: 'numeric',
			minute: '2-digit',
			meridiem: false
		},
		eventDisplay: 'block',
		dayHeaderContent: (args) => {
			moment.updateLocale('ko', {
				weekdays: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
				weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"],
			});

			return moment(args.date).locale("ko").format('ddd')
		},
		events: function(info, successCallback, failureCallback) {
			const userCode = document.getElementsByName("userCode")[0].value;
			let userId = (userCode == 1) ? sessionStorage.getItem("sCode")
				: document.getElementsByName("userId")[0].value;
				
			let data = "userId=" + userId + "&userCode=" + document.getElementsByName("userCode")[0].value;
			$.ajax({
				type: "post", url: "/PSAttendanceList", data, dataType: "json",
				success:
					function(result) {
						if (result.length > 0) {
							var events = [];
							$.each(result, function(index, element) {
								var attend =(element.attend==21)?'출석':(element.attend==23)?'결석':'지각';
								var ecolor = (element.attend==21)?'#79ABFF':(element.attend==23)?'#FF8383':'#F2CB61';
									events.push({
										id: element.smCode,
										title: " " + element.subjectName +" "+(element.startDay).substr(11),
										start: (element.startDay).replace(/ /g, 'T'),
										color: ecolor,
										textColor: '#353535',
										imageurl:'resources/images/학생로고.png',
										description: element.acName +" " + element.clName,
										attendance: attend
									}); //.push() end	
							});//.each()  end			
							successCallback(events);
						} else { 
							Swal.fire({
								icon: 'warning',
								text: "출석정보가 없습니다."
							});
						}//if문 end
					}//success : function end
			});//ajax end
		},//events: function end
		eventContent: function(arg) {
			var imageurl="";
			if((arg.event.extendedProps.attendance).indexOf('출석')!=-1){
				imageurl="resources/images/출석완료.png";
			}else if((arg.event.extendedProps.attendance).indexOf('지각')!=-1){
				imageurl="resources/images/지각.png";
			}else if((arg.event.extendedProps.attendance).indexOf('결석')!=-1){
				imageurl="resources/images/결석.png";
			}
						
			return {
				html: `<div class="event-icon"><img src="`+imageurl+`" width="16" height="16"/>`+arg.event.title+`</div>`
			}
		},
		eventDidMount: function(arg) {
			let data = "studentId=" + document.getElementsByName("userId")[0].value
				+ "&subjectCode=" + arg.event.id;
				$.ajax({
					type: "post", url: "/GetAtLog", data, dataType: "json",
				success:
					function(result) {					
						tippy(arg.el, {
					content: arg.event.extendedProps.description,//이벤트 디스크립션을 툴팁으로 가져옵니다. 
					html: 'true'
				});// tippy end
					}//success end
				});//ajax end		
		},//eventDidMount end
		eventClick: function(arg){
			let data = "studentId=" + document.getElementsByName("userId")[0].value
				+ "&subjectCode=" + arg.event.id;
				$.ajax({
					type: "post", url: "/GetAtLog", data, dataType: "json",
				success:
					function(result) {
						console.log(result)
						let attend;
						let absent;
						let late;
						if(result.length>0){
							if(result[0].cocodenum==21){
								attend=result[0].cocode;
								if(result[1].cocodenum==22){
									late=result[1].cocode;
									absent=result[2].cocode;
								}else{
									absent=result[1].cocode;
									late=result[2].cocode;
								}
							}else if(result[0].cocodenum==22){
								late=result[0].cocode;
								if(result[1].cocodenum==21){
									attend=result[1].cocode;
									absent=result[2].cocode;
								}else{
									absent=result[1].cocode;
									attend=result[2].cocode;
								}
							}else{
								absent=result[0].cocode;
								if(result[1].cocodenum==21){
									attend=result[1].cocode;
									late=result[2].cocode;
								}else{
									absent=result[1].cocode;
									late=result[2].cocode;
								}
							}
						}//if(result.length>0) end 
						let total=parseInt(attend)+parseInt(absent)+parseInt(late);
			Swal.fire({
				title: ' 출석현황'+"<br>"+arg.event.extendedProps.description,
				html: 	"출석 "+attend+"</br>"
						+"지각 "+late+"</br>"
						+"결석 "+absent+"</br>"
						+"출석률 "+ Math.round(parseInt(total)/parseInt(result[0].total)*100)+"% ( "+ total+"/"+result[0].total+"일 )"
			})
		}//seccess end
		});//ajax end
		}
	});// new FullCalendar end

	calendar.render();
}

function YMDFormatter(num) {
	if (!num) return "";
	var formatNum = '';
	// 공백제거
	num = num.replace(/\s/gi, "");
	try {
		if (num.length == 8) {
			formatNum = num.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
		}
	} catch (e) {
		formatNum = num;
		console.log(e);
	}
	return formatNum;
}
//출처: https://sesok808.tistory.com/550 [살아가는 그 이유]

function getChildList(uId) {
	const data = "userId=" + encodeURIComponent(uId)
	getAjaxData("/GetChildList", data, "childListBox", "post");
}
function childListBox(cList) {
	cc = JSON.parse(cList);
	let sc = document.getElementById("sCode").value;
	let cb = document.getElementById("childBox");
	let cbData = '<select name="childSelect" id="childSelect" onchange="childName(this.value)">';
	cbData += '<option value="자녀선택">자녀선택</option>';
	for (idx = 0; idx < cc.length; idx++) {
		cbData += '<option value="' + cc[idx].userId + '">' + cc[idx].sname;
		cbData += '</option>';
	}
	cbData += '</select>';
	cb.innerHTML = cbData;
	var select=document.getElementById("childSelect");
	if (sessionStorage.getItem("sCode") == null) { 
		sessionStorage.setItem("sCode", cc[0].userId); 
		select[1].selected=true;
	}else{
		for(var i=0;i<select.length;i++){
			if(select[i].value==sessionStorage.getItem("sCode")){
				select[i].selected=true;
			}
		}
	}
	calendar();
}
function childName(sCode) {
	sessionStorage.setItem("sCode", sCode);
	var select=document.getElementById("childSelect");
	select[0].selected=false;
	for(var i=0;i<select.length;i++){
		if(select[i].value==sessionStorage.getItem("sCode")){
			select[i].selected=true;
		}
	}
	calendar('/GetSClassList');
}