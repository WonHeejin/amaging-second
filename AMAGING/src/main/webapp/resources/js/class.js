let earliestStartTime, lastEndTime
function calendar() {
	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		slotMinTime: '09:00',
		slotMaxTime: '23:00',
		allDaySlot: false,
		contentHeight: 700,
		expandRows: true,
		/*calendar.setOption('slotMaxTime', `09:00:00`),*/
		locale: 'ko',
		initialView: 'timeGridWeek',
		//initialView:'dayGridMonth',
		//initialDate: new Date(2022,3,24), // will be parsed as local
		timeZone: 'local',
		headerToolbar: {
			start: "",
			center: "prev title next",
			right: "today"
		},
		displayEventTime: false,
		eventTimeFormat: { // like '14:30:00'
			hour: 'numeric',
			minute: '2-digit',
			meridiem: false
		},
		dayHeaderContent: (args) => {
			moment.updateLocale('ko', {
				weekdays: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
				weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"],
			});

			return moment(args.date).locale("ko").format('D ddd')
		},
		events: function(info, successCallback, failureCallback) {
			const userCode = document.getElementsByName("userCode")[0].value;
			let userId = (userCode == 1) ? document.getElementById("sCode").value
				: document.getElementsByName("userId")[0].value;
			let data = "userId=" + userId + "&userCode=" + document.getElementsByName("userCode")[0].value;
			$.ajax({
				type: "post", url: "/GetSTClassList", data, dataType: "json",
				success:
					function(result) {
						if (result.length > 0) {
							var events = [];
							const bcolor = generateHslaColors(result.length);
							$.each(result, function(index, element) {
								var startdate = YMDFormatter(element.startDay);
								var enddate = YMDFormatter(element.endDay);
								var pageId = document.getElementById("pageId").value;
								var attend = "";
								if(pageId=='at'){
									attend=(element.attend==23)?'출석':(element.attend==21)?'결석':'';
								}
								if (userCode ==3) {
									events.push({
										id: element.smCode,
										title: element.acName + element.subjectName,
										startTime: element.stime,
										endTime: element.etime,
										startRecur: startdate,
										endRecur: enddate,
										daysOfWeek: element.weekDay,
										color: bcolor[index],
										textColor: 'black',
										description: element.acName + " " + element.clName + " " + element.subjectName
									}); //.push() end	
								} else { 
									events.push({
										id: element.smCode,
										title: element.acName + "\n" +element.subjectName +"\n"+attend,
										startTime: element.stime,
										endTime: element.etime,
										startRecur: startdate,
										endRecur: enddate,
										daysOfWeek: element.weekDay,
										color: bcolor[index],
										textColor: 'black',
										description: element.stime + " ~ " + element.etime + "\n" +  element.clName + "\n" + element.tname
									}); //.push() end	
								}

							});//.each()  end			
							successCallback(events);
						} else { alert("수업정보가 없습니다.") }//if문 end
					}//success : function end
			});//ajax end
		},//events: function end
		eventContent: function(arg) {
			return {
				html: arg.event.title.replace(/\n/g, '<br>'), 
			}
		},
		eventDidMount: function(arg) {
			/*const eventStartTime = arg.event.start.getHours()
			const eventEndTime = arg.event.end.getHours()

			if (!earliestStartTime) {
				// when undefined
				earliestStartTime = eventStartTime
			} else if (eventStartTime < earliestStartTime) {
				earliestStartTime = eventStartTime
			}

			if (!lastEndTime) {
				// when undefined
				lastEndTime = eventEndTime
			} else if (eventEndTime > lastEndTime) {
				lastEndTime = eventEndTime
			}

			calendar.setOption('slotMinTime', `${earliestStartTime}:00:00`);
			calendar.setOption('slotMaxTime', `${lastEndTime}:00:00`);*/
				tippy(arg.el, {
					content: arg.event.extendedProps.description,//이벤트 디스크립션을 툴팁으로 가져옵니다. 
					html: true
				});
		}
	});// new FullCalendar end

	calendar.render();
}
function getEvents() { }
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

function generateHslaColors(amount) {
	let colors = []
	let huedelta = Math.trunc(360 / amount)

	for (let i = 0; i < amount; i++) {
		let hue = i * huedelta
		colors.push(`hsla(${hue},70%,80%)`)
	}
	return colors
}
function getChildList(uId) {
	const data = "userId=" + encodeURIComponent(uId)
	getAjaxData("/GetChildList", data, "childListBox", "post");
}
function childListBox(cList) {
	cc = JSON.parse(cList);
	let sc = document.getElementById("sCode").value;
	if (sc == "") { document.getElementById("sCode").value = cc[0].userId; }
	let cb = document.getElementById("childBox");
	let cbData = '<select name="childSelect" id="childSelect" onchange="childName(this.value)">';
	cbData += '<option value="자녀선택">자녀선택</option>';
	for (idx = 0; idx < cc.length; idx++) {
		cbData += '<option value="' + cc[idx].userId + '">' + cc[idx].sname;

		cbData += '</option>';
	}
	cbData += '</select>';
	cb.innerHTML = cbData;
	calendar();
}
function childName(sCode) {
	document.getElementsByName("sCode")[0].value = sCode;
	calendar('/GetSClassList');
}