let currentRecord=null;
function sendMessage(message){
	Swal.fire({
			icon: (message.indexOf('수락')!=-1)?'success':'error',
			text: message
		});
}
function dotClick(){
	let category=sessionStorage.getItem("category");
	if(category==null){category="regAcademy";}
	document.getElementById(category).click();
}
function regAcademy(){
	let data="userCode="+document.getElementsByName("userCode")[0].value
			+"&userId="+document.getElementsByName("userId")[0].value
			+"&acCode="+currentRecord.childNodes[0].innerHTML;
	getAjaxData("RegAcademy",data,"sendMessage","post");
}
function regAcForm(){
	sessionStorage.setItem("category","regAcademy");
	const mainpage=document.getElementById("mainpage");
	mainpage.innerHTML="";
	let acbox=createDiv("acbox","acbox");
	acbox.innerHTML="<input type='text' class='box' name='selectedAcName' placeholder='학원검색' onClick='searchAcForm()' readOnly/>"
					+"<input type=button  class='regButton' value='등록' onClick='regAcademy()'>";
	mainpage.appendChild(acbox);
}
function searchAcForm(){
	const mbody=document.getElementById("mbody");
	const record=document.getElementsByClassName("record");
	while(record.length>0){
		record[0].remove();
	}
		const container=document.getElementById("container");
		container.style.display="block";
		
}
function searchAc(){
	const record=document.getElementsByClassName("record");
	while(record.length>0){
		record[0].remove();
	}
	const acName=document.getElementsByName("acName")[0].value;
	if(acName==""){
		Swal.fire({
			icon: 'warning',
			text: "학원 이름을 입력해주세요!"
		});
	}else{
		const data="acName="+acName.toUpperCase();
		getAjaxData("SearchAc",data,"displayAcList","post");	
	}
}
function displayAcList(pacList){
	const acList=JSON.parse(pacList);
	const mbody=document.getElementById("mbody");
	for(index=0;index<acList.length;index++){
		let record=createDiv("record","record");
		record.setAttribute("onClick","selectBotton(this)");
		for(colindex=0;colindex<3;colindex++){
			let item=createDiv((colindex==0)?"acCode":(colindex==1)?"acName":"acAddress","");
			item.innerHTML=(colindex==0)?acList[index].acCode:(colindex==1)?acList[index].acName:acList[index].acAddress;
			record.appendChild(item);
		}
		mbody.appendChild(record);	
	}
}
function selectBotton(obj){
	const userCode=document.getElementsByName("userCode")[0].value;
	if(currentRecord!=null){
		currentRecord.childNodes[0].style.backgroundColor="#ffffff";
		currentRecord.childNodes[1].style.backgroundColor="#ffffff";
		currentRecord.childNodes[2].style.backgroundColor="#ffffff";
		currentRecord.style.color="black";
		currentRecord=null;
	}
	currentRecord=obj;
	obj.childNodes[0].style.backgroundColor=(userCode==2)?"#FFBB00":"#00A6EF";
	obj.childNodes[1].style.backgroundColor=(userCode==2)?"#FFBB00":"#00A6EF";
	obj.childNodes[2].style.backgroundColor=(userCode==2)?"#FFBB00":"#00A6EF";
	obj.style.color="#ffffff";
}
function selectList(){
	if(currentRecord!=null){
		document.getElementsByName("selectedAcName")[0].value=currentRecord.childNodes[1].innerHTML;
		let container = document.getElementById("container");
		container.style.display="none";
	}else{
		Swal.fire({
			icon: 'warning',
			text: "학원을 선택해주세요."
		});
	}
	
}
function parentRegForm(){
	sessionStorage.setItem("category","regParents");
	const mainpage=document.getElementById("mainpage");
	mainpage.innerHTML="";
	let prbox=createDiv("prbox","prbox");
	prbox.innerHTML="<input type='text' class='prinputbox' name='pEmail' placeholder='부모님 email 입력'/>"
					+"<span> </span>"
					+"<select id='emailform'>"
					+"<option value='' >직접입력</option>"
					+"<option value='' >@naver.com</option>"
					+"<option value='' >@daum.net</option>"
					+"<option value='' >@gmail.com</option>"
					+"<option value='' >@hanmail.com</option>"
					+"</select>"
					+"<input type=button  class='regButton' value='등록' onClick='checkParentEmail()'>";
	mainpage.appendChild(prbox);
}

function checkParentEmail(){
	let emailform=document.getElementById("emailform");
	emailform=emailform.options[emailform.selectedIndex].text;
	const pEmail=document.getElementsByName("pEmail")[0].value;
	if(pEmail==""){
		Swal.fire({
			icon: 'warning',
			text: "등록할 부모님의 이메일을 입력해주세요."
		});
	}else{
		emailform=(emailform=="직접입력"?"":emailform);
		const data="pEmail="+pEmail+emailform;
		getAjaxData("CheckParentEmail",data,"confirmPr","post");	
	}
}
function confirmPr(pPrInfo){
	if(pPrInfo==""){
		Swal.fire({
			icon: 'warning',
			text: "등록된 정보가 없습니다. 회원가입 한 부모님의 이메일을 입력해주세요."
		});
	}else{
		const prInfo=JSON.parse(pPrInfo);
		const pEmail=document.getElementsByName("pEmail")[0].value;
		let emailform=document.getElementById("emailform");
		emailform=emailform.options[emailform.selectedIndex].text;
		emailform=(emailform=="직접입력"?"":emailform);
		let check;
		Swal.fire({
			icon: 'warning',
			text: prInfo.prName+"("+pEmail+")님을 부모님으로 등록하시겠습니까?"
							+"\n 요청은 취소할 수 없습니다. 다시한번 확인해 주세요.",
			confirmButtonText: '진행',
			showCancelButton: true,
			canselButtonText: '취소'
		}).then((result) => {
			if(result.isConfirmed){
				const data = "userId=" + document.getElementsByName("userId")[0].value
					+ "&pEmail=" + pEmail + emailform
					+ "&prCode=" + prInfo.prCode
					+ "&studentName=" + document.getElementsByName("userName")[0].value
				getAjaxData("ParentRegEmail", data, "sendMessage", "post");
			}else if(result.isCancled){
				check=false;
			}
		});
	}	
}
function parentReg(action,userId, prCode){
	const data="userId="+userId
				+"&prCode="+prCode;
	getAjaxData(action,data,"closePage","post")
}	
function closePage(message){
	Swal.fire({
			icon: 'warning',
			text: message,
			confirmButtonText: '확인'
		}).then((result) => {
			if(result.isConfirmed){
				window.close();
			}
		})
}
function closeModal(){
	const container=document.getElementById("container");
	container.style.display="none"
	dotClick();
}
function createDiv(className,id,name){
	let div= document.createElement("div");
	div.setAttribute("class",className);
	div.setAttribute("id",id);
	div.setAttribute("name",name);
	return div;
}
