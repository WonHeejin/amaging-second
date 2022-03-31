/**
 * 
 */

/*리스트를 ajax로 가져옴*/
	function getChildList(uId){
		const data = "userId="+ encodeURIComponent(uId)
		getAjaxData("/GetChildList", data, "childListBox","post" );
		
		
		
	} 
let cc;
let selectedNumber;
/*가져온 리스트를 셀렉트 박스에 출력*/
	function childListBox(cList){
		cc=JSON.parse(cList);
		
		let sc =  document.getElementById("sCode").value
		if(sc==""){sc=cc[0].userId;}//학사일정 불러오기위한자녀코드
		let cb = document.getElementById("childBox");
		let idx = 0;
		let cbData = '<select name="childSelect" id="childSelect" onchange="childName(this)">';
		    cbData += '<option value="자녀선택">자녀선택';
		    cbData += '</option>';
		for(idx;idx<cc.length;idx++){
			
			cbData += '<option value="'+idx+'">'+cc[idx].sname;
		    cbData += '</option>';
				
		}
		cbData += '</select>';
		
		
		cb.innerHTML = cbData; 
		//(sessionStorage.getItem("sCode")==cc[0].userId)?document.getElementById("childSelect").selectedIndex = "1":(sessionStorage.getItem("sCode")==cc[1].userId)?document.getElementById("childSelect").selectedIndex = "2":document.getElementById("childSelect").selectedIndex = "3";
		//cb.innerHTML = cbData; 
		
			if(sessionStorage.getItem("sCode") == cc[0].userId){
	      document.getElementById("childSelect").selectedIndex = "1";
	   }else if(sessionStorage.getItem("sCode") == cc[1].userId){
	      document.getElementById("childSelect").selectedIndex = "2";
	   }else if(sessionStorage.getItem("sCode") == cc[2].userId){
	      document.getElementById("childSelect").selectedIndex = "3";
	   }
		
		
		 
		//alert(cc.length);
		
		/*for(idx=0;idx<cc.length;idx++){
			if(sessionStorage.getItem("sCode") == cc[idx].userid){
				document.getElementById("childSelect").selectedIndex=idx+1;
			}
		
		}*/
		
		//alert(sessionStorage.getItem("sCode"));
		
		//getPlanList();
	}
	
	
	
	/*셀렉트박스에서 자녀 선택할경우  
	이름과 같이 가져온 이메일,학생코드를
	  히든속성의 input테그에 삽입*/
	function childName(cName){
		let idx1 =0;
		console.log(cName.value);
		
		selectedNumber = cName.value;
		sessionStorage.setItem('sCode',cc[selectedNumber].userId);
		
		var cn = document.getElementById("childName");
	
		for(idx1;idx1<cc.length;idx1++){
			
			let name1 = cc[idx1].sname;

			if(name1 == cc[selectedNumber].sname){
			document.getElementById("sEmail").value=cc[idx1].semail;
			document.getElementById("sCode").value=cc[idx1].userId;
			
			}
		}
		
		/*if(selectedNumber!=" "){
			document.getElementById("childSelect").selectedIndex = selectedNumber+1;
		}*/
		//alert(document.getElementById("childSelect").selectedIndex);
		//alert(selectedNumber);
		//cn.innerText = cc[selectedNumber].sname;
		
	}
	

/*부모가 학사일정에서 자녀선택시 
자녀에 맞는 학사일정을 불러오기위해 펑션을 나눔 */

/*리스트를 ajax로 가져옴*/
	function getChildList1(uId){
		const data = "userId="+ encodeURIComponent(uId)
		getAjaxData("/GetChildList", data, "childListBox1","post" );
		
		
	} 

/*가져온 리스트를 셀렉트 박스에 출력 학사일정용*/
	function childListBox1(cList){
		cc=JSON.parse(cList);
		
		let sc =  document.getElementById("sCode").value
		if(sc==""){sc=cc[0].userId;}//학사일정 불러오기위한자녀코드
		let cb = document.getElementById("childBox");
		let idx = 0;
		let cbData = '<select name="childSelect" id="childSelect" onchange="childName1(this)">';
		    cbData += '<option value="자녀선택">자녀선택';
		    cbData += '</option>';
		for(idx;idx<cc.length;idx++){
			cbData += '<option value="'+idx+'">'+cc[idx].sname;
		    cbData += '</option>';
		}
		cbData += '</select>';
		cb.innerHTML = cbData; 
	
			if(sessionStorage.getItem("sCode") == cc[0].userId){
	      document.getElementById("childSelect").selectedIndex = "1";
	   }else if(sessionStorage.getItem("sCode") == cc[1].userId){
	      document.getElementById("childSelect").selectedIndex = "2";
	   }else if(sessionStorage.getItem("sCode") == cc[2].userId){
	      document.getElementById("childSelect").selectedIndex = "3";
	   }
	
		
		getPlanList('1');
	}
	/*셀렉트박스에서 자녀 선택할경우  
	이름과 같이 가져온 이메일,학생코드를
	  히든속성의 input테그에 삽입*/
	function childName1(cName){
		let idx1 =0;
		selectedNumber = cName.value;
		sessionStorage.setItem('sCode',cc[selectedNumber].userId);
		
		var cn = document.getElementById("childName");
	
		for(idx1;idx1<cc.length;idx1++){
			
			let name1 = cc[idx1].sname;

			if(name1 == cc[selectedNumber].sname){
			document.getElementById("sEmail").value=cc[idx1].semail;
			document.getElementById("sCode").value=cc[idx1].userId;
			getTSPlanList(cc[idx1].userId,'1');
			}
		}
		//document.getElementById("oneB").click();
		
		//cn.innerText = value;
		
		sessionStorage.setItem('sCode',cc[selectedNumber].userId);
		
		
	}
	
	
	/*학부모학사일정 가져오기*/
 	function getPlanList(sDate){
 		
		var today = new Date();

		var year = today.getFullYear();
		var month = ('0' + (today.getMonth() + 1)).slice(-2);
		var day = ('0' + today.getDate()).slice(-2);
		
		var dateString = year + month;
		if(sDate == "1"){sDate = dateString;}
	
 		let cb = document.getElementById("sCode").value;
 		if(cb==""){cb=cc[0].userId}//sCode 입력시 살펴볼필요가있다.
 		
 		const data = "userId="+ encodeURIComponent(cb)+"&sDate="+encodeURIComponent(sDate);
 		
		getAjaxData("/GetPlanList", data, "displayPlan","post" );
		sessionStorage.setItem('sCode',cb);
		if(sDate == "202201"){
			let img = document.getElementById('body');
			img.setAttribute("style", "background-image : url(resources/images/1월.jpg)")
		} else if(sDate == "202202"){
			let img = document.getElementById('body');
			img.setAttribute("style", "background-image : linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(resources/images/2월.jpg)")
		}else if(sDate == "202203"){
			let img = document.getElementById('body');
			img.setAttribute("style", "background-image : linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(resources/images/3월.jpg)")
		}else if(sDate == "202204"){
			let img = document.getElementById('body');
			img.setAttribute("style", "background-image : linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(resources/images/4월.jpg)")
		}else if(sDate == "202205"){
			let img = document.getElementById('body');
			img.setAttribute("style", "background-image : linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(resources/images/5월.jpg)")
		}else if(sDate == "202206"){
			let img = document.getElementById('body');
			img.setAttribute("style", "background-image : linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(resources/images/6월.jpg)")
		}else if(sDate == "202207"){
			let img = document.getElementById('body');
			img.setAttribute("style", "background-image : linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(resources/images/7월.jpg)")
		}else if(sDate == "202208"){
			let img = document.getElementById('body');
			img.setAttribute("style", "background-image : linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(resources/images/8월.jpg)")
		}else if(sDate == "202209"){
			let img = document.getElementById('body');
			img.setAttribute("style", "background-image : linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(resources/images/9월.jpg)")
		}else if(sDate == "202210"){
			let img = document.getElementById('body');
			img.setAttribute("style", "background-image : linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(resources/images/10월.jpg)")
		}else if(sDate == "202211"){
			let img = document.getElementById('body');
			img.setAttribute("style", "background-image : linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(resources/images/11월.jpg)")
		}else if(sDate == "202212"){
			let img = document.getElementById('body');
			img.setAttribute("style", "background-image : linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(resources/images/12월.jpg)")
		}
		
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

