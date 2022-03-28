/**
 QnA(상담) * 
 */
let aData;//학원 리스트 
let tCn;//선생님이 불러온 상담리스트
let selectedNum=0;//선택된 게시물의 idx

let intCode = "";
let acCodeHidden = "";
function divide(menuCode) {
	intCode = menuCode;
}

function MyChildList() {
	const userId = document.getElementsByName("userId")[0].value;
	const data = "userId=" + userId;
	getAjaxData("myChildList",data,"childSelect","post");
}

function childSelect(dat) {
	let data = JSON.parse(dat);
	let sCode = document.getElementById("sCode").value;
	//let sCode = "S1067";
	const mainpage = document.getElementById("mainpage");
	const checkCode = "1133";
	
		
		
			let aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect");
			aSelect.setAttribute("onchange","childSelected(" + checkCode + "," + sCode +")");
			aSelect.style.width = "200px";
			aSelect.style.height = "40px";
			aSelect.style.borderRadius = "5px";
			aSelect.style.border = "2px solid #92acbb";
			aSelect.style.position = "relative";
			aSelect.style.left = "85%";
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

	
	mainpage.appendChild(aSelect);
	
	
	const selectMom = document.createElement("div");
		selectMom.setAttribute("id","selectMom");
		selectMom.style.width = "250px";
		selectMom.style.height = "60px";
		selectMom.style.textAlign = "center";
		selectMom.style.position = "relative"
		selectMom.style.left = "0%";
		selectMom.style.top = "-5%";
	mainpage.appendChild(selectMom);
	//getAjaxData("myClassList",data,"classOnAc","post")
	//classOnAc(sel);
	
	//조회 - 세션에현재 저장된 acCode Selected -> Selected 된 값으로 현재 선생코드가 갖고있는 class 조회
	// -> Class select -> 해당 Class의 성적 display
	//const btnclose = document.getElementById("btn-close");
	//	btnclose.addEventListener("click", e => {
    //		exampleModal.style.display = "none"
	//	})
	
	

}

function childSelected(selectedCode,sessionCode) {
	//let acCode = selectedCode;
	const userId = document.getElementsByName("userId")[0].value;

	if(selectedCode != "1133") {
		if(selectedCode == sessionCode) {
			getMyGrade(selectedCode);
		}
	}else {
		// onchange로 접근. 선택된값 != 세션값 --> openModal else --> getAjaxData
		let aSelect = document.getElementById("aSelect");
		let sCode = aSelect.options[aSelect.selectedIndex].value;
		if(sCode != sessionCode) {
			let presentSCode = document.getElementById("sCode");
			presentSCode.setAttribute("id",sCode);
			
		}else {
		
			
		}
		
			//openModal에서 입력된 비밀번호 서버전송 --> 일치 --> 세션에 저장, 클래스목록 조회후 jsonData -> classOnAc()
			//								   불일치 --> message = 비밀번호가 일치하지 않습니다. or 접근권한이 없습니다.
	}
}

function myAcademyList(userId,menuCode) {
	const data = "teacherId=" + userId;
	divide(menuCode);
	getAjaxData("myAcademyList",data,"academySelect","post")
	teacherCounsel();
}


/* 선생님 답변*/
function updAnswer(){
	
	let n = selectedNum;
	const data = "post="+encodeURIComponent(tCn[n].post)+"&answer="+encodeURIComponent(document.getElementById("answer").value);
	getAjaxData("/UpdAnswer",data,"sendMessage1","post");
}
function sendMessage1(message){
	let m =JSON.stringify(message);
		alert(m);
		closeModal();
		document.getElementById("answer").value="";
	
	
		teacherCounsel(tCn[selectedNum].rpCode,tCn[selectedNum].acCode);
	
}



/* 선생님 상담 글 데이터 불러와서 표형식으로 표현 불러오기 */

function teacherCounsel(uId,ac){
	
	if(document.getElementById("mainpage").innerHTML!=null){
		document.getElementById("mainpage").innerHTML="";
	}
	if(ac=="1"){ac=aData[0].acCode}
	//if(ac=="1"){ac=document.getElementById("ac1").value}
	const data = "userId=" + uId +"&acCode=" + ac;
	
	getAjaxData("/GetContents",data,"dpTCounselList","post");
}


function dpTCounselList(dat) {
	tCn = JSON.parse(dat);
	
			const tableMom = document.createElement("div");
			let table = document.createElement("table");
			let	mTr = createTr("mTr1");
			let mTd1 = createTd("mTd1");
			let mTd2 = createTd("mTd2");
			    mTd2.setAttribute("colspan",2);
			let mTd3 = createTd("mTd3");
			
			mTd1.innerHTML = "상담요청제목";
			mTd2.innerHTML = "From";
			mTd3.innerHTML = "답변";
						
			mTr.appendChild(mTd1);
			mTr.appendChild(mTd2);
			mTr.appendChild(mTd3);
					
			table.appendChild(mTr);
			
			for(let i=0; i<tCn.length; i++) {
			
							let tr = createTr("tr1");
								tr.setAttribute("onClick","selectBotton(this,'"+i+"')");
								
								tr.setAttribute("name","tr"+i);
							let td1 = createTd("td1");
							let td2 = createTd("td2");
							let td3 = createTd("td3");
							let td4 = createTd("td4");
				
							td1.innerHTML = tCn[i].title;
							td2.innerHTML = tCn[i].userName;
							td3.innerHTML = ((tCn[i].userId).substr(0,1) == "P")? "학부모":"학생";
							td4.innerHTML = ((tCn[i].answer)=="답변대기중")? "답변대기중":"답변완료";
							tr.appendChild(td1);
							tr.appendChild(td2);
							tr.appendChild(td3);
							tr.appendChild(td4);
							table.appendChild(tr);
							
				
			}
	
	
	tableMom.appendChild(table);
	const mainpage = document.getElementById("mainpage");
	mainpage.appendChild(tableMom);

}

/* 관리자 상담 글 데이터 불러와서 표형식으로 표현 불러오기 */

function adminCounsel(uId,ac,uc){
	
	if(document.getElementById("mainpage").innerHTML!=null){
		document.getElementById("mainpage").innerHTML="";
	}
	
	
	const data = "userId=" + uId +"&acCode=" + ac + "&userCode=" + uc;
	
	getAjaxData("/GetContents",data,"dpTCounselList","post");
}
/*학생 상담글 리스트 출력 */
function stCounsel(uId,uc){
	
	if(document.getElementById("mainpage").innerHTML!=null){
		document.getElementById("mainpage").innerHTML="";
	}
	
	
	const data = "userId=" + uId + "&userCode=" + uc;
	
	getAjaxData("/GetContents",data,"dpPCounselList","post");
	
}

/* 학부모 상담 글 데이터 불러와서 표형식으로 표현 불러오기 */

function parentsCounsel(uId,uc){
	
	if(document.getElementById("mainpage").innerHTML!=null){
		document.getElementById("mainpage").innerHTML="";
	}
	
	
	const data = "userId=" + uId + "&userCode=" + uc;
	
	getAjaxData("/GetContents",data,"dpPCounselList","post");
	MyChildList();
}

function dpPCounselList(dat) {
	tCn = JSON.parse(dat);
	
			const tableMom = document.createElement("div");
			let table = document.createElement("table");
			let	mTr = createTr("mTr1");
			let mTd1 = createTd("mTd1");
			let mTd2 = createTd("mTd2");
			let mTd3 = createTd("mTd3");
			let mTd4 = createTd("mTd4");
			
			mTd1.innerHTML = "학원이름";
			mTd2.innerHTML = "상담요청제목";
			mTd3.innerHTML = "TO";
			mTd4.innerHTML = "답변";
						
			mTr.appendChild(mTd1);
			mTr.appendChild(mTd2);
			mTr.appendChild(mTd3);
			mTr.appendChild(mTd4);
					
			table.appendChild(mTr);
			
			for(let i=0; i<tCn.length; i++) {
			
							let tr = createTr("tr1");
								tr.setAttribute("onClick","selectBotton(this,'"+i+"')");
								
								tr.setAttribute("name","tr"+i);
							let td1 = createPTd("td1");
							let td2 = createPTd("td2");
							let td3 = createPTd("td3");
							let td4 = createPTd("td4");
				
							td1.innerHTML = tCn[i].acName;
							td2.innerHTML = tCn[i].title;
							td3.innerHTML = tCn[i].rpName;
							td4.innerHTML = ((tCn[i].answer)=="답변대기중")? "답변대기중":"답변이 있습니다.";
							tr.appendChild(td1);
							tr.appendChild(td2);
							tr.appendChild(td3);
							tr.appendChild(td4);
							table.appendChild(tr);
										
			}
	
	
	tableMom.appendChild(table);
	const mainpage = document.getElementById("mainpage");
	mainpage.appendChild(tableMom);

}

let currentRecord=null;	

	function selectBotton(obj,idx){
		selectedNum=idx;
		if(currentRecord!=null){
			currentRecord.style.backgroundColor="#ffffff";
			currentRecord.style.color="black";
			currentRecord=null;
		}
		currentRecord=obj;
		obj.style.backgroundColor="#FF2E2E";
		obj.style.color="#ffffff";
		
		openModal(idx);
	
	}


 
function academySelect(dat) {
	aData = JSON.parse(dat);
	
	let aCode = document.getElementById("acCode").value;
	//const mainpage = document.getElementById("mainpage");
	const selectBox = document.getElementById("selectBox");
	const checkCode = "1133";
	
		if(!selectBox.hasChildNodes()) {
		
			let aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect");
			
			//aSelect.setAttribute("onchange","makeSelected(" + checkCode + "," + aCode +")");
			aSelect.setAttribute("onchange","teacherCounsel('"+document.getElementsByName("userId")[0].value+"',this.value)");
			aSelect.style.width = "200px";
			aSelect.style.height = "40px";
			aSelect.style.borderRadius = "5px";
			aSelect.style.border = "2px solid #92acbb";
			aSelect.style.position = "relative";
			aSelect.style.left = "85%";
			aSelect.style.top = "1%";
			
			let firstOption = document.createElement("option");
				firstOption.innerHTML = "학원 선택"
				//if(acCode == null) {
				firstOption.setAttribute("selected","selected");
				//}
				firstOption.setAttribute("disabled","disabled");
				aSelect.appendChild(firstOption);
				for(let i=0; i<aData.length; i++) {
					let option = document.createElement("option");
					option.setAttribute("id","ac"+i);
					option.setAttribute("value",aData[i].acCode);
					option.innerHTML = aData[i].acName;
					if(aCode != "") {
						if (aCode == aData[i].acCode) {
							option.setAttribute("selected", "selected")
							makeSelected1(aData[i].acCode,aCode);
						}
					}
					aSelect.appendChild(option);
				}

	
	selectBox.appendChild(aSelect);
	
	
	const selectMom = document.createElement("div");
		selectMom.setAttribute("id","selectMom");
		selectMom.style.width = "250px";
		selectMom.style.height = "60px";
		selectMom.style.textAlign = "center";
		selectMom.style.position = "relative"
		selectMom.style.left = "0%";
		selectMom.style.top = "-5%";
	mainpage.appendChild(selectMom);
	//getAjaxData("myClassList",data,"classOnAc","post")
	//classOnAc(sel);
	
	//조회 - 세션에현재 저장된 acCode Selected -> Selected 된 값으로 현재 선생코드가 갖고있는 class 조회
	// -> Class select -> 해당 Class의 성적 display
	const btnclose = document.getElementById("btn-close");
		//btnclose.addEventListener("click", e => {
    		//exampleModal.style.display = "none"
		//})
	
	}else {
		while(mainpage.hasChildNodes()) {
			mainpage.removeChild(mainpage.firstChild);
		}
	
		
			let aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect");
			aSelect.setAttribute("onchange","makeSelected(" + checkCode + "," + aCode +")");
			aSelect.style.width = "200px";
			aSelect.style.height = "40px";
			aSelect.style.borderRadius = "5px";
			aSelect.style.border = "2px solid #92acbb";
			aSelect.style.position = "relative";
			aSelect.style.left = "85%";
			aSelect.style.top = "1%";
			
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

	
	mainpage.appendChild(aSelect);
	
	
	const selectMom = document.createElement("div");
		selectMom.setAttribute("id","selectMom");
		selectMom.style.width = "250px";
		selectMom.style.height = "60px";
		selectMom.style.textAlign = "center";
		selectMom.style.position = "relative"
		selectMom.style.left = "0%";
		selectMom.style.top = "-5%";
	mainpage.appendChild(selectMom);
	//getAjaxData("myClassList",data,"classOnAc","post")
	//classOnAc(sel);
	
	//조회 - 세션에현재 저장된 acCode Selected -> Selected 된 값으로 현재 선생코드가 갖고있는 class 조회
	// -> Class select -> 해당 Class의 성적 display
	const btnclose = document.getElementById("btn-close");
		btnclose.addEventListener("click", e => {
    		exampleModal.style.display = "none"
		})
	
	}
	let uId=document.getElementsByName("userId")[0].value;
	teacherCounsel(uId,'1');
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
			openModal(acCode);
		}else {
			const data = "teacherId=" + userId + "&acCode=" + sessionCode;
		
			getAjaxData("myClassList",data,"classOnAc","post");
		}
		
			//openModal에서 입력된 비밀번호 서버전송 --> 일치 --> 세션에 저장, 클래스목록 조회후 jsonData -> classOnAc()
			//								   불일치 --> message = 비밀번호가 일치하지 않습니다. or 접근권한이 없습니다.
	}
}
/* 제목 클릭시 모달로 내용띄우기 */
function openModal(idx) {
	const exampleModal = document.getElementById("exampleModal");
    	  exampleModal.style.display = "flex";
	const confirmBtn = document.getElementById("confirmBtn");
	let mheader =  document.getElementById("mheader");
		mheader.innerHTML="&nbsp;&nbsp;제목 : " + tCn[idx].title ;
	let from = document.getElementById("from");
		from.innerHTML="&nbsp;&nbsp;보낸이 : " + tCn[idx].userName ;
	let question = document.getElementById("question");
		question.innerHTML="&nbsp;&nbsp;내용 : " + tCn[idx].question;
	let answer = document.getElementById("answer");
		
		answer.setAttribute("placeholder",tCn[idx].answer);

	
		//answer1.innerHTML= tCn[idx].answer ;
		/*if(tCn[idx].answer=="답변대기중"){
			//answer.setAttribute("type","text");
			//answer.innerText="답변대기중";
			answer.setAttribute("placeholder","답변대기중");
			//answer.setAttribute("readonly","");
		}*/
		
		/*if(tCn[idx].answer=="답변대기중"){
			answer.setAttribute("type","text");
			//answer.innerText="답변대기중";
			answer.setAttribute("placeholder","답변대기중");
			//answer.setAttribute("readonly","");
		}else if (tCn[idx].answer!="답변대기중"){
			//answer.innerHTML=tCn[idx].answer;
			answer.setAttribute("value",tCn[idx].answer);
			answer.setAttribute("readonly","");
		}*/
		
}

function closeModal() {
	const exampleModal = document.getElementById("exampleModal");
    	  exampleModal.style.display = "none";
		document.getElementById("answer").value="";
	

}

function closeModal1() {
	const exampleModal = document.getElementById("exampleModal");
    	  exampleModal.style.display = "none";
		document.getElementById("answer").value="";
	const exampleModal1 = document.getElementById("exampleModal1");
    	  exampleModal1.style.display = "none";
	
	const head = document.getElementById("headclose");
	const s = document.getElementById("selects");
	const s1 = document.getElementById("selects1");
	const s2 = document.getElementById("selects2");
	
	if(s.hasChildNodes()){
			s.removeChild(s.firstChild);
			s1.removeChild(s1.firstChild);
			s2.removeChild(s2.firstChild);
	}

}

/*글쓰기 클릭시 모달 */

function openModa2() {
	let cSelect = document.getElementById("aSelect").value;
	
	if(cSelect == "자녀 선택"){
		alert("자녀를 선택해주세요!");
		closeModal();
	}else{const exampleModal = document.getElementById("exampleModal1");
    	  exampleModal.style.display = "flex";
	const confirmBtn = document.getElementById("confirmBtn");
	let mheader =  document.getElementById("mheader");
	
	let from = document.getElementById("from");
	
	let question = document.getElementById("question");
	
		myAcademyList1(cSelect); 
		}

}
/*학생글등록모달폼 */
function openModa3() {
	const exampleModal = document.getElementById("exampleModal1")
    	  exampleModal.style.display = "flex";
	const confirmBtn = document.getElementById("confirmBtn");
	let mheader =  document.getElementById("mheader");
	
	let from = document.getElementById("from");
	
	let question = document.getElementById("question");
	
		myAcademyList2(); 
		

}

/*학생 글쓰기 모달창에 본인의 학원리스트 불러오기 */
function myAcademyList2() {
	let uId = document.getElementsByName("userId")[0].value;
	
	const data = "userId=" + uId;
	
	getAjaxData("/GetCAcademyList",data,"academySelect1","post");
}


/*학부모 글쓰기 모달창에 선택된 자녀 학원리스트 불러오기 */
function myAcademyList1(uId) {
	const data = "userId=" + uId;
	
	getAjaxData("/GetCAcademyList",data,"academySelect1","post");
}

function academySelect1(dat) {
	let data = JSON.parse(dat);
	
	let aCode = (document.getElementsByName("acCode")[0].value != '')? document.getElementsByName("acCode")[0].value : '';
	//const mainpage = document.getElementById("selects");
	
	
		
			const selectMom = document.getElementById("selects");
			//const selectMom = document.createElement("div");
			//selectMom.setAttribute("id","selectMom");
			//selectMom.style.width = "150px";
			//selectMom.style.height = "50px";
			/*selectMom.style.position = "relative";
			selectMom.style.left = "2%";
			selectMom.style.top = "1%";*/
			

			let aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect1");
			aSelect.setAttribute("onchange","makeTASelected()");
			aSelect.style.width = "100px";
			aSelect.style.height = "20px";
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
							makeTASelected(data[i].acCode);
						}
					}
					aSelect.appendChild(option);
				}
			
			selectMom.appendChild(aSelect);
	
			const cSelect = document.createElement("div");
			cSelect.setAttribute("id","cSelect");
			selectMom.appendChild(cSelect);
	//mainpage.appendChild(selectMom);
	
}

/*선생님 관리자 선택 */
function makeTASelected(){
	//const mainpage = document.getElementById("selects");
			
			//const selectMom = document.createElement("div");
			const selectMom = document.getElementById("selects1");
			//selectMom.setAttribute("id","selectMom1");
			/*selectMom.style.width = "100px";
			selectMom.style.height = "50px";
			selectMom.style.marginleft = "0.5%";*/
			
			/*selectMom.style.position = "relative";
			selectMom.style.left = "2%";
			selectMom.style.top = "1%";*/
			
			let aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect2");
			aSelect.setAttribute("onchange","makeTList()");
			aSelect.style.width = "100px";
			aSelect.style.height = "20px";
			aSelect.style.borderRadius = "5px";
			aSelect.style.border = "2px solid #92acbb";
			aSelect.style.position = "relative";
			aSelect.style.left = "5%";
			//aSelect.style.right = "5%";
			aSelect.style.top = "1%";
			aSelect.style.float = "left";
			
			
				
					let option = document.createElement("option");
					option.setAttribute("id","teacher");
					option.setAttribute("value",3);
					option.innerHTML = "선생님";
				    option.setAttribute("selected", "selected");
					aSelect.appendChild(option);
					
					let option2 = document.createElement("option");
					option2.setAttribute("id","admin");
					option2.setAttribute("value",4);
					option2.innerHTML = "관리자";
				    option2.setAttribute("selected", "selected");
					aSelect.appendChild(option2);
					
					let firstOption = document.createElement("option");
				firstOption.innerHTML = "질문 대상";
				firstOption.setAttribute("selected","selected");
				
				
				aSelect.appendChild(firstOption);		

			selectMom.appendChild(aSelect);
			const cSelect = document.createElement("div");
			cSelect.setAttribute("id","cSelect");
			selectMom.appendChild(cSelect);
	//mainpage.appendChild(selectMom);
			
}

/*학원에속한 선생님들 리스트 */
function makeTList(){
	let ac = document.getElementById("aSelect1").value;
	let uc = document.getElementById("aSelect2").value;
	const data = "acCode=" + ac+"&userCode="+uc;
	if(uc==3){getAjaxData("/GetTList",data,"tSelect","post");}
	else{getAjaxData("/GetAList",data,"aSelect","post");}
}

function tSelect(dat){
	
	let data = JSON.parse(dat);
	
	let aCode = (document.getElementsByName("acCode")[0].value != '')? document.getElementsByName("acCode")[0].value : '';
	//const mainpage = document.getElementById("selects");
	
			//const selectMom = document.createElement("div");
			const selectMom = document.getElementById("selects2");
			//selectMom.setAttribute("id","selectMom3");
			/*selectMom.style.width = "100px";
			selectMom.style.height = "50px";
			selectMom.style.position = "relative";
			selectMom.style.left = "2%";
			selectMom.style.top = "1%";*/
			let aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect3");
			//aSelect.setAttribute("onchange","makeTASelected()");
			aSelect.style.width = "100px";
			aSelect.style.height = "20px";
			aSelect.style.borderRadius = "5px";
			aSelect.style.border = "2px solid #92acbb";
			aSelect.style.position = "relative";
			aSelect.style.left = "10%";
			aSelect.style.top = "1%";
			aSelect.style.float = "left";
			
			let firstOption = document.createElement("option");
				firstOption.innerHTML = "선생님선택"
				//if(acCode == null) {
				firstOption.setAttribute("selected","selected");
				//}
				firstOption.setAttribute("disabled","disabled");
				aSelect.appendChild(firstOption);
				for(let i=0; i<data.length; i++) {
					let option = document.createElement("option");
					option.setAttribute("id",data[i].teacherId);
					option.setAttribute("value",data[i].teacherId);
					option.innerHTML = data[i].tname;
					
					aSelect.appendChild(option);
				}
			
			selectMom.appendChild(aSelect);
	
			const cSelect = document.createElement("div");
			cSelect.setAttribute("id","cSelect");
			selectMom.appendChild(cSelect);
	//mainpage.appendChild(selectMom);
}

function aSelect(dat){
	
	let data = JSON.parse(dat);
	
	let aCode = (document.getElementsByName("acCode")[0].value != '')? document.getElementsByName("acCode")[0].value : '';
	//const mainpage = document.getElementById("selects2");
	
			//const selectMom = document.createElement("div");
			const selectMom = document.getElementById("selects2");
			//selectMom.setAttribute("id","selectMom3");
			/*selectMom.style.width = "100px";
			selectMom.style.height = "50px";
			selectMom.style.position = "relative";
			selectMom.style.left = "2%";
			selectMom.style.top = "1%";*/
			let aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect3");
			//aSelect.setAttribute("onchange","makeTASelected()");
			aSelect.style.width = "100px";
			aSelect.style.height = "20px";
			aSelect.style.borderRadius = "5px";
			aSelect.style.border = "2px solid #92acbb";
			aSelect.style.position = "relative";
			aSelect.style.left = "10%";
			aSelect.style.top = "1%";
			aSelect.style.float = "left";
			
			let firstOption = document.createElement("option");
				firstOption.innerHTML = "관리자선택"
				//if(acCode == null) {
				firstOption.setAttribute("selected","selected");
				//}
				firstOption.setAttribute("disabled","disabled");
				aSelect.appendChild(firstOption);
				for(let i=0; i<data.length; i++) {
					let option = document.createElement("option");
					option.setAttribute("id",data[i].adCode);
					option.setAttribute("value",data[i].adCode);
					option.innerHTML = data[i].adName;
					
					aSelect.appendChild(option);
				}
			
			selectMom.appendChild(aSelect);
	
			const cSelect = document.createElement("div");
			cSelect.setAttribute("id","cSelect");
			selectMom.appendChild(cSelect);
	//mainpage.appendChild(selectMom);
}

/*학부모 글등록 */
function insertQnA(){
		let ac = document.getElementById("aSelect1").value;
		let ta = document.getElementById("aSelect3").value;
		let uId = document.getElementsByName("userId")[0].value;
		let uc = document.getElementsByName("userCode")[0].value;
		let tt = document.getElementById("mheader1").value;
		let qs = document.getElementById("mbody1").value;
		
		const data = "acCode=" + ac + "&rpCode=" + ta + "&userId=" + uId + "&userCode=" + uc + "&title=" + tt +"&question=" + qs;
		
		getAjaxData("/InsertQnA",data,"sendMessage2","post");
		
		
}

function sendMessage2(message){
	let m =JSON.stringify(message);
		alert(m);
		closeModal1();
		//document.getElementById("answer").value="";
	let uId = document.getElementsByName("userId")[0].value;
	let ac = document.getElementById("aSelect1").value;
	let uc = document.getElementsByName("userCode")[0].value;
	if(uc==1){parentsCounsel(uId,uc);}
	else{stCounsel(uId,uc);}
	
	
	
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
	//td.setAttribute("rowspan",3);
	td.style.border = "2px solid #92acbb";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "500px";
	td.style.textAlign = "center";
	return td;
	}else if(id == "td2"|| id == "td3"){
	const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.border = "2px solid #92acbb";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "250px";
	td.style.textAlign = "center";
	return td;
	}else{const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.border = "2px solid #92acbb";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "250px";
	td.style.textAlign = "center";
	return td;}
	
	

}

function createPTd(id) {
	
	if(id == "td2") {
	const td = document.createElement("td");
	td.setAttribute("id",id);
	//td.setAttribute("rowspan",3);
	td.style.border = "2px solid #92acbb";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "500px";
	td.style.textAlign = "center";
	return td;
	}else if(id == "td1"|| id == "td3"){
	const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.border = "2px solid #92acbb";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "250px";
	td.style.textAlign = "center";
	return td;
	}else{const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.border = "2px solid #92acbb";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "250px";
	td.style.textAlign = "center";
	return td;}
	
	

}