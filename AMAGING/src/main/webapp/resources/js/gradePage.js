let intCode = "";

let divideCode = "";

function divide(menuCode) {
	intCode = menuCode;
}

function PCDivide(PCCode) {
	divideCode = PCCode;
}

function myChildList() {
	const userId = document.getElementsByName("userId")[0].value;
	const data = "userId=" + userId;
	getAjaxData("MyChildList",data,"childSelect","post")
}

function childSelect(dat) {
	if(dat != '') {
	let data = JSON.parse(dat);
	let sCode = sessionStorage.getItem("sCode");
	let aCode = sessionStorage.getItem("acCode");
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
			cSelect.setAttribute("onchange","childSelected(" + checkCode + "," + aCode + ")");
			cSelect.style.width = "200px";
			cSelect.style.height = "40px";
			cSelect.style.borderRadius = "5px";
			cSelect.style.border = "2px solid #92acbb";
			cSelect.style.position = "relative";
			cSelect.style.left = "0%";
			cSelect.style.top = "1%";
			cSelect.style.float = "left";
			cSelect.style.fontFamily = "BMHANNAAir";
			cSelect.style.fontSize = "120%";
			
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
							childSelected(data[i].studentId,aCode);
						}
					}
					cSelect.appendChild(option);
				}

			selectMom.appendChild(cSelect);
		delChild("mainpage");
		
		const sjDiv = document.createElement("div");
		sjDiv.setAttribute("id","sjDiv");
		sjDiv.style.width = "200px";
		mainpage.appendChild(selectMom);
		mainpage.appendChild(sjDiv);
	}
}

function childSelected(selectedCode,code) {
	
		sessionStorage.removeItem("acCode");
	
	if(selectedCode != "1133") {
			childAcademyList(selectedCode,"p");
			sessionStorage.setItem("sCode",selectedCode);
			sessionStorage.setItem("acCode",code);
	}else {
		let cSelect = document.getElementById("cSelect");
		let sCode = cSelect.options[cSelect.selectedIndex].value;
			sessionStorage.setItem("sCode",sCode);
			sessionStorage.setItem("acCode",code);
			childAcademyList(sCode,"P");
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
	}else if(code == "C"){
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
	const aSelectDiv = document.getElementById("aSelectDiv");
	if(divideCode == "P") {
			delChild("aSelectDiv");
	}
			const aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect");
			aSelect.setAttribute("onchange","academySelected()");
			aSelect.style.width = "200px";
			aSelect.style.height = "40px";
			aSelect.style.borderRadius = "5px";
			aSelect.style.border = "2px solid #92acbb";
			aSelect.style.fontFamily = "BMHANNAAir";
			aSelect.style.fontSize = "120%";
			
			
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
					if(aCode != null) {
						if (aCode == data[i].acCode) {
							option.setAttribute("selected", "selected")
							academySelected(data[i].acCode);
						}
					}
					aSelect.appendChild(option);
				}
				if(divideCode == "P") {
				aSelectDiv.appendChild(aSelect);
				}else if(divideCode == "C") {
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
			lineChartDiv.setAttribute("type","hidden");
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
	const userId = sessionStorage.getItem("sCode");
		let sAcCode = sessionStorage.getItem("acCode");
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
		const lineChartDiv = document.getElementById("lineChartDiv");
		const sjDiv = document.getElementById("sjDiv");
		const childCode = sessionStorage.getItem("sCode");
		let data = JSON.parse(dat);
		
		if(lineChartDiv.hasChildNodes()) {
			delChild("lineChartDiv");
		}
		if(sjDiv.hasChildNodes()){
			delChild("sjDiv");
		}
		if(subjectDiv.hasChildNodes()){
			delChild("subjectDiv");
		}
		if(tableMom.hasChildNodes()){
			delChild("tableMom");
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
						classBtn.style.fontFamily = "BMHANNAAir";
						classBtn.style.fontSize = "120%";
						
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
	const tableMom = document.getElementById("tableMom");
	const subjectDiv = document.getElementById("subjectDiv");
	
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
			
		delChild("tableMom");
		delChild("subjectDiv");
		
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
	lineChartDiv.setAttribute("type","block");
	lineChartDiv.appendChild(lineChart);
	
	const sbacode = document.getElementById("sbacode").value;
	const studentId = sessionStorage.getItem("sCode");
	const forGraph = "sBACode=" + sbacode + "&studentId=" + studentId;
	
	getAjaxData("GetGradeForGraph",forGraph,"subjectGraph","post");
	
	}else {
		sendMessage("등록된 성적이 없습니다.");
		delChild("tableMom");
	
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
}

/* Teacher */
function myAcademyList(userId,menuCode) {
	const data = "teacherId=" + userId;
	divide(menuCode);
	getAjaxData("MyAcademyList",data,"academySelect","post")
}

function academySelect(dat) {
	const data = JSON.parse(dat);
	const aCode = sessionStorage.getItem("acCode");
	const mainpage = document.getElementById("mainpage");
	delChild("mainpage");
			const selectMom = document.createElement("div");
			selectMom.setAttribute("id","selectMom");
			selectMom.style.width = "1350px";
			selectMom.style.height = "50px";
			selectMom.style.position = "relative";
			selectMom.style.left = "2%";
			selectMom.style.top = "1%";
			let aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect");
			aSelect.setAttribute("onchange","makeSelected()");
			aSelect.style.width = "200px";
			aSelect.style.height = "40px";
			aSelect.style.borderRadius = "5px";
			aSelect.style.border = "2px solid #92acbb";
			aSelect.style.position = "relative";
			aSelect.style.left = "0%";
			aSelect.style.top = "1%";
			aSelect.style.float = "left";
			aSelect.style.fontFamily = "BMHANNAAir";
			aSelect.style.fontSize = "120%";
			
			
			let firstOption = document.createElement("option");
				firstOption.setAttribute("id","firstOption");
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
							makeSelected(data[i].acCode);
						}
					}
					aSelect.appendChild(option);
				}
			
			delChild("mainpage");

			const cSelect = document.createElement("div");
			cSelect.setAttribute("id","cSelect");
			selectMom.appendChild(cSelect);
			selectMom.appendChild(aSelect);
			const bigMom = document.createElement("div");
			bigMom.setAttribute("id","bigMom");
			bigMom.setAttribute("type","hidden");
			bigMom.style.width = "1300px";
			bigMom.style.height = "70%";
			bigMom.style.marginLeft = "0%";
			bigMom.style.marginTop = "3%";
			const DSDiv = document.createElement("div");
			DSDiv.setAttribute("id","DSDiv");
			DSDiv.style.position = "absolute";
			DSDiv.style.top = "0%";
			DSDiv.style.marginLeft = "83%";
			DSDiv.style.width = "20%";
			const tableMomT = document.createElement("div");
			tableMomT.setAttribute("id", "tableMomT");
			tableMomT.style.width = "99%";
			tableMomT.style.height = "15%";
			tableMomT.style.marginLeft = "20px";
			const tableMom = document.createElement("div");
			tableMom.setAttribute("id","tableMom");
			tableMom.style.width = "100%";
			tableMom.style.height = "85%";
			tableMom.style.marginLeft = "20px";
			tableMom.style.overflow = "auto";
			tableMom.style.overflowX = "hidden";
			selectMom.appendChild(DSDiv);
			bigMom.appendChild(tableMomT);
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
	const twoB = document.getElementById("twoB");
	const exampleModal = document.getElementById("exampleModal");
    	  exampleModal.style.display = "flex"
	const confirmBtn = document.getElementById("confirmBtn");
		  confirmBtn.setAttribute("onclick","checkPassword(" + acCode + ")");
	const btnclose = document.getElementById("btn-close");
		btnclose.addEventListener("click", e => {
    		exampleModal.style.display = "none"
			twoB.click();
	})
}

function closeModal() {
	const inputPwd = document.getElementById("inputPwd");
	inputPwd.setAttribute("value","");
	const exampleModal = document.getElementById("exampleModal");
    	  exampleModal.style.display = "none"
}

function checkPassword(acCode) {
	const acHidden = document.getElementsByName("acCode")[0];
	acHidden.setAttribute("value",acCode);
	const userId = document.getElementsByName("userId")[0].value;
	const inputPwd = document.getElementById("inputPwd").value;
	const data = "teacherId=" + userId + "&acCode=" + acCode + "&password=" + inputPwd;
	getAjaxData("CheckPwd",data,"goOrNot","post");
}

function goOrNot(data) {
	const twoB = document.getElementById("twoB");
	if(data == "0") {
		closeModal();
		sessionStorage.clear();
	Swal.fire({
  title: '비밀번호가 일치하지 않습니다. 다시 시도해주세요.',
  showDenyButton: true,
  showCancelButton: false,
  confirmButtonText: '확인',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
		twoB.click();
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
	}else{
		makeSelected(data);
	}
	

}

function classOnAc(dat) {
	closeModal()
		if(dat != '') {
			const cSelect = document.getElementById("cSelect");
	
			let data = JSON.parse(dat);
	
			delChild("cSelect");
			delChild("tableMom");
					for(let i=0; i<data.length; i++) {
						let classBtn = document.createElement("input");
							classBtn.setAttribute("onclick", "chooseDate('"+ data[i].clCode +"')");
							classBtn.setAttribute("id",data[i].clCode);
							classBtn.setAttribute("type","button");
							classBtn.setAttribute("value",data[i].clName);
							classBtn.style.textAlign = "center";
							classBtn.style.fontFamily = "BMHANNAAir";
							classBtn.style.fontSize = "120%";
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
	const DSDiv = document.getElementById("DSDiv");
	const selectMom = document.getElementById("selectMom");
	const bigMom = document.getElementById("bigMom");
	const insDate = document.createElement("input");
	const regBtnDiv = document.createElement("div");
	regBtnDiv.setAttribute("id","regBtnDiv");
	regBtnDiv.style.width = "90px";
	regBtnDiv.style.height = "40px";
	regBtnDiv.style.borderRadius = "5px";
	regBtnDiv.style.border = "2px solid #92acbb";
	regBtnDiv.style.border = "none";
	regBtnDiv.style.marginLeft = "87%";
	regBtnDiv.style.marginTop = "3%";
	insDate.setAttribute("id","insDate");
	insDate.setAttribute("type","month");
	insDate.setAttribute("value",new Date().toISOString().slice(0, 7));
	insDate.setAttribute("onchange","getGrade('" + clCode + "')");
	insDate.style.position = "absolute";
	insDate.style.width = "150px";
	insDate.style.height = "30px";
	insDate.style.fontFamily = "BMHANNAAir";
	insDate.style.fontSize = "100%";
	delChild("DSDiv");
	bigMom.appendChild(regBtnDiv);
	DSDiv.appendChild(insDate);
	selectMom.appendChild(DSDiv);
	getGrade(clCode);
}

function getGrade(clCode) {
	const teacherId = document.getElementsByName("userId")[0].value;
	const acCode = sessionStorage.getItem("acCode");
	const action = (intCode == "reg")? "GetStudent" : "GetGrade";
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
	const tableMomT = document.getElementById("tableMomT");
	delChild(tableMom);
	delChild(tableMomT);
	
	
			let tableT = document.createElement("table");
			tableT.setAttribute("id","tableT");
			tableT.style.borderCollapse = "separate";
			tableT.style.borderSpacing = "10px";
			tableT.style.width = "100%";
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
			
			tableT.appendChild(mTr);
			
			
			let table = document.createElement("table");
			table.style.borderCollapse = "separate";
			table.style.borderSpacing = "10px";
			table.style.width = "100%";
			for(let i=0; i<data.length; i++) {
				let tr = createTr("tr1");
				
				let td1 = createSTd("td1");
				td1.style.textAlign = "center";
				let td2 = createSTd("td2");
				td2.style.textAlign = "center";
				let td3 = createSTd("td3");
				td3.style.textAlign = "center";
				let td4 = createSTd("td4");
				td4.style.textAlign = "center";
				let td5 = createSTd("td5");
				td5.style.textAlign = "center";
				
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
		
		tableMom.appendChild(table);
		tableMomT.appendChild(tableT);
	}else {
		sendMessage("등록된 성적이 없습니다.");
		tableMom.style.border = "none";
		delChild("tableMom");
		delChild("tableMomT");
	}
}


function modGradeForm(dat) {
	if(dat != '') {
		if(dat == '[]') {
			sendMessage("등록된 성적이 존재하지 않습니다.");
		}else {
	let data = JSON.parse(dat);
	const tableMomT = document.getElementById("tableMomT");
	const tableMom = document.getElementById("tableMom");
	const regBtnDiv = document.getElementById("regBtnDiv");

			let tableT = document.createElement("table");
			tableT.setAttribute("id","tableT");
			tableT.style.borderCollapse = "separate";
			tableT.style.borderSpacing = "10px";
			tableT.style.width = "100%";
			let mTr = createTr("mTr1");
			let mTd1 = createTd("mTd1");
			let mTd2 = createTd("mTd2");
			let mTd3 = createTd("mTd3");
			let mTd4 = createTd("mTd4");
			mTd1.innerHTML = "시험명";
			mTd2.innerHTML = "학생이름";
			mTd3.innerHTML = "점수";
			mTd4.innerHTML = "총원";
			
			mTr.appendChild(mTd1);
			mTr.appendChild(mTd2);
			mTr.appendChild(mTd3);
			mTr.appendChild(mTd4);
			
			tableT.appendChild(mTr);
			
			
			let table = document.createElement("table");
			table.setAttribute("id","theTable");
			table.style.borderCollapse = "separate";
			table.style.borderSpacing = "10px";
			table.style.width = "100%";			
			for(let i=0; i<data.length; i++) {
				let tr = createTr("tr1");
				let td1 = createSTd(data[i].sbacode);
				let td2 = createSTd(data[i].studentId);
				let td3 = createSTd("td3");
				let td4 = createSTd("td4");
				
				td1.innerHTML = data[i].subjectName;
				td1.style.textAlign = "center";
				td2.innerHTML = data[i].sname;
				td2.style.textAlign = "center";
				td4.innerHTML = data[i].headCount;
				td4.style.textAlign = "center";
				
				let mScore = document.createElement("input");
				mScore.setAttribute("type","text");
				mScore.setAttribute("value",data[i].score);
				mScore.style.textAlign = "center";
				mScore.style.width = "95%";
				mScore.style.height = "95%";
				mScore.style.border = "none";
				mScore.style.fontFamily = "BMHANNAAir";
				mScore.style.fontSize = "120%";
				td3.appendChild(mScore);
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
			table.appendChild(tr);
			}
			
			const regBtn = document.createElement("input");
			regBtn.setAttribute("type","button");
			regBtn.setAttribute("value","등록");
			regBtn.setAttribute("onclick","beforeAction('mod')");
			regBtn.style.cursor = "pointer";
			regBtn.style.width = "90px";
			regBtn.style.height = "40px";
			regBtn.style.borderRadius = "5px";
			regBtn.style.border = "2px solid #92acbb";
			regBtn.style.border = "none";
			regBtn.style.marginLeft = "95%";
			regBtn.style.marginTop = "3%";
			regBtn.style.background = "#CFCFCF";
			regBtn.style.color = "#FFFFFF";
			regBtn.style.fontSize = "15px";
			regBtn.style.fontFamily = "BMHANNAAir";
			regBtn.style.fontSize = "120%";
	
	delChild("regBtnDiv");
		regBtnDiv.appendChild(regBtn);
		
		
	
	delChild("tableMom");
	delChild("tableMomT");
	tableMomT.appendChild(tableT);
	tableMom.appendChild(table);
	}
	}
}
	
function beforeAction(a) {
	Swal.fire({
  title: '저장 하시겠습니까?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: '저장',
  denyButtonText: `Don't save`,
}).then((result) => {
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
	for (let i=0; i<theTable.childNodes.length; i++ ) {
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
			let ranks = [];
		
				for(let w=0; w<theTable.childNodes.length; w++) {
					ranks.push({rank:1});
				}
			
			for(let a=0; a<theTable.childNodes.length; a++) {
				for(let b=0; b<theTable.childNodes.length; b++) {
					if(parseInt(theTable.childNodes[b].childNodes[2].childNodes[0].value) > parseInt(theTable.childNodes[a].childNodes[2].childNodes[0].value)) {
						ranks[a].rank++
					}
				}
			}
		
		//acCode
			const acCodes = SBACodes.substring(5,15);
		//clCode
			const clCodes = SBACodes.substring(20,25);
		//teacherId
			const teacherIds = SBACodes.substring(25,30);
			
		//date
			
			const date = document.getElementById("insDate");
			const dateValue = date.value;
			const sDate = dateValue.substring(0,4) + dateValue.substring(5,7);
			gradeJson.push({sbacode:SBACodes,studentId:studentIds,score:scores,rank:ranks[i].rank,month:sDate,acCode:acCodes,clCode:clCodes,teacherId:teacherIds});
		
	}
	if(numb != "reg") {
		action = "ModGrade";
	}else {
		action = "RegGrade";
	}
	
	modAjax(action,JSON.stringify(gradeJson),"afterAction","post");
}

function afterAction(a) {
const twoB = document.getElementById("twoB");
	Swal.fire(a).then((result) => {
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
	const tableMomT = document.getElementById("tableMomT");
	const tableMom = document.getElementById("tableMom");
	const mainpage = document.getElementById("mainpage");
	const bigMom = document.getElementById("bigMom");
	delChild("tableMom");
	delChild("tableMomT");
	
			let tableT = document.createElement("table");
			tableT.style.borderCollapse = "separate";
			tableT.style.borderSpacing = "10px";
			tableT.style.width = "100%";
			let mTr = createTr("mTr1");
			let mTd1 = createTd("mTd1");
			let mTd2 = createTd("mTd2");
			let mTd3 = createTd("mTd3");
			let mTd4 = createTd("mTd4");
			mTd1.innerHTML = "시험명";
			mTd2.innerHTML = "학생이름";
			mTd3.innerHTML = "점수";
			mTd4.innerHTML = "총원";
			
			mTr.appendChild(mTd1);
			mTr.appendChild(mTd2);
			mTr.appendChild(mTd3);
			mTr.appendChild(mTd4);
			
			tableT.appendChild(mTr);
			tableMomT.appendChild(tableT);
			let table = document.createElement("table");
			table.setAttribute("id","theTable");
			table.style.borderCollapse = "separate";
			table.style.borderSpacing = "10px";
			table.style.width = "100%";
			for(let i=0; i<data.length; i++) {
				let tr = createTr("tr1");
				let td1 = createSTd(data[i].sbacode);
				let td2 = createSTd(data[i].studentId);
				let td3 = createSTd("td3");
				let td4 = createSTd("td4");
				
				td1.innerHTML = data[i].subjectName;
				td1.style.textAlign = "center";
				td2.innerHTML = data[i].sname;	
				td2.style.textAlign = "center";	
				td4.innerHTML = data[i].headCount;
				td4.style.textAlign = "center";
					
				let mScore = document.createElement("input");
				mScore.setAttribute("placeholder","점수 입력");
				mScore.setAttribute("type","number");
				mScore.setAttribute("min",0);
				mScore.setAttribute("max",100);
				mScore.style.textAlign = "center";
				mScore.style.width = "95%";
				mScore.style.height = "95%";
				mScore.style.border = "none";
				mScore.style.fontFamily = "BMHANNAAir";
				mScore.style.fontSize = "120%";
				td3.appendChild(mScore);
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
			table.appendChild(tr);
			}
	
			tableMom.appendChild(table);

			const regBtn = document.createElement("input");
			regBtn.setAttribute("type","button");
			regBtn.setAttribute("value","등록");
			regBtn.setAttribute("onclick","beforeAction('reg')");
			regBtn.style.cursor = "pointer";
			regBtn.style.width = "90px";
			regBtn.style.height = "40px";
			regBtn.style.borderRadius = "5px";
			regBtn.style.border = "2px solid #92acbb";
			regBtn.style.border = "none";
			regBtn.style.marginLeft = "95%";
			regBtn.style.marginTop = "3%";
			regBtn.style.background = "#CFCFCF";
			regBtn.style.color = "#FFFFFF";
			regBtn.style.fontSize = "15px";
			regBtn.style.fontFamily = "BMHANNAAir";
			regBtn.style.fontSize = "120%";
		bigMom.appendChild(regBtn);
	
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

function delChild(name) {
	const element = document.getElementById(name);
	if(element.hasChildNodes()) {
		while (element.hasChildNodes()) {
			element.removeChild(element.firstChild);
		}
	}
}

function createTr(id) {
	const tr = document.createElement("tr");
	tr.setAttribute("id",id);
	tr.style.fontSize = "120%";
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
	td.style.fontSize = "15px";
	td.style.fontSize = "120%";
return td;
}

function createSTd(id) {
	const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.borderBottom = "2px solid #BDBDBD"
	td.style.borderRadius = "1px";
	td.style.width = "200px";
	td.style.height = "40px";
	td.style.textAlign = "center";
	td.style.textAlign = "left";
	td.style.fontSize = "15px";
	td.style.fontSize = "120%";
return td;
}