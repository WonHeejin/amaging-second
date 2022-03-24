/**
 학사일정 
 */
function getAcPlanPage(formName,action){

		   const form = document.getElementsByName(formName)[0];
	      form.setAttribute("action",action);
	      form.submit();
}

	

	
	/*선생님, 학생 학사일정 가져오기  */
	 	function getTSPlanList(uId,sDate){
 	
	
		var today = new Date();

		var year = today.getFullYear();
		var month = ('0' + (today.getMonth() + 1)).slice(-2);
		var day = ('0' + today.getDate()).slice(-2);
		
		var dateString = year + month;
		if(sDate == "1"){sDate = dateString;}
 		const data = "userId="+ encodeURIComponent(uId)+"&sDate="+ encodeURIComponent(sDate);
 		
		getAjaxData("/GetPlanList", data, "displayPlan","post" );
	}
	
	/*관리자학사일정 가져오기*/
	 	function getAPlanList(sDate){
 		let uId = document.getElementsByName("userId")[0].value;
		let ac = document.getElementsByName("acCode")[0].value;
 		var today = new Date();
		
		var year = today.getFullYear();
		var month = ('0' + (today.getMonth() + 1)).slice(-2);
		var day = ('0' + today.getDate()).slice(-2);
		
		var dateString = year + month;
		if(sDate == "1"){sDate = dateString;}
 		const data = "userId="+ encodeURIComponent(uId)+"&acCode="+ encodeURIComponent(ac)+"&sDate="+encodeURIComponent(sDate);
 
		getAjaxData("/GetPlanList", data, "displayAPlan","post" );
	}
	/*학사일정 내용표시 */
	function displayPlan(plan) {
		let ap = JSON.parse(plan);

		const list = document.getElementById("acPlanList");
		
		let idx = 0;
		let plandata = '<div style = "text-align:center;"><span style="font-size: x-large;">'+ap[0].sdate.substr(0,4)+'년'+ap[0].sdate.substr(4,2)+'월'+'</span></div><br>'
		    plandata += '<span id = acp >';
		
		for(idx;idx<ap.length;idx++){
		    
		    plandata += '■'+ap[idx].sdate.substr(-2)+'일'; 
		    if(ap[idx].sdate!=ap[idx].edate){
		    plandata += ' ~ ' + ap[idx].edate.substr(-2)+'일';
		    }
		    plandata += ' [' + ap[idx].acName+'] ' + ': ' + ap[idx].contents+'<br>';
		   
		}
		 plandata +='</span>';
			list.innerHTML=plandata;
	}
let ap;
	/*관리자학사일정 내용표시 */
	function displayAPlan(plan) {
		ap = JSON.parse(plan);
		const list = document.getElementById("acPlanList");
		if(list.innerHTML!=null){list.innerHTML="";}
		let idx = 0;
		let plandata = '<div style = "text-align:center;"><span style="font-size: x-large;">'+ap[0].sdate.substr(0,4)+'년'+ap[0].sdate.substr(4,2)+'월'+'</span></div><br>'
		list.innerHTML=plandata;
		for(idx;idx<ap.length;idx++){
			let plandata2 = createDiv("planbox","planbox"+idx,"planbox"+idx,idx);
		    plandata2.innerHTML = '■'+ap[idx].sdate.substr(-2)+'일'; 
		    if(ap[idx].sdate!=ap[idx].edate){
		    plandata2.innerHTML += ' ~ ' + ap[idx].edate.substr(-2)+'일';
		    }
		    plandata2.innerHTML += ' [' + ap[idx].acName+'] ' + ': ' + ap[idx].contents+'<br>';
		    plandata2.setAttribute("onClick","selectBotton(this)");
		
			list.appendChild(plandata2);
		}
	}
	
	/*관리자 학사일정선택기능 */
	
	function createDiv(className, id, name, value) {
		let div = document.createElement("div");
		div.setAttribute("class", className);
		div.setAttribute("id", id);
		div.setAttribute("name", name);
		div.setAttribute("value", value);
		return div;
	}
	
	
let a;
let currentRecord=null;	
	function selectBotton(obj){
		if(currentRecord!=null){
			currentRecord.style.backgroundColor="#ffffff";
			currentRecord.style.color="black";
			currentRecord=null;
		}
		currentRecord=obj;
		obj.style.backgroundColor="#FF2E2E";
		obj.style.color="#ffffff";
		/*선택된 학사일정정보:: 시작 종료 내용을 입력창에 전달.*/
		let idx=currentRecord.getAttribute("value");
		let sd = document.getElementById("sd");
		let ed = document.getElementById("ed");
		let cn = document.getElementById("contents");
		sd.setAttribute("value",ap[idx].sdate);
		ed.setAttribute("value",ap[idx].edate);
		cn.setAttribute("value",ap[idx].contents);
	}
	
	function selectAPList(){
	if(currentRecord!=null){
		document.getElementsByName("selectedAcName")[0].value=currentRecord.childNodes[1].innerHTML;
		const mainpage=document.getElementById("mainpage");
		let container = document.getElementById("container");
		mainpage.removeChild(container);
	}else{
		alert("학원을 선택해주세요");
	}
}
	
	/*학사일정 등록 */
	function setPlanList(ac){
		let s = document.getElementById("sd").value;
		let e = document.getElementById("ed").value;
		const sDate = s;
		const eDate = e;
		if(s<=e){
		let contents = document.getElementById("contents").value;
 		const data = "contents="+ encodeURIComponent(contents)+"&acCode="+ encodeURIComponent(ac)+"&sDate="+encodeURIComponent(sDate)
					 +"&eDate="+encodeURIComponent(eDate);
 		
		getAjaxData("/SetPlanList", data, "sendMessage1","post" );
		}else{
			sendMessage("종료일은 시작일보다 과거일수 없습니다.");
			document.getElementById("sd").value="";
			document.getElementById("ed").value="";
		}
	document.getElementById("acPlanList").innerHTML="";	
	document.getElementById("oneB").click();
	}
	
	/*학사일정 수정 */
	function updPlanList(ac){
		let s = document.getElementById("sd").value;
		let e = document.getElementById("ed").value;
		const sDate = s;
		const eDate = e;
		if(s<=e){
		let contents = document.getElementById("contents").value;
 		const data = "contents="+ encodeURIComponent(contents)+"&acCode="+ encodeURIComponent(ac)+"&sDate="+encodeURIComponent(sDate)
					 +"&eDate="+encodeURIComponent(eDate);
 		
		getAjaxData("/UpdPlanList", data, "sendMessage1","post" );
		}else{
			sendMessage("종료일은 시작일보다 과거일수 없습니다.");
			document.getElementById("sd").value="";
			document.getElementById("ed").value="";
		}
	//document.getElementById("acPlanList").innerHTML="";

	}
	
		/*학사일정 삭제  */
	function delPlanList(ac){
		let s = document.getElementById("sd").value;
		let e = document.getElementById("ed").value;
		const sDate = s;
		const eDate = e;
		if(s<=e){
	
 		const data ="acCode="+ encodeURIComponent(ac)+"&sDate="+encodeURIComponent(sDate)
					 +"&eDate="+encodeURIComponent(eDate);
 		
		getAjaxData("/DelPlanList", data, "sendMessage1","post" );
		}else{
			sendMessage("종료일은 시작일보다 과거일수 없습니다.");
			document.getElementById("sd").value="";
			document.getElementById("ed").value="";
		}
	document.getElementById("acPlanList").innerHTML="";	
	document.getElementById("oneB").click();
	}

function sendMessage1(message){
	let m =JSON.stringify(message);
		alert(m);
		if(ap[0].sdate.substr(4,2)=="01"){document.getElementById("jan").click();}	
	else if(ap[0].sdate.substr(4,2)=="02"){document.getElementById("feb").click();}
	else if(ap[0].sdate.substr(4,2)=="03"){document.getElementById("mar").click();}
	else if(ap[0].sdate.substr(4,2)=="04"){document.getElementById("apr").click();}
	else if(ap[0].sdate.substr(4,2)=="05"){document.getElementById("may").click();}
	else if(ap[0].sdate.substr(4,2)=="06"){document.getElementById("jun").click();}
	else if(ap[0].sdate.substr(4,2)=="07"){document.getElementById("jul").click();}
	else if(ap[0].sdate.substr(4,2)=="08"){document.getElementById("aug").click();}
	else if(ap[0].sdate.substr(4,2)=="09"){document.getElementById("sep").click();}
	else if(ap[0].sdate.substr(4,2)=="10"){document.getElementById("oct").click();}
	else if(ap[0].sdate.substr(4,2)=="11"){document.getElementById("nov").click();}
	else if(ap[0].sdate.substr(4,2)=="12"){document.getElementById("dec").click();}
}
