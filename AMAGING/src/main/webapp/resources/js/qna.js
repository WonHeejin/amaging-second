/**
 QnA(상담) * 
 */
let aData;//학원 리스트 
let tCn;//선생님,학생,학부모,관리자 불러온 상담리스트 정보저장
let selectedNum=0;//선택된 게시물의 idx

let intCode = "";
let acCodeHidden = "";
function divide(menuCode) {
	intCode = menuCode;
}

function MyChildList() {
	const userId = document.getElementsByName("userId")[0].value;
	const data = "userId=" + userId;
	getAjaxData("MyChildList",data,"childSelect","post");
}

function childSelect(dat) {
	let data = JSON.parse(dat);
	let sCode = document.getElementById("sCode").value;
	//let sCode = "S1067";
	const mainpage = document.getElementById("uppermainpage");
	const checkCode = "1133";
	
		
		
			let aSelect = document.createElement("select");
			aSelect.setAttribute("id", "aSelect");
			aSelect.setAttribute("onchange","childSelected(this," + sCode +")");
			aSelect.style.width = "200px";
			aSelect.style.height = "40px";
			aSelect.style.borderRadius = "5px";
			aSelect.style.border = "2px solid #99E000";
			aSelect.style.position = "relative";
			aSelect.style.left = "10%";
			aSelect.style.top = "1%";
			
			let firstOption = document.createElement("option");
				firstOption.innerHTML = "자녀 선택"
				//if(acCode == null) {
				firstOption.setAttribute("selected","selected");
				//}
				//firstOption.setAttribute("disabled","disabled");
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
	/*let selectedNumber = document.getElementById("aSelect").value;
		sessionStorage.setItem('sCode',data[0].studentId);*/
		if(sessionStorage.getItem("sCode") == data[0].studentId){
	      document.getElementById("aSelect").selectedIndex = "1";
	   }else if(sessionStorage.getItem("sCode") == data[1].studentId){
	      document.getElementById("aSelect").selectedIndex = "2";
	   }else if(sessionStorage.getItem("sCode") == data[2].studentId){
	      document.getElementById("aSelect").selectedIndex = "3";
	   }
		
	

}

function childSelected(a,sessionCode) {
	//let acCode = selectedCode;
	//alert(a.value);
	const userId = document.getElementsByName("userId")[0].value;

	/*if(selectedCode != "1133") {
		if(selectedCode == sessionCode) {
			getMyGrade(selectedCode);
		}
	}else {*/
		// onchange로 접근. 선택된값 != 세션값 --> openModal else --> getAjaxData
		let aSelect = document.getElementById("aSelect");
		let sCode = aSelect.options[aSelect.selectedIndex].value;
		if(sCode != sessionCode) {
			let presentSCode = document.getElementById("sCode");
			presentSCode.setAttribute("id",sCode);
	}
	
		sessionStorage.setItem('sCode',a.value);
	
}		
		/*}else {*/
		
			
		//}
		
			//openModal에서 입력된 비밀번호 서버전송 --> 일치 --> 세션에 저장, 클래스목록 조회후 jsonData -> classOnAc()
			//								   불일치 --> message = 비밀번호가 일치하지 않습니다. or 접근권한이 없습니다.
	//}


function myAcademyList(userId,menuCode) {
	const data = "teacherId=" + userId;
	divide(menuCode);
	getAjaxData("MyAcademyList",data,"academySelect","post")
	teacherCounsel();
}


/* 선생님 답변*/
function updAnswer(){
	
	let n = selectedNum;
	const data = "post="+encodeURIComponent(tCn[n].post)+"&answer="+encodeURIComponent(document.getElementById("answer").value);
	getAjaxData("/UpdAnswer",data,"sendMessage1","post");
		openModal1();
}
function sendMessage1(message){
	let m =JSON.stringify(message);
	
	Swal.fire(m);
		//closeModal();
		document.getElementById("answer").value="";
	
	
		
	
}

/* 선생님 답변완료시 이메일전송 */
function sendReplyEmail(){
	updAnswer();
	let n = selectedNum;
	let pw = document.getElementById("password").value;
	const data = "userId="+encodeURIComponent(tCn[n].userId)+"&rpCode="+encodeURIComponent(tCn[n].rpCode)+"&password="+pw;
	//alert(data);
	getAjaxData("/SendReplyEmail",data,"sendMessageE","post");
}

function sendMessageE(message){
	let m =JSON.stringify(message);
	Swal.fire(m);
	//let uc = document.getElementById("userCode").value;
	
	
	if (m.substr(1,1) == "해") {
		alert("여기는오냐?");
		if ((tCn[selectedNum].rpCode).substr(0,1)=="T") {
			
			teacherCounsel(tCn[selectedNum].rpCode, tCn[selectedNum].acCode);
			closeModalT();
			closeModalT1();
		}
		else {
			alert("여기111111");
			adminCounsel(tCn[selectedNum].rpCode, tCn[selectedNum].acCode, '4');
			closeModalA();
			closeModalA1();
		}
	} else {
		closeModal();
		closeModalT1();
		closeModalA();
		closeModalA1();
	}

		
}

/* 관리자 답변*/
function updAAnswer(){
	
	let n = selectedNum;
	const data = "post="+encodeURIComponent(tCn[n].post)+"&answer="+encodeURIComponent(document.getElementById("answer").value);
	getAjaxData("/UpdAnswer",data,"sendMessageA","post");
	openModal1();
}

function sendMessageA(message){
	let m =JSON.stringify(message);

    Swal.fire(m);
		//alert(m);		
		document.getElementById("answer").value="";
	
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

/*선생님상담글리스트 출력 */
function dpTCounselList(dat) {
	tCn = JSON.parse(dat);
	
			const tableMom = document.createElement("div");
			let table = document.createElement("table");
			let	mTr = createTTr("mTr1");
			let mTd1 = createTTd("mTd1");
				mTd1.style.backgroundColor="#fff";
				mTd1.style.color="#000000";
				mTd1.style.borderRight = "3px solid #0042ED";
				mTd1.style.borderLeft = "3px solid #ffffff";
				mTd1.style.borderBottom = "3px solid #0042ED";
				mTd1.style.borderTop = "3px solid #fff ";
			let mTd2 = createTTd("mTd2");
			    mTd2.setAttribute("colspan",2);
				mTd2.style.backgroundColor="#fff";
				mTd2.style.color="#000000";
				mTd2.style.borderRight = "3px solid #0042ED";
				mTd2.style.borderLeft = "3px solid #ffffff";
				mTd2.style.borderBottom = "3px solid #0042ED";
				mTd2.style.borderTop = "3px solid #fff ";
			let mTd3 = createTTd("mTd3");
				mTd3.style.backgroundColor="#fff";
				mTd3.style.color="#000000";
				mTd3.style.borderRight = "3px solid #0042ED";
				mTd3.style.borderLeft = "3px solid #ffffff";
				mTd3.style.borderBottom = "3px solid #0042ED";
				mTd3.style.borderTop = "3px solid #fff ";
			
			mTd1.innerHTML = "상담요청제목";
			mTd2.innerHTML = "From";
			mTd3.innerHTML = "상태";
						
			mTr.appendChild(mTd1);
			mTr.appendChild(mTd2);
			mTr.appendChild(mTd3);
					
			table.appendChild(mTr);
			
			for(let i=0; i<tCn.length; i++) {
			
							let tr = createTTr("tr1");
								tr.setAttribute("onClick","selectBottonT(this,'"+i+"')");
								
								tr.setAttribute("name","tr"+i);
							let td1 = createTTd("td1");
							let td2 = createTTd("td2");
							let td3 = createTTd("td3");
							let td4 = createTTd("td4");
				
							td1.innerHTML = tCn[i].title;
							td2.innerHTML = tCn[i].userName;
							td3.innerHTML = ((tCn[i].userId).substr(0,1) == "P")? "학부모":"학생";
							td4.innerHTML = ((tCn[i].answer)=="미확인")? "미확인":((tCn[i].answer)=="답변대기중")?"답변대기중":"답변완료";
							tr.appendChild(td1);
							tr.appendChild(td2);
							tr.appendChild(td3);
							tr.appendChild(td4);
							table.appendChild(tr);
							
				
			}
	
	
	tableMom.appendChild(table);
	const mainpage = document.getElementById("mainpage");
	mainpage.appendChild(tableMom);
	yoyakS();
}

/* 관리자 상담 글 데이터 불러와서 표형식으로 표현 불러오기 */

function adminCounsel(uId,ac,uc){
	
	if(document.getElementById("mainpage").innerHTML!=null){
		document.getElementById("mainpage").innerHTML="";
	}
	
	
	const data = "userId=" + uId +"&acCode=" + ac + "&userCode=" + uc;
	
	getAjaxData("/GetContents",data,"dpACounselList","post");
}

/*선생님상담글리스트 출력 */
function dpACounselList(dat) {
	tCn = JSON.parse(dat);
	
			const tableMom = document.createElement("div");
			let table = document.createElement("table");
				table.style.width="100%";
				table.style.borderSpacing="10px";
			let	mTr = createATr("mTr1");
			let mTd1 = createATd("mTd1");
				mTd1.style.backgroundColor="#FFF";``
				mTd1.style.color="#000";
				mTd1.style.borderRight = "3px solid #E14FCA";
				mTd1.style.borderLeft = "3px solid #ffffff";
				mTd1.style.borderBottom = "3px solid #E14FCA";
				mTd1.style.borderTop = "3px solid #fff ";
			let mTd2 = createATd("mTd2");
			    mTd2.setAttribute("colspan",2);
				mTd2.style.backgroundColor="#FFF";
				mTd2.style.color="#000";
				mTd2.style.borderRight = "3px solid #E14FCA";
				mTd2.style.borderLeft = "3px solid #ffffff";
				mTd2.style.borderBottom = "3px solid #E14FCA";
				mTd2.style.borderTop = "3px solid #fff ";
			let mTd3 = createATd("mTd3");
				mTd3.style.backgroundColor="#FFF";
				mTd3.style.color="#000";
				mTd3.style.borderRight = "3px solid #E14FCA";
				mTd3.style.borderLeft = "3px solid #ffffff";
				mTd3.style.borderBottom = "3px solid #E14FCA";
				mTd3.style.borderTop = "3px solid #fff ";
			
			mTd1.innerHTML = "상담요청제목";
			mTd2.innerHTML = "From";
			mTd3.innerHTML = "상태";
						
			mTr.appendChild(mTd1);
			mTr.appendChild(mTd2);
			mTr.appendChild(mTd3);
					
			table.appendChild(mTr);
			
			for(let i=0; i<tCn.length; i++) {
			
							let tr = createATr("tr1");
								tr.setAttribute("onClick","selectBottonT(this,'"+i+"')");
								
								tr.setAttribute("name","tr"+i);
							let td1 = createATd("td1");
							let td2 = createATd("td2");
							let td3 = createATd("td3");
							let td4 = createATd("td4");
				
							td1.innerHTML = tCn[i].title;
							td2.innerHTML = tCn[i].userName;
							td3.innerHTML = ((tCn[i].userId).substr(0,1) == "P")? "학부모":"학생";
							td4.innerHTML = ((tCn[i].answer)=="미확인")? "미확인":((tCn[i].answer)=="답변대기중")?"답변대기중":"답변완료";
							tr.appendChild(td1);
							tr.appendChild(td2);
							tr.appendChild(td3);
							tr.appendChild(td4);
							table.appendChild(tr);
							
				
			}
	
	
	tableMom.appendChild(table);
	const mainpage = document.getElementById("mainpage");
	mainpage.appendChild(tableMom);
	yoyakS();
}

/*학생 상담글 리스트 불러오기 */
function stCounsel(uId,uc){
	
	if(document.getElementById("mainpage").innerHTML!=null){
		document.getElementById("mainpage").innerHTML="";
	}
	
	
	const data = "userId=" + uId + "&userCode=" + uc;
	
	getAjaxData("/GetContents",data,"dpSCounselList","post");
	
}

/*학생상담글 리스트 출력 */
function dpSCounselList(dat) {
	tCn = JSON.parse(dat);
	
			const tableMom = document.createElement("div");
			let table = document.createElement("table");
				table.setAttribute("id","list")
			let	mTr = createSTr("mTr1");
			let mTd1 = createSTd("mTd1");
				mTd1.style.backgroundColor="#ffffff";
				mTd1.style.color="#000000";
				mTd1.style.borderRight = "3px solid #EA7B03";
				mTd1.style.borderLeft = "3px solid #ffffff";
				mTd1.style.borderBottom = "3px solid #EA7B03";
				mTd1.style.borderTop = "3px solid #fff ";
			let mTd2 = createSTd("mTd2");
				mTd2.style.backgroundColor="#ffffff";
				mTd2.style.color="#000000";
				mTd2.style.borderRight = "3px solid #EA7B03";
				mTd2.style.borderLeft = "3px solid #ffffff";
				mTd2.style.borderBottom = "3px solid #EA7B03";
				mTd2.style.borderTop = "3px solid #fff ";
			let mTd3 = createSTd("mTd3");
				mTd3.style.backgroundColor="#ffffff";
				mTd3.style.color="#000000";
				mTd3.style.borderRight = "3px solid #EA7B03";
				mTd3.style.borderLeft = "3px solid #ffffff";
				mTd3.style.borderBottom = "3px solid #EA7B03";
				mTd3.style.borderTop = "3px solid #fff ";
			let mTd4 = createSTd("mTd4");
				mTd4.style.backgroundColor="#ffffff";
				mTd4.style.color="#000000";
				mTd4.style.borderRight = "3px solid #EA7B03";
				mTd4.style.borderLeft = "3px solid #ffffff";
				mTd4.style.borderBottom = "3px solid #EA7B03";
				mTd4.style.borderTop = "3px solid #fff ";
			
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
			
							let tr = createSTr("tr1");
								tr.setAttribute("onClick","selectBotton(this,'"+i+"')");
								
								tr.setAttribute("name","tr"+i);
							let td1 = createSTd("td1");
							let td2 = createSTd("td2");
							let td3 = createSTd("td3");
							let td4 = createSTd("td4");
				
							td1.innerHTML = tCn[i].acName;
							td2.innerHTML = tCn[i].title;
							td3.innerHTML = tCn[i].rpName;
							td4.innerHTML = ((tCn[i].answer)=="미확인")? "미확인":((tCn[i].answer)=="답변대기중")?"답변대기중":"답변완료";
							tr.appendChild(td1);
							tr.appendChild(td2);
							tr.appendChild(td3);
							tr.appendChild(td4);
							table.appendChild(tr);
										
			}
	
	
	tableMom.appendChild(table);
	const mainpage = document.getElementById("mainpage");
	mainpage.appendChild(tableMom);
	yoyakS();
}


/* 학부모 상담 글 데이터 불러와서 표형식으로 표현 불러오기 */

function parentsCounsel(uId,uc){
	
	if(document.getElementById("uppermainpage").innerHTML!=null){
		document.getElementById("uppermainpage").innerHTML="";
	}
	if(document.getElementById("mainpage").innerHTML!=null){
		document.getElementById("mainpage").innerHTML="";
	}
	
	
	const data = "userId=" + uId + "&userCode=" + uc;
	
	getAjaxData("/GetContents",data,"dpPCounselList","post");
	MyChildList();
}
/*학부모리스트 출력 */
function dpPCounselList(dat) {
	tCn = JSON.parse(dat);
	
			const tableMom = document.createElement("div");
			let table = document.createElement("table");
				table.setAttribute("id","list")
			let	mTr = createPTr("mTr1");
			let mTd1 = createPTd("mTd1");
				mTd1.style.backgroundColor="#ffffff";
				mTd1.style.color="#000000";
				mTd1.style.borderRight = "3px solid #63AA00";
				mTd1.style.borderLeft = "3px solid #ffffff";
				mTd1.style.borderBottom = "3px solid #63AA00";
				mTd1.style.borderTop = "3px solid #fff ";
			let mTd2 = createPTd("mTd2");
				mTd2.style.backgroundColor="#ffffff";
				mTd2.style.color="#000000";
				mTd2.style.borderRight = "3px solid #63AA00";
				mTd2.style.borderLeft = "3px solid #ffffff";
				mTd2.style.borderBottom = "3px solid #63AA00";
				mTd2.style.borderTop = "3px solid #fff ";		
			let mTd3 = createPTd("mTd3");
				mTd3.style.backgroundColor="#ffffff";
				mTd3.style.color="#000000";
				mTd3.style.borderRight = "3px solid #63AA00";
				mTd3.style.borderLeft = "3px solid #ffffff";
				mTd3.style.borderBottom = "3px solid #63AA00";
				mTd3.style.borderTop = "3px solid #fff ";
			let mTd4 = createPTd("mTd4");
				mTd4.style.backgroundColor="#ffffff";
				mTd4.style.color="#000000";
				mTd4.style.borderRight = "3px solid #63AA00";
				mTd4.style.borderLeft = "3px solid #ffffff";
				mTd4.style.borderBottom = "3px solid #63AA00";
				mTd4.style.borderTop = "3px solid #fff ";
			
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
			
							let tr = createPTr("tr1");
								tr.setAttribute("onClick","selectBotton(this,'"+i+"')");
								
								tr.setAttribute("name","tr"+i);
							let td1 = createPTd("td1");
							let td2 = createPTd("td2");
							let td3 = createPTd("td3");
							let td4 = createPTd("td4");
				
							td1.innerHTML = tCn[i].acName;
							td2.innerHTML = tCn[i].title;
							td3.innerHTML = tCn[i].rpName;
							td4.innerHTML = ((tCn[i].answer)=="미확인")? "미확인":((tCn[i].answer)=="답변대기중")?"답변대기중":"답변완료";
							tr.appendChild(td1);
							tr.appendChild(td2);
							tr.appendChild(td3);
							tr.appendChild(td4);
							table.appendChild(tr);
										
			}
	
	
	tableMom.appendChild(table);
	const mainpage = document.getElementById("mainpage");
	mainpage.appendChild(tableMom);
	yoyakS();
}

function yoyakS(){
	let n1=0,n2=0,n3=0;
	let w1 = document.getElementById("writing1");
	let w2 = document.getElementById("writing2");
	let w3 = document.getElementById("writing3");
	let w4 = document.getElementById("writing4");
	for(i=0;i<tCn.length;i++){
		if(tCn[i].answer=="미확인"){n1++;}
		else if(tCn[i].answer=="답변대기중"){n2++;}
		else{n3++;}
	}
	w1.innerHTML=n1;
	w2.innerHTML=n2;
	w3.innerHTML=n3;
	w4.innerHTML=tCn.length;
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
function selectBottonS(obj,idx){
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

	function selectBottonT(obj,idx){
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
		
		if(tCn[selectedNum].answer=="미확인"||tCn[selectedNum].answer=="답변대기중"){
			updAnswerUn();
			
			}
		else{}
	}
	
	
/* 클릭시 답변상태를 답변대기중으로 업데이트 */
function updAnswerUn(){
	
	let n = selectedNum;
	const a ="답변대기중";
	
	const data = "post="+encodeURIComponent(tCn[n].post)+"&answer="+a;
	getAjaxData("/UpdAnswer",data,"","post");

}
 
/*function sendMessageUn(message){
	let m =JSON.stringify(message);
		alert("답변이 필요한 글입니다.");
	let a = document.getElementById("answer"); 	
		a.setAttribute("placeholder","답변대기중");
	
}*/

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
			aSelect.style.border = "2px solid #00A6EF";
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

}

function openModal1(idx) {
	const exampleModal = document.getElementById("pwexampleModal");
    	  exampleModal.style.display = "flex";
	const confirmBtn = document.getElementById("confirmBtn");

	let answer = document.getElementById("password");
		
		answer.setAttribute("placeholder","비밀번호 입력");
			
}


function closeModal() {
	const exampleModal = document.getElementById("exampleModal");
    	  exampleModal.style.display = "none";
		document.getElementById("answer").value="";
	

}
function closeModalT() {
	const exampleModal = document.getElementById("exampleModal");
    	  exampleModal.style.display = "none";
	const exampleModal1 = document.getElementById("pwexampleModal");
    	  exampleModal1.style.display = "none";
		document.getElementById("answer").value="";
	
//teacherCounsel(tCn[selectedNum].rpCode, tCn[selectedNum].acCode);
}

function closeModalT1() {
	const exampleModal = document.getElementById("pwexampleModal");
    	  exampleModal.style.display = "none";
		document.getElementById("password").value="";
	

}

function closeModalA() {
	const exampleModal = document.getElementById("exampleModal");
    	  exampleModal.style.display = "none";
	const exampleModal1 = document.getElementById("pwexampleModal");
    	  exampleModal1.style.display = "none";
		document.getElementById("answer").value="";
		
//		document.getElementById("fiveB").click();

//adminCounsel(tCn[selectedNum].rpCode,tCn[selectedNum].acCode,'4');
}

function closeModalA11() {
	const exampleModal = document.getElementById("exampleModal");
    	  exampleModal.style.display = "none";
	const exampleModal1 = document.getElementById("pwexampleModal");
    	  exampleModal1.style.display = "none";
		document.getElementById("answer").value="";
		
		document.getElementById("fiveB").click();

//adminCounsel(tCn[selectedNum].rpCode,tCn[selectedNum].acCode,'4');
}


function closeModalA1() {
	const exampleModal = document.getElementById("pwexampleModal");
    	  exampleModal.style.display = "none";
		document.getElementById("password").value="";
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
		Swal.fire(m);
		closeModal1();
		//document.getElementById("answer").value="";
	let uId = document.getElementsByName("userId")[0].value;
	//let ac = document.getElementById("aSelect1").value;
	let uc = document.getElementsByName("userCode")[0].value;

	if(uc==1){
		parentsCounsel(uId,uc);
		}
	else{stCounsel(uId,uc);}
	
	
	
}

/*학부모 표 만들기 */

function createPTr(id) {
	const tr = document.createElement("tr");
	tr.setAttribute("id",id);
	tr.setAttribute("onmouseover","mouseOverP(this)");
	tr.setAttribute("onmouseout","mouseLeaveP(this)");
	//tr.setAttribute("onClick","selectBotton(this,selectedNum)");
return tr;
}

   function mouseOverP(obj) {
      let fColor = (obj.id == "btn") ? "#000000" : "#FFFFFF";
      obj.style.color = fColor;
      obj.style.background = "#99E000";

   }

 function mouseLeaveP(obj) {

      let fColor = (obj.id == "btn") ? "#ffffff" : "#000000";
      obj.style.color = fColor;
      obj.style.background = "#ffffff";
      obj.style.border = ""

   }

function createPTd(id) {
	
	if(id == "td1") {
	const td = document.createElement("td");
	td.setAttribute("id",id);

	td.style.borderRight = "1px solid #ffffff";
	td.style.borderLeft = "1px solid #ffffff";
	td.style.borderBottom = "1px solid #FFBB00 ";
	td.style.borderTop = "1px solid #fff ";
	td.style.height  = "40px";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "250px";
	td.style.textAlign = "center";
	return td;
	}else if(id == "td2"|| id == "td3"){
	const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.borderRight = "1px solid #ffffff";
	td.style.borderLeft = "1px solid #ffffff";
	td.style.borderBottom = "1px solid #FFBB00 ";
	td.style.borderTop = "1px solid #fff ";
	td.style.height  = "40px";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "500px";
	td.style.textAlign = "center";
	return td;
	}else{const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.borderRight = "1px solid #ffffff";
	td.style.borderLeft = "1px solid #ffffff";
	td.style.borderBottom = "1px solid #FFBB00 ";
	td.style.borderTop = "1px solid #fff ";
	td.style.height  = "40px";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "250px";
	td.style.textAlign = "center";
	return td;}

}

/*학생 표만들기 */
function createSTr(id) {
	const tr = document.createElement("tr");
	tr.setAttribute("id",id);
	tr.setAttribute("onmouseover","mouseOverS(this)");
	tr.setAttribute("onmouseout","mouseLeaveS(this)");
	tr.setAttribute("onClick","selectBotton(this,selectedNum)");
	
return tr;
}



   function mouseOverS(obj) {
      let fColor = (obj.id == "btn") ? "#000000" : "#FFFFFF";
      obj.style.color = fColor;
      obj.style.background = "#FFBB00";

   }

 function mouseLeaveS(obj) {

      let fColor = (obj.id == "btn") ? "#ffffff" : "#000000";
      obj.style.color = fColor;
      obj.style.background = "#ffffff";
      obj.style.border = ""

   }

   function mouseOverT(obj) {
      let fColor = (obj.id == "btn") ? "#000000" : "#FFFFFF";
      obj.style.color = fColor;
      obj.style.background = "#00A6EF";

   }

 function mouseLeaveT(obj) {

      let fColor = (obj.id == "btn") ? "#ffffff" : "#000000";
      obj.style.color = fColor;
      obj.style.background = "#ffffff";
      obj.style.border = ""

   }

   function mouseOverA(obj) {
      let fColor = (obj.id == "btn") ? "#000000" : "#FFFFFF";
      obj.style.color = fColor;
      obj.style.background = "#EF90FF";

   }

 function mouseLeaveA(obj) {

      let fColor = (obj.id == "btn") ? "#ffffff" : "#000000";
      obj.style.color = fColor;
      obj.style.background = "#ffffff";
      obj.style.border = ""

   }
/* 학생 */
function createSTd(id) {
	
	if(id == "td1") {
	const td = document.createElement("td");
	td.setAttribute("id",id);

	td.style.borderRight = "1px solid #ffffff";
	td.style.borderLeft = "1px solid #ffffff";
	td.style.borderBottom = "1px solid #FFBB00 ";
	td.style.borderTop = "1px solid #fff ";
	td.style.height  = "40px";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "250px";
	td.style.textAlign = "center";
	return td;
	}else if(id == "td2"|| id == "td3"){
	const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.borderRight = "1px solid #ffffff";
	td.style.borderLeft = "1px solid #ffffff";
	td.style.borderBottom = "1px solid #FFBB00 ";
	td.style.borderTop = "1px solid #fff ";
	td.style.height  = "40px";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "500px";
	td.style.textAlign = "center";
	return td;
	}else{const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.borderRight = "1px solid #ffffff";
	td.style.borderLeft = "1px solid #ffffff";
	td.style.borderBottom = "1px solid #FFBB00 ";
	td.style.borderTop = "1px solid #fff ";
	td.style.height  = "40px";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "250px";
	td.style.textAlign = "center";
	return td;}

}

/*관리자 표만들기 */
function createATr(id) {
	const tr = document.createElement("tr");
	tr.setAttribute("id",id);
	tr.setAttribute("onmouseover","mouseOverA(this)");
	tr.setAttribute("onmouseout","mouseLeaveA(this)");
	tr.setAttribute("onClick","selectBotton(this,selectedNum)");
	
return tr;
}

function createATd(id) {
	
	if(id == "td1") {
	const td = document.createElement("td");
	td.setAttribute("id",id);
	//td.setAttribute("rowspan",3);
	td.style.borderRight = "1px solid #ffffff";
	td.style.borderLeft = "1px solid #ffffff";
	td.style.borderBottom = "1px solid #EF90FF ";
	td.style.borderTop = "1px solid #fff ";
	td.style.height  = "40px";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "500px";
	td.style.textAlign = "center";
	

	return td;
	}else if(id == "td2"|| id == "td3"){
	const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.borderRight = "1px solid #ffffff";
	td.style.borderLeft = "1px solid #ffffff";
	td.style.borderBottom = "1px solid #EF90FF";
	td.style.borderTop = "1px solid #fff ";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "250px";
	
	td.style.textAlign = "center";
	td.style.height  = "40px";
	return td;
	}else{const td = document.createElement("td");
	td.setAttribute("id",id);
		td.style.borderRight = "1px solid #ffffff";
	td.style.borderLeft = "1px solid #ffffff";
	td.style.borderBottom = "1px solid #EF90FF";
	td.style.borderTop = "1px solid #fff ";
	
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "250px";
	td.style.textAlign = "center";
	td.style.height  = "40px"; 	
	return td;}
	
	

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

/*선생님 표만들기 */
function createTTr(id) {
	const tr = document.createElement("tr");
	tr.setAttribute("id",id);
	tr.setAttribute("onmouseover","mouseOverT(this)");
	tr.setAttribute("onmouseout","mouseLeaveT(this)");
	tr.setAttribute("onClick","selectBotton(this,selectedNum)");
	
return tr;
}

function createTTd(id) {
	
	if(id == "td1") {
	const td = document.createElement("td");
	td.setAttribute("id",id);
	//td.setAttribute("rowspan",3);
	td.style.borderRight = "1px solid #ffffff";
	td.style.borderLeft = "1px solid #ffffff";
	td.style.borderBottom = "1px solid #00A6EF ";
	td.style.borderTop = "1px solid #fff ";
	td.style.height  = "40px";

	td.style.width  = "500px";
	td.style.textAlign = "center";
	return td;
	}else if(id == "td2"|| id == "td3"){
	const td = document.createElement("td");
	td.setAttribute("id",id);
		td.style.borderRight = "1px solid #ffffff";
	td.style.borderLeft = "1px solid #ffffff";
	td.style.borderBottom = "1px solid #00A6EF ";
	td.style.borderTop = "1px solid #fff ";
	td.style.height  = "40px";
	
	td.style.width  = "250px";
	td.style.textAlign = "center";
	return td;
	}else{const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.borderRight = "1px solid #ffffff";
	td.style.borderLeft = "1px solid #ffffff";
	td.style.borderBottom = "1px solid #00A6EF ";
	td.style.borderTop = "1px solid #fff ";
	td.style.height  = "40px";
	
	td.style.width  = "250px";
	td.style.textAlign = "center";
	return td;}
	
	

}

function createPTd(id) {
	
	if(id == "td2") {
	const td = document.createElement("td");
	td.setAttribute("id",id);
	//td.setAttribute("rowspan",3);
	td.style.border = "2px solid #ffffff";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "500px";
	td.style.textAlign = "center";
	td.style.height = "40px";
	return td;
	}else if(id == "td1"|| id == "td3"){
	const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.border = "2px solid #ffffff";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "250px";
	td.style.height = "40px";
	td.style.textAlign = "center";
	return td;
	}else{const td = document.createElement("td");
	td.setAttribute("id",id);
	td.style.border = "2px solid #ffffff";
	td.style.borderRadius = "5px 5px 5px 5px";
	td.style.width  = "250px";
	td.style.textAlign = "center";
	td.style.height = "40px";
	return td;}
	
	

}