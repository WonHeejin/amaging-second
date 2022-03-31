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
	//let sCode = "S1067";
	const mainpage = document.getElementById("mainpage");
	const checkCode = "1133";
			
			const selectMom = document.createElement("div");
			selectMom.setAttribute("id","selectMom");
			selectMom.style.width = "600px";
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
				//if(acCode == null) {
				firstOption.setAttribute("selected","selected");
				//}
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
		
		mainpage.appendChild(selectMom);
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

function childAcademyList(userId,code) {
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
		selectMom.style.width = "600px";
		selectMom.style.height = "50px";
		selectMom.style.position = "relative";
		selectMom.style.left = "2%";
		selectMom.style.top = "1%";
		mainpage.appendChild(selectMom);		
	}
	const data = "userId=" + userId;
	sessionStorage.setItem("sCode",userId);
	getAjaxData("ChildAcademy",data,"childAcademySelect","post")
}

function childAcademySelect(dat) {
	if(dat != '[]') {
	const data = JSON.parse(dat);
	//let aCode = (document.getElementsByName("acCode")[0].value != '')? document.getElementsByName("acCode")[0].value : '';
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
	//if(mainpage.hasChildNodes()){
	//	while(mainpage.hasChildNodes()){
	//		mainpage.removeChild(mainpage.firstChild);
	//	}
	//}	
			const aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect");
			//aSelect.setAttribute("onchange","makeSelected(" + checkCode + "," + aCode +")");
			aSelect.setAttribute("onchange","academySelected()");
			aSelect.style.width = "200px";
			aSelect.style.height = "40px";
			aSelect.style.borderRadius = "5px";
			aSelect.style.border = "2px solid #92acbb";
			
			
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
		//	if(mainpage.hasChildNodes()) {
		//		while(mainpage.hasChildNodes()) {
		//		mainpage.removeChild(mainpage.firstChild);
		//		}
		//	}
			
			const bigMom = document.createElement("div");
			bigMom.setAttribute("id","bigMom");
			bigMom.style.width = "70%";
			bigMom.style.height = "20%";
			bigMom.style.marginLeft = "13%";
			//bigMom.style.border = "1px solid #000000";
			bigMom.style.marginTop = "6%";
			const subjectDiv = document.createElement("div");
			subjectDiv.setAttribute("id","subjectDiv");
			subjectDiv.style.height = "40%";
			//subjectDiv.style.border = "1px solid #000000";
			const tableMom = document.createElement("div");
			tableMom.setAttribute("id","tableMom");
			tableMom.style.height = "60%";
			tableMom.style.float = "left";
			tableMom.style.overflow = "auto";
			tableMom.style.overflowX = "hidden"
			
			bigMom.appendChild(subjectDiv);
			bigMom.appendChild(tableMom);
			
			
			mainpage.appendChild(bigMom);
	}else {
		alert("등록된 수업이 없습니다.");
	}
	
}

function academySelected(selectedCode) {
	const userId = sessionStorage.getItem("sCode");;
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
		const childCode = sessionStorage.getItem("sCode");
		let data = JSON.parse(dat);

		if(subjectDiv.hasChildNodes()) {
			while(subjectDiv.hasChildNodes()) {
			subjectDiv.removeChild(subjectDiv.firstChild);
			}
		}else {
			
		}
		if(tableMom.hasChildNodes()) {
			while(tableMom.hasChildNodes()) {
			tableMom.removeChild(tableMom.firstChild);
			}
		}
				for(let i=0; i<data.length; i++) {
					let classBtn = document.createElement("input");
						classBtn.setAttribute("class","selectAndButton");
						classBtn.setAttribute("onclick", "getMyGrade('"+ data[i].subjectCode + "','" + data[i].sbacode + "','" + childCode + "')");
						classBtn.setAttribute("id",data[i].subjectCode);
						classBtn.setAttribute("value",data[i].subjectName);
						classBtn.setAttribute("type","button");
						classBtn.style.textAlign = "center";
						classBtn.style.marginLeft = "5px";
						classBtn.style.width = "10%";
						classBtn.style.height = "100%";
						classBtn.style.borderRadius = "5%";
						
						subjectDiv.appendChild(classBtn);
				}
	}else {
		alert("등록된 반이 존재하지 않습니다.");
	}
}

function getMyGrade(subjectCode,sbacode,userId) {
	
	let aCode = document.getElementById("aSelect");
	let acCode = aCode.options[aCode.selectedIndex].value;
	
	const data = "sBACode=" + sbacode + "&acCode=" + acCode + "&subjectCode=" + subjectCode + "&studentId=" + userId;
	getAjaxData("GetSubjectGrade",data,"displayMyGrade","post")
}

function displayMyGrade(dat) {
	if(dat != '[]') {
	let data = JSON.parse(dat);
	const mainpage = document.getElementById("mainpage");
	const tableMom = document.getElementById("tableMom");
	
			let table = document.createElement("table");
			let mTr = createTr("mTr1");
			let mTd1 = createTd("mTd1");
			let mTd2 = createTd("mTd2");
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
				let td2 = createSTd("td2");
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
	
	tableMom.appendChild(table);
	
	
	
	
	}else {
		alert("등록된 성적이 없습니다.");
		if(tableMom.hasChildNodes()){
			while(tableMom.hasChildNodes()){
				tableMom.removeChild(tableMom.firstChild);
			}
		}
	
	}
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
			bigMom.style.width = "70%";
			bigMom.style.height = "60%";
			bigMom.style.marginLeft = "13%";
			//bigMom.style.border = "1px solid #000000";
			bigMom.style.marginTop = "6%";
			//bigMom.style.float = "left";
			const dateDiv = document.createElement("div");
			dateDiv.setAttribute("id","dateDiv");
			dateDiv.style.height = "15%";
			//dateDiv.style.border = "1px solid #000000";
			const DSDiv = document.createElement("div");
			dateDiv.appendChild(DSDiv);
			DSDiv.setAttribute("id","DSDiv");
			DSDiv.style.position = "absolute";
			DSDiv.style.left = "52%";
			DSDiv.style.marginTop = "10px";
			//DSDiv.style.top = "50%";
			//DSDiv.style.transform = "translate(-50%,-50%)";
			DSDiv.style.width = "25%";
			//DSDiv.style.height = "100%";
			const tableMom = document.createElement("div");
			tableMom.setAttribute("id","tableMom");
			tableMom.style.height = "85%";
			//tableMom.style.border = "1px solid #000000";
			tableMom.style.float = "left";
			tableMom.style.overflow = "auto";
			tableMom.style.overflowX = "hidden";
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
						classBtn.setAttribute("class","selectAndButton");
						classBtn.setAttribute("onclick", "chooseDate('"+ data[i].clCode +"')");
						classBtn.setAttribute("id",data[i].clCode);
						classBtn.setAttribute("type","button");
						classBtn.setAttribute("value",data[i].clName);
						classBtn.style.textAlign = "center";
						classBtn.style.marginLeft = "2px";
						classBtn.style.height = "30px";
						
						cSelect.appendChild(classBtn);
				}
			const selectMom = document.getElementById("selectMom");
			selectMom.appendChild(cSelect);
	}else {
		alert("등록된 반이 존재하지 않습니다.");
	}
}

function chooseDate(clCode) {
	const dateDiv = document.getElementById("dateDiv");
	const DSDiv = document.getElementById("DSDiv");
	const insDate = document.createElement("input");
	insDate.setAttribute("id","insDate");
	insDate.setAttribute("type","month");
	//insDate.setAttribute("value",new Date().toISOString().slice(0, 7));
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
	if(tableMom.hasChildNodes()) {
		while(tableMom.hasChildNodes()) {
		tableMom.removeChild(tableMom.firstChild);
		}
	}
			let table = document.createElement("table");
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
				
				let td1 = createTd("td1");
				let td2 = createTd("td2");
				let td3 = createTd("td3");
				let td4 = createTd("td4");
				let td5 = createTd("td5");
				
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
		
	}else {
		alert("등록된 성적이 없습니다.");
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
			alert("등록된 성적이 존재하지 않습니다.");
		}else {
	let data = JSON.parse(dat);
	const tableMom = document.getElementById("tableMom");
	const mainpage = document.getElementById("mainpage");

			let table = document.createElement("table");
			table.setAttribute("id","theTable");
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
				let td1 = createTd(data[i].sbacode);
				let td2 = createTd(data[i].studentId);
				let td3 = createTd("td3");
				let td4 = createTd("td4");
				let td5 = createTd("td5");
				
				td1.innerHTML = data[i].subjectName;
				td2.innerHTML = data[i].month;
				td3.innerHTML = data[i].sname;
				
				let mScore = document.createElement("input");
				mScore.setAttribute("type","text");
				mScore.setAttribute("value",data[i].score);
				mScore.style.textAlign = "center";
				mScore.style.width = "100px";
				mScore.style.height = "22px";
				td4.appendChild(mScore);
				
				let mRank = document.createElement("input");
				mRank.setAttribute("type","text");
				mRank.setAttribute("value",data[i].rank);
				mRank.style.width = "40px";
				mRank.style.textAlign = "center";
				mRank.style.width = "50px";
				mRank.style.height = "22px";
				td5.appendChild(mRank);
				
				let mhCount = document.createElement("input");
				mhCount.setAttribute("readonly",true);
				mhCount.setAttribute("value"," / " +data[i].headCount);
				mhCount.style.textAlign = "center";
				mhCount.style.width = "28px";
				mhCount.style.border = "none";
				mhCount.style.stroke = "none";
				td5.appendChild(mhCount);
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
			table.appendChild(tr);
			}
			
			const regBtn = document.createElement("input");
			regBtn.setAttribute("type","button");
			regBtn.setAttribute("value","등록");
			regBtn.setAttribute("onclick","modToJson('mod')");
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
	modAjax(action,JSON.stringify(gradeJson),"sendMessage","post");
	const twoB = document.getElementById("twoB");
	twoB.click();
}

function regGradeForm(dat) {
	if(dat != '') {
		if(dat == '[]') {
			alert("학생이 존재하지 않습니다.");
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
				let td1 = createTd(data[i].sbacode);
				let td2 = createTd(data[i].studentId);
				let td3 = createTd("td3");
				let td4 = createTd("td4");
				
				td1.innerHTML = data[i].subjectName;
				td2.innerHTML = data[i].sname;		
					
				let mScore = document.createElement("input");
				mScore.setAttribute("type","number");
				mScore.setAttribute("min",0);
				mScore.setAttribute("max",100);
				mScore.style.textAlign = "center";
				td3.appendChild(mScore);
				
				let mRank = document.createElement("input");
				mRank.setAttribute("type","number");
				mRank.setAttribute("min",1);
				mRank.setAttribute("max",data[i].headCount);
				mRank.style.width = "40px";
				mRank.style.textAlign = "center";
				td4.appendChild(mRank);
				
				let mhCount = document.createElement("input");
				mhCount.setAttribute("readonly",true);
				mhCount.setAttribute("value"," / " +data[i].headCount);
				mhCount.style.textAlign = "center";
				mhCount.style.width = "25px";
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
			dateDiv.style.top = "75%";
			dateDiv.style.right = "20%";
			dateDiv.style.cursor = "pointer";
			dateDiv.style.float = "left";
			//dateDiv.style.border = "1px solid #000000";
			const regBtn = document.createElement("input");
			regBtn.setAttribute("type","button");
			regBtn.setAttribute("value","등록");
			regBtn.setAttribute("onclick","modToJson('reg')");
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
		alert("이미 성적이 등록되어 있습니다.");
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
	tr.style.width  = "200px";
return tr;
}

function createTd(id) {
	const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.border = "2px solid #92acbb";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "200px";
	td.style.textAlign = "center";
return td;
}

function createSTr(id) {
	const tr = document.createElement("tr");
	tr.setAttribute("id",id);
	tr.style.width  = "200px";
return tr;
}

function createSTd(id) {
	const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.border = "2px solid #92acbb";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "200px";
	td.style.textAlign = "center";
return td;
}