/* getFee */


function adminFee() {
	const acCode = document.getElementsByName("acCode")[0].value;
	const mainpage = document.getElementById("mainpage");
	const bigMom = document.createElement("div");
	bigMom.setAttribute("id", "bigMom");
	const tableMomT = document.createElement("div");
	tableMomT.setAttribute("id", "tableMomT");
	tableMomT.style.width = "91%";
	tableMomT.style.height = "35%";
	tableMomT.style.marginTop = "30px";
	tableMomT.style.marginLeft = "20px";
	//tableMomT.style.overflow = "auto";
	//tableMomT.style.overflowX = "hidden";
	const tableMom = document.createElement("div");
	tableMom.setAttribute("id", "tableMom");
	//tableMom.style.border = "1px solid #000000";
	tableMom.style.width = "92.5%";
	tableMom.style.height = "65%";
	//tableMom.style.marginTop = "100px";
	tableMom.style.marginLeft = "20px";
	tableMom.style.overflow = "auto";
	tableMom.style.overflowX = "hidden";


	const selectMom = document.createElement("div");
	selectMom.setAttribute("id", "selectMom");
	selectMom.style.position = "relative";
	selectMom.style.left = "2%";
	selectMom.style.top = "1%";
	const dateSelect = document.createElement("input");
	dateSelect.setAttribute("id", "dateSelect");
	dateSelect.setAttribute("type", "month");
	dateSelect.setAttribute("value", new Date().toISOString().slice(0, 7));
	dateSelect.style.width = "150px";
	dateSelect.style.height = "40px";
	dateSelect.style.textAlign = "center";
	dateSelect.style.borderRadius = "5px";
	dateSelect.style.border = "2px solid #92acbb";
	dateSelect.style.color = "#8C8C8C";
	
	dateSelect.setAttribute("onchange","dateSelected(this)");
	const nameSearch = document.createElement("input");
	nameSearch.setAttribute("id", "nameSearch");
	nameSearch.setAttribute("type", "text");
	nameSearch.setAttribute("placeholder", "학생 이름 검색");
	nameSearch.style.width = "150px";
	nameSearch.style.height = "35px";
	nameSearch.style.fontSize = "15px";
	nameSearch.style.textAlign = "center";
	nameSearch.style.border = "2px solid #92acbb";
	nameSearch.style.marginLeft = "2%";
	nameSearch.style.color = "#CFCFCF";

	const searchBtn = document.createElement("input");
	searchBtn.setAttribute("type","button");
	searchBtn.setAttribute("type",  "button");
	searchBtn.setAttribute("value", "검색");
	searchBtn.setAttribute("onclick",  "searchFee()");
	searchBtn.style.width = "90px";
	searchBtn.style.cursor = "pointer";
	searchBtn.style.height = "40px";
	searchBtn.style.fontSize = "15px";
	searchBtn.style.textAlign = "center";
	searchBtn.style.borderRadius = "5px";
	searchBtn.style.border = "none";
	searchBtn.style.marginLeft = "2%";
	searchBtn.style.background = "#CFCFCF";
	searchBtn.style.color = "#FFFFFF";


	const modBtnDiv = document.createElement("div");
	modBtnDiv.setAttribute("id",  "modBtnDiv");
	modBtnDiv.style.position = "absolute";
	modBtnDiv.style.top = "0%";
	modBtnDiv.style.marginLeft = "83%";
	//modBtnDiv.style.width = "80px";
	//modBtnDiv.style.height = "40px";

	selectMom.appendChild(dateSelect);
	selectMom.appendChild(nameSearch);
	selectMom.appendChild(searchBtn);
	selectMom.appendChild(modBtnDiv);
	delChild(mainpage);

	const saveBtnDiv = document.createElement("div");
	saveBtnDiv.setAttribute("id", "saveBtnDiv");
	saveBtnDiv.style.width = "100%";
	saveBtnDiv.style.height = "50%";
	saveBtnDiv.style.positon = "absolute";
	saveBtnDiv.style.right = "5%";
	saveBtnDiv.style.bottom = "10%";

	bigMom.appendChild(tableMomT);
	bigMom.appendChild(tableMom);
	mainpage.appendChild(selectMom);
	mainpage.appendChild(bigMom);
	//const date = document.getElementById("dateSelect").value;
	//const data = "acCode=" + acCode + "&upMonth=" + "202202";
	//const data = "acCode=" + acCode + "&upMonth=" + date.substring(0,4) + date.substring(5,7);
	//getAjaxData("GetFeeList",data,"getAdminFeeList","post");
	searchFee();
}

function dateSelected(a) {
	const acCode = document.getElementsByName("acCode")[0].value;
	const date = a.value;
	const data = "acCode=" + acCode + "&upMonth=" + date.substring(0,4) + date.substring(5,7);
	getAjaxData("GetFeeList", data ,"getAdminFeeList", "post");
}

function getAdminFeeList(dat) {
	const mainpage = document.getElementById("mainpage");
	const tableMomT = document.getElementById("tableMomT");
	const tableMom = document.getElementById("tableMom");
	const modBtnDiv = document.getElementById("modBtnDiv");

	delChild(tableMom);
	delChild(tableMomT);
	delChild(modBtnDiv);

	if (dat != '[]') {
		const data = JSON.parse(dat);
		const modBtn = document.createElement("input");
		modBtn.setAttribute("type",  "button");
		modBtn.setAttribute("value", "수정");
		modBtn.setAttribute("id", "modBtn");
		modBtn.setAttribute("onclick",  "modFeeList(" + dat + ")");
		modBtn.style.cursor = "pointer";
		modBtn.style.width = "90px";
		modBtn.style.height = "40px";
		modBtn.style.borderRadius = "5px";
		modBtn.style.border = "2px solid #92acbb";
		modBtn.style.border = "none";
		modBtn.style.marginLeft = "0%";
		modBtn.style.background = "#CFCFCF";
		modBtn.style.color = "#FFFFFF";
		modBtn.style.fontSize = "15px";

		modBtnDiv.appendChild(modBtn);


		let tableA = document.createElement("table");
		tableA.style.borderCollapse = "separate";
		tableA.style.borderSpacing = "10px";
		let mTr = createTr("mTr1");
		let mTd1 = createTd("mTd1");
		let mTd2 = createTd("mTd2");
		let mTd3 = createTd("mTd3");
		let mTd4 = createTd("mTd4");
		let mTd5 = createTd("mTd5");
		let mTd6 = createTd("mTd6");
		mTd1.innerHTML = "학생이름";
		mTd2.innerHTML = "수업이름";
		mTd3.innerHTML = "부모님";
		mTd4.innerHTML = "부모님 이메일";
		mTd5.innerHTML = "원비";
		mTd6.innerHTML = "납부 여부";

		mTr.appendChild(mTd1);
		mTr.appendChild(mTd2);
		mTr.appendChild(mTd3);
		mTr.appendChild(mTd4);
		mTr.appendChild(mTd5);
		mTr.appendChild(mTd6);

		tableA.appendChild(mTr);
		tableMomT.appendChild(tableA);
		let tableB = document.createElement("table");
		tableB.style.borderCollapse = "separate";
		tableB.style.borderSpacing = "10px";

		for(let i=0;i<data.length; i++) {
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
			let td6 = createSTd("td6");
			td6.style.textAlign = "center";

			td1.innerHTML = data[i].studentName;
			td2.innerHTML = data[i].clName;
			td3.innerHTML = data[i].paName;
			td4.innerHTML = data[i].paEmail;
			td5.innerHTML = data[i].money;
			td6.innerHTML = (data[i].status == 13) ? "미납" : "납부 완료";
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tr.appendChild(td5);
			tr.appendChild(td6);
			tableB.appendChild(tr);
		}
		//tableMom.appendChild(modDiv);

		tableMom.appendChild(tableB);
		mainpage.appendChild(tableMom);
	} else {
		delChild(tableMom);
		delChild(modBtnDiv);
		sendMessage("등록된 납부내역이 없습니다.");
	}
}

function searchFee() {
	const acCode = document.getElementsByName("acCode")[0].value;
	const date = document.getElementById("dateSelect").value;
	const name = document.getElementById("nameSearch").value
	//if (name == '') {

	//	sendMessage("이름을 입력해 주세요.");
	//}else {
	const data = ("acCode=" + acCode + "&upMonth=" + date.substring(0, 4) + date.substring(5, 7) + "&studentName=" + name);
	getAjaxData("SearchName", data, "getAdminFeeList", "post");
	//}
}
/* modFee */
function modFeeList(dat) {
	const stringify = JSON.stringify(dat);
	const data = JSON.parse(stringify);
	const mainpage = document.getElementById("mainpage");
	const tableMom = document.getElementById("tableMom");
	const modBtnDiv = document.getElementById("modBtnDiv");
	delChild(modBtnDiv);
	let table = document.createElement("table");
	table.setAttribute("id","theTable");
	table.style.borderCollapse = "separate";
	table.style.borderSpacing = "10px";
	table.style.width = "100%";

	for(let i=0; i<data.length; i++) {
		let tr = createTr("tr1");


		let td1 = createSTd(data[i].studentId);
		td1.style.textAlign = "center";
		let td2 = createSTd(data[i].clCode);
		td2.style.textAlign = "center";
		let td3 = createSTd(data[i].clCrCode);
		td3.style.textAlign = "center";
		let td4 = createSTd(data[i].upMonth);
		td4.style.textAlign = "center";
		let td5 = createSTd("td5");
		td5.style.textAlign = "center";
		let td6 = createSTd(data[i].fepMonth);
		td6.style.textAlign = "center";

		td1.innerHTML = data[i].studentName;
		td2.innerHTML = data[i].clName;
		td3.innerHTML = data[i].paName;
		td4.innerHTML = data[i].paEmail;
		td5.innerHTML = data[i].money;
		const changeStatus = document.createElement("select");
		changeStatus.style.textAlign = "center";
		changeStatus.style.borderRadius = "5px";
		changeStatus.style.border = "2px solid #92acbb";

		const aOption = document.createElement("option");
		(data[i].status == 13) ? aOption.setAttribute("selected","selected") : "";
		aOption.setAttribute("value", 13);
		aOption.innerHTML = "미납";
		const bOption = document.createElement("option");
		(data[i].status == 14) ? bOption.setAttribute("selected","selected") : "";
		bOption.setAttribute("value", 14);
		bOption.innerHTML = "납부 완료";

		changeStatus.appendChild(bOption);
		changeStatus.appendChild(aOption);
		td6.appendChild(changeStatus);


		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		tr.appendChild(td6);
		table.appendChild(tr);
	}

	const regBtn = document.createElement("input");
	regBtn.setAttribute("type", "button");
	regBtn.setAttribute("value", "등록");
	regBtn.setAttribute("onclick", "modFeeToJson()");
	regBtn.style.cursor = "pointer";
	regBtn.style.width = "90px";
	regBtn.style.height = "40px";
	regBtn.style.borderRadius = "5px";
	regBtn.style.border = "2px solid #92acbb";
	regBtn.style.border = "none";
	regBtn.style.marginLeft = "0%";
	regBtn.style.background = "#CFCFCF";
	regBtn.style.color = "#FFFFFF";
	regBtn.style.fontSize = "15px";

	modBtnDiv.appendChild(regBtn);

	delChild(tableMom);
	tableMom.appendChild(table);
	mainpage.appendChild(tableMom);
}
function modFeeToJson() {
	const theTable = document.getElementById("theTable");
	let feeJson = [];

	for (let i = 0; i<theTable.childNodes.length;  i++) {
		let tr = theTable.childNodes[i];
		//acCode
		const pAcCode = document.getElementsByName("acCode")[0].value;

		//clCrCode
		let clCr = tr.childNodes[2];
		let pClCrCode = clCr.getAttribute("id");

		//clCode
		let cl = tr.childNodes[1];
		let pClCode = cl.getAttribute("id");

		//studentId
		let student = tr.childNodes[0];
		let pStudentId = student.getAttribute("id");

		//upMonth
		let upMon = tr.childNodes[3];
		let pUpMonth = upMon.getAttribute("id");

		//status
		let statTd = tr.childNodes[5];
		let stat = statTd.childNodes[0];
		let pStatus = stat.options[stat.selectedIndex].value;

		//fepMonth
		let d = new Date();
		let year = d.getFullYear();
		let month = d.getMonth();
		month = month < 10  ? "0" + (d.getMonth()+1) : (d.getMonth()+1);
		let day = d.getDate();
		day = day < 10 ? "0" + d.getDate() : d.getDate();
		let time = d.getHours();
		time = time < 10 ? "0" + d.getHours() : d.getHours();
		let minute = d.getMinutes();
		minute = minute < 10 ? "0" + d.getMinutes() : d.getMinutes();
		let second = d.getSeconds();
		second = second <10 ? "0" + d.getSeconds() : d.getSeconds();
		let pFepMonth = year + month + day + time + minute + second;


		feeJson.push({acCode:pAcCode,clCrCode:pClCrCode,clCode:pClCode,studentId:pStudentId,upMonth:pUpMonth,status:pStatus,fepMonth:pFepMonth});

	}

	modAjax("SaveModFee", JSON.stringify(feeJson), "sendMessage", "post");
	const threeB = document.getElementById("threeB");
	threeB.click();
}
/* regFee */
function adminRegFee() {
	const acCode = document.getElementsByName("acCode")[0].value;
	const mainpage = document.getElementById("mainpage");
	const bigMom = document.createElement("div");
	bigMom.setAttribute("id", "bigMom");
	bigMom.style.height = "76%";
	bigMom.style.width = "99%";
	bigMom.style.marginTop = "2.8%";
	bigMom.style.marginLeft = "2%";
	const tableMomT = document.createElement("div");
	tableMomT.setAttribute("id", "tableMomT");
	tableMomT.style.width = "91%";
	tableMomT.style.height = "10%";
	//tableMomT.style.marginLeft = "20px";
	const tableMom = document.createElement("div");
	tableMom.setAttribute("id", "tableMom");
	//tableMom.style.border = "1px solid #000000";
	tableMom.style.width = "92.5%";
	tableMom.style.height = "90%";
	//tableMom.style.marginTop = "100px";
	//tableMom.style.marginLeft = "20px";
	tableMom.style.overflow = "auto";
	tableMom.style.overflowX = "hidden";
	

	delChild(mainpage);

	const selectMom = document.createElement("div");
	selectMom.setAttribute("id",  "selectMom");
	selectMom.style.position = "relative";
	selectMom.style.left = "2%";
	selectMom.style.top = "1%";
	const dateSelect = document.createElement("input");
	dateSelect.setAttribute("id", "dateSelect");
	dateSelect.setAttribute("type",  "month");
	dateSelect.setAttribute("value",  new Date().toISOString().slice(0, 7));
	dateSelect.style.width = "150px";
	dateSelect.style.height = "40px";
	dateSelect.style.textAlign = "center";
	dateSelect.style.borderRadius = "5px";
	dateSelect.style.border = "2px solid #92acbb";
	selectMom.appendChild(dateSelect);

	const searchBtn = document.createElement("input");
	searchBtn.setAttribute("type", "button");
	searchBtn.setAttribute("value",  "확인");
	searchBtn.setAttribute("onclick",  "getStList()");
	searchBtn.style.width = "90px";
	searchBtn.style.height = "40px";
	searchBtn.style.fontSize = "15px";
	searchBtn.style.textAlign = "center";
	searchBtn.style.border = "2px solid #92acbb";
	searchBtn.style.marginLeft = "2%";
	searchBtn.style.cursor = "pointer";
	searchBtn.style.borderRadius = "5px";
	searchBtn.style.border = "none";
	searchBtn.style.background = "#CFCFCF";
	searchBtn.style.color = "#FFFFFF";
	selectMom.appendChild(searchBtn);
	
	bigMom.appendChild(tableMomT);
	bigMom.appendChild(tableMom);
	mainpage.appendChild(selectMom);
	mainpage.appendChild(bigMom);
}

function getStList() {
	const acCode = document.getElementsByName("acCode")[0].value;
	const date = document.getElementById("dateSelect").value;
	const data = "acCode=" + acCode + "&upMonth=" + date.substring(0, 4) + date.substring(5, 7);

	getAjaxData("GetStList", data, "regFeeForm", "post");
}

function regFeeForm(dat) {
	const tableMom = document.getElementById("tableMom");
	const tableMomT = document.getElementById("tableMomT");
	const selectMom = document.getElementById("selectMom");
		delChild(tableMom);
		delChild(tableMomT);
	if (dat != '') {
		const data = JSON.parse(dat);

		let tableT = document.createElement("table");
		tableT.setAttribute("id", "theTableT");
		tableT.style.borderCollapse = "separate";
		tableT.style.borderSpacin = "10px";
		tableT.style.width = "100%";
		let mTr = createTr("mTr1");
		let mTd1 = createTd("mTd1");
		let mTd2 = createTd("mTd2");
		let mTd3 = createTd("mTd3");
		let mTd4 = createTd("mTd4");
		mTd1.innerHTML = "학생이름";
		mTd2.innerHTML = "부모이름";
		mTd3.innerHTML = "수업이름";
		mTd4.innerHTML = "원비";

		mTr.appendChild(mTd1);
		mTr.appendChild(mTd2);
		mTr.appendChild(mTd3);
		mTr.appendChild(mTd4);

		tableT.appendChild(mTr);
		tableMomT.appendChild(tableT);

		let table = document.createElement("table");
		table.setAttribute("id", "theTable");
		table.style.borderCollapse = "separate";
		table.style.borderspacing = "10px";
		table.style.width = "100%";
		for (let i = 0; i < data.length; i++) {
			let tr = createTr("tr1");

			let td1 = createSTd(data[i].clCrCode);
			let td2 = createSTd(data[i].clCode);
			let td3 = createSTd(data[i].studentId);
			let td4 = createSTd(data[i].money);

			td1.innerHTML = data[i].studentName;
			td2.innerHTML = data[i].paName;
			td3.innerHTML = data[i].clName;
			td4.innerHTML = data[i].money;
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			table.appendChild(tr);
		}

		tableMom.appendChild(table);

		const regBtn = document.createElement("input");
		regBtn.setAttribute("type", "button");
		regBtn.setAttribute("value", "등록");
		regBtn.setAttribute("onclick", "regFeeToJson()");
		regBtn.style.cursor = "pointer";
		regBtn.style.width = "90px";
		regBtn.style.height = "40px";
		regBtn.style.borderRadius = "5px";
		regBtn.style.border = "2px solid #92acbb";
		regBtn.style.border = "none";
		regBtn.style.marginLeft = "1%";
		regBtn.style.background = "#CFCFCF";
		regBtn.style.color = "#FFFFFF";
		regBtn.style.fontSize = "15px";

		selectMom.appendChild(regBtn);

	} else {
		sendMessage("이미 등록되어 있습니다.");
		const feeSecond = document.getElementById("feeSecond");
		feeSecond.click();
	}
}


function regFeeToJson() {
	const theTable = document.getElementById("theTable");
	let feeJson = [];

	for (let i =0; i<theTable.childNodes.length;  i++) {
		let tr = theTable.childNodes[i];
		//acCode
		const pAcCode = document.getElementsByName("acCode")[0].value;

		//clCrCode
		let clCr = tr.childNodes[0];
		let pClCrCode = clCr.getAttribute("id");

		//clCode
		let cl = tr.childNodes[1];
		let pClCode = cl.getAttribute("id");

		//studentId
		let student = tr.childNodes[2];
		let pStudentId = student.getAttribute("id");

		//upMonth
		const dateSelect = document.getElementById("dateSelect").value;
		const  pUpMonth = dateSelect.substring(0, 4) + dateSelect.substring(5, 7) + "01";

		//status
		let pStatus = 13;

		//money
		let moneyTd = tr.childNodes[3];
		let pMoney = moneyTd.getAttribute("id");

		//fepMonth
		let d = new Date();
		let year = d.getFullYear();
		let month = d.getMonth();
		month = month < 10 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1);
		let day =   d.getDate();
		day = day < 10 ? "0" + d.getDate() : d.getDate();
		let time = d.getHours();
		time = time < 10 ? "0" + d.getHours() : d.getHours();
		let minute = d.getMinutes();
		minute = minute < 10 ? "0" + d.getMinutes() : d.getMinutes();
		let second = d.getSeconds();
		second = second < 10 ? "0" + d.getSeconds()   : d.getSeconds();
		let pFepMonth = year + month + day + time + minute + second;


		feeJson.push({ acCode: pAcCode, clCrCode : pClCrCode , clCode : pClCode, studentId: pStudentId , upMonth : pUpMonth,  status: pStatus,  money:  pMoney });

	}

	modAjax("RegFeeList", JSON.stringify(feeJson), "sendMessage", "post");
	const threeB = document.getElementById("threeB");
	threeB.click();
}

function getAmounts() {
	const userId = document.getElementsByName("userId")[0].value;
	const data = "userId=" + userId;
	getAjaxData("GetAmounts", data, "MyChildListF", "post")
}
let totAmounts = '';
function MyChildListF(amount) {
	totAmounts = amount;
	const userId = document.getElementsByName("userId")[0].value;
	const data = "userId=" + userId;
	getAjaxData("MyChildList", data, "childSelectF", "post")
}

function childSelectF(dat) {
   const parentCode = document.getElementsByName("userId")[0].value;
   let data = JSON.parse(dat);
   let sCode = sessionStorage.getItem("sCode");
   const mainpage = document.getElementById("mainpage");

	const selectMom = document.createElement("div");
	selectMom.setAttribute("id", "selectMom");
	selectMom.style.position = "relative";
	selectMom.style.left = "2%";
	selectMom.style.top = "1%";

	let aSelect = document.createElement("select");
	aSelect.setAttribute("id", "aSelect");
	aSelect.setAttribute("onchange", "childSelectedF()");
	aSelect.style.width = "200px";
	aSelect.style.height = "40px";
	aSelect.style.borderRadius = "5px";
	aSelect.style.border = "2px solid #92acbb";
	aSelect.style.position = "relative";
	aSelect.style.left = "0%";
	aSelect.style.top = "1%";
	aSelect.style.float = "left";
	aSelect.style.fontSize = "15px";

	let firstOption = document.createElement("option");
	firstOption.style.fontSize = "15px";
	firstOption.innerHTML = "자녀 선택"
	//if(acCode == null) {
	firstOption.setAttribute("selected", "selected");
	//}
	firstOption.setAttribute("disabled", "disabled");
	aSelect.appendChild(firstOption);
	for (let i = 0; i < data.length; i++) {
		let option = document.createElement("option");
		option.setAttribute("id", data[i].studentId);
		option.setAttribute("value", data[i].studentId);
		option.innerHTML = data[i].sname;
		if (sCode != "") {
			if (sCode == data[i].studentId) {
				option.setAttribute("selected", "selected")
				getMyFee();
			}
		}
		aSelect.appendChild(option);
	}
	const amountDiv = document.createElement("div");
	//amountDiv.style.marginLeft = "-70%";
	amountDiv.style.textAlign = "center";
	//amountDiv.style.border = "1px solid #000000";
	amountDiv.style.height = "40px";
	amountDiv.style.width = "240px";
	amountDiv.style.float = "left";
	amountDiv.style.textAlign = "center";
	const totFee = document.createElement("h4");
	totFee.style.marginTop = "30%";
	totFee.style.marginTop = "0px";
	totFee.style.textAlign = "center";
	totFee.style.color = "#A6A6A6";
	totFee.innerHTML = "미납요금 : " + totAmounts;
	amountDiv.appendChild(totFee);
	selectMom.appendChild(aSelect);
	if (totAmounts != '') {

		selectMom.appendChild(amountDiv);
	}

	const bigMom = document.createElement("div");
	bigMom.setAttribute("id", "bigMom");
	bigMom.style.width = "70%";
	bigMom.style.height = "20%";
	bigMom.style.marginLeft = "13%";
	//bigMom.style.border = "1px solid #000000";
	bigMom.style.marginTop = "6%";
	const dateDiv = document.createElement("div");
	dateDiv.setAttribute("id", "dateDiv");
	dateDiv.style.height = "40%";
	//dateDiv.style.border = "1px solid #000000";

	const tableMom = document.createElement("div");
	tableMom.setAttribute("id", "tableMom");
	tableMom.style.height = "60%";
	tableMom.style.float = "left";
	tableMom.style.overflow = "auto";
	tableMom.style.overflowX = "hidden";
	bigMom.appendChild(dateDiv);
	bigMom.appendChild(tableMom);



	mainpage.appendChild(selectMom);
	mainpage.appendChild(bigMom);

}

function childSelectedF() {
	const aSelect = document.getElementById("aSelect");
	const selectedSCode = aSelect.options[aSelect.selectedIndex].value;
	const dateDiv = document.getElementById("dateDiv");
	const tableMom = document.getElementById("tableMom");
	delChild(tableMom);
	sessionStorage.setItem("sCode", selectedSCode);

	const dateSelect = document.createElement("input");
	dateSelect.setAttribute("id", "dateSelect");
	dateSelect.setAttribute("type", "month");
	dateSelect.setAttribute("onchange", "getMyFee()");
	dateSelect.style.position = "absolute";
	dateSelect.style.left = "51%";
	dateSelect.style.width = "150px";
	dateSelect.style.height = "6%";
	dateSelect.style.textAlign = "center";
	dateSelect.style.borderRadius = "5px";
	dateSelect.style.border = "1px solid #92acbb";

	dateDiv.appendChild(dateSelect);
}


function getMyFee() {
	const studentId = sessionStorage.getItem("sCode");
	const upMonth = document.getElementById("dateSelect").value;
	const data = "studentId=" + studentId + "&upMonth=" + upMonth.substring(0, 4) + upMonth.substring(5, 7);
	getAjaxData("GetMyFee", data, "displayMyFee", "post")
}

function displayMyFee(dat) {
	let data = JSON.parse(dat);
		const tableMom = document.getElementById("tableMom");
		if(tableMom.hasChildNodes()){
			delChild(tableMom);
		}
	if (dat != '[]') {
		
		let table = document.createElement("table");
		table.style.borderCollapse = "separate";
		table.style.borderSpacing = "10px";
		table.style.marginTop = "0.5%";
		table.style.position = "absolute";
		table.style.width = "51%";
		let mTr = createTr("mTr1");
		let mTd1 = createTd("mTd1");
		let mTd2 = createTd("mTd2");
		let mTd3 = createTd("mTd3");
		let mTd4 = createTd("mTd4");
		mTd1.innerHTML = "학원";
		mTd2.innerHTML = "수업";
		mTd3.innerHTML = "원비";
		mTd4.innerHTML = "납부여부";

		mTr.appendChild(mTd1);
		mTr.appendChild(mTd2);
		mTr.appendChild(mTd3);
		mTr.appendChild(mTd4);

		table.appendChild(mTr);

		for (let i = 0; i<data.length; i++) {
			let tr = createTr("tr1");

			let td1 = createSTd("td1");
			let td2 = createSTd("td2");
			let td3 = createSTd("td3");
			let td4 = createSTd("td4");

			td1.innerHTML = data[i].acName;
			td2.innerHTML = data[i].clName;
			td3.innerHTML = data[i].money;
			td4.innerHTML = (data[i].status == 13) ? "미납" : "납부완료";
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			table.appendChild(tr);
		}

		delChild(tableMom);
		tableMom.appendChild(table);
	} else {
		sendMessage("납부내역이 존재하지 않습니다.");
		delChild(tableMom);
	}
}


