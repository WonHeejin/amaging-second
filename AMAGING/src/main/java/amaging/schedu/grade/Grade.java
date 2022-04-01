package amaging.schedu.grade;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.web.servlet.ModelAndView;

import amaging.schedu.bean.ACPlan;
import amaging.schedu.bean.AcList;
import amaging.schedu.bean.GradeBean;
import amaging.schedu.bean.Login;
import amaging.schedu.bean.Subject;
import amaging.schedu.bean.UserInfo;
import amaging.schedu.db.GFOracleMapper;
import amaging.schedu.db.QMLOracleMapper;

@Service
public class Grade extends amaging.schedu.common.CommonMethod{
	@Autowired
	GFOracleMapper gfo;
	@Autowired
	QMLOracleMapper om;
	public Grade() {}
	public void backController(int jobCode, ModelAndView mav) {
		switch(jobCode) {
		case 1:
			this.teacherGradepage(mav);
			break;
		case 2:
			this.teacherAcademy(mav);
			break;
		case 3:
			this.checkPwd(mav);
			break;
		case 4:
			this.teacherClass(mav);
			break;
		case 5:
			this.teacherGrade(mav);
			break;
		case 6:
			this.updGrade(mav);
			break;
		case 7:
			this.getStudent(mav);
			break;
		case 8:
			this.getAcademy(mav);
			break;
		case 9:
			this.getGradePage(mav);
			break;
		case 10:
			this.regClassGrade(mav);
			break;
		case 11:
			this.getSubjectList(mav);
			break;
		case 12:
			this.getGrade(mav);
			break;
		case 13:
			this.getChildList(mav);
			break;
		case 14:
			this.getOneGrade(mav);
			break;
		case 15:
			this.feeAmounts(mav);
			break;
		case 16:
			this.subjectGrade(mav);
			break;
			
		}
	}
	
	@SuppressWarnings("unchecked")
	private void subjectGrade(ModelAndView mav) {
		List<GradeBean> list;
		mav.addObject("graph",gfo.getSubjectGrade((GradeBean)mav.getModelMap().getAttribute("gr")));
		list = (List<GradeBean>)mav.getModelMap().getAttribute("graph");
		mav.addObject("subjectGrade",list);
	}
	
	private void feeAmounts(ModelAndView mav) {
		String amount = gfo.getAmounts((UserInfo)mav.getModelMap().getAttribute("uf"));
		mav.addObject("msg",amount);
		System.out.println("feeAmounts : " + mav.getModelMap().getAttribute("msg"));
	}
	
	@SuppressWarnings("unchecked")
	private void getChildList(ModelAndView mav) {
		List<GradeBean> list;
		mav.addObject("efg",gfo.getMyChilds((UserInfo)mav.getModelMap().getAttribute("ui")));
		list = (List<GradeBean>)mav.getModelMap().getAttribute("efg");
		mav.addObject("childList",list);
	}
	
	private void getGradePage(ModelAndView mav) {
		UserInfo uf = (UserInfo)mav.getModelMap().getAttribute("uf");
		if(uf.getUserCode()==1) {
			mav.setViewName("PGradePage");
		} else if(uf.getUserCode()==2) {
			mav.setViewName("SGradePage");
		}
	}
	
	private void teacherGradepage(ModelAndView mav) {
		mav.setViewName("TGradePage");
	}
	
	@SuppressWarnings("unchecked")
	private void teacherAcademy(ModelAndView mav) {
		List<ACPlan> list;
		mav.addObject("abc",gfo.getTeacherAcademy((AcList)mav.getModelMap().getAttribute("ac")));
		list = (List<ACPlan>)mav.getModelMap().getAttribute("abc");
		mav.addObject("acList",list);
	}
	
	@SuppressWarnings("unchecked")
	private void getAcademy(ModelAndView mav) {
		List<ACPlan> list;
		mav.addObject("uin",gfo.getChildAcademy((ACPlan)mav.getModelMap().getAttribute("ac")));
		list = (List<ACPlan>)mav.getModelMap().getAttribute("uin");
		mav.addObject("acList",list);
	}
	
	@SuppressWarnings("unchecked")
	private void getSubjectList(ModelAndView mav) {
		List<GradeBean> list;
		mav.addObject("sub",gfo.getSubject((Subject)mav.getModelMap().getAttribute("sj")));
		list = (List<GradeBean>)mav.getModelMap().getAttribute("sub");
		mav.addObject("subjectList",list);
	}
	
	@SuppressWarnings("unchecked")
	private void checkPwd(ModelAndView mav) {
		List<Subject> list;
		
		
		if(this.convertToBoolean(gfo.checkPwd((AcList)mav.getModelMap().getAttribute("ac")))) {
		mav.addObject("bcd",gfo.getTeacherClass((AcList)mav.getModelMap().getAttribute("ac")));
		list = (List<Subject>)mav.getModelMap().getAttribute("bcd");
		mav.addObject("clList",list);
		}else {
		mav.addObject("msg","비밀번호가 일치하지 않습니다.");
		}
	}
	
	@SuppressWarnings("unchecked")
	private void teacherClass(ModelAndView mav) {
		List<Subject> list;
		mav.addObject("bcd",gfo.getTeacherClass((AcList)mav.getModelMap().getAttribute("ac")));
		list = (List<Subject>)mav.getModelMap().getAttribute("bcd");
		mav.addObject("clList",list);
	}
	
	@SuppressWarnings("unchecked")
	private void teacherGrade(ModelAndView mav) {
		List<GradeBean> list;
		mav.addObject("cde",gfo.getTGrade((GradeBean)mav.getModelMap().getAttribute("gr")));
		list = (List<GradeBean>)mav.getModelMap().getAttribute("cde");
		mav.addObject("gradeList",list);
	}

	@SuppressWarnings("unchecked")
	private void getOneGrade(ModelAndView mav) {
		List<GradeBean> list;
		
		mav.addObject("max",gfo.getMaxGrade((GradeBean)mav.getModelMap().getAttribute("gr")));
		list = (List<GradeBean>)mav.getModelMap().getAttribute("max");
		mav.addObject("latestGrade",list);
	}

	@SuppressWarnings("unchecked")
	private void getGrade(ModelAndView mav) {
		List<GradeBean> list;
		
		mav.addObject("def",gfo.getGrade((UserInfo)mav.getModelMap().getAttribute("ui")));
		list = (List<GradeBean>)mav.getModelMap().getAttribute("def");
		mav.addObject("gradeList",list);
	}
	
	@SuppressWarnings("unchecked")
	private void updGrade(ModelAndView mav) {
		boolean tran = false;
		String message = null;
		this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		List<GradeBean> gList = (List<GradeBean>)mav.getModelMap().getAttribute("gr");
		for(int i=0; i<gList.size(); i++) {
			if(this.convertToBoolean(gfo.modGrade(gList.get(i)))) {
				tran = true;
			}else {
				tran = false;
			}
		}
		
		message = (tran=true)? "수정 완료" : "수정 실패. 다시 시도해주세요.";
		
		this.setTransactionEnd(tran);
		mav.addObject("msg",message);
	}
	
	@SuppressWarnings("unchecked")
	private void regClassGrade(ModelAndView mav) {
		boolean tran = false;
		String message = null;
		List<GradeBean> gList = (List<GradeBean>)mav.getModelMap().getAttribute("gr");
		this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		if(this.convertToBoolean(gfo.isGrade(gList.get(0)))) {
			tran = false;
			message = "이번달 성적은 이미 등록 되어 있습니다.";
		}else {
			for(int i=0; i<gList.size(); i++) {
				if(this.convertToBoolean(gfo.regGrade(gList.get(i)))) {
					tran = true;
					message = "등록 완료";
				}else {
					tran = false;
					message = "등록 실패. 다시 시도해주세요.";
				}
			}
		}
		
		this.setTransactionEnd(tran);
		mav.addObject("msg",message);
	}
	
	@SuppressWarnings("unchecked")
	private void getStudent(ModelAndView mav) {
		List<GradeBean> list;
		if(!this.convertToBoolean(gfo.isGrade((GradeBean)mav.getModelMap().getAttribute("gr")))) {
			mav.addObject("def",gfo.getStudentList((GradeBean)mav.getModelMap().getAttribute("gr")));
			list = (List<GradeBean>)mav.getModelMap().getAttribute("def");
		}else {
			list = null;
		}
		mav.addObject("regGradeList",list);
	}
	
}
