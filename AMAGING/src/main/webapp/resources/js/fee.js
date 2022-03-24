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
	selectMom.appendChild(dateSelect);
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
	const data = "acCode=" + "1024588469" + "&upMonth=" + "202202";
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
			modBtn.style.position = "absolute";
			modBtn.style.left = "83%";
			modBtn.style.top = "-8%";
			
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
				td6.innerHTML = (data[i].status == 13)? "미납" : "납부" ;
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);
				tr.appendChild(td6);
			table.appendChild(tr);
			}
	
	tableMom.appendChild(modBtn);
	tableMom.appendChild(table);
	const mainpage = document.getElementById("mainpage");
	mainpage.appendChild(tableMom);
	}
}

function modFeeList(dat) {
	alert("dateForm Check" + "  :  " + new Date().toISOString().slice(0, 10));
	const year = new Date().toISOString().slice(0, 10)
	const stringify = JSON.stringify(dat);
	const data = JSON.parse(stringify);
  // const data = JSON.parse(dat);
   const tableMom = document.getElementById("tableMom");
   
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
         
         //hTd2.innerHTML = "<input type = 'button' value = '등록' onclick='modFeeToJson(1)' style = 'cursor:pointer; text-align:center; width:60px; height:35px'/>";
         hTd2.innerHTML = "<input type = 'button' value = '등록' onclick='' style = 'cursor:pointer; text-align:center; width:60px; height:35px'/>";
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
			//let td1 = createTd(data[i].studentId);
            //let td2 = createTd(data[i].clCode);
            //let td3 = createTd(data[i].clCrCode);
            //let td4 = createTd(data[i].upMonth);

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
		let pFepMonth = (statTd.getAttribute("id") != "null")? statTd.getAttribute("id") : new Date().toISOString().slice(0, 7);
		
		
	feeJson.push({acCode:pAcCode,clCrCode:pClCrCode,clCode:pClCode,studentId:pStudentId,upMonth:pUpMonth,status:pStatus,fepMonth:pFepMonth});
	
	}
	if(numb == 1) {
		action = "saveModFee";
	}else {
		action = "regFee";
	}
	modAjax(action,JSON.stringify(feeJson),"sendMessage","post");
}

function RegFeeForm() {
	
}

