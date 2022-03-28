let currentRecord=null;

function getCourseList(acCode){
	let aca="acCode=" + encodeURIComponent(acCode);	
	getAjaxData("GetCourseList",aca,"regClassForm","post");
}
	function regClassForm(aca){
   		/* -----------과정-------------- */
  let namae = JSON.parse(aca);
     	
         let div = document.createElement("div");
   		 
		let accode=document.createElement("input");
			accode.setAttribute("type","hidden")
		 	accode.setAttribute("value",namae[0].acCode);
			accode.setAttribute("id","accode");
		 	div.appendChild(accode);				

        let select = document.createElement("select");
         select.setAttribute("id", "sentaku");   
         select.style.width = "10%";
         select.style.height = "8%";
         select.style.border = "2px solid #92acbb";
         select.style.position = "absolute"
         select.style.left = "30%";
		 select.style.top="30%";
		 select.style.borderRadius="5px";
		 select.style.textAlign = "center";
		 select.style.fontSize="100%";
                
         let katei = document.createElement("option");
			katei.innerHTML="과정";
			select.appendChild(katei);
			
            for(let i=0; i<namae.length; i++) {
               let option = document.createElement("option");
              	
               option.setAttribute("value",namae[i].crCode);
        		option.innerHTML=namae[i].crName;        
                         
               select.appendChild(option);  
			
            }			
		/* -----------수업명 입력-------------- */
            let input=document.createElement("input");
			input.setAttribute("type","text");
			input.setAttribute("placeholder","수업명입력");
			input.setAttribute("id","classname");
			input.style.width="10%";
			input.style.height="7.5%";
			input.style.border="2px solid #92acbb";
			input.style.position = "absolute"
         	input.style.left = "45%";
			input.style.top="30%";
			input.style.borderRadius="5px";
			input.style.textAlign = "center";
         	input.style.fontSize="100%";
			
			/* -----------수업금액 입력-------------- */
			let input2=document.createElement("input");
			input2.setAttribute("type","text");
			input2.setAttribute("placeholder","수업금액 입력");
			input2.setAttribute("id","classmoney");
			input2.style.width="10%";
			input2.style.height="7.5%";
			input2.style.border="2px solid #92acbb";
			input2.style.position = "absolute"
         	input2.style.left = "60%";
         	input2.style.top="30%";
			input2.style.borderRadius="5px";
			input2.style.textAlign = "center";
			input2.style.fontSize="100%";
			
			/* -----------개강일 달력-------------- */
			let sdiv = document.createElement("div");
			sdiv.innerHTML="개강일";
			sdiv.style.position="absolute";
			sdiv.style.top="47.5%";
			sdiv.style.left="34%";
			sdiv.style.border="2px solid #92acbb";
			sdiv.style.borderRadius="5px";
			sdiv.style.textAlign = "center";
			let dateFrom = document.createElement("input");
        	dateFrom.setAttribute("id", "startd");
			dateFrom.setAttribute("type","date");
			dateFrom.setAttribute("name","dt");
         	dateFrom.style.width = "10%";
      		dateFrom.style.height = "7.5%";
       		dateFrom.style.border = "2px solid #92acbb";
        	dateFrom.style.position = "absolute"
        	dateFrom.style.left = "38%";
			dateFrom.style.top="45%";
			dateFrom.style.borderRadius="5px";
			dateFrom.style.textAlign = "center";
			dateFrom.style.fontSize="100%";
			
        	let stday = document.createElement("option");
			stday.setAttribute("selected",stday);
			dateFrom.appendChild(stday);
			
			/* -----------종강일 달력-------------- */
			let sdiv2 = document.createElement("div");
			sdiv2.innerHTML="종강일";
			sdiv2.style.position="absolute";
			sdiv2.style.top="47.5%";
			sdiv2.style.left="50%";
			sdiv2.style.border="2px solid #92acbb";
			sdiv2.style.borderRadius="5px";
			sdiv2.style.textAlign = "center";
			
			let dateFrom2 = document.createElement("input");			
        	dateFrom2.setAttribute("id", "endd");
			dateFrom2.setAttribute("type","date");
			dateFrom2.setAttribute("name","dt");
         	dateFrom2.style.width = "10%";
         	dateFrom2.style.height = "7.5%";
        	dateFrom2.style.border = "2px solid #92acbb";
         	dateFrom2.style.position = "absolute"
         	dateFrom2.style.left = "54%";
			dateFrom2.style.top="45%";
			dateFrom2.style.borderRadius="5px";
			dateFrom2.style.textAlign = "center";
			dateFrom2.style.fontSize="100%";
         	
         
         let enday = document.createElement("option");
			
			enday.setAttribute("selected",enday);
			dateFrom2.appendChild(enday);
			
			/* -----------등록버튼-------------- */		
		let btn=document.createElement("input");
			btn.setAttribute("type","button");
			btn.setAttribute("id", "btn1");
			btn.setAttribute("value","등록");
			btn.setAttribute("onClick","insertClass()");
         	btn.style.width = "7%";
         	btn.style.height = "7.5%";
         	btn.style.border = "2px solid #92acbb";
			btn.style.borderRadius="5px";
         	btn.style.position = "absolute"
         	btn.style.left = "67%";
			btn.style.cursor="pointer";
			btn.style.top="45%";
			btn.style.borderRadius="5px";
			btn.style.textAlign = "center";
			btn.style.fontSize="100%";
			btn.style.backgroundColor="#fff";
            
   const mainpage = document.getElementById("mainpage");
   div.appendChild(select);
   div.appendChild(input);
   div.appendChild(input2);
   div.appendChild(dateFrom);
   div.appendChild(dateFrom2);
   div.appendChild(btn);
   div.appendChild(sdiv);
   div.appendChild(sdiv2);
   mainpage.appendChild(div);
	}
	
	//수업등록 버튼//
	function insertClass(){
		alert("아롱");
		const acCode=document.getElementById("accode").value;	
		const crCode=document.getElementById("sentaku").value;		
		const clName=document.getElementById("classname").value;
		const clFee=document.getElementById("classmoney").value;
		
		const clSdate =document.getElementById("startd").value;
		var words=clSdate.split('-');
		var res=words[0].concat(words[1]+words[2]);		
	
		const clEdate =document.getElementById("endd").value;
		var words2=clEdate.split('-');
		var res2=words2[0].concat(words2[1]+words2[2]);		
		
		const data = "acCode="+acCode+"&crCode="+crCode+"&clName="+clName+"&clFee="+clFee+"&clSdate="+res+"&clEdate="+res2;
			alert(data);	
		getAjaxData("InsertClass",data,"dotClick","post");
	}
	
	function dotClick(message){
	alert(message);	 
//	let category=sessionStorage.getItem("category");
//	if(category=null){category="regClassForm";}
//	document.getElementById(category).click();
	}
		//수업수정
function getAClassList(acCode){
		let abc="acCode=" + encodeURIComponent(acCode);
	getAjaxData("GetAClassList",abc,"updClassForm","post");

}		

function updClassForm(abc){
	alert("updClassForm");
	 let risuto = JSON.parse(abc);
	
	let div = document.createElement("div");
		div.setAttribute("id","koreka")		
    let accode=document.createElement("input");
		accode.setAttribute("type","hidden")
		accode.setAttribute("value",risuto[0].acCode);
		accode.setAttribute("id","accode");
		div.appendChild(accode);
		
	let crcode=document.createElement("input"); 
		crcode.setAttribute("type","hidden")
		crcode.setAttribute("id","crcode");
		div.appendChild(crcode);
			
	let clcode=document.createElement("input");
		clcode.setAttribute("type","hidden")
		clcode.setAttribute("id","clcode")
		div.appendChild(clcode);

	 let tablebox=document.createElement("div")	
		 tablebox.style.width="60%"
		 tablebox.style.height="30%"
		 tablebox.style.overflowX="hidden"
		 tablebox.style.position="absolute"
		 tablebox.style.top="17%"
		 tablebox.style.left="25%"
		 tablebox.style.border="2px solid #EF90FF"		 
	 let table = document.createElement("table");
 		 table.style.position="absolute";
		 table.style.width="100%";
		 table.style.borderRadius="5px";
		 table.style.borderCollapse="collapse";	
		 table.style.borderTop= "2px solid #92acbb";
	
	let mtr =createTr("mtr");		
	let mtd1 =createTd("mtd1");
	let mtd2 =createTd("mtd2");
	let mtd3 =createTd("mtd3");
	let mtd4 =createTd("mtd4");
	let mtd5 =createTd("mtd5");
	mtd1.innerHTML="과정명";
	mtd2.innerHTML="수업명";
	mtd3.innerHTML="수업료";
	mtd4.innerHTML="개강일";
	mtd5.innerHTML="종강일"; 
					
	mtr.appendChild(mtd1);
	mtr.appendChild(mtd2);
	mtr.appendChild(mtd3);
	mtr.appendChild(mtd4);
	mtr.appendChild(mtd5);
	table.appendChild(mtr);	
		for(let i=0; i<risuto.length; i++){
		
			let tr=createTr("tr");
			
			let td1=createTd("td1");
			td1.setAttribute("value",risuto[i].crCode);
			td1.innerHTML=risuto[i].crName;
			
			let td2 =createTd("td2");
			td2.setAttribute("value",risuto[i].clCode);
			td2.innerHTML=risuto[i].clName;
	
			let td3 =createTd("td3");
		
			let td4 =createTd("td4");
			let td5 =createTd("td5");			
			
			td3.innerHTML=risuto[i].clFee;
			td4.innerHTML=risuto[i].clSdate;
			td5.innerHTML=risuto[i].clEdate;
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tr.appendChild(td5);
		
		table.appendChild(tr);
						
					}									
		
		let name = document.createElement("input")

         name.setAttribute("type","text");
         name.setAttribute("id","classname");
         name.setAttribute("selected","selected");   
         name.setAttribute("placeholder","수업명 선택");	
         name.appendChild(table);
         name.style.border="2px solid #92acbb";
         name.style.borderRadius="5px";
         name.style.position="absolute";
         name.style.top="52%";
         name.style.left="38%";
         name.style.width = "10%";
         name.style.height = "7.5%";
         name.style.fontSize="100%";
         name.style.textAlign="center";
									
		let fee = document.createElement("input")		
			fee.setAttribute("type","text");
			fee.setAttribute("id","classmoney")
			fee.setAttribute("placeholder","수정금액 입력");
			fee.setAttribute("selected","selected");
			fee.style.border="2px solid #92acbb";
			fee.style.borderRadius="5px";
			fee.style.position="absolute";
			fee.style.top="52%";
			fee.style.left="54%";
			fee.style.width = "10%";
      		fee.style.height = "7.5%";
			fee.style.fontSize="100%";
			fee.style.textAlign="center";
			
				/* -----------개강일 달력-------------- */
			let sdiv = document.createElement("div");
			sdiv.innerHTML="개강일";
			sdiv.style.position="absolute";
			sdiv.style.top="64.5%";
			sdiv.style.left="34%";
			sdiv.style.border="2px solid #92acbb";
			sdiv.style.borderRadius="5px";
			sdiv.style.textAlign = "center";
			let dateFrom = document.createElement("input");
        	dateFrom.setAttribute("id", "startd");
			dateFrom.setAttribute("type","date");
			dateFrom.setAttribute("name","dt");
         	dateFrom.style.width = "10%";
      		dateFrom.style.height = "7.5%";
       		dateFrom.style.border = "2px solid #92acbb";
        	dateFrom.style.position = "absolute"
        	dateFrom.style.left = "38%";
			dateFrom.style.top="62%";
			dateFrom.style.borderRadius="5px";
			dateFrom.style.textAlign = "center";
			dateFrom.style.fontSize="100%";
			
        	let stday = document.createElement("option");
			stday.setAttribute("selected",stday);
			dateFrom.appendChild(stday);
			
			/* -----------종강일 달력-------------- */
			let sdiv2 = document.createElement("div");
			sdiv2.innerHTML="종강일";
			sdiv2.style.position="absolute";
			sdiv2.style.top="64.5%";
			sdiv2.style.left="50%";
			sdiv2.style.border="2px solid #92acbb";
			sdiv2.style.borderRadius="5px";
			sdiv2.style.textAlign = "center";
			
			let dateFrom2 = document.createElement("input");			
        	dateFrom2.setAttribute("id", "endd");
			dateFrom2.setAttribute("type","date");
			dateFrom2.setAttribute("name","dt");
         	dateFrom2.style.width = "10%";
         	dateFrom2.style.height = "7.5%";
        	dateFrom2.style.border = "2px solid #92acbb";
         	dateFrom2.style.position = "absolute"
         	dateFrom2.style.left = "54%";
			dateFrom2.style.top="62%";
			dateFrom2.style.borderRadius="5px";
			dateFrom2.style.textAlign = "center";
			dateFrom2.style.fontSize="100%";
         	      
         let enday = document.createElement("option");	
			enday.setAttribute("selected",enday);
			dateFrom2.appendChild(enday);
			
			/*-----------------수정완료 버튼--------------------*/
			let btn= document.createElement("input");
			btn.setAttribute("type","button");
			btn.setAttribute("id", "btn2");
			btn.setAttribute("value","수정완료");
			btn.setAttribute("onClick","updClass()");
			btn.style.width = "7%";
         	btn.style.height = "7%";
         	btn.style.border = "2px solid #92acbb";	
         	btn.style.position = "absolute"
         	btn.style.left = "68%";
			btn.style.cursor="pointer";
			btn.style.top="57%";
			btn.style.borderRadius="5px";
			btn.style.textAlign = "center";
			btn.style.fontSize="100%";
			btn.style.backgroundColor="#fff";
			btn.style.color="#000";	
            
	const mainpage =document.getElementById("mainpage");
	tablebox.appendChild(table);
	div.appendChild(tablebox);
	div.appendChild(name);
	div.appendChild(fee);
	div.appendChild(dateFrom);
   	div.appendChild(dateFrom2);
	div.appendChild(sdiv);
   	div.appendChild(sdiv2);
	div.appendChild(btn);
	mainpage.appendChild(div);
	//mainpage.appendChild(tablebox);
}
	//tr 생성펑션//
function createTr(id) {
   const tr = document.createElement("tr");
   tr.setAttribute("name",id); 
   tr.style.border="2px solid #92acbb";
   tr.setAttribute("onClick","javascript:getSelectClass(this)")
	return tr;
}
// td 생성 펑션//
function createTd(id) {
   const td = document.createElement("td");
   td.setAttribute("name",id);
   td.style.width  = "500px";
   td.style.textAlign = "center";

	return td;
}
		
// table 선택시 색변환 해주는 펑션//
function getSelectClass(target) {	
 var test0=document.getElementById("crcode")
		test0.setAttribute("value",target.childNodes[0].getAttribute("value"));
 var test11=document.getElementById("clcode")
		test11.setAttribute("value",target.childNodes[1].getAttribute("value"));						 
 var test=document.getElementById("classname");                          
		test.setAttribute("value",target.childNodes[1].innerHTML);
 var test2=document.getElementById("classmoney");
 		test2.setAttribute("value",target.childNodes[2].innerHTML);		
 var test3=document.getElementById("startd");	
	var cut=target.childNodes[3].innerHTML.substring(0,4);
		var cut2=target.childNodes[3].innerHTML.substring(4,6);
		var cut3=target.childNodes[3].innerHTML.substring(6);
		var join=cut+"-"+cut2+"-"+cut3;
		test3.setAttribute("value",join);
		
 var test4=document.getElementById("endd");
	var cutt=target.childNodes[4].innerHTML.substring(0,4);
		var cutt2=target.childNodes[4].innerHTML.substring(4,6);
		var cutt3=target.childNodes[4].innerHTML.substring(6);
		var joinn=cutt+"-"+cutt2+"-"+cutt3;
		test4.setAttribute("value",joinn);		
		 
  var tbody = target.parentNode;
		
    var trs = tbody.getElementsByTagName('tr');
    var backColor = "#ffffff";
    var textColor = "black";
    var orgBColor = "#EF90FF";
    var orgTColor = "#ffffff";
 
 
    for ( var i = 0; i < trs.length; i++ ) {
        if ( trs[i] != target ) {
            trs[i].style.backgroundColor = backColor;
            trs[i].style.color = textColor;
        } else {
            trs[i].style.backgroundColor = orgBColor;
            trs[i].style.color = orgTColor;
            var td = trs[i].getElementsByTagName('td');
            no = td[0].innerText;
            no1 = td[1].innerText;
        }
    }

}
// 수업수정완료 버튼//
 function updClass(){
	
	const acCode=document.getElementById("accode").value;		
	const crCode=document.getElementById("crcode").value;		
	const clCode=document.getElementById("clcode").value;
	const clName=document.getElementById("classname").value;	
	const clFee=document.getElementById("classmoney").value;	
	const clSdate =document.getElementById("startd").value;
	
	var cut=clSdate.split('-');
	var join=cut[0].concat(cut[1]+cut[2]);
	
	const clEdate=document.getElementById("endd").value;
	
	var cut2=clEdate.split('-');
	var join2=cut2[0].concat(cut2[1]+cut2[2]);
				
	const data="acCode="+acCode+"&crCode="+crCode+"&clCode="+clCode+"&clName="+clName+"&clFee="+clFee+"&clSdate="+join+"&clEdate="+join2;
	alert(data);                 
	
	getAjaxData("UpdClass",data,"sendMessage","post");
 }

function sendMessage(message){
   if(message!="다시시도해 주세요"){
   alert(message);
   }    
}
	

function subjectFormList(acCode){
	let abc="acCode="+encodeURIComponent(acCode);
	getAjaxData("GetAClassList",abc,"subjectRegForm","post");
}

function subjectRegForm(abc){
 let ClassNa = JSON.parse(abc);

  let div = document.createElement("div");
  let accode=document.createElement("input");
	  accode.setAttribute("type","hidden");
	  accode.setAttribute("value",ClassNa[0].acCode);
	  accode.setAttribute("id","accode");
	  div.appendChild(accode);
  
			/*수업 선택 */	
  let select = document.createElement("select");
      select.setAttribute("id", "select");
      select.style.width = "10%";
      select.style.height = "8%";
      select.style.border = "2px solid #92acbb";
      select.style.position = "absolute"
      select.style.left = "30%";
	  select.style.top="30%";
	  select.style.borderRadius="5px";
	  select.style.textAlign = "center";
	  select.style.fontSize="100%";
                 
  let classname = document.createElement("option");
	  classname.innerHTML="수업명";
	  select.appendChild(classname);
           
	 for(let i=0; i<ClassNa.length; i++) {
         let option = document.createElement("option");    
             option.setAttribute("value",ClassNa[i].clCode+"/"+ClassNa[i].crCode); 
			// option.setAttribute("id",ClassNa[i].crCode)	              	
             option.innerHTML = ClassNa[i].clName;             
               select.appendChild(option);
		
            }
			/*과목 입력 */
	let subj=document.createElement("select");
	  subj.setAttribute("id", "subject");
      subj.style.width = "10%";
      subj.style.height = "8%";
      subj.style.border = "2px solid #92acbb";
      subj.style.position = "absolute"
      subj.style.left = "42%";
	  subj.style.top="30%";
	  subj.style.borderRadius="5px";
	  subj.style.textAlign = "center";
	  subj.style.fontSize="100%";
	let sbna=document.createElement("option")
	  sbna.innerHTML="과목명";
	  subj.appendChild(sbna);
	
	let sb101=document.createElement("option");
		sb101.setAttribute("value","SB101")
		sb101.innerHTML="국어"	
		subj.appendChild(sb101)
	let sb102=document.createElement("option");
		sb102.setAttribute("value","SB102")
		sb102.innerHTML="영어"	
		subj.appendChild(sb102)
	let sb103=document.createElement("option");
		sb103.setAttribute("value","SB103")
		sb103.innerHTML="수학"	
		subj.appendChild(sb103)
	let sb104=document.createElement("option");
		sb104.setAttribute("value","SB104")
		sb104.innerHTML="사회"	
		subj.appendChild(sb104)
	let sb105=document.createElement("option");
		sb105.setAttribute("value","SB105")
		sb105.innerHTML="과학"	
		subj.appendChild(sb105)
												
		
			/*선생님 이름 */
  let tdiv=document.createElement("div");
	  tdiv.setAttribute("id","tdiv")
	  tdiv.setAttribute("type","button")
	  tdiv.innerText="선생님 검색"
	  tdiv.style.width="9.7%"
	  tdiv.style.height="5.1%"
	  tdiv.style.border = "2px solid #92acbb";
      tdiv.style.position = "absolute"
      tdiv.style.left = "54%";
	  tdiv.style.top="30%";
	  tdiv.style.borderRadius="5px";
	  tdiv.style.textAlign = "center"
	  tdiv.style.fontSize="16px";
	  tdiv.style.paddingTop="20px"
	  tdiv.setAttribute("onClick","openModal2()")
	  div.appendChild(tdiv)						
		    /*과목시작시간 */
  let slabel=document.createElement("div")
	  slabel.innerText="수업시작 시간"
	  slabel.style.position="absolute"
	  slabel.style.top="44%"
	  slabel.style.left="32.5%"
	  slabel.style.border="2px solid #92acbb"
  let sTime =document.createElement("input");
	  sTime.setAttribute("id","stime");
	  sTime.setAttribute("type","time")
	  sTime.style.width = "9.8%";
      sTime.style.height = "7.8%";
      sTime.style.border = "2px solid #92acbb";
      sTime.style.position = "absolute"
      sTime.style.left = "30%";
	  sTime.style.top="48%";
	  sTime.style.borderRadius="5px";
	  sTime.style.textAlign = "center";
	  sTime.style.fontSize="100%"; 
 				 
		    /*과목종료시간 */
let elabel=document.createElement("div")
	elabel.innerText="수업종료 시간"
	elabel.style.position="absolute"
	elabel.style.top="44%"
	elabel.style.left="44.5%"
	elabel.style.border="2px solid #92acbb"
let eTime =document.createElement("input");
	  eTime.setAttribute("id","etime");
	  eTime.setAttribute("type","time")
	  eTime.style.width = "9.8%";
      eTime.style.height = "7.8%";
      eTime.style.border = "2px solid #92acbb";
      eTime.style.position = "absolute"
      eTime.style.left = "42%";
	  eTime.style.top="48%";
	  eTime.style.borderRadius="5px";
	  eTime.style.textAlign = "center";
	  eTime.style.fontSize="100%";
 
			/*요일선택 */
let week=document.createElement("div");
	  week.setAttribute("id","week");
	  week.setAttribute("type","button");
	  week.innerText="요일선택"	
	  week.style.width = "9.7%";
      week.style.height = "5.1%";
      week.style.border = "2px solid #92acbb";
      week.style.position = "absolute"
      week.style.left = "54%";
	  week.style.top="48%";
	  week.style.borderRadius="5px";
	  week.style.textAlign = "center"
	  week.style.fontSize="16px";
	  week.style.paddingTop="20px"
	  week.setAttribute("onClick","javascript:openModal(this)");
	
let weekbox=document.createElement("div");
let mon=document.createElement("input")
    mon.setAttribute("type","checkbox");
	mon.setAttribute("name","week");
	mon.setAttribute("value","월");
	mon.style.position="absolute"
	mon.style.bottom="-35%"		
	mon.style.zoom="3.0";	
let label1=document.createElement("label")
	label1.innerText="월요일";
	label1.style.fontSize="25px"
	label1.style.position="absolute"
	label1.style.left="10%"
	label1.style.top="15%"
	label1.appendChild(mon);
	weekbox.appendChild(label1);	
let tues=document.createElement("input")
    tues.setAttribute("type","checkbox");
	tues.setAttribute("name","week");
	tues.setAttribute("value","화");
	tues.style.position="absolute"
	tues.style.bottom="-35%"		
	tues.style.zoom="3.0";
let label2=document.createElement("label")
	label2.innerText="화요일";
	label2.style.fontSize="25px";
	label2.style.position="absolute"
	label2.style.left="40%"
	label2.style.top="15%"
	label2.appendChild(tues);
	weekbox.appendChild(label2);	
let wedn=document.createElement("input")
    wedn.setAttribute("type","checkbox");
	wedn.setAttribute("name","week");
	wedn.setAttribute("value","수");
	wedn.style.position="absolute"
	wedn.style.bottom="-35%"		
	wedn.style.zoom="3.0";
let label3=document.createElement("label")
	label3.innerText="수요일";
	label3.style.fontSize="25px";
	label3.style.position="absolute"
	label3.style.left="70%"
	label3.style.top="15%"
	label3.appendChild(wedn);
	weekbox.appendChild(label3);	
let thurs=document.createElement("input")
    thurs.setAttribute("type","checkbox");
	thurs.setAttribute("name","week");
	thurs.setAttribute("value","목");
	thurs.style.position="absolute"
	thurs.style.bottom="-35%"	
	thurs.style.zoom="3.0";
let label4=document.createElement("label")
	label4.innerText="목요일";
	label4.style.fontSize="25px";
	label4.style.position="absolute"
	label4.style.left="10%"
	label4.style.top="45%"
	label4.appendChild(thurs);
	weekbox.appendChild(label4);		
let fri=document.createElement("input")
    fri.setAttribute("type","checkbox");
	fri.setAttribute("name","week");
	fri.setAttribute("value","금");
	fri.style.position="absolute"
	fri.style.bottom="-35%"	
	fri.style.zoom="3.0";
let label5=document.createElement("label")
	label5.innerText="금요일";
	label5.style.fontSize="25px";
	label5.style.position="absolute"
	label5.style.left="40%"
	label5.style.top="45%"
	label5.appendChild(fri);
	weekbox.appendChild(label5);	
let satur=document.createElement("input")
    satur.setAttribute("type","checkbox");
	satur.setAttribute("name","week");
	satur.setAttribute("value","토");
	satur.style.position="absolute"
	satur.style.bottom="-35%"	
	satur.style.zoom="3.0";
let label6=document.createElement("label")
	label6.innerText="토요일";
	label6.style.fontSize="25px";
	label6.style.position="absolute"
	label6.style.left="70%"
	label6.style.top="45%"
	label6.appendChild(satur);
	weekbox.appendChild(label6);	
let sun=document.createElement("input")
    sun.setAttribute("type","checkbox");
	sun.setAttribute("name","week");
	sun.setAttribute("value","일");
	sun.style.position="absolute"
	sun.style.bottom="-35%"	
	sun.style.zoom="3.0";
let label7=document.createElement("label")
	label7.innerText="일요일";
	label7.style.fontSize="25px";
	label7.style.position="absolute"
	label7.style.left="10%"
	label7.style.top="75%"
	label7.appendChild(sun);
	weekbox.appendChild(label7);
let modalbtn=document.createElement("input")
	modalbtn.setAttribute("type","button")
	modalbtn.setAttribute("value","확인")
	modalbtn.setAttribute("onClick","insertDay(this)")
	modalbtn.style.width="12%"
	modalbtn.style.height="12%"
	modalbtn.style.position="absolute"
	modalbtn.style.left="77%"
	modalbtn.style.top="73%"
	modalbtn.style.backgroundColor="#D5D5D5"
	modalbtn.style.borderRadius="5px";																						
	mbody.appendChild(weekbox)
	mbody.appendChild(modalbtn)		
			/*등록버튼 */
let toroku=document.createElement("input")
	toroku.setAttribute("type","button")
	toroku.setAttribute("value","등록")
	toroku.setAttribute("onClick","regClass(this)")
	toroku.style.width="7%"
	toroku.style.height="7.5%"
	toroku.style.position="absolute"
	toroku.style.left="66%"
	toroku.style.top="48%"
	toroku.style.backgroundColor="#ffffff"
	toroku.style.border = "2px solid #92acbb";
	toroku.style.borderRadius="5px";	
	    const mainpage =document.getElementById("mainpage");
	    div.appendChild(select);
		div.appendChild(sTime);
		div.appendChild(slabel);
		div.appendChild(elabel);
		div.appendChild(eTime);
		div.appendChild(subj);
		div.appendChild(week);
		div.appendChild(toroku);
		mainpage.appendChild(div);
}
function insertDay(target){
	
 const query = 'input[name="week"]:checked';
  const selectedEls = 
      document.querySelectorAll(query)
  // 선택된 목록에서 value 찾기
  let result = '';
  selectedEls.forEach((el) => {
    result += el.value + ' ';
  }); 
  // 출력
  document.getElementById('week').innerText
    = result;
	alert("요일이 선택되었습니다");
	closeModal()
}	

function teacherSerchForm(){
	const record=document.getElementsByClassName("record");
	while(record.length>0){
		record[0].remove();
	}	
	let acCode=document.getElementById("accode").value
	let tName=document.getElementsByName("tName")[0].value;
	if(tName==""){
		alert("선생님 이름을 입력해주세요!");
	}else{	
	let data="tName="+tName+"&acCode="+acCode;
	
	getAjaxData("GetTeacherList",data,"displayTeacher","post")
	}
}
function displayTeacher(data){	
	let tlist = JSON.parse(data);

	const smbody=document.getElementById("smbody");
	for(i=0; i<tlist.length;i++ ){
		let record=createDiv("record","record");		
		record.setAttribute("onClick","selectline(this)");	
		for(colindex=0; colindex<3; colindex++){
		let item=createDiv((colindex==0)?"teacherId":(colindex==1)?"tName":"tEmail","td");		
		item.innerHTML=(colindex==0)?tlist[i].teacherId:(colindex==1)?tlist[i].tname:tlist[i].temail;
		item.style.textAlign="center"
		record.appendChild(item);
		}	
		smbody.appendChild(record);		
  	}
  }

function createDiv(className,id,name){
	let div= document.createElement("div");
	div.setAttribute("class",className);
	div.setAttribute("id",id);
	div.setAttribute("name",name);
	return div;
}

function selectline(obj){
	if(currentRecord!=null){
		currentRecord.style.backgroundColor="#ffffff";
		currentRecord.style.color="black";
		currentRecord=null;
	}
	currentRecord=obj;
	obj.style.backgroundColor="#E14FCA";
	
	obj.style.color="#ffffff";
}
function selectList(){
if(currentRecord!=null){
		document.getElementById("tdiv").innerText=currentRecord.childNodes[1].innerHTML;
		const mainpage=document.getElementById("mainpage");
		let scontainer = document.getElementById("scontainer");
		scontainer.style.display = "none";
	}else{
		alert("선생님을 선택해주세요");
	}
}
function openModal(){
   let container = document.getElementById("container");
   container.style.filter = "alpha(Opacity=50)";
   container.style.display = "block";	
}

function openModal2(){
   let scontainer = document.getElementById("scontainer");
   scontainer.style.filter = "alpha(Opacity=50)";
   scontainer.style.display = "block";	
}
function closeModal(){
   let container = document.getElementById("container");
   container.style.display = "none";
   let scontainer = document.getElementById("scontainer");
   scontainer.style.display = "none";
  let gcontainer = document.getElementById("gcontainer");
   gcontainer.style.display = "none";
let gcontainer2 = document.getElementById("gcontainer2");
   gcontainer2.style.display = "none";
	
}

function regClass(){
	const acCode=document.getElementById("accode").value;
	const extra=document.getElementById("select").value;
	var cut=extra.split('/');
	var clCode=cut[0];
	var crCode=cut[1];	
	
	let	 subjectName=document.getElementById("subject");
	 subjectName=subjectName.options[subjectName.selectedIndex].text;
	const subjectCode=document.getElementById("subject").value;
	const sTime=document.getElementById("stime").value;
	const eTime=document.getElementById("etime").value;
	const weekDay=document.getElementById("week").innerText;
	const teacherId=document.getElementById("tdiv").innerText=currentRecord.childNodes[0].innerHTML;
	const data="smCode="+subjectCode+acCode+crCode+clCode+teacherId+"&subjectCode="+subjectCode+"&subjectName="+subjectName+"&acCode="+acCode+"&crCode="+crCode+"&clCode="+clCode+"&teacherId="+teacherId+"&weekDay="+splitDay(weekDay)+"&sTime="+sTime+"&eTime="+eTime
	getAjaxData("RegSubject",data,"sendMessage","post");
	
	
	}
	
function splitDay(weekDay){
	let rd=weekDay.split(" ");
	let realDay="";
	for(i=0;i<rd.length;i++){
		realDay+=rd[i];
	}
	
	return realDay;
}
function getASubjectList(acCode){
	let aca="acCode=" + encodeURIComponent(acCode);
	
	getAjaxData("GetASubjectList",aca,"updSubjectForm","post");
}

function updSubjectForm(aca){
	let sblist=JSON.parse(aca);
	let maindiv=document.createElement("div");
	let accode=document.createElement("input");
	    accode.setAttribute("type","hidden");
		accode.setAttribute("id","accode");
		accode.setAttribute("value",sblist[0].acCode)
	let subjectcode=document.createElement("input");
	    subjectcode.setAttribute("type","hidden");
		subjectcode.setAttribute("id","subjectcode");	
	let crcode=document.createElement("input");
	    crcode.setAttribute("type","hidden");
		crcode.setAttribute("id","crcode");
	let clcode=document.createElement("input");
	    clcode.setAttribute("type","hidden");
		clcode.setAttribute("id","clcode");
	let tcode=document.createElement("input");
	    tcode.setAttribute("type","hidden");
		tcode.setAttribute("id","tcode");
		
			
	let div=document.createElement("div");
		div.style.width="60%"
		div.style.height="30%"
		div.style.overflowX="hidden"
		div.style.border="3px solid #416132"
		div.style.top="20%";
		div.style.left="25%";
		div.style.clear="both"
		div.style.position="absolute"
	 let table = document.createElement("table");
 		 table.style.position="absolute";
		 table.style.width="100%";
		 table.style.borderRadius="5px";
		 table.style.borderCollapse="collapse";	
		 table.style.borderTop= "2px solid #92acbb";
		
	
		let mtr =createTr1("mtr");		
		let mtd1 =createTd1("mtd1");mtd1.innerHTML="과정명";mtr.appendChild(mtd1);
		let mtd2 =createTd1("mtd2");mtd2.innerHTML="수업명";mtr.appendChild(mtd2);
		let mtd3 =createTd1("mtd3");mtd3.innerHTML="과목명";mtr.appendChild(mtd3);
		let mtd4 =createTd1("mtd4");mtd4.innerHTML="선생님";mtr.appendChild(mtd4);
		let mtd5 =createTd1("mtd5");mtd5.innerHTML="시작시간";mtr.appendChild(mtd5);
		let mtd6 =createTd1("mtd6");mtd6.innerHTML="종료시간";mtr.appendChild(mtd6);
		let mtd7 =createTd1("mtd7");mtd7.innerHTML="요일";mtr.appendChild(mtd7);
		table.appendChild(mtr);
		
		for(let i=0; i<sblist.length; i++){
		
			let tr=createTr1("tr");
			
			let td1=createTd1("td1");
			td1.setAttribute("value",sblist[i].crCode);
			td1.innerHTML=sblist[i].crName;
			
			let td2 =createTd1("td2");
			td2.setAttribute("value",sblist[i].clCode);
			td2.innerHTML=sblist[i].clName;
	
			let td3 =createTd1("td3");
			td3.setAttribute("value",sblist[i].subjectCode);
			td3.innerHTML=sblist[i].subjectName;
			let td4 =createTd1("td4");
			td4.setAttribute("value",sblist[i].teacherId);
			td4.innerHTML=sblist[i].tname
			let td5 =createTd1("td5");
			td5.innerHTML=sblist[i].stime			
			let td6 =createTd1("td6");
			td6.innerHTML=sblist[i].etime
			let td7 =createTd1("td7");		
			td7.innerHTML=sblist[i].weekDay
			
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tr.appendChild(td5);
			tr.appendChild(td6);
			tr.appendChild(td7);
			table.appendChild(tr);
						
					}		
			/*선생님 이름 */
	let sensei=document.createElement("input");
		sensei.setAttribute("id","sensei");
		sensei.setAttribute("type","text");
		sensei.setAttribute("readonly","")
		sensei.setAttribute("placeholder","선생님 이름")
		sensei.style.border="2px solid #92acbb";
        sensei.style.borderRadius="5px";
        sensei.style.position="absolute";
        sensei.style.top="58%";
        sensei.style.left="35%";
        sensei.style.width = "10%";
        sensei.style.height = "7.5%";
        sensei.style.fontSize="100%";
        sensei.style.textAlign="center";

  let slabel=document.createElement("div")
	  slabel.innerText="수업시작 시간"
	  slabel.style.position="absolute"
	  slabel.style.top="53.5%"
	  slabel.style.left="50.5%"
	  slabel.style.border="2px solid #92acbb"
  let sTime =document.createElement("input");
	  sTime.setAttribute("id","stime");
	  sTime.setAttribute("type","time")
	  sTime.style.width = "9.8%";
      sTime.style.height = "7.8%";
      sTime.style.border = "2px solid #92acbb";
      sTime.style.position = "absolute"
      sTime.style.left = "48%";
	  sTime.style.top="58%";
	  sTime.style.borderRadius="5px";
	  sTime.style.textAlign = "center";
	  sTime.style.fontSize="100%";
 
  let elabel=document.createElement("div")
	  elabel.innerText="수업종료 시간"
	  elabel.style.position="absolute"
	  elabel.style.top="53.5%"
	  elabel.style.left="63%"
	  elabel.style.border="2px solid #92acbb"
  let eTime =document.createElement("input");
	  eTime.setAttribute("id","etime");
	  eTime.setAttribute("type","time")
	  eTime.style.width = "9.8%";
      eTime.style.height = "7.8%";
      eTime.style.border = "2px solid #92acbb";
      eTime.style.position = "absolute"
      eTime.style.left = "61%";
	  eTime.style.top="58%";
	  eTime.style.borderRadius="5px";
	  eTime.style.textAlign = "center";
	  eTime.style.fontSize="100%"; 

  let week=document.createElement("div");
	  week.setAttribute("id","week");
	  week.setAttribute("type","text");
	  week.innerText="요일선택"	
	  week.style.width = "9.7%";
      week.style.height = "5.1%";
      week.style.border = "2px solid #92acbb";
      week.style.position = "absolute"
      week.style.left = "42%";
	  week.style.top="69%";
	  week.style.borderRadius="5px";
	  week.style.textAlign = "center"
	  week.style.fontSize="16px";
	  week.style.paddingTop="20px"
	  week.setAttribute("onClick","javascript:openModal(this)");
	
let weekbox=document.createElement("div");
let mon=document.createElement("input")
    mon.setAttribute("type","checkbox");
	mon.setAttribute("name","week");
	mon.setAttribute("value","월");
	mon.style.position="absolute"
	mon.style.bottom="-35%"		
	mon.style.zoom="3.0";	
let label1=document.createElement("label")
	label1.innerText="월요일";
	label1.style.fontSize="25px"
	label1.style.position="absolute"
	label1.style.left="10%"
	label1.style.top="15%"
	label1.appendChild(mon);
	weekbox.appendChild(label1);	
let tues=document.createElement("input")
    tues.setAttribute("type","checkbox");
	tues.setAttribute("name","week");
	tues.setAttribute("value","화");
	tues.style.position="absolute"
	tues.style.bottom="-35%"		
	tues.style.zoom="3.0";
let label2=document.createElement("label")
	label2.innerText="화요일";
	label2.style.fontSize="25px";
	label2.style.position="absolute"
	label2.style.left="40%"
	label2.style.top="15%"
	label2.appendChild(tues);
	weekbox.appendChild(label2);	
let wedn=document.createElement("input")
    wedn.setAttribute("type","checkbox");
	wedn.setAttribute("name","week");
	wedn.setAttribute("value","수");
	wedn.style.position="absolute"
	wedn.style.bottom="-35%"		
	wedn.style.zoom="3.0";
let label3=document.createElement("label")
	label3.innerText="수요일";
	label3.style.fontSize="25px";
	label3.style.position="absolute"
	label3.style.left="70%"
	label3.style.top="15%"
	label3.appendChild(wedn);
	weekbox.appendChild(label3);	
let thurs=document.createElement("input")
    thurs.setAttribute("type","checkbox");
	thurs.setAttribute("name","week");
	thurs.setAttribute("value","목");
	thurs.style.position="absolute"
	thurs.style.bottom="-35%"	
	thurs.style.zoom="3.0";
let label4=document.createElement("label")
	label4.innerText="목요일";
	label4.style.fontSize="25px";
	label4.style.position="absolute"
	label4.style.left="10%"
	label4.style.top="45%"
	label4.appendChild(thurs);
	weekbox.appendChild(label4);		
let fri=document.createElement("input")
    fri.setAttribute("type","checkbox");
	fri.setAttribute("name","week");
	fri.setAttribute("value","금");
	fri.style.position="absolute"
	fri.style.bottom="-35%"	
	fri.style.zoom="3.0";
let label5=document.createElement("label")
	label5.innerText="금요일";
	label5.style.fontSize="25px";
	label5.style.position="absolute"
	label5.style.left="40%"
	label5.style.top="45%"
	label5.appendChild(fri);
	weekbox.appendChild(label5);	
let satur=document.createElement("input")
    satur.setAttribute("type","checkbox");
	satur.setAttribute("name","week");
	satur.setAttribute("value","토");
	satur.style.position="absolute"
	satur.style.bottom="-35%"	
	satur.style.zoom="3.0";
let label6=document.createElement("label")
	label6.innerText="토요일";
	label6.style.fontSize="25px";
	label6.style.position="absolute"
	label6.style.left="70%"
	label6.style.top="45%"
	label6.appendChild(satur);
	weekbox.appendChild(label6);	
let sun=document.createElement("input")
    sun.setAttribute("type","checkbox");
	sun.setAttribute("name","week");
	sun.setAttribute("value","일");
	sun.style.position="absolute"
	sun.style.bottom="-35%"	
	sun.style.zoom="3.0";
let label7=document.createElement("label")
	label7.innerText="일요일";
	label7.style.fontSize="25px";
	label7.style.position="absolute"
	label7.style.left="10%"
	label7.style.top="75%"
	label7.appendChild(sun);
	weekbox.appendChild(label7);
let modalbtn=document.createElement("input")
	modalbtn.setAttribute("type","button")
	modalbtn.setAttribute("value","확인")
	modalbtn.setAttribute("onClick","insertDay(this)")
	modalbtn.style.width="12%"
	modalbtn.style.height="12%"
	modalbtn.style.position="absolute"
	modalbtn.style.left="77%"
	modalbtn.style.top="73%"
	modalbtn.style.backgroundColor="#D5D5D5"
	modalbtn.style.borderRadius="5px";																						
	mbody.appendChild(weekbox)
	mbody.appendChild(modalbtn)
			/*등록버튼 */
let toroku=document.createElement("input")
	toroku.setAttribute("type","button")
	toroku.setAttribute("value","등록")
	toroku.setAttribute("onClick","updSubject()")
	toroku.style.width="7%"
	toroku.style.height="7.5%"
	toroku.style.position="absolute"
	toroku.style.left="55%"
	toroku.style.top="69%"
	toroku.style.backgroundColor="#ffffff"
	toroku.style.border = "2px solid #92acbb";
	toroku.style.borderRadius="5px";			
			
	const mainpage=document.getElementById("mainpage")
		div.appendChild(table)
		maindiv.appendChild(div)
		maindiv.appendChild(sTime)
		maindiv.appendChild(eTime)
		maindiv.appendChild(sensei)
		maindiv.appendChild(slabel)
		maindiv.appendChild(elabel)
		maindiv.appendChild(week)
		maindiv.appendChild(toroku)
		maindiv.appendChild(accode)
		maindiv.appendChild(crcode)
		maindiv.appendChild(clcode)
		maindiv.appendChild(tcode)
		maindiv.appendChild(subjectcode)
		mainpage.appendChild(maindiv)											

 }

	//tr 생성펑션//
function createTr1(id) {
   const tr = document.createElement("tr");
   tr.setAttribute("name",id); 
   tr.style.border="2px solid #92acbb";
   tr.setAttribute("onClick","getSelectClass1(this)")
	return tr;
}
// td 생성 펑션//
function createTd1(id) {
   const td = document.createElement("td");
   td.setAttribute("name",id);
   td.style.width  = "500px";
   td.style.textAlign = "center";

	return td;
}
function getSelectClass1(target) {
  var crcode=document.getElementById("crcode")
	  crcode.setAttribute("value",target.childNodes[0].getAttribute("value"))

  var clcode=document.getElementById("clcode")
	  clcode.setAttribute("value",target.childNodes[1].getAttribute("value"))

  var subjectcode=document.getElementById("subjectcode")
	  subjectcode.setAttribute("value",target.childNodes[2].getAttribute("value"))

  var tcode=document.getElementById("tcode")
	  tcode.setAttribute("value",target.childNodes[3].getAttribute("value"))

  var teacher=document.getElementById("sensei")
	  teacher.setAttribute("value",target.childNodes[3].innerHTML);	
  var start=document.getElementById("stime")
	  start.setAttribute("value",target.childNodes[4].innerHTML);
  var end=document.getElementById("etime")
	  end.setAttribute("value",target.childNodes[5].innerHTML);
  var week1=document.getElementById("week");
	week1.innerText = target.childNodes[6].innerHTML		 	 
	 
 var tbody = target.parentNode;
		
    var trs = tbody.getElementsByTagName('tr');
    var backColor = "#ffffff";
    var textColor = "black";
    var orgBColor = "#EF90FF";
    var orgTColor = "#ffffff";
 
 
    for ( var i = 0; i < trs.length; i++ ) {
        if ( trs[i] != target ) {
            trs[i].style.backgroundColor = backColor;
            trs[i].style.color = textColor;
        } else {
            trs[i].style.backgroundColor = orgBColor;
            trs[i].style.color = orgTColor;
            var td = trs[i].getElementsByTagName('td');
            no = td[0].innerText;
            no1 = td[1].innerText;
        }
    }

}	
function updSubject(){
	const acCode=document.getElementById("accode").value;
	const subjectCode=document.getElementById("subjectcode").value;
	const clCode=document.getElementById("clcode").value;
	const crCode=document.getElementById("crcode").value;
	const teacherId=document.getElementById("tcode").value;
	const sTime=document.getElementById("stime").value;
	const eTime=document.getElementById("etime").value;
	const weekDay=document.getElementById("week").innerText;
	const data="smCode="+subjectCode+acCode+crCode+clCode+teacherId+"&crCode="+crCode+"&clCode="+clCode+"&subjectCode="+subjectCode+"&acCode="+acCode+"&teacherId="+teacherId+"&sTime="+sTime+"&eTime="+eTime+"&weekDay="+splitDay(weekDay)
	
	getAjaxData("UpdSubject",data,"clickCategory","post");
}
function clickCategory(){
	alert("수정이 완료됨");
}
function modStudentList(acCode){
	let aca="acCode="+ encodeURIComponent(acCode);	
	getAjaxData("GetAClassList",aca,"modStudentForm","post");
}
function modStudentForm(aca){
	let classlist=JSON.parse(aca);
	
	let maindiv=document.createElement("div")
		maindiv.style.width="30%"
		maindiv.style.height="50%"
		maindiv.style.overflowX="hidden"
		maindiv.style.border="3px solid #416132"
		maindiv.style.top="20%";
		maindiv.style.left="38%";
		maindiv.style.clear="both"
		maindiv.style.position="absolute"
	let accode=document.createElement("input")
		accode.setAttribute("type","hidden")
		accode.setAttribute("value",classlist[0].acCode)
		accode.setAttribute("id","accode")
	let table=document.createElement("tbale");
		 table.style.position="absolute";
		 table.style.width="100%";
		 table.style.borderRadius="5px";
		 table.style.borderCollapse="collapse";	
		 table.style.borderTop= "2px solid #92acbb";
		
	let mtr=document.createElement("tr")
		mtr.innerHTML="반이름"
		mtr.style.width="2000px"
		mtr.style.border="3px solid #441908"
		table.appendChild(mtr)	
	for(i=0; i<classlist.length; i++){
		let thead=document.createElement("tr")
			//thead.style.border="2px solid #ff0000"	
		let tdclass=document.createElement("td");
		tdclass.setAttribute("value",classlist[i].clCode);
		tdclass.setAttribute("id","clcode");
		
		tdclass.innerHTML=classlist[i].clName;
		tdclass.style.width  = "1000px";
		tdclass.style.border="1px solid #99E000"
		/*학생 등록 버튼 */
		let tdcrcode=document.createElement("input")
		tdcrcode.setAttribute("type","hidden");
		tdcrcode.setAttribute("value",classlist[i].crCode);
		tdcrcode.setAttribute("id","crcode");
		let tdbtn1=document.createElement("td")
		tdbtn1.style.border="1px solid #FFBB00"
		tdbtn1.style.width  = "500px";
		tdbtn1.setAttribute("type","button");
		tdbtn1.setAttribute("onClick","regStudentForm('"+classlist[i].clCode+"','"+classlist[i].crCode+"')");
		tdbtn1.innerHTML="학생등록";   

		/*학생 삭제 버튼 */
		let tdbtn2=document.createElement("td")
		tdbtn2.style.border="1px solid #00A6EF"
		tdbtn2.style.width  = "500px";
		tdbtn2.setAttribute("type","button");
		tdbtn2.setAttribute("onClick","getBelongList('"+classlist[i].clCode+"','"+classlist[i].crCode+"','"+classlist[i].acCode+"')");
		tdbtn2.innerHTML="학생삭제";
		thead.appendChild(tdcrcode);
		thead.appendChild(tdclass);
		thead.appendChild(tdbtn1);
		thead.appendChild(tdbtn2);
		table.appendChild(thead);
	
	}
	const mainpage=document.getElementById("mainpage")
	maindiv.appendChild(table)
	maindiv.appendChild(accode)
	mainpage.appendChild(maindiv);
	}
function regStudentForm(cl,cr){	
	
	let a=document.createElement("input");
	a.setAttribute("type","hidden");
	a.setAttribute("value",cl);
	a.setAttribute("id","realcl")
	let b=document.createElement("input");
	b.setAttribute("type","hidden");
	b.setAttribute("value",cr);
	b.setAttribute("id","realcr")
	let gcontainer = document.getElementById("gcontainer");
   gcontainer.style.filter = "alpha(Opacity=50)";
   gcontainer.style.display = "block";
   gcontainer.appendChild(a);
   gcontainer.appendChild(b);	 
}	
function searchStudent(){
	const record=document.getElementsByClassName("record");
	while(record.length>0){
		record[0].remove();
	}	
	let acCode=document.getElementById("accode").value;
	let sName=document.getElementById("splace").value;
	if(sName==""){
		alert("학생이름을 입력해주세요!");
	}else{	
	let data="sName="+sName+"&acCode="+acCode;
	getAjaxData("SearchStudent",data,"displayStudent","post")
	}
}	
function displayStudent(data){
	
	let slist =JSON.parse(data);
	const gmbody=document.getElementById("gmbody");
	
	for(i=0; i<slist.length; i++){
		let record=createDiv("record","record");
		record.setAttribute("onClick","selectline(this)");
		record.style.border="1px solid #EF90FF"
		let cbox=document.createElement("input")
		cbox.setAttribute("type","checkbox")
		cbox.setAttribute("class","checkbox")		
		cbox.style.left="90%"
		cbox.style.zoom="1.5";		
		let sName=document.createElement("div")
		sName.setAttribute("value",slist[i].studentId)
		sName.setAttribute("class","sNAME")
		sName.setAttribute("id","sName")
		sName.setAttribute("name","checkname")
		sName.innerHTML=slist[i].sname;
		sName.style.textAlign="center";
		let sEmail=document.createElement("div")
		sEmail.setAttribute("class","sEmail")
		sEmail.innerHTML=slist[i].semail;
		sEmail.style.textAlign="center";
				
		record.appendChild(sName);
		record.appendChild(sEmail);
		record.appendChild(cbox);	
		gmbody.appendChild(record);

	}
}
function regStudent(){
if(currentRecord!=null){
		let test=currentRecord.childNodes[0];	
		const mainpage=document.getElementById("mainpage");
		let gcontainer = document.getElementById("gcontainer");
		gcontainer.style.display = "none";
		const acCode=document.getElementById("accode").value;
		const clCode=document.getElementById("realcl").value;
		const crCode=document.getElementById("realcr").value;
		const studentId=test.getAttribute("value");
		
	const data="acCode="+acCode+"&crCode="+crCode+"&clCode="+clCode+"&studentId="+studentId
	
	getAjaxData("RegStudent",data,"sendMessage","post");
	
	}else{
		alert("학생을 선택해주세요");
	}	
}
function getBelongList(a,b,c){			
	let data="clCode="+a+"&crCode="+b+"&acCode="+c
 getAjaxData("GetBelongList",data,"delStudentForm","post");	 
}	

function delStudentForm(data){
	let gcontainer2 = document.getElementById("gcontainer2");
   		gcontainer2.style.filter = "alpha(Opacity=50)";
   		gcontainer2.style.display = "block";
let gmbody2=document.getElementById("gmbody2")
let studel=JSON.parse(data);
	for(i=0; i<studel.length; i++){
	let record=createDiv("record","record");
		record.style.border="1px solid #EF90FF"
		record.setAttribute("onClick","selectline(this)");
	let sName=document.createElement("div")
		sName.setAttribute("value",studel[i].studentId)
		sName.setAttribute("class","sNAME2")
		sName.setAttribute("id","sName")
		sName.innerHTML=studel[i].sname;
		sName.style.textAlign="center";
	let sEmail=document.createElement("div")
		sEmail.setAttribute("class","sEmail2")
		sEmail.innerHTML=studel[i].semail;
		sEmail.style.textAlign="center";
	let cbox=document.createElement("input")
		cbox.setAttribute("type","checkbox")
		cbox.setAttribute("class","checkbox2")		
		cbox.style.left="90%"
		cbox.style.zoom="1.5";		
	let clcode=document.createElement("input")
		clcode.setAttribute("type","hidden")
		clcode.setAttribute("value",studel[i].clCode)
		clcode.setAttribute("id","clcode")
	let crcode=document.createElement("input")
		crcode.setAttribute("type","hidden")
		crcode.setAttribute("value",studel[i].crCode)
		crcode.setAttribute("id","crcode")
	let accode=document.createElement("input")
		accode.setAttribute("type","hidden")
		accode.setAttribute("value",studel[i].acCode)
		accode.setAttribute("id","accode")					
		record.appendChild(sName);
		record.appendChild(sEmail);
		record.appendChild(cbox);
		record.appendChild(clcode);
		record.appendChild(crcode);
		record.appendChild(accode);
		gmbody2.appendChild(record);
	}	
} 
function delBelong(){
if(currentRecord!=null){
		let test=currentRecord.childNodes[0];	
		let test2=currentRecord.childNodes[3];
		const mainpage=document.getElementById("mainpage");
		let gcontainer2 = document.getElementById("gcontainer");
			gcontainer2.style.display = "none";
		const acCode=document.getElementById("accode").value;
		const clCode=test2.getAttribute("value");
		const crCode=document.getElementById("crcode").value;
		const studentId=test.getAttribute("value");
		
	const data="acCode="+acCode+"&crCode="+crCode+"&clCode="+clCode+"&studentId="+studentId
	alert(data);
	getAjaxData("DelBelong",data,"sendMessage","post");
	
	}else{
		alert("학생을 선택해주세요");
	}	
}
