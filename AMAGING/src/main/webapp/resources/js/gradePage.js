let intCode = "";
let acCodeHidden = "";
function divide(menuCode) {
	intCode = menuCode;
}

function MyChildList() {
	const userId = document.getElementsByName("userId")[0].value;
	const data = "userId=" + userId;
	getAjaxData("myChildList",data,"childSelect","post")
}

function childSelect(dat) {
	if(dat != '') {
	let data = JSON.parse(dat);
	let sCode = document.getElementById("sCode").value;
	//let sCode = "S1067";
	const mainpage = document.getElementById("mainpage");
	const checkCode = "1133";
	
			let aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect");
			aSelect.setAttribute("onchange","childSelected(" + checkCode + "," + sCode + ")");
			aSelect.style.width = "200px";
			aSelect.style.height = "40px";
			aSelect.style.borderRadius = "5px";
			aSelect.style.border = "2px solid #92acbb";
			aSelect.style.position = "relative";
			aSelect.style.left = "2%";
			aSelect.style.top = "1%";
			
			let firstOption = document.createElement("option");
				firstOption.innerHTML = "자녀 선택"
				//if(acCode == null) {
				firstOption.setAttribute("selected","selected");
				//}
				firstOption.setAttribute("disabled","disabled");
				aSelect.appendChild(firstOption);
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
					aSelect.appendChild(option);
				}

	
		if(mainpage.hasChildNodes()) {
			while(mainpage.haschildNodes()){
				mainpage.removeChild(mainpage.firstChild);
			}
			mainpage.appendChild(aSelect);
		}else {
			mainpage.appendChild(aSelect);
		}
	}
}

function childSelected(selectedCode,sessionCode) {
	if(selectedCode != "1133") {
		if(selectedCode == sessionCode) {
			getMyGrade(selectedCode);
		}
	}else {
		let aSelect = document.getElementById("aSelect");
		let sCode = aSelect.options[aSelect.selectedIndex].value;
		if(sCode != sessionCode) {
			const presentSCode = document.getElementById("sCode");
			presentSCode.setAttribute("value",sCode);
			getMyGrade(sCode);
		}else {
			getMyGrade(sCode);
		}
	}
}

function getMyGrade(userId) {
	const data = "userId=" + userId;
	getAjaxData("getMyGrade",data,"displayMyGrade","post")
}

function displayMyGrade(dat) {
	if(dat != '[]') {
	let data = JSON.parse(dat);
	const mainpage = document.getElementById("mainpage");
	const tableMom = document.createElement("div");
	tableMom.setAttribute("id","tableMom");
	tableMom.style.float = "left";
	tableMom.style.marginTop = "15%";
	tableMom.style.marginLeft = "7%";
	
			let table = document.createElement("table");
			let mTr = createTr("mTr1");
			let mTd1 = createTd("mTd1");
			let mTd2 = createTd("mTd2");
			let mTd3 = createTd("mTd3");
			let mTd4 = createTd("mTd4");
			let mTd5 = createTd("mTd5");
			mTd1.innerHTML = "학원";
			mTd2.innerHTML = "수업";
			mTd3.innerHTML = "과목";
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
				
				td1.innerHTML = data[i].acName;
				td2.innerHTML = data[i].clName;
				td3.innerHTML = data[i].subjectName;
				td4.innerHTML = data[i].score;
				td5.innerHTML = data[i].rank + "/" + data[i].headCount;
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
			table.appendChild(tr);
			}
	if(tableMom.hasChildNodes()) {
		while(tableMom.hasChildNodes()) {
			tableMom.removeChild(tableMom.firstChild);
		}
		tableMom.appendChild(table);
	}else {
		tableMom.appendChild(table);
	}
	
	mainpage.appendChild(tableMom);
	}else {
		alert("등록된 성적이 없습니다.");
	}
}

function myAcademyList(userId,menuCode) {
	const data = "teacherId=" + userId;
	divide(menuCode);
	getAjaxData("myAcademyList",data,"academySelect","post")
}

function academySelect(dat) {
	const data = JSON.parse(dat);
	//let aCode = (document.getElementsByName("acCode")[0].value != '')? document.getElementsByName("acCode")[0].value : '';
	const aCode = sessionStorage.getItem("acCode");
	const mainpage = document.getElementById("mainpage");
	const checkCode = "1133";
	
			const selectMom = document.createElement("div");
			selectMom.setAttribute("id","selectMom");
			selectMom.style.width = "600px";
			selectMom.style.height = "50px";
			selectMom.style.position = "relative";
			selectMom.style.left = "2%";
			selectMom.style.top = "1%";
			let aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect");
			aSelect.setAttribute("onchange","makeSelected(" + checkCode + "," + aCode +")");
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
							makeSelected(data[i].acCode,aCode);
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
			const tableMom = document.createElement("div");
			tableMom.setAttribute("id","tableMom");
			tableMom.style.marginLeft = "15%";
			//tableMom.style.float = "left";
			tableMom.style.marginTop = "5%";
			mainpage.appendChild(selectMom);
			mainpage.appendChild(tableMom);
}

function makeSelected(selectedCode,sessionCode) {
	//let acCode = selectedCode;
	const userId = document.getElementsByName("userId")[0].value;

	if(selectedCode != "1133") {
		if(selectedCode == sessionCode) {

			const data = "teacherId=" + userId + "&acCode=" + selectedCode;
		
			getAjaxData("myClassList",data,"classOnAc","post");
		}
	}else {
		// onchange로 접근. 선택된값 != 세션값 --> openModal else --> getAjaxData
		let aCode = document.getElementById("aSelect");
		let acCode = aCode.options[aCode.selectedIndex].value;
		if(acCode != sessionCode) {
			sessionStorage.setItem("acCode",acCode);
			openModal(acCode);
		}else {
			const data = "teacherId=" + userId + "&acCode=" + sessionCode;
		
			getAjaxData("myClassList",data,"classOnAc","post");
		}
		
			//openModal에서 입력된 비밀번호 서버전송 --> 일치 --> 세션에 저장, 클래스목록 조회후 jsonData -> classOnAc()
			//								   불일치 --> message = 비밀번호가 일치하지 않습니다. or 접근권한이 없습니다.
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
	const userId = document.getElementsByName("userId")[0].value;
	const inputPwd = document.getElementById("inputPwd").value;
	const data = "teacherId=" + userId + "&acCode=" + acCode + "&password=" + inputPwd;
	acCodeHidden = acCode;
	getAjaxData("checkPwd",data,"classOnAc","post");
}

function classOnAc(dat) {
	closeModal()
	if(dat != '[]') {
		const presentAcCode = document.getElementsByName("acCode")[0];
			  presentAcCode.setAttribute("value",acCodeHidden);
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
					let option = document.createElement("input");
						option.setAttribute("class","selectAndButton");
						option.setAttribute("onclick", "getGrade('"+ data[i].clCode +"')");
						option.setAttribute("id",data[i].clCode);
						option.setAttribute("type","button");
						option.setAttribute("value",data[i].clName);
						option.style.textAlign = "center";
						
						cSelect.appendChild(option);
				}
			const selectMom = document.getElementById("selectMom");
			selectMom.appendChild(cSelect);
	}else {
		alert("등록된 반이 존재하지 않습니다.");
	}
}

function getGrade(clCode) {
	const teacherId = document.getElementsByName("userId")[0].value;
	const acCode = document.getElementsByName("acCode")[0].value;
	const action = (intCode == "reg")? "getStudent" : "getGrade" ;
	const fn = (intCode == "get")? "displayGrade": (intCode == "mod")? "modGradeForm" : "regGradeForm";
	let data = "teacherId=" + teacherId + "&clCode=" + clCode + "&acCode=" + acCode;
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
				
				let td1 = createTd("td1");
				let td2 = createTd("td2");
				let td3 = createTd("td3");
				let td4 = createTd("td4");
				
				td1.innerHTML = data[i].subjectName
				td2.innerHTML = data[i].sname;
				td3.innerHTML = data[i].score;
				td4.innerHTML = data[i].rank + "/" + data[i].headCount;
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
			table.appendChild(tr);
			}
	
		tableMom.appendChild(table);
		
	}else {
		alert("등록된 성적이 없습니다.");
	}
}


function modGradeForm(dat) {
	if(dat != '') {
		if(dat == '[]') {
			alert("등록된 성적이 존재하지 않습니다.");
		}else {
	let data = JSON.parse(dat);
	const tableMom = document.getElementById("tableMom");

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
				mScore.setAttribute("type","text");
				mScore.setAttribute("value",data[i].score);
				mScore.style.textAlign = "center";
				mScore.style.width = "100px";
				mScore.style.height = "22px";
				td3.appendChild(mScore);
				
				let mRank = document.createElement("input");
				mRank.setAttribute("type","text");
				mRank.setAttribute("value",data[i].rank);
				mRank.style.width = "40px";
				mRank.style.textAlign = "center";
				mRank.style.width = "50px";
				mRank.style.height = "22px";
				td4.appendChild(mRank);
				
				let mhCount = document.createElement("input");
				mhCount.setAttribute("readonly",true);
				mhCount.setAttribute("value"," / " +data[i].headCount);
				mhCount.style.textAlign = "center";
				mhCount.style.width = "28px";
				mhCount.style.border = "none";
				mhCount.style.stroke = "none";
				td4.appendChild(mhCount);
				
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
			table.appendChild(tr);
			}
	
			let hTr1 = document.createElement("tr");
			
			let hTd1 = document.createElement("td");
				hTd1.style.height  = "80px";
				hTd1.setAttribute("colspan",3);
			let hTd2 = document.createElement("td");
				hTd2.style.height  = "80px";
				hTd2.style.textAlign = "right";
			
			hTd2.innerHTML = "<input type = 'button' id='modBtn' value = '등록' onclick='modToJson(1)' style = 'cursor:pointer; text-align:center; width:60px; height:35px'/>";
			hTr1.appendChild(hTd1);
			hTr1.appendChild(hTd2);
			
			table.appendChild(hTr1);
		
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
	
	for (let i=1; i<theTable.childNodes.length-1; i++ ) {
		let tr = theTable.childNodes[i];
		
		//subjectCode
			let subjectTd = tr.childNodes[0];
			let SBACodes = subjectTd.getAttribute("id");
	
		//studentId
			let studentTd = tr.childNodes[1];
			let studentIds = studentTd.getAttribute("id");
			
		//rank
			let rankTd = tr.childNodes[3];
			let ranks = rankTd.childNodes[0].value;
			
		//score
			let scoreTd = tr.childNodes[2];
			let scores = scoreTd.childNodes[0].value;
	
		
			
	gradeJson.push({sbacode:SBACodes,studentId:studentIds,score:scores,rank:ranks});
	
	}
	if(numb == 1) {
		action = "modGrade";
	}else {
		action = "regGrade";
	}
	modAjax(action,JSON.stringify(gradeJson),"sendMessage","post");
}

function regGradeForm(dat) {
	if(dat != '') {
		if(dat == '[]') {
			alert("학생이 존재하지 않습니다.");
		}else {
	let data = JSON.parse(dat);
	const tableMom = document.getElementById("tableMom");
	
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
				mScore.setAttribute("type","text");
				mScore.style.textAlign = "center";
				td3.appendChild(mScore);
				
				let mRank = document.createElement("input");
				mRank.setAttribute("type","text");
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
	
	
			let hTr1 = document.createElement("tr");
			
			let hTd1 = document.createElement("td");
				hTd1.style.height  = "80px";
				hTd1.setAttribute("colspan",3);
			let hTd2 = document.createElement("td");
				hTd2.style.height  = "80px";
				hTd2.style.textAlign = "right";
			
			hTd2.innerHTML = "<input type = 'button' value = '등록' onclick='modToJson(2)' style = 'cursor:pointer; text-align:center; width:60px; height:35px'/>";
			hTr1.appendChild(hTd1);
			hTr1.appendChild(hTd2);
			
			table.appendChild(hTr1);	
	if(tableMom.hasChildNodes()) {
		while(tableMom.hasChildNodes()) {
		tableMom.removeChild(tableMom.firstChild);
	}

	tableMom.appendChild(table);
		}
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
return tr;
}

function createTd(id) {
	if(id == "td1") {
	const td = document.createElement("td");
	td.setAttribute("id",id);
	td.setAttribute("rowspan",3);
	td.style.border = "2px solid #92acbb";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "200px";
	td.style.textAlign = "center";
	}
	const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.border = "2px solid #92acbb";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "200px";
	td.style.textAlign = "center";
return td;
}