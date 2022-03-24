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
			this.regClassGrade(mav);
			break;
		case 9:
			this.getGradePage(mav);
			break;
		case 10:
			this.getGrade(mav);
			break;
		case 11:
			this.getChildList(mav);
			break;
			
		}
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
		
		mav.addObject("cde",gfo.getTGrade((Subject)mav.getModelMap().getAttribute("sj")));
		list = (List<GradeBean>)mav.getModelMap().getAttribute("cde");
		mav.addObject("gradeList",list);
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
		
		message = (tran=true)? "gradeFirst:수정 완료" : "gradeThird:수정 실패. 다시 시도해주세요.";
		
		this.setTransactionEnd(tran);
		mav.addObject("msg",message);
	}
	
	@SuppressWarnings("unchecked")
	private void regClassGrade(ModelAndView mav) {
		boolean tran = false;
		String message = null;
		
		this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		
		List<GradeBean> gList = (List<GradeBean>)mav.getModelMap().getAttribute("gr");
		for(int i=0; i<gList.size(); i++) {
			if(this.convertToBoolean(gfo.regGrade(gList.get(i)))) {
				tran = true;
			}else {
				tran = false;
			}
		}
		
		message = (tran=true)? "gradeFirst:등록 완료" : "gradeSecond:등록 실패. 다시 시도해주세요.";
		
		this.setTransactionEnd(tran);
		mav.addObject("msg",message);
	}
	
	@SuppressWarnings("unchecked")
	private void getStudent(ModelAndView mav) {
		List<Grade> list;
		if(this.convertToBoolean(gfo.isGrade((Subject)mav.getModelMap().getAttribute("sj")))) {
			mav.addObject("regGradeList",null);
		}else {
			mav.addObject("def",gfo.getStudentList((Subject)mav.getModelMap().getAttribute("sj")));
			list = (List<Grade>)mav.getModelMap().getAttribute("def");
			System.out.println(((List<Grade>)mav.getModelMap().getAttribute("def")).get(0));
			mav.addObject("regGradeList",list);
		}
	}
	
}
