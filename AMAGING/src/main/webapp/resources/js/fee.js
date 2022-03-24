let divideCode = "";

function divide(code) {
	divideCode = code;
}

function adminFee(code) {
	divide(code);
	
	const mainpage = document.getElementById("mainpage");
	const tableMom = document.createElement("div");
	tableMom.setAttribute("id","tableMom");
	tableMom.style.position = "relative";
	tableMom.style.top = "4%";
	if(!mainpage.hasChildNodes()){
		const selectMom = document.createElement("div");
		selectMom.style.position = "relative";
		selectMom.style.left = "2%";
		selectMom.style.top = "1%";
		const dateSelect = document.createElement("input");
		dateSelect.setAttribute("id","dateSelect");
		dateSelect.setAttribute("type","month");
		dateSelect.setAttribute("value",new Date().toISOString().slice(0, 7));
		
		/*const date = dateSelect.value;
		const data = "acCode=" + acCode + "&upMonth=" + date.substring(0,4) + date.substring(5,7);
		const action = (divideCode == "get")? "GetFeeList" : "RegFeeList";
		const fn = (divideCode == "get")? "getAdminFeeList" : "RegFeeForm";
		dateSelect.setAttribute("onchange","getAjaxData(" + action +"," + data + "," + fn + ",post)");*/
		
		dateSelect.style.width = "150px";
		dateSelect.style.height = "40px";
		dateSelect.style.textAlign = "center";
		dateSelect.style.borderRadius = "5px";
		dateSelect.style.border = "2px solid #92acbb";
		
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
		searchBtn.style.height = "30px";
		searchBtn.style.fontSize = "15px";
		searchBtn.style.textAlign = "center";
		searchBtn.style.border = "2px solid #92acbb";
		searchBtn.style.marginLeft = "2%";
	
	selectMom.appendChild(dateSelect);
	selectMom.appendChild(nameSearch);
	selectMom.appendChild(searchBtn);
	mainpage.appendChild(tableMom);
	mainpage.appendChild(selectMom);
	} else {
		while(mainpage.hasChildNodes()) {
			mainpage.removeChild(mainpage.firstChild);
		}
		const selectMom = document.createElement("div");
		selectMom.style.position = "relative";
		selectMom.style.left = "2%";
		selectMom.style.top = "1%";
		const dateSelect = document.createElement("input");
		dateSelect.setAttribute("id","dateSelect");
		dateSelect.setAttribute("type","month");
		dateSelect.setAttribute("value",new Date().toISOString().slice(0, 7));
		
		/*const date = dateSelect.value;
		const data = "acCode=" + acCode + "&upMonth=" + date.substring(0,4) + date.substring(5,7);
		const action = (divideCode == "get")? "GetFeeList" : "RegFeeList";
		const fn = (divideCode == "get")? "getAdminFeeList" : "RegFeeForm";
		dateSelect.setAttribute("onchange","getAjaxData(" + action +"," + data + "," + fn + ",post)");*/
		
		dateSelect.style.width = "150px";
		dateSelect.style.height = "40px";
		dateSelect.style.textAlign = "center";
		dateSelect.style.borderRadius = "5px";
		dateSelect.style.border = "2px solid #92acbb";
	selectMom.appendChild(dateSelect);
	mainpage.appendChild(tableMom);
	mainpage.appendChild(selectMom);
	}
	const dateSelect = document.getElementById("dateSelect").value;
	const acCode = document.getElementsByName("acCode")[0].value;
	const data = "acCode=" + acCode + "&upMonth=" + "202202";
	//const data = "acCode=" + acCode + "&upMonth=" + dateSelect.substring(0,4) + dateSelect.substring(5,7);
	const action = (divideCode == "get")? "GetFeeList" : "RegFee";
	const fn = (divideCode == "get")? "getAdminFeeList" : "RegFeeForm";
	alert(action + " : " + data + " : " + fn)
	getAjaxData(action,data,fn,"post");
}

function getAdminFeeList(dat) {
	const data = JSON.parse(dat);
	const tableMom = document.getElementById("tableMom");
	if(!tableMom.hasChildNodes()) {
			const modBtn = document.createElement("input");
			modBtn.setAttribute("type","button");
			modBtn.setAttribute("value","수정");
			modBtn.setAttribute("id","modBtn");
			modBtn.setAttribute("onclick","modFeeList(" + dat + ")");
			modBtn.style.cursor = "pointer";
			modBtn.style.width = "100px";
			modBtn.style.height = "40px";
			modBtn.style.borderRadius = "5px";
			modBtn.style.border = "2px solid #92acbb";
			const modDiv = document.createElement("div");
			modDiv.setAttribute("id","modDiv");
			modDiv.style.position = "relative";
			modDiv.style.width = "110px";
			modDiv.style.left = "83%";
			modDiv.style.top = "-6%";
			
			modDiv.appendChild(modBtn);
			
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
	
	tableMom.appendChild(table);
	const mainpage = document.getElementById("mainpage");
	mainpage.appendChild(modDiv);
	mainpage.appendChild(tableMom);
	}else {
		
		while(tableMom.hasChildNodes()) {
         tableMom.removeChild(tableMom.firstChild);
		}
		const modDiva = document.getElementById("modDiv");
		while(modDiva.hasChildNodes()) {
         modDiva.removeChild(modDiva.firstChild);
		}
			const modBtn = document.createElement("input");
			modBtn.setAttribute("type","button");
			modBtn.setAttribute("value","수정");
			modBtn.setAttribute("id","modBtn");
			modBtn.setAttribute("onclick","modFeeList(" + dat + ")");
			modBtn.style.cursor = "pointer";
			modBtn.style.width = "100px";
			modBtn.style.height = "40px";
			modBtn.style.borderRadius = "5px";
			modBtn.style.border = "2px solid #92acbb";
			const modDiv = document.createElement("div");
			modDiv.setAttribute("id","modDiv");
			modDiv.style.position = "relative";
			modDiv.style.left = "83%";
			modDiv.style.top = "-6%";
			
			modDiv.appendChild(modBtn);
			
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
	
	tableMom.appendChild(table);
	const mainpage = document.getElementById("mainpage");
	mainpage.appendChild(modDiv);
	mainpage.appendChild(tableMom);
	}
}

function searchFee() {
	const acCode = document.getElementsByName("acCode")[0].value;
	const date = document.getElementById("dateSelect").value;
	const name = document.getElementById("nameSearch").value
	const data = "acCode=" + acCode + "&upMonth=" + "202202" + "&studentName=" + name;
	getAjaxData("SearchName",data,"getAdminFeeList","post");
}

function modFeeList(dat) {
	//const stringify = JSON.stringify(dat);
	//const data = JSON.parse(stringify);
	const data = JSON.parse(dat);
   const tableMom = document.getElementById("tableMom");
   const modDiv = document.getElementById("modDiv");
   if(modDiv.hasChildNodes()) {
   		while(modDiv.hasChildNodes()) {
         modDiv.removeChild(modDiv.firstChild);
		}
   }
   if(tableMom.hasChildNodes()) {
		while(tableMom.hasChildNodes()) {
         tableMom.removeChild(tableMom.firstChild);
		}
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
         
         hTd2.innerHTML = "<input type = 'button' value = '등록' onclick='modFeeToJson(1)' style = 'cursor:pointer; text-align:center; width:60px; height:35px'/>";
         //hTd2.innerHTML = "<input type = 'button' value = '등록' onclick='' style = 'cursor:pointer; text-align:center; width:60px; height:35px'/>";
		 hTr1.appendChild(hTd1);
         hTr1.appendChild(hTd2);
         table.appendChild(hTr1);
   tableMom.appendChild(table);
   const mainpage = document.getElementById("mainpage");
   mainpage.appendChild(tableMom);
   }else {
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
         
         hTd2.innerHTML = "<input type = 'button' value = '등록' onclick='modFeeToJson(1)' style = 'cursor:pointer; text-align:center; width:60px; height:35px'/>";
         //hTd2.innerHTML = "<input type = 'button' value = '등록' onclick='' style = 'cursor:pointer; text-align:center; width:60px; height:35px'/>";
		 hTr1.appendChild(hTd1);
         hTr1.appendChild(hTd2);
         table.appendChild(hTr1);
   tableMom.appendChild(table);
   const mainpage = document.getElementById("mainpage");
   mainpage.appendChild(tableMom);	
   }
}

function modFeeToJson(numb){
	alert("action값 = " + numb)
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
	if(numb == 1) {
		action = "SaveModFee";
	}else {
		action = "RegFee";
	}
	modAjax(action,JSON.stringify(feeJson),"sendMessage","post");
	const getFee = document.getElementsByName("getFee")[0];
	getFee.click();
}

function RegFeeForm() {
	
}

