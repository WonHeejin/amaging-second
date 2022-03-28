/* getFee */ 
function dateSelected(a) {
	const acCode = document.getElementsByName("acCode")[0].value;
	const date = a.value;
	const data = "acCode=" + acCode + "&upMonth=" + date.substring(0,4) + date.substring(5,7);
	getAjaxData("GetFeeList",data,"getAdminFeeList","post");
}

function adminFee() {
	const acCode = document.getElementsByName("acCode")[0].value;
	const mainpage = document.getElementById("mainpage");
	const tableMom = document.createElement("div");
	tableMom.setAttribute("id","tableMom");
	tableMom.style.position = "relative";
	tableMom.style.top = "4%";
	
	
		const selectMom = document.createElement("div");
		selectMom.setAttribute("id","selectMom");
		selectMom.style.position = "relative";
		selectMom.style.left = "2%";
		selectMom.style.top = "1%";
		const dateSelect = document.createElement("input");
		dateSelect.setAttribute("id","dateSelect");
		dateSelect.setAttribute("type","month");
		dateSelect.setAttribute("value",new Date().toISOString().slice(0, 7));		
		dateSelect.style.width = "150px";
		dateSelect.style.height = "40px";
		dateSelect.style.textAlign = "center";
		dateSelect.style.borderRadius = "5px";
		dateSelect.style.border = "2px solid #92acbb";

			dateSelect.setAttribute("onchange","dateSelected(this)");
		
			const nameSearch = document.createElement("input");
			nameSearch.setAttribute("id","nameSearch");
			nameSearch.setAttribute("type","text");
			nameSearch.setAttribute("placeholder","학생 이름 검색");
			nameSearch.style.width = "150px";
			nameSearch.style.height = "35px";
			nameSearch.style.fontSize = "15px";
			nameSearch.style.textAlign = "center";
			nameSearch.style.border = "2px solid #92acbb";
			nameSearch.style.marginLeft = "2%";
		
			const searchBtn = document.createElement("input");
			searchBtn.setAttribute("type","button");
			searchBtn.setAttribute("value","검색");
			searchBtn.setAttribute("onclick","searchFee()");
			searchBtn.style.width = "80px";
			searchBtn.style.cursor = "pointer";
			searchBtn.style.height = "30px";
			searchBtn.style.fontSize = "15px";
			searchBtn.style.textAlign = "center";
			searchBtn.style.borderRadius = "5px";
			searchBtn.style.border = "2px solid #92acbb";
			searchBtn.style.marginLeft = "2%";
			
			
			const modBtnDiv = document.createElement("div");
			modBtnDiv.setAttribute("id","modBtnDiv");
			modBtnDiv.style.position = "absolute";
			modBtnDiv.style.top = "20%";
			modBtnDiv.style.marginLeft = "80%";
			//modBtnDiv.style.width = "80px";
			//modBtnDiv.style.height = "40px";
			
			selectMom.appendChild(dateSelect);
			selectMom.appendChild(nameSearch);
			selectMom.appendChild(searchBtn);
			selectMom.appendChild(modBtnDiv);
	if(!mainpage.hasChildNodes()){

	mainpage.appendChild(tableMom);
	mainpage.appendChild(selectMom);
	} else {
		while(mainpage.hasChildNodes()) {
			mainpage.removeChild(mainpage.firstChild);
		}

	mainpage.appendChild(tableMom);
	mainpage.appendChild(selectMom);
	}
	
	const date = document.getElementById("dateSelect").value;
	//const data = "acCode=" + acCode + "&upMonth=" + "202202";
	const data = "acCode=" + acCode + "&upMonth=" + date.substring(0,4) + date.substring(5,7);
	getAjaxData("GetFeeList",data,"getAdminFeeList","post");
}
function getAdminFeeList(dat) {
	const data = JSON.parse(dat);
	const mainpage = document.getElementById("mainpage");
	const tableMom = document.getElementById("tableMom");
	const modBtnDiv = document.getElementById("modBtnDiv");
	const selectMom = document.getElementById("selectMom");
	if(data.length <= 0) {
		if(tableMom.hasChildNodes()) {
			tableMom.removeChild(tableMom.firstChild);
		}s
		alert("등록된 납부내역이 존재하지 않습니다.");
	}else {
		
		if(modBtnDiv.hasChildNodes()) {
			while(modBtnDiv.hasChildNodes()) {
    	     modBtnDiv.removeChild(modBtnDiv.firstChild);
			}
		}
			const modBtn = document.createElement("input");
			modBtn.setAttribute("type","button");
			modBtn.setAttribute("value","수정");
			modBtn.setAttribute("id","modBtn");
			modBtn.setAttribute("onclick","modFeeList(" + dat + ")");
			modBtn.style.cursor = "pointer";
			modBtn.style.width = "75px";
			modBtn.style.height = "30px";
			modBtn.style.borderRadius = "5px";
			modBtn.style.border = "2px solid #92acbb";
			
			modBtnDiv.appendChild(modBtn);
			
			let table = document.createElement("table");
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
			
			table.appendChild(mTr);
			
			for(let i=0; i<data.length; i++) {
				let tr = createTr("tr1");
				
				let td1 = createTd("td1");
				let td2 = createTd("td2");
				let td3 = createTd("td3");
				let td4 = createTd("td4");
				let td5 = createTd("td5");
				let td6 = createTd("td6");
				
				td1.innerHTML = data[i].studentName;
				td2.innerHTML = data[i].clName;
				td3.innerHTML = data[i].paName;
				td4.innerHTML = data[i].paEmail;
				td5.innerHTML = data[i].money;
				td6.innerHTML = (data[i].status == 13)? "미납" : "납부 완료" ;
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				tr.appendChild(td6);
			table.appendChild(tr);
			}
	//tableMom.appendChild(modDiv);


		if(!tableMom.hasChildNodes()) {
			tableMom.appendChild(table);
		}else {
			while(tableMom.hasChildNodes()) {
   	     		tableMom.removeChild(tableMom.firstChild);
			}
			tableMom.appendChild(table);
		}
		mainpage.appendChild(tableMom);
	}
}
function searchFee() {
	const acCode = document.getElementsByName("acCode")[0].value;
	const date = document.getElementById("dateSelect").value;
	const name = document.getElementById("nameSearch").value
	if (name == '') {
		alert("이름을 입력해 주세요.");
	}else {
		const data = "acCode=" + acCode + "&upMonth=" + date.substring(0,4) + date.substring(5,7) + "&studentName=" + name;
		getAjaxData("SearchName",data,"getAdminFeeList","post");
	}
}
/* modFee */
function modFeeList(dat) {
	const stringify = JSON.stringify(dat);
	const data = JSON.parse(stringify);
	const mainpage = document.getElementById("mainpage");
	const tableMom = document.getElementById("tableMom");
	const modBtn = document.getElementById("modBtn");
	modBtn.setAttribute("hidden","hidden");

	let table = document.createElement("table");
	table.setAttribute("id","theTable");
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
         
		table.appendChild(mTr);
         
		for(let i=0; i<data.length; i++) {
			let tr = createTr("tr1");
            
            let td1 = createTd(data[i].studentId);
            let td2 = createTd(data[i].clCode);
            let td3 = createTd(data[i].clCrCode);
            let td4 = createTd(data[i].upMonth);
            let td5 = createTd("td5");
            let td6 = createTd(data[i].fepMonth);
            
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
			(data[i].status == 13)? aOption.setAttribute("selected","selected") : "";
            aOption.setAttribute("value",13);
			aOption.innerHTML = "미납";
			const bOption = document.createElement("option");
			(data[i].status == 14)? bOption.setAttribute("selected","selected") : "";
            bOption.setAttribute("value",14);
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
         
		let hTr1 = document.createElement("tr");
         
		let hTd1 = document.createElement("td");
			hTd1.style.height  = "80px";
            hTd1.setAttribute("colspan",5);
		let hTd2 = document.createElement("td");
            hTd2.style.height  = "80px";
            hTd2.style.textAlign = "right";
         
		hTd2.innerHTML = "<input type = 'button' value = '등록' onclick='modFeeToJson()' style = 'cursor:pointer; text-align:center; width:60px; height:35px'/>";
		hTr1.appendChild(hTd1);
		hTr1.appendChild(hTd2);
		table.appendChild(hTr1);
		

		if(tableMom.hasChildNodes()) {
			while(tableMom.hasChildNodes()) {
				tableMom.removeChild(tableMom.firstChild);
			}
			tableMom.appendChild(table);
		}else {
			tableMom.appendChild(table);
		}
		mainpage.appendChild(tableMom);
}
function modFeeToJson(){
	let action = "";
	const theTable = document.getElementById("theTable");
	let feeJson = [];
	
	for (let i=1; i<theTable.childNodes.length-1; i++ ) {
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
			month = month<10? "0" + (d.getMonth()+1) : (d.getMonth()+1);
		let day = d.getDate();
			day = day<10? "0" + d.getDate() : d.getDate();
		let time = d.getHours();
			time = time<10? "0" + d.getHours() : d.getHours();
		let minute = d.getMinutes();
			minute = minute<10? "0" + d.getMinutes() : d.getMinutes();
		let second = d.getSeconds();
			second = second<10? "0" + d.getSeconds() : d.getSeconds();
		let pFepMonth = year+month+day+time+minute+second;
		
		
	feeJson.push({acCode:pAcCode,clCrCode:pClCrCode,clCode:pClCode,studentId:pStudentId,upMonth:pUpMonth,status:pStatus,fepMonth:pFepMonth});
	
	}
	
	modAjax("SaveModFee",JSON.stringify(feeJson),"sendMessage","post");
	const threeB = document.getElementById("threeB");
	threeB.click();
}
/* regFee */
function adminRegFee() {
	const acCode = document.getElementsByName("acCode")[0].value;
	const mainpage = document.getElementById("mainpage");
	const tableMom = document.createElement("div");
	tableMom.setAttribute("id","tableMom");
	tableMom.style.position = "relative";
	tableMom.style.top = "4%";
	
	
			const selectMom = document.createElement("div");
			selectMom.style.position = "relative";
			selectMom.style.left = "2%";
			selectMom.style.top = "1%";
			const dateSelect = document.createElement("input");
			dateSelect.setAttribute("id","dateSelect");
			dateSelect.setAttribute("type","month");
			dateSelect.setAttribute("value",new Date().toISOString().slice(0, 7));		
			dateSelect.style.width = "150px";
			dateSelect.style.height = "40px";
			dateSelect.style.textAlign = "center";
			dateSelect.style.borderRadius = "5px";
			dateSelect.style.border = "2px solid #92acbb";
			selectMom.appendChild(dateSelect);
		
			const searchBtn = document.createElement("input");
			searchBtn.setAttribute("type","button");
			searchBtn.setAttribute("value","확인");
			searchBtn.setAttribute("onclick","getStList()");
			searchBtn.style.width = "80px";
			searchBtn.style.height = "30px";
			searchBtn.style.fontSize = "15px";
			searchBtn.style.textAlign = "center";
			searchBtn.style.border = "2px solid #92acbb";
			searchBtn.style.marginLeft = "2%";
			selectMom.appendChild(searchBtn);
			
		if(!mainpage.hasChildNodes()){
			
			mainpage.appendChild(tableMom);
			mainpage.appendChild(selectMom);
		} else {
			while(mainpage.hasChildNodes()) {
				mainpage.removeChild(mainpage.firstChild);
			}
			
			mainpage.appendChild(tableMom);
			mainpage.appendChild(selectMom);
		}
}
function getStList() {
	const acCode = document.getElementsByName("acCode")[0].value;
	const date = document.getElementById("dateSelect").value;
	const data = "acCode=" + acCode + "&upMonth=" + date.substring(0,4) + date.substring(5,7);
	getAjaxData("GetStList",data,"regFeeForm","post");
}

function regFeeForm(dat) {
	if(dat != '') {
		const data = JSON.parse(dat);
		const tableMom = document.getElementById("tableMom");
		if(tableMom.hasChildNodes()) {
			while(tableMom.hasChildNodes()) {
				tableMom.removeChild(tableMom.firstChild);
			}
		}
		
			
			let table = document.createElement("table");
			table.setAttribute("id","theTable");
			table.style.marginLeft = "15%";
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
			
			table.appendChild(mTr);
			
			for(let i=0; i<data.length; i++) {
				let tr = createTr("tr1");
				
				let td1 = createTd(data[i].clCrCode);
				let td2 = createTd(data[i].clCode);
				let td3 = createTd(data[i].studentId);
				let td4 = createTd(data[i].money);
				
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
			const bTr = document.createElement("tr");
			bTr.style.height = "60px";
			const bTd1 = document.createElement("td");
			bTd1.setAttribute("colspan",3);
			const bTd2 = document.createElement("td");
			const regBtn = document.createElement("input");
			regBtn.setAttribute("value","등록");
			regBtn.setAttribute("onclick","regFeeToJson()");
			regBtn.style.width = "80px";
			regBtn.style.height = "30px";
			regBtn.style.fontSize = "15px";
			regBtn.style.textAlign = "center";
			regBtn.style.border = "2px solid #92acbb";
			regBtn.style.borderRadius = "5px";
			regBtn.style.marginLeft = "45%";
			
			bTd2.appendChild(regBtn);
			bTr.appendChild(bTd1);
			bTr.appendChild(bTd2);
			
			table.appendChild(bTr);
			tableMom.appendChild(table);
			const mainpage = document.getElementById("mainpage");
			mainpage.appendChild(tableMom);


		if(!tableMom.hasChildNodes()){
		tableMom.appendChild(table);
		}else {
			while(tableMom.hasChildNodes()) {
         		tableMom.removeChild(tableMom.firstChild);
		}
		
		tableMom.appendChild(table);
		}
	mainpage.appendChild(tableMom);
	
	}else {
		if(tableMom.hasChildNodes()) {
			while(tableMom.hasChildNodes()) {
			tableMom.removeChild(tableMom.firstChild);
			}
		}
		alert("이미 등록되어 있습니다.");
	}
}


function regFeeToJson(){
	const theTable = document.getElementById("theTable");
	let feeJson = [];
	    
	for (let i=1; i<theTable.childNodes.length-1; i++ ) {
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
		let d = new Date();
		let year = d.getFullYear();
		let month = d.getMonth();
			month = month<10? "0" + (d.getMonth()+1) : (d.getMonth()+1);
		let day = d.getDate();
			day = day<10? "0" + d.getDate() : d.getDate();
		let time = d.getHours();
			time = time<10? "0" + d.getHours() : d.getHours();
		let minute = d.getMinutes();
			minute = minute<10? "0" + d.getMinutes() : d.getMinutes();
		let second = d.getSeconds();
			second = second<10? "0" + d.getSeconds() : d.getSeconds();
		let pUpMonth = year+month+day;
		
		//status
		let pStatus = 13;
		
		//money
		let moneyTd = tr.childNodes[3];
		let pMoney = moneyTd.getAttribute("id");
		
		//fepMonth
		let pFepMonth = year+month+day+time+minute+second;
		
		
	feeJson.push({acCode:pAcCode,clCrCode:pClCrCode,clCode:pClCode,studentId:pStudentId,upMonth:pUpMonth,status:pStatus,money:pMoney});
	
	}
	
	modAjax("RegFeeList",JSON.stringify(feeJson),"sendMessage","post");
	const threeB = document.getElementById("threeB");
	threeB.click();
}

function MyChildListF() {
	const userId = document.getElementsByName("userId")[0].value;
	const data = "userId=" + userId;
	getAjaxData("myChildList",data,"childSelectF","post")
}

function childSelectF(dat) {
	let data = JSON.parse(dat);
	let sCode = document.getElementById("sCode").value;
	const mainpage = document.getElementById("mainpage");
	const tableMom = document.createElement("div");
	tableMom.setAttribute("id","tableMom");
	tableMom.style.position = "relative";
	tableMom.style.top = "4%";
	
		const selectMom = document.createElement("div");
		selectMom.style.position = "relative";
		selectMom.style.left = "2%";
		selectMom.style.top = "1%";
		const dateSelect = document.createElement("input");
		dateSelect.setAttribute("id","dateSelect");
		dateSelect.setAttribute("type","month");
		dateSelect.setAttribute("value",new Date().toISOString().slice(0, 7));		
		dateSelect.style.width = "150px";
		dateSelect.style.height = "40px";
		dateSelect.style.textAlign = "center";
		dateSelect.style.borderRadius = "5px";
		dateSelect.style.border = "2px solid #92acbb";
		selectMom.appendChild(dateSelect);

		dateSelect.setAttribute("onchange","getMyFee()");
	
			let aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect");
			aSelect.setAttribute("onchange","childSelectedF()");
			aSelect.style.width = "200px";
			aSelect.style.height = "40px";
			aSelect.style.borderRadius = "5px";
			aSelect.style.border = "2px solid #92acbb";
			aSelect.style.position = "relative";
			aSelect.style.left = "70%";
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
							getMyFee();
						}
					}
					aSelect.appendChild(option);
				}
		selectMom.appendChild(aSelect);
		
		mainpage.appendChild(tableMom);
		mainpage.appendChild(selectMom);
	
}

function childSelectedF() {
	const aSelect = document.getElementById("aSelect");
	const selectedSCode = aSelect.options[aSelect.selectedIndex].value;
	const sCode = document.getElementById("sCode");
	sCode.setAttribute("value",selectedSCode);
	getMyFee();
}


function getMyFee() {
	const studentId = document.getElementById("sCode").value;
	const upMonth = document.getElementById("dateSelect").value;
	const data = "studentId=" + studentId + "&upMonth=" + upMonth.substring(0,4) + upMonth.substring(5,7);
	getAjaxData("GetMyFee",data,"displayMyFee","post")
}

function displayMyFee(dat) {
	let data = JSON.parse(dat);
	if(dat != '[]') {
	const tableMom = document.getElementById("tableMom");
	tableMom.setAttribute("id","tableMom");
	tableMom.style.float = "left";
	tableMom.style.marginTop = "120px";
	tableMom.style.marginLeft = "200px";
	
	
			let table = document.createElement("table");
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
			
			for(let i=0; i<data.length; i++) {
				let tr = createTr("tr1");
				
				let td1 = createTd("td1");
				let td2 = createTd("td2");
				let td3 = createTd("td3");
				let td4 = createTd("td4");
				
				td1.innerHTML = data[i].acName;
				td2.innerHTML = data[i].clName;
				td3.innerHTML = data[i].money;
				td4.innerHTML = (data[i].status == 13)? "미납":"납부완료";
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
			table.appendChild(tr);
			}
	
	
	const mainpage = document.getElementById("mainpage");
	if(!tableMom.hasChildNodes()){
		tableMom.appendChild(table);
	}else {
		while(tableMom.hasChildNodes()) {
         	tableMom.removeChild(tableMom.firstChild);
		}
		
		tableMom.appendChild(table);
	}
	mainpage.appendChild(tableMom);
	}else {
		alert("납부내역이 존재하지 않습니다.");
	}
}


