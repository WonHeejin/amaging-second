let intCode = "";

let divideCode = "";

function divide(menuCode) {
	intCode = menuCode;
}

function PCDivide(PCCode) {
	divideCode = PCCode;
}

function myChildList() {
	sessionStorage.removeItem("acCode");
	const userId = document.getElementsByName("userId")[0].value;
	const data = "userId=" + userId;
	getAjaxData("MyChildList",data,"childSelect","post")
}

function childSelect(dat) {
	if(dat != '') {
	let data = JSON.parse(dat);
	let sCode = sessionStorage.getItem("sCode");
	const mainpage = document.getElementById("mainpage");
	const checkCode = "1133";
			
			const selectMom = document.createElement("div");
			selectMom.setAttribute("id","selectMom");
			selectMom.style.width = "400px";
			selectMom.style.height = "50px";
			selectMom.style.position = "relative";
			selectMom.style.left = "2%";
			selectMom.style.top = "1%";
			selectMom.setAttribute("id","selectMom");
			const cSelect = document.createElement("select");
			cSelect.setAttribute("id", "cSelect");
			cSelect.setAttribute("onchange","childSelected(" + checkCode + "," + 1 + ")");
			cSelect.style.width = "200px";
			cSelect.style.height = "40px";
			cSelect.style.borderRadius = "5px";
			cSelect.style.border = "2px solid #92acbb";
			cSelect.style.position = "relative";
			cSelect.style.left = "0%";
			cSelect.style.top = "1%";
			cSelect.style.float = "left";
			
			let firstOption = document.createElement("option");
				firstOption.innerHTML = "자녀 선택"
				firstOption.setAttribute("selected","selected");
				firstOption.setAttribute("disabled","disabled");
				cSelect.appendChild(firstOption);
				for(let i=0; i<data.length; i++) {
					let option = document.createElement("option");
					option.setAttribute("id",data[i].studentId);
					option.setAttribute("value",data[i].studentId);
					option.innerHTML = data[i].sname;
					if(sCode != "") {
						if (sCode == data[i].studentId) {
							option.setAttribute("selected", "selected")
							childSelected(data[i].studentId,sCode);
						}
					}
					cSelect.appendChild(option);
				}

			selectMom.appendChild(cSelect);
		if(mainpage.hasChildNodes()) {
			while(mainpage.hasChildNodes()){
				mainpage.removeChild(mainpage.firstChild);
			}
		}
		
		const sjDiv = document.createElement("div");
		sjDiv.setAttribute("id","sjDiv");
		sjDiv.style.width = "200px";
		mainpage.appendChild(selectMom);
		mainpage.appendChild(sjDiv);
	}
}

function childSelected(selectedCode,sessionCode) {
	sessionStorage.removeItem("acCode");
	if(selectedCode != "1133") {
		if(selectedCode == sessionCode) {
			childAcademyList(selectedCode,"p");
			sessionStorage.setItem("sCode",selectedCode);
		}
	}else {
		let cSelect = document.getElementById("cSelect");
		let sCode = cSelect.options[cSelect.selectedIndex].value;
			sessionStorage.setItem("sCode",sCode);
		if(sCode != sessionCode) {
			const presentSCode = document.getElementById("sCode");
			presentSCode.setAttribute("value",sCode);
			childAcademyList(sCode,"P");
		}else {
			childAcademyList(sCode,"P");
		}
	}
}

function childAcademyList(studentId,code) {
	PCDivide(code);
	
	const mainpage = document.getElementById("mainpage");
	
	

	if(code == "P") {
		const selectMom = document.getElementById("selectMom");
		const aSelectDiv = document.createElement("div");
		aSelectDiv.setAttribute("id","aSelectDiv");
		aSelectDiv.style.position = "relative";
		aSelectDiv.style.left = "0%";
		aSelectDiv.style.top = "1%";
		aSelectDiv.style.float = "left";
		selectMom.appendChild(aSelectDiv);
	}else{
		sessionStorage.removeItem("acCode");
		const selectMom = document.createElement("div");
		selectMom.setAttribute("id","selectMom");
		selectMom.style.width = "400px";
		selectMom.style.height = "50px";
		selectMom.style.position = "relative";
		selectMom.style.left = "2%";
		selectMom.style.top = "1%";
		const sjDiv = document.createElement("div");
		sjDiv.setAttribute("id","sjDiv");
		sjDiv.style.width = "150px";
		mainpage.appendChild(selectMom);
		mainpage.appendChild(sjDiv);
	}
	const data = "userId=" + studentId;
	sessionStorage.setItem("sCode",studentId);
	getAjaxData("ChildAcademy",data,"childAcademySelect","post")
}

function childAcademySelect(dat) {
	if(dat != '[]') {
	const data = JSON.parse(dat);
	const aCode = sessionStorage.getItem("acCode");
	const mainpage = document.getElementById("mainpage");
	const selectMom = document.getElementById("selectMom");
	if(divideCode == "P") {
	const aSelectDiv = document.getElementById("aSelectDiv");
			if(aSelectDiv.hasChildNodes()) {
				while(aSelectDiv.hasChildNodes()){
					aSelectDiv.removeChild(aSelectDiv.firstChild);
				}
			}
	}
			const aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect");
			aSelect.setAttribute("onchange","academySelected()");
			aSelect.style.width = "200px";
			aSelect.style.height = "40px";
			aSelect.style.borderRadius = "5px";
			aSelect.style.border = "2px solid #92acbb";
			
			
			let firstOption = document.createElement("option");
				firstOption.innerHTML = "학원 선택"
				firstOption.setAttribute("selected","selected");
				firstOption.setAttribute("disabled","disabled");
				aSelect.appendChild(firstOption);
				for(let i=0; i<data.length; i++) {
					let option = document.createElement("option");
					option.setAttribute("id",data[i].acCode);
					option.setAttribute("value",data[i].acCode);
					option.innerHTML = data[i].acName;
					if(aCode != "") {
						if (aCode == data[i].acCode) {
							option.setAttribute("selected", "selected")
							academySelected(data[i].acCode);
						}
					}
					aSelect.appendChild(option);
				}
				if(divideCode == "P") {
				aSelectDiv.appendChild(aSelect);
				}else {
				selectMom.appendChild(aSelect);
				}
			
			const bigMom = document.createElement("div");
			bigMom.setAttribute("id","bigMom");
			bigMom.style.width = "50%";
			bigMom.style.height = "30%";
			bigMom.style.marginLeft = "20%";
			bigMom.style.marginTop = "-4%";
			const subjectDiv = document.createElement("div");
			subjectDiv.setAttribute("id","subjectDiv");
			subjectDiv.style.height = "20%";
			const tableMom = document.createElement("div");
			tableMom.setAttribute("id","tableMom");
			tableMom.style.height = "80%";
			tableMom.style.float = "left";
			tableMom.style.overflow = "auto";
			tableMom.style.overflowX = "hidden"
			
			const lineChartDiv = document.createElement("div");
			lineChartDiv.setAttribute("id","lineChartDiv");
			lineChartDiv.style.width = "700px";
			lineChartDiv.style.height = "400px";
			lineChartDiv.style.marginTop = "-20%";
			bigMom.appendChild(subjectDiv);
			bigMom.appendChild(tableMom);
			bigMom.appendChild(lineChartDiv);
			
			
			mainpage.appendChild(bigMom);
	}else {
		sendMessage("등록된 수업이 없습니다.");
	}
	
}

function academySelected(selectedCode) {
	const userId = sessionStorage.getItem("sCode");;
		let sAcCode = sessionStorage.getItem("acCode");
	const lineChartDiv = document.getElementById("lineChartDiv");
	if(lineChartDiv.hasChildNodes()) {
		while(lineChartDiv.hasChildNodes()){
			lineChartDiv.removeChild(lineChartDiv.firstChild);
		}
	}
	if(selectedCode != undefined) {
			sessionStorage.setItem("acCode",selectedCode);
			const data = "userId=" + userId + "&acCode=" + selectedCode;
			getAjaxData("ChildSubject",data,"subjectOnCl","post");
	}else {
		let aCode = document.getElementById("aSelect");
		let acCode = aCode.options[aCode.selectedIndex].value;
		if(acCode != sAcCode) {
			sessionStorage.setItem("acCode",acCode);
		}
			const data = "userId=" + userId + "&acCode=" + acCode;
			getAjaxData("ChildSubject",data,"subjectOnCl","post");
	}
}

function subjectOnCl(dat) {
	if(dat != '[]') {
		const subjectDiv = document.getElementById("subjectDiv");
		const tableMom = document.getElementById("tableMom");
		const selectMom = document.getElementById("selectMom");
		const sjDiv = document.getElementById("sjDiv");
		const childCode = sessionStorage.getItem("sCode");
		let data = JSON.parse(dat);
		if(sjDiv.hasChildNodes()) {
			while(sjDiv.hasChildNodes()) {
			sjDiv.removeChild(sjDiv.firstChild);
			}
		}
		if(subjectDiv.hasChildNodes()) {
			while(subjectDiv.hasChildNodes()) {
			subjectDiv.removeChild(subjectDiv.firstChild);
			}
		}
		if(tableMom.hasChildNodes()) {
			while(tableMom.hasChildNodes()) {
			tableMom.removeChild(tableMom.firstChild);
			}
		}
				for(let i=0; i<data.length; i++) {
					let classBtn = document.createElement("input");
						classBtn.setAttribute("class","selectAndButton");
						classBtn.setAttribute("onclick", "getMyGrade('"+ data[i].subjectCode + "','"+ data[i].subjectName + "','" + data[i].sbacode + "','" + childCode + "')");
						classBtn.setAttribute("id",data[i].subjectCode);
						classBtn.setAttribute("value",data[i].subjectName);
						classBtn.setAttribute("type","button");
						classBtn.style.textAlign = "center";
						(i == 0)? classBtn.style.marginTop = "20px" : classBtn.style.marginTop = "18px";
						classBtn.style.cursor = "pointer";
						classBtn.style.marginLeft = "5px";
						classBtn.style.width = "140px";
						classBtn.style.height = "50px";
						classBtn.style.borderRadius = "5px";
						classBtn.style.border = "none";
						classBtn.style.background = "#EAEAEA";
						
						sjDiv.appendChild(classBtn);
				}
				
				selectMom.appendChild(sjDiv);
	}else {
		sendMessage("등록된 반이 존재하지 않습니다.");
	}
}

function getMyGrade(subjectCode,subjectName,sbacode,userId) {
	sessionStorage.setItem("sjName",subjectName);
	let aCode = document.getElementById("aSelect");
	let acCode = aCode.options[aCode.selectedIndex].value;
	const mainpage = document.getElementById("mainpage");
	const sbaCodeHidden = document.createElement("input");
	sbaCodeHidden.setAttribute("id","sbacode");
	sbaCodeHidden.setAttribute("type","hidden");
	sbaCodeHidden.setAttribute("value",sbacode);
	mainpage.appendChild(sbaCodeHidden);
	const data = "sBACode=" + sbacode + "&acCode=" + acCode + "&subjectCode=" + subjectCode + "&studentId=" + userId;
	getAjaxData("GetSubjectGrade",data,"displayMyGrade","post")
}

function displayMyGrade(dat) {
	if(dat != '[]') {
	let data = JSON.parse(dat);
	const mainpage = document.getElementById("mainpage");
	const tableMom = document.getElementById("tableMom");
	
			let table = document.createElement("table");
			table.style.borderCollapse = "separate";
			table.style.borderSpacing = "10px";
			let mTr = createTr("mTr1");
			let mTd1 = createTd("mTd1");
			mTd1.style.width = "300px";
			let mTd2 = createTd("mTd2");
			mTd2.style.width = "300px";
			let mTd3 = createTd("mTd3");
			let mTd4 = createTd("mTd4");
			let mTd5 = createTd("mTd5");
			let mTd6 = createTd("mTd6");
			mTd1.innerHTML = "학원";
			mTd2.innerHTML = "수업";
			mTd3.innerHTML = "날짜";
			mTd4.innerHTML = "과목";
			mTd5.innerHTML = "점수";
			mTd6.innerHTML = "반석차";
			
			mTr.appendChild(mTd1);
			mTr.appendChild(mTd2);
			mTr.appendChild(mTd3);
			mTr.appendChild(mTd4);
			mTr.appendChild(mTd5);
			mTr.appendChild(mTd6);
			
			table.appendChild(mTr);
			
			for(let i=0; i<data.length; i++) {
				let tr = createTr("tr1");
				
				let td1 = createSTd("td1");
				td1.style.width = "300px";
				let td2 = createSTd("td2");
				td2.style.width = "300px";
				let td3 = createSTd("td3");
				let td4 = createSTd("td4");
				let td5 = createSTd("td5");
				let td6 = createSTd("td6");
				
				td1.innerHTML = data[i].acName;
				td2.innerHTML = data[i].clName;
				td3.innerHTML = data[i].month;
				td4.innerHTML = data[i].subjectName;
				td5.innerHTML = data[i].score;
				td6.innerHTML = data[i].rank + "/" + data[i].headCount;
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				tr.appendChild(td6);
			table.appendChild(tr);
			}
		if(tableMom.hasChildNodes()) {
			while(tableMom.hasChildNodes()) {
				tableMom.removeChild(tableMom.firstChild);
			}
		}
		if(subjectDiv.hasChildNodes()) {
			while(subjectDiv.hasChildNodes()) {
				subjectDiv.removeChild(subjectDiv.firstChild);
			}
		}
		const text = document.createElement("h4");
		text.innerHTML = "최근 성적";
		text.style.border = "none";
		text.style.textAlign = "center";
		text.style.marginTop = "30px";
		text.style.fontSize = "30px";
		subjectDiv.appendChild(text);
		subjectDiv.style.textAlign = "center";
	tableMom.appendChild(table);	
	const lineChart = document.createElement("canvas");
	lineChart.setAttribute("id","lineChart");
	lineChart.style.width = "200px";
	lineChart.style.height = "120px";
	lineChart.style.border = "1px solid #ffffff";
	const lineChartDiv = document.getElementById("lineChartDiv");
	lineChartDiv.appendChild(lineChart);
	
	const sbacode = document.getElementById("sbacode").value;
	const studentId = sessionStorage.getItem("sCode");
	const forGraph = "sBACode=" + sbacode + "&studentId=" + studentId;
	
	getAjaxData("GetGradeForGraph",forGraph,"subjectGraph","post");
	
	}else {
		sendMessage("등록된 성적이 없습니다.");
		if(tableMom.hasChildNodes()){
			while(tableMom.hasChildNodes()){
				tableMom.removeChild(tableMom.firstChild);
			}
		}
	
	}
}

function subjectGraph(json){
	const jsonData = JSON.parse(json);
	
	const date1 = jsonData[0].month;
	const date2 = jsonData[1].month;
	const date3 = jsonData[2].month;
	const date4 = jsonData[3].month;
	const date5 = jsonData[4].month;
	const date6 = jsonData[5].month;
	
	const score1 = jsonData[0].score;
	const score2 = jsonData[1].score;
	const score3 = jsonData[2].score;
	const score4 = jsonData[3].score;
	const score5 = jsonData[4].score;
	const score6 = jsonData[5].score;
	
	const sjName = sessionStorage.getItem("sjName");
  new Chart(document.getElementById("lineChart"), {
	type: 'line',
	data: {
    labels: [parseInt(date1),parseInt(date2),parseInt(date3),parseInt(date4),parseInt(date5),parseInt(date6)],
    datasets: [{ 
        data: [parseInt(score1),parseInt(score2),parseInt(score3),parseInt(score4),parseInt(score5),parseInt(score6)],
        label: sjName,
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: '성적 그래프'
    }
  }
});
	//for(let i=0; i<jsonData.length; i++) {
	//	graphData.data.labels.push(jsonData[i].month);
	//	graphData.data.datasets[0].data.push(jsonData[i].score);
	//}
}

/* Teacher */
function myAcademyList(userId,menuCode) {
	const acCode = document.getElementsByName("acCode")[0].value;
	sessionStorage.setItem("acCode",acCode);
	const data = "teacherId=" + userId;
	divide(menuCode);
	getAjaxData("MyAcademyList",data,"academySelect","post")
}

function academySelect(dat) {
	const data = JSON.parse(dat);
	//let aCode = (document.getElementsByName("acCode")[0].value != '')? document.getElementsByName("acCode")[0].value : '';
	const aCode = sessionStorage.getItem("acCode");
	const mainpage = document.getElementById("mainpage");
	//const checkCode = "1133";
	if(mainpage.hasChildNodes()){
		while(mainpage.hasChildNodes()){
			mainpage.removeChild(mainpage.firstChild);
		}
	}
			const selectMom = document.createElement("div");
			selectMom.setAttribute("id","selectMom");
			selectMom.style.width = "600px";
			selectMom.style.height = "50px";
			selectMom.style.position = "relative";
			selectMom.style.left = "2%";
			selectMom.style.top = "1%";
			let aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect");
			//aSelect.setAttribute("onchange","makeSelected(" + checkCode + "," + aCode +")");
			aSelect.setAttribute("onchange","makeSelected()");
			aSelect.style.width = "200px";
			aSelect.style.height = "40px";
			aSelect.style.borderRadius = "5px";
			aSelect.style.border = "2px solid #92acbb";
			aSelect.style.position = "relative";
			aSelect.style.left = "0%";
			aSelect.style.top = "1%";
			aSelect.style.float = "left";
			
			
			let firstOption = document.createElement("option");
				firstOption.innerHTML = "학원 선택"
				//if(acCode == null) {
				firstOption.setAttribute("selected","selected");
				//}
				firstOption.setAttribute("disabled","disabled");
				aSelect.appendChild(firstOption);
				for(let i=0; i<data.length; i++) {
					let option = document.createElement("option");
					option.setAttribute("id",data[i].acCode);
					option.setAttribute("value",data[i].acCode);
					option.innerHTML = data[i].acName;
					if(aCode != "") {
						if (aCode == data[i].acCode) {
							option.setAttribute("selected", "selected")
							makeSelected(data[i].acCode);
						}
					}
					aSelect.appendChild(option);
				}
			
			if(mainpage.hasChildNodes()) {
				while(mainpage.hasChildNodes()) {
				mainpage.removeChild(mainpage.firstChild);
				}
			}

			const cSelect = document.createElement("div");
			cSelect.setAttribute("id","cSelect");
			selectMom.appendChild(cSelect);
			selectMom.appendChild(aSelect);
			const bigMom = document.createElement("div");
			bigMom.setAttribute("id","bigMom");
			bigMom.style.width = "90%";
			bigMom.style.height = "70%";
			if(intCode == "get") {
			bigMom.style.marginLeft = "12%";
			}else {
			bigMom.style.marginLeft = "17%";
			}
			//bigMom.style.border = "1px solid #000000";
			bigMom.style.marginTop = "3%";
			//bigMom.style.float = "left";
			const dateDiv = document.createElement("div");
			dateDiv.setAttribute("id","dateDiv");
			dateDiv.style.height = "15%";
			//dateDiv.style.border = "1px solid #000000";
			const DSDiv = document.createElement("div");
			dateDiv.appendChild(DSDiv);
			DSDiv.setAttribute("id","DSDiv");
			DSDiv.style.position = "absolute";
			DSDiv.style.left = "53%";
			DSDiv.style.marginTop = "10px";
			DSDiv.style.height = "5%";
			//DSDiv.style.top = "50%";
			//DSDiv.style.transform = "translate(-50%,-50%)";
			DSDiv.style.width = "20%";
			//DSDiv.style.height = "100%";
			const tableMom = document.createElement("div");
			tableMom.setAttribute("id","tableMom");
			tableMom.setAttribute("type","hidden");
			tableMom.style.marginTop = "0%";
			tableMom.style.height = "75%";
			//tableMom.style.border = "1px solid #000000";
			tableMom.style.float = "left";
			tableMom.style.overflow = "auto";
			tableMom.style.overflowX = "hidden";
			tableMom.style.paddingTop = "3%";
			//tableMom.style.float = "left";
			bigMom.appendChild(dateDiv);
			bigMom.appendChild(tableMom);
			
			mainpage.appendChild(selectMom);
			mainpage.appendChild(bigMom);
}

function makeSelected(selectedCode) {
	const userId = document.getElementsByName("userId")[0].value;

	if(selectedCode != undefined) {
			sessionStorage.setItem("acCode",selectedCode);
			const data = "teacherId=" + userId + "&acCode=" + selectedCode;
			getAjaxData("MyClassList",data,"classOnAc","post");
	}else {
		let aCode = document.getElementById("aSelect");
		let acCode = aCode.options[aCode.selectedIndex].value;
		let sAcCode = sessionStorage.getItem("acCode");
		if(acCode != sAcCode) {
			openModal(acCode);
		}else {
			sessionStorage.setItem("acCode",acCode);
			const data = "teacherId=" + userId + "&acCode=" + acCode;
		
			getAjaxData("MyClassList",data,"classOnAc","post");
		}
	}
}

function openModal(acCode) {
	const exampleModal = document.getElementById("exampleModal");
    	  exampleModal.style.display = "flex"
	const confirmBtn = document.getElementById("confirmBtn");
		  confirmBtn.setAttribute("onclick","checkPassword(" + acCode + ")");
	const btnclose = document.getElementById("btn-close");
		btnclose.addEventListener("click", e => {
    		exampleModal.style.display = "none"
	})
}

function closeModal() {
	const exampleModal = document.getElementById("exampleModal");
    	  exampleModal.style.display = "none"
}

function checkPassword(acCode) {
	const acHidden = document.getElementsByName("acCode")[0];
	acHidden.setAttribute("value",acCode);
	const userId = document.getElementsByName("userId")[0].value;
	const inputPwd = document.getElementById("inputPwd").value;
	const data = "teacherId=" + userId + "&acCode=" + acCode + "&password=" + inputPwd;
	getAjaxData("CheckPwd",data,"classOnAc","post");
}

function classOnAc(dat) {
	closeModal()
	if(dat != '') {
		const presentAcCode = document.getElementsByName("acCode")[0].value;
		sessionStorage.setItem("acCode",presentAcCode);
		const cSelect = document.getElementById("cSelect");
		const tableMom = document.getElementById("tableMom");

		let data = JSON.parse(dat);

		if(cSelect.hasChildNodes()) {
			while(cSelect.hasChildNodes()) {
			cSelect.removeChild(cSelect.firstChild);
			}
		}
		if(tableMom.hasChildNodes()) {
			while(tableMom.hasChildNodes()) {
			tableMom.removeChild(tableMom.firstChild);
			}
		}
				for(let i=0; i<data.length; i++) {
					let classBtn = document.createElement("input");
						classBtn.setAttribute("onclick", "chooseDate('"+ data[i].clCode +"')");
						classBtn.setAttribute("id",data[i].clCode);
						classBtn.setAttribute("type","button");
						classBtn.setAttribute("value",data[i].clName);
						classBtn.style.textAlign = "center";
						classBtn.style.border = "none";
						classBtn.style.marginLeft = "7px";
						classBtn.style.height = "36px";
						classBtn.style.background = "#CFCFCF";
						
						cSelect.appendChild(classBtn);
				}
			const selectMom = document.getElementById("selectMom");
			selectMom.appendChild(cSelect);
	}else {
		sendMessage("등록된 반이 존재하지 않습니다.");
	}
}

function chooseDate(clCode) {
	const dateDiv = document.getElementById("dateDiv");
	const DSDiv = document.getElementById("DSDiv");
	const insDate = document.createElement("input");
	insDate.setAttribute("id","insDate");
	insDate.setAttribute("type","month");
	insDate.setAttribute("value",new Date().toISOString().slice(0, 7));
	//insDate.setAttribute("onclick","getGrade('" + clCode + "')");
	insDate.setAttribute("onchange","getGrade('" + clCode + "')");
	insDate.style.position = "absolute";
	//insDate.style.left = "52%";
	insDate.style.width = "150px";
	//insDate.style.border = "none";
	//insDate.style.stroke = "none";
	//insDate.style.transform = "translate: translate(-50%)";
	if(DSDiv.hasChildNodes()) {
		while(DSDiv.hasChildNodes()){
			DSDiv.removeChild(DSDiv.firstChild);
		}
	}
	DSDiv.appendChild(insDate);
	getGrade(clCode);
}

function getGrade(clCode) {
	const teacherId = document.getElementsByName("userId")[0].value;
	const acCode = sessionStorage.getItem("acCode");
	const action = (intCode == "reg")? "GetStudent" : "GetGrade" ;
	const date = document.getElementById("insDate").value;	
	const sDate = date.substring(0,4) + date.substring(5,7);
	const fn = (intCode == "get")? "displayGrade": (intCode == "mod")? "modGradeForm" : "regGradeForm";
	let data = "acCode=" + acCode + "&clCode=" + clCode + "&teacherId=" + teacherId + "&month=" + sDate;
	getAjaxData(action,data,fn,"post");
}

function displayGrade(dat) {
	if(dat != '[]') {
	let data = JSON.parse(dat);
	const tableMom = document.getElementById("tableMom");
	const mainpage = document.getElementById("mainpage");
	if(tableMom.hasChildNodes()) {
		while(tableMom.hasChildNodes()) {
		tableMom.removeChild(tableMom.firstChild);
		}
	}
			let table = document.createElement("table");
			table.style.borderCollapse = "separate";
			table.style.borderSpacing = "10px";
			let mTr = createTr("mTr1");
			let mTd1 = createTd("mTd1");
			let mTd2 = createTd("mTd2");
			let mTd3 = createTd("mTd3");
			let mTd4 = createTd("mTd4");
			let mTd5 = createTd("mTd5");
			mTd1.innerHTML = "시험명";
			mTd2.innerHTML = "시험날짜";
			mTd3.innerHTML = "학생이름";
			mTd4.innerHTML = "점수";
			mTd5.innerHTML = "반석차";
			
			mTr.appendChild(mTd1);
			mTr.appendChild(mTd2);
			mTr.appendChild(mTd3);
			mTr.appendChild(mTd4);
			mTr.appendChild(mTd5);
			
			table.appendChild(mTr);
			
			for(let i=0; i<data.length; i++) {
				let tr = createTr("tr1");
				
				let td1 = createSTd("td1");
				let td2 = createSTd("td2");
				let td3 = createSTd("td3");
				let td4 = createSTd("td4");
				let td5 = createSTd("td5");
				
				td1.innerHTML = data[i].subjectName;
				td2.innerHTML = data[i].month;
				td3.innerHTML = data[i].sname;
				td4.innerHTML = data[i].score;
				td5.innerHTML = data[i].rank + "/" + data[i].headCount;
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
			table.appendChild(tr);
			}
		//tableMom.style.border = "0.7px solid #BDBDBD";
		tableMom.appendChild(table);
	}else {
		sendMessage("등록된 성적이 없습니다.");
		tableMom.style.border = "none";
		if(tableMom.hasChildNodes()){
			while(tableMom.hasChildNodes()){
				tableMom.removeChild(tableMom.firstChild);
			}
		}
	}
}


function modGradeForm(dat) {
	if(dat != '') {
		if(dat == '[]') {
			sendMessage("등록된 성적이 존재하지 않습니다.");
		}else {
	let data = JSON.parse(dat);
	const tableMom = document.getElementById("tableMom");
	const mainpage = document.getElementById("mainpage");

			let table = document.createElement("table");
			table.setAttribute("id","theTable");
			table.style.borderCollapse = "separate";
			table.style.borderSpacing = "10px";
			let mTr = createTr("mTr1");
			let mTd1 = createTd("mTd1");
			let mTd2 = createTd("mTd2");
			let mTd3 = createTd("mTd3");
			let mTd4 = createTd("mTd4");
			mTd1.innerHTML = "시험명";
			mTd2.innerHTML = "학생이름";
			mTd3.innerHTML = "점수";
			mTd4.innerHTML = "반석차";
			
			mTr.appendChild(mTd1);
			mTr.appendChild(mTd2);
			mTr.appendChild(mTd3);
			mTr.appendChild(mTd4);
			
			table.appendChild(mTr);
			
			for(let i=0; i<data.length; i++) {
				let tr = createTr("tr1");
				let td1 = createSTd(data[i].sbacode);
				let td2 = createSTd(data[i].studentId);
				let td3 = createSTd("td3");
				let td4 = createSTd("td4");
				
				td1.innerHTML = data[i].subjectName;
				td2.innerHTML = data[i].sname;
				
				let mScore = document.createElement("input");
				mScore.setAttribute("type","text");
				mScore.setAttribute("value",data[i].score);
				mScore.style.textAlign = "center";
				mScore.style.width = "95%";
				mScore.style.height = "95%";
				mScore.style.border = "none";
				td3.appendChild(mScore);
				
				let mRank = document.createElement("input");
				mRank.setAttribute("type","text");
				mRank.setAttribute("value",data[i].rank);
				mRank.style.width = "50%";
				mRank.style.height = "100%";
				mRank.style.textAlign = "right";
				mRank.style.width = "50px";
				mRank.style.height = "22px";
				mRank.style.border = "none";
				td4.appendChild(mRank);
				
				let mhCount = document.createElement("input");
				mhCount.setAttribute("readonly",true);
				mhCount.setAttribute("value"," / " +data[i].headCount);
				mhCount.style.textAlign = "center";
				mhCount.style.width = "40%";
				mhCount.style.height = "100%";
				mhCount.style.border = "none";
				mhCount.style.stroke = "none";
				td4.appendChild(mhCount);
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
			table.appendChild(tr);
			}
			
			const regBtn = document.createElement("input");
			regBtn.setAttribute("type","button");
			regBtn.setAttribute("value","등록");
			//regBtn.setAttribute("onclick","modToJson('mod')");
			regBtn.setAttribute("onclick","beforeAction('mod')");
			regBtn.style.textAlign = "center";
			regBtn.style.position = "absolute";
			regBtn.style.top = "75%";
			regBtn.style.right = "10%";
			regBtn.style.cursor = "pointer";
			regBtn.style.width = "90px";
			regBtn.style.height = "40px";
			
		mainpage.appendChild(regBtn);
		
		
	if(tableMom.hasChildNodes()) {
		while(tableMom.hasChildNodes()) {
		tableMom.removeChild(tableMom.firstChild);
		}
	}
	tableMom.appendChild(table);
	}
	}
}
	
	// modToJson('mod')
function beforeAction(a) {
	Swal.fire({
  title: '저장 하시겠습니까?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: '저장',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
	modToJson(a);
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
}

// 수정/등록시 등록버튼 onclick function
function modToJson(numb){
	let action = "";
	const theTable = document.getElementById("theTable");
	let gradeJson = [];
	for (let i=1; i<=theTable.childNodes.length-1; i++ ) {
		let tr = theTable.childNodes[i];
		
		//sbaCode
			let subjectTd = tr.childNodes[0];
			let SBACodes = subjectTd.getAttribute("id");
	
		//studentId
			let studentTd = tr.childNodes[1];
			let studentIds = studentTd.getAttribute("id");
			
		//score
			let scoreTd = tr.childNodes[2];
			let scores = scoreTd.childNodes[0].value;
			
		//rank
			let rankTd = tr.childNodes[3];
			let ranks = rankTd.childNodes[0].value;
		
		//acCode
			const acCodes = SBACodes.substring(5,15);
		//clCode
			const clCodes = SBACodes.substring(20,25);
		//teacherId
			const teacherIds = SBACodes.substring(25,30);
			
		//date
			
		//if(numb != "reg") {		
		//	gradeJson.push({sbacode:SBACodes,studentId:studentIds,score:scores,rank:ranks,acCode:acCodes,clCode:clCodes,teacherId:teacherIds});
		//}else {
			const date = document.getElementById("insDate").value;	
			const sDate = date.substring(0,4) + date.substring(5,7);
			gradeJson.push({sbacode:SBACodes,studentId:studentIds,score:scores,rank:ranks,month:sDate,acCode:acCodes,clCode:clCodes,teacherId:teacherIds});
		//}
	}
	if(numb != "reg") {
		action = "ModGrade";
	}else {
		action = "RegGrade";
	}
	//displaySomething(JSON.stringify(gradeJson));
	modAjax(action,JSON.stringify(gradeJson),"afterAction","post");
}

function afterAction(a) {
const twoB = document.getElementById("twoB");
	Swal.fire(a).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
	twoB.click();
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
}


function regGradeForm(dat) {
	if(dat != '') {
		if(dat == '[]') {
			sendMessage("학생이 존재하지 않습니다.");
		}else {
	let data = JSON.parse(dat);
	const tableMom = document.getElementById("tableMom");
	const mainpage = document.getElementById("mainpage");
	if(tableMom.hasChildNodes()) {
		while(tableMom.hasChildNodes()){
			tableMom.removeChild(tableMom.firstChild);
		}
	}
			let table = document.createElement("table");
			table.setAttribute("id","theTable");
			table.style.borderCollapse = "separate";
			table.style.borderSpacing = "10px";
			let mTr = createTr("mTr1");
			let mTd1 = createTd("mTd1");
			let mTd2 = createTd("mTd2");
			let mTd3 = createTd("mTd3");
			let mTd4 = createTd("mTd4");
			mTd1.innerHTML = "시험명";
			mTd2.innerHTML = "학생이름";
			mTd3.innerHTML = "점수";
			mTd4.innerHTML = "반석차";
			
			mTr.appendChild(mTd1);
			mTr.appendChild(mTd2);
			mTr.appendChild(mTd3);
			mTr.appendChild(mTd4);
			
			table.appendChild(mTr);
			
			for(let i=0; i<data.length; i++) {
				let tr = createTr("tr1");
				let td1 = createSTd(data[i].sbacode);
				let td2 = createSTd(data[i].studentId);
				let td3 = createSTd("td3");
				let td4 = createSTd("td4");
				
				td1.innerHTML = data[i].subjectName;
				td2.innerHTML = data[i].sname;		
					
				let mScore = document.createElement("input");
				mScore.setAttribute("placeholder","점수 입력");
				mScore.setAttribute("type","number");
				mScore.setAttribute("min",0);
				mScore.setAttribute("max",100);
				mScore.style.textAlign = "center";
				mScore.style.width = "95%";
				mScore.style.height = "95%";
				mScore.style.border = "none";
				td3.appendChild(mScore);
				
				let mRank = document.createElement("input");
				mRank.setAttribute("placeholder","석차");
				mRank.setAttribute("type","number");
				mRank.setAttribute("min",1);
				mRank.setAttribute("max",data[i].headCount);
				mRank.style.width = "50%";
				mRank.style.height = "100%";
				mRank.style.textAlign = "right";
				mRank.style.border = "none";
				td4.appendChild(mRank);
				
				let mhCount = document.createElement("input");
				mhCount.setAttribute("readonly",true);
				mhCount.setAttribute("value"," / " +data[i].headCount);
				mhCount.style.textAlign = "left";
				mhCount.style.width = "40%";
				mhCount.style.height = "100%";
				mhCount.style.border = "none";
				mhCount.style.stroke = "none";
				td4.appendChild(mhCount);
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
			table.appendChild(tr);
			}
	
			const dateDiv = document.createElement("div");
			dateDiv.style.position = "absolute";
			dateDiv.style.top = "85%";
			dateDiv.style.right = "20%";
			dateDiv.style.cursor = "pointer";
			dateDiv.style.float = "left";
			//dateDiv.style.border = "1px solid #000000";
			const regBtn = document.createElement("input");
			regBtn.setAttribute("type","button");
			regBtn.setAttribute("value","등록");
			regBtn.setAttribute("onclick","beforeAction('reg')");
			//regBtn.style.position = "absolute";
			//regBtn.style.top = "75%";
			//regBtn.style.right = "20%";
			regBtn.style.cursor = "pointer";
		dateDiv.appendChild(regBtn);
	//if(tableMom.hasChildNodes()) {
	//	while(tableMom.hasChildNodes()) {
	//	tableMom.removeChild(tableMom.firstChild);
	//}
	
	tableMom.appendChild(table);
	mainpage.appendChild(dateDiv);
		}
	
	}else if (dat == ''){
		sendMessage("이미 성적이 등록되어 있습니다.");
	}
	
	
}




function modAjax(action,data,fn,method){
	const ajax = new XMLHttpRequest();
		ajax.onreadystatechange = function() {
			if ( ajax.readyState== 4 && ajax.status == 200) {
				window[fn](ajax.responseText);				
			}
		};
		if(method=="get"){
			action=(data!="")?(action+"?"+data):action;
			ajax.open("get", action, true);	
			ajax.send();
		}else{
			ajax.open("post", action, true);
			ajax.setRequestHeader("Content-type","application/json");	
			ajax.send(data);
		}
}

function createTr(id) {
	const tr = document.createElement("tr");
	tr.setAttribute("id",id);
	//tr.style.borderBottom = "5px solid #ffffff";
return tr;
}

function createTd(id) {
	const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.borderBottom = "4px solid #BDBDBD"
	td.style.borderRight = "4px solid #BDBDBD"
	td.style.borderRadius = "1px";
	td.style.marginLeft = "50px";
	td.style.width = "200px";
	td.style.height = "40px";
	td.style.textAlign = "center";
return td;
}

function createSTd(id) {
	const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.borderBottom = "2px solid #BDBDBD"
	td.style.borderRadius = "1px";
	td.style.width = "200px";
	td.style.height = "40px";
	td.style.textAlign = "left";
return td;
}