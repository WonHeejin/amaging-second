package amaging.schedu.attendance;

import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;

import amaging.schedu.bean.AcList;
import amaging.schedu.bean.Admin;
import amaging.schedu.bean.AtLog;
import amaging.schedu.bean.AttendanceBean;
import amaging.schedu.bean.ChildCode;
import amaging.schedu.bean.Subject;
import amaging.schedu.bean.UserInfo;
import amaging.schedu.db.ASOracleMapper;
import amaging.schedu.db.QMLOracleMapper;

@Service
public class Attendance extends amaging.schedu.common.CommonMethod{
	@Autowired
	QMLOracleMapper om;
	@Autowired
	ASOracleMapper am;
  public Attendance() {}
  public void backController(int jobCode, ModelAndView mav) {
	  switch(jobCode) {
	  case 1:
		  this.getTArticleForm(mav);
		  break;
	  case 2:
		  this.TServicePage(mav);
		  break;
	  case 3:
		  this.psAttendancePage(mav);
		  break;
	  }
  }

	public void aBackController(int jobCode, Model model) {
		switch (jobCode) {
		case 2:
			this.getASchoolList(model);
			break;
		case 3:
			this.getClassList(model);
			break;
		case 4:
			this.secondLogin(model);
			break;
		case 5:
			this.studentList(model);
			break;
		case 6:
			this.studentAttendanceF(model);
			break;
		case 7:
			this.checkStudentA(model);
			break;
		case 8:
			this.modSAttendance(model);
			break;
		case 9:
			this.recheckSA(model);
			break;
		case 10:
			this.attendanceCheck(model);
			break;
		case 11:
			this.modStudentA(model);
			break;
		case 12:
			this.searchList(model);
			break;
		case 13:
			this.upSI(model);
			break;
		case 14:
			this.checkMessage(model);
			break;
		case 15:
			this.approveWS(model);
			break;
		case 16:
			this.permissionWS(model);
			break;
		case 17:
			this.rejectWS(model);
			break;
		case 18:
			this.stListInfo(model);
			break;
		case 19:
			this.delSResult(model);
			break;
		 case 20:
			this.psAttendanceList(model);
			break;  
		 case 21:
			this.getAtlog(model);
			break; 
		 case 25:
				this.getGraph(model);
			break;
		case 26:
			this.presentSN(model);
			break;
		case 27:
			this.presentSNN(model);
			break;
		case 28:
			this.attgraph(model);
			break;
		}
		
	}
	private void attgraph(Model model) {
		model.addAttribute("getAttgraph",am.getAG((Admin)model.getAttribute("an")));
	}
	private void presentSNN(Model model) {
		model.addAttribute("getPresentSNN",am.getPSNN((Admin)model.getAttribute("an")));
	}
	private void presentSN(Model model) {
		model.addAttribute("getPresentSN",am.getPSN((Admin)model.getAttribute("an")));
	}
	private void getGraph(Model model) {
		model.addAttribute("getGraphR",am.getGraph((Admin)model.getAttribute("an")));
	}
	private void delSResult(Model model) {
		String message = null;
		Admin an = new Admin();
		an = (Admin)model.getAttribute("an");
		if(this.convertToBoolean(am.delS(an))){
			am.delST(an);
			message = "success";
		}
		model.addAttribute("meg",message);
	}
	private void stListInfo(Model model) {
		if(this.convertToBoolean(am.checkS((Admin)model.getAttribute("an")))) {
			model.addAttribute("deletSL",am.getDSList((Admin)model.getAttribute("an")));
		}else {
			model.addAttribute("deletSL",am.getFailSList((Admin)model.getAttribute("an")));
		}
	}
	private void permissionWS(Model model) {
		am.upPermission((Admin)model.getAttribute("an"));
		model.addAttribute("resultWS",am.getWSList((Admin)model.getAttribute("an")));
	}
	private void rejectWS(Model model) {
		am.upReject((Admin)model.getAttribute("an"));
		model.addAttribute("resultWS",am.getWSList((Admin)model.getAttribute("an")));
	}
	private void approveWS(Model model) {
		model.addAttribute("resultWS",am.getWSList((Admin)model.getAttribute("an")));
	}
	private void checkMessage(Model model) {
		String message = null;
		Subject sj = new Subject();
		sj = (Subject)model.getAttribute("sj");
		if(this.convertToBoolean(am.checkSI(sj))){
			message = "success";
		}else {
			message = "fail";
		}
		model.addAttribute("meg",message);
	}
	private void upSI(Model model) {
		String message = null;
		Subject sj = new Subject();
		sj = (Subject)model.getAttribute("sj");
		if(this.convertToBoolean(am.checkSI(sj))){
			am.upSI(sj);
			message = "success";
		}else {
			message = "fail";
		}
		model.addAttribute("meg",message);
	}
	private void searchList(Model model) {
		System.out.println(am.searchSI((Subject)model.getAttribute("sj")));
		model.addAttribute("searchSI",am.searchSI((Subject)model.getAttribute("sj")));
	}
	private void modStudentA(Model model) {
		LocalTime cTime = LocalTime.now();
		int tHour = cTime.getHour();
		int tMin = cTime.getMinute();
		int timeDataE =0;
		
		if(tMin < 10) {
			timeDataE = Integer.parseInt(Integer.toString(tHour) + "0" + Integer.toString(tMin));
		}else {
			timeDataE = Integer.parseInt(Integer.toString(tHour) + Integer.toString(tMin));
		}
		int timeDataS = Integer.parseInt(am.getJustTime((AcList)model.getAttribute("al")).getDayDate());
		if(timeDataE < ((timeDataS*100)+10)) {
			am.upSudentS((AcList)model.getAttribute("al"));
			System.out.println("출석");
		}else {
			System.out.println((AcList)model.getAttribute("al"));
			am.upSudentL((AcList)model.getAttribute("al"));
			System.out.println("지각");
		}
		model.addAttribute("studentCList",am.stAllList((AcList)model.getAttribute("al")));
	}
	private void attendanceCheck(Model model) {
		LocalTime cTime = LocalTime.now();
		int tHour = cTime.getHour();
		int timeDataS = Integer.parseInt(am.getJustTime((AcList)model.getAttribute("al")).getDayDate());
		
		if (am.checkOverlap((AcList) model.getAttribute("al")) > 0) {
			System.out.println("pass");
			model.addAttribute("studentCList",am.stAllList((AcList)model.getAttribute("al")));
		} else {
			if (tHour == timeDataS) {
				for (int idx = 0; idx < am.sList((AcList) model.getAttribute("al")).size(); idx++) {
					if (this.convertToBoolean(
							am.insSAttendance(am.sList((AcList) model.getAttribute("al")).get(idx)))) {
						// tran = true;
						model.addAttribute("studentCList",am.stAllList((AcList)model.getAttribute("al")));
					}
				}
			}else {
				model.addAttribute("studentCList",am.forInsert((AcList)model.getAttribute("al")));
			}
		}
		
	}
	/*---------------------------------------------------------------------------------------------------*/
	private void recheckSA(Model model) {
		model.addAttribute("rcStudent",am.getRcAForm((Subject)model.getAttribute("sj")));
	}
	@SuppressWarnings("unchecked")
	private void modSAttendance(Model model) {
		String message = null;
		boolean tran =false;
		List<AttendanceBean> ab = new ArrayList<>();
		ab = (List<AttendanceBean>) model.getAttribute("ab");
		this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		for (int idx = 0; idx < ab.size(); idx++) {
			if(this.convertToBoolean(am.upSA(ab.get(idx)))){
				message = ab.get(0).getDate();
				tran = true;
			}
		}
		this.setTransactionEnd(tran);
		model.addAttribute("meg", message);
	}
	private void checkStudentA(Model model) {
		model.addAttribute("cStudent",am.getAForm((Subject)model.getAttribute("sj")));
	}
	@SuppressWarnings("unchecked")
	private void studentAttendanceF(Model model) {
		String message = null;
		boolean tran =false;
		List<AttendanceBean> ab = new ArrayList<>();
		ab = (List<AttendanceBean>) model.getAttribute("ab");
		this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		for (int idx = 0; idx < ab.size(); idx++) {
			if(this.convertToBoolean(am.insSA(ab.get(idx)))){
				message = "success";
				tran = true;
			}
		}
		this.setTransactionEnd(tran);
		model.addAttribute("meg", message);
	}
	private void studentList(Model model) {
		model.addAttribute("studentList",am.getStudentList((Subject)model.getAttribute("sj")));
	}
	private void secondLogin(Model model) {
		String message = null;
		boolean tran =false;
		AcList al = new AcList();
		al = (AcList)model.getAttribute("al");
		this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		if(this.convertToBoolean(am.checkPwd(al))){
			am.checkSL(al);
			message = "success";
			tran =true;
		}else {
			message = "fail";
		}
		this.setTransactionEnd(tran);
		model.addAttribute("meg",message);
	}
	private void getClassList(Model model) {
		model.addAttribute("classList",am.getClassList((AcList)model.getAttribute("al")));
		
	}
	private void getASchoolList(Model model) {
		model.addAttribute("schoolList",am.getSchoolList((UserInfo)model.getAttribute("uf")));
		
	}
	private void getTArticleForm(ModelAndView mav) {
		UserInfo uf = new UserInfo();
		uf = (UserInfo) mav.getModel().get("uf");
		String page = "";
		try {
			page = "TGetAttendanceList";

		} catch (Exception e) {
			e.printStackTrace();
		}

		mav.setViewName(page);
	}
	private void TServicePage(ModelAndView mav) {
		UserInfo uf = new UserInfo();
		uf = (UserInfo) mav.getModel().get("uf");
		String page = "";
		try {
			page = "AGetAttendanceList";

		} catch (Exception e) {
			e.printStackTrace();
		}

		mav.setViewName(page);
	}
	private void psAttendancePage(ModelAndView mav) {
		String page="SPMain";
		if (((UserInfo) mav.getModelMap().getAttribute("uf")).getUserCode() == 1) {
			page = "PGetAttendanceList";
		} else {
			page = "SGetAttendanceList";
		}
		mav.setViewName(page);
	}	
	private void psAttendanceList(Model model) {
		model.addAttribute("atList", am.getPSAttendanceList((UserInfo)model.getAttribute("uf")));
	}
	private void getAtlog(Model model) {
		AttendanceBean ab=(AttendanceBean)model.getAttribute("ab");
		Subject sb=am.getSEDate(ab);
		List<AtLog> atlog=am.getAtlog(ab);
		String strStartDate=sb.getStartDay();
		String strEndDate=sb.getEndDay();
		String strFormat="yyyyMMdd";
		SimpleDateFormat sdf= new SimpleDateFormat(strFormat);
		try {
			Date startDate=sdf.parse(strStartDate);
			Date endDate=sdf.parse(strEndDate);
			long diffDay=(endDate.getTime()-startDate.getTime())/(24*60*60*1000);
			atlog.get(0).setTotal(diffDay);
		}catch(Exception e) {e.printStackTrace();}
		model.addAttribute("atlog", atlog);
	}
}
