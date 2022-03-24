var classInfo = [{ subjectName: '국어', clName: '수능반', sTime: '09:30', eTime: '12:00', weedDay: '월요일화요일' }
	, { subjectName: '수학', clName: '수능반', stime: '12:30', etime: '13:30', weekDay: '월요일수요일', sday: '2022-03-01', eDay: '2022-03-31' }];
var result = [];
/*$(function() {
  $('#calendar').fullCalendar({
	defaultView: 'timeGrid',
	headerToolbar: {
	  left: 'prev,next today',
	  center: 'title',
	  
	},
 
  })
});*/
document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		slotMinTime: '09:00',
		/*calendar.setOption('slotMaxTime', `09:00:00`),*/
		locale: 'ko',
		initialView: 'timeGridWeek',
		//initialView:'dayGridMonth',
		//initialDate: new Date(2022,3,24), // will be parsed as local
		timeZone: 'local',
		headerToolbar: {
			start: "today",
			center: "prev title next",
			right: ""
		},

		//initialView: 'dayGridMonth'
		event: function(info, successCallback, failureCallback) {
			$.ajax({ type: "post", url: "${path}/calendar.do?method=data", dataType: "json" });
		}
	});

	calendar.render();
});
/*title: classInfo[i].clName + " " + classInfo[i].subjectName,
					startTime: classInfo[i].sTime, endTime: classInfo[i].eTime,
					startRecur: classInfo[0].startDay, endRecur: classInfo[0].endDay,
					daysOfWeek: [1, 4]*/
