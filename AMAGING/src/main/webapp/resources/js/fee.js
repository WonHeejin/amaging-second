let divideCode = "";

function divide(code) {
	divideCode = code;
}

function adminFee(acCode,code) {
	divide(code);
	const mainpage = document.getElementById("mainpage");
	if(!mainpage.hasChildNodes()){
		const selectMom = document.createElement("div");
		selectMom.style.position = "relative";
		selectMom.style.left = "2%";
		selectMom.style.top = "1%";
		const dateSelect = document.createElement("input");
		dateSelect.setAttribute("id","dateSelect");
		dateSelect.setAttribute("type","month");
		
		//const data = dateSelect.substring(0,4) + dateSelect.substring(5,7);
		//const action = (divideCode == "get")? "GetFeeList" : "RegFeeList";
		//const fn = (divideCode == "get")? "getAdminFeeList" : "RegFeeForm";
		//dateSelect.setAttribute("onchange","getAjaxData(" + action +"," + data + "," + fn + ",post)");
		
		dateSelect.setAttribute("value",new Date().toISOString().slice(0, 7));
		dateSelect.style.width = "150px";
		dateSelect.style.height = "40px";
		dateSelect.style.textAlign = "center";
		dateSelect.style.borderRadius = "5px";
		dateSelect.style.border = "2px solid #92acbb";
	selectMom.appendChild(dateSelect);
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
		dateSelect.style.width = "150px";
		dateSelect.style.height = "40px";
		dateSelect.style.textAlign = "center";
		dateSelect.style.borderRadius = "5px";
		dateSelect.style.border = "2px solid #92acbb";
	selectMom.appendChild(dateSelect);
	mainpage.appendChild(selectMom);
	}
	const dateSelect = document.getElementById("dateSelect").value;
	const data = dateSelect.substring(0,4) + dateSelect.substring(5,7);
	alert(data)
	const action = (divideCode == "get")? "GetFeeList" : "RegFeeList";
	const fn = (divideCode == "get")? "getAdminFeeList" : "RegFeeForm";
	//getAjaxData(action,data,fn,"post");
}

function getAdminFeeList() {
	
}

function RegFeeForm() {
	
}