package amaging.schedu.timeTable;

import java.awt.Color;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.web.servlet.ModelAndView;

import amaging.schedu.bean.ClassBean;
import amaging.schedu.bean.FullCalendar;
import amaging.schedu.bean.Subject;
import amaging.schedu.bean.TList;
import amaging.schedu.bean.UserInfo;
import amaging.schedu.db.TMOracleMapper;


@Service
public class TimeTable extends amaging.schedu.common.CommonMethod{
	@Autowired
	TMOracleMapper tmo;


	public TimeTable() {}
	public void backController(int jobCode, ModelAndView mav) {
		switch(jobCode) {
		case 1:
			this.psClassPage(mav);
			break;
		case 2:
			this.tClassPage(mav);
			break;
		case 3:
			this.aClassPage(mav);
			break;
		case 4:
			this.getAClassList(mav);
			break;
		case 5:
			this.searchTeacher(mav);
			break;
		case 6:
			this.regSubject(mav);
			break;
		case 7:
			this.getASubjectList(mav);
			break;
		case 8:
			this.updSubject(mav);
			break;
		case 9:
			this.getCourseList(mav);
			break;
		case 10:
			this.insertClass(mav);
			break;
		case 11:
			this.updClass(mav);
			break;
		case 12:
			this.searchStudent(mav);
			break;
		case 13:
			this.regStudent(mav);
			break;
		case 14:
			this.getBelongList(mav);
			break;
		case 15:
			this.delBelong(mav);
			break;
		case 16:
			this.getAssignSub(mav);
			break;
		case 17:
			this.getTeacherList(mav);
			break;
		case 18:
			this.makeData(mav);
			break;		
			}
	}
	private ModelAndView psClassPage(ModelAndView mav) {
		int userCode=((UserInfo)mav.getModelMap().getAttribute("uf")).getUserCode();
		String page="SPMain";
		String message="사용자 정보가 존재하지 않습니다. 다시 로그인해주세요.";
		if(this.sessionCheck(mav)) {
			if(userCode==1) {
				page="PClassPage";
				message="";
			}else if(userCode==2) {
				page="SClassPage";
				message="";
			}
		}
		mav.setViewName(page);
		mav.addObject("message", message);
		return mav;
	}
	private void makeData(ModelAndView mav) {
		UserInfo userInfo=(UserInfo)mav.getModelMap().getAttribute("uf");
		List<Subject> subject;
		if(userInfo.getUserCode()==3) {
			subject=tmo.getTClassList(userInfo);
		}else {

			subject=tmo.getSClassList(userInfo);
		}
		//요일 [1,4] 형태로 바꿔주기
		for(int i=0;i<subject.size();i++) {			
			StringBuffer sb = new StringBuffer();
			String[] weekday=subject.get(i).getWeekDay().split("");
			for(int j=0;j<weekday.length;j++) {
				if(weekday[j].equals("월")) {
					sb.append("1");
				}else if(weekday[j].equals("화")){
					sb.append("2");
				}else if(weekday[j].equals("수")){
					sb.append("3");
				}else if(weekday[j].equals("목")){
					sb.append("4");
				}else if(weekday[j].equals("금")){
					sb.append("5");
				}else if(weekday[j].equals("토")){
					sb.append("6");
				}else{
					sb.append("0");
				}
				sb.append((j==weekday.length-1)?"":",");
			}
			subject.get(i).setWeekDay(sb.toString());
		}
		mav.addObject("event", subject);
	}
	private void tClassPage(ModelAndView mav) {
		mav.setViewName("TClassPage");
	}

	private ModelAndView aClassPage(ModelAndView mav) {

		mav.setViewName("AClassPage");
		return mav;
	}
	@SuppressWarnings("unchecked")
	private ModelAndView getAClassList(ModelAndView mav) {
		List<ClassBean>list =null;
		mav.addObject("ch",tmo.getAClassList((UserInfo)mav.getModelMap().getAttribute("uf")));
		list=(List<ClassBean>)mav.getModelMap().getAttribute("ch");
		mav.addObject("curs", list);
		
		return mav;
	}
	private void searchTeacher(ModelAndView mav) {}

	private void regSubject(ModelAndView mav) {
		boolean tran=false;
		String msg=null;
		try { 
			this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
			int result = -1;
			result = this.tmo.regSubject((Subject)mav.getModelMap().getAttribute("sb"));
			if(this.convertToBoolean(result)) {
				msg="등록이 성공되었습니다";	
				tran =true;
				System.out.println(result);
			}else {
				msg="등록에실패했습니다";
			}
			mav.addObject("msg",msg);

			this.setTransactionEnd(tran);	 	
		}catch(Exception e) {e.printStackTrace();}
	}



	@SuppressWarnings("unchecked")
	private ModelAndView getASubjectList(ModelAndView mav) {
		List<Subject>list=null;
		mav.addObject("sb",tmo.getASubjectList((UserInfo)mav.getModelMap().getAttribute("uf")));
		list=(List<Subject>)mav.getModelMap().getAttribute("sb");
		mav.addObject("subjectlist", list);
		return mav;
	}

	private void updSubject(ModelAndView mav) {
		
		boolean tran =false;
		String msg =null;
		this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		int result=-1;
		result=this.tmo.updSubject((Subject)mav.getModelMap().getAttribute("sb"));
		if(this.convertToBoolean(result)) {
			System.out.println(result);
			msg="수정이 완료되었습니다";
			tran=true;
		}else {
			msg="다시시도해 주세요";
		}
		mav.addObject("msg",msg);
		this.setTransactionEnd(tran);		
	}

	@SuppressWarnings("unchecked")
	private ModelAndView getCourseList(ModelAndView mav) {
		List<ClassBean> list = null;
		mav.addObject("cr",tmo.getCourseList((UserInfo)mav.getModelMap().getAttribute("uf")));
		list= (List<ClassBean>)mav.getModelMap().getAttribute("cr");
		mav.addObject("course", list);
		
		return mav;
	}

	private void insertClass(ModelAndView mav) {
		boolean tran =false;
		String msg =null;
		try { 
			this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
			int result = -1;
			result = this.tmo.insertClass((ClassBean)mav.getModelMap().getAttribute("cb"));
			if(this.convertToBoolean(result)) {
				msg="등록이 성공되었습니다";	
				tran =true;
			}else {
				msg="등록에실패했습니다";
			}
			mav.addObject("msg",msg);

			this.setTransactionEnd(tran);	 	
		}catch(Exception e) {e.printStackTrace();}
	}

	private void updClass(ModelAndView mav) {
		boolean tran =false;
		String msg =null;
		this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		int result=-1;
		result=this.tmo.updClass((ClassBean)mav.getModelMap().getAttribute("cb"));
		if(this.convertToBoolean(result)) {
			System.out.println(result);
			msg="수정이 완료되었습니다";
			tran=true;
		}else {
			msg="다시시도해 주세요";
		}
		mav.addObject("msg",msg);
		this.setTransactionEnd(tran);		
	}
	@SuppressWarnings("unchecked")
	private ModelAndView searchStudent(ModelAndView mav) {
		List<ClassBean>list =null;
		mav.addObject("stu",tmo.getSList((ClassBean)mav.getModelMap().getAttribute("cb")));
		list=(List<ClassBean>)mav.getModelMap().getAttribute("stu");
		mav.addObject("slist", list);
		return mav;
	}
	private void regStudent(ModelAndView mav) {
		boolean tran=false;
		String msg=null;
		try { 
			this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
			int result = -1;
			result = this.tmo.regStudent((ClassBean)mav.getModelMap().getAttribute("cb"));
			if(this.convertToBoolean(result)) {
				msg="등록이 성공되었습니다";	
				tran =true;
				System.out.println(result);
			}else {
				msg="등록에실패했습니다";
			}
			mav.addObject("msg",msg);

			this.setTransactionEnd(tran);	 	
		}catch(Exception e) {e.printStackTrace();}
	}

	@SuppressWarnings("unchecked")
	private ModelAndView getBelongList(ModelAndView mav) {
		List<ClassBean>list =null;
		mav.addObject("stu",tmo.getBelongList((ClassBean)mav.getModelMap().getAttribute("cb")));
		list=(List<ClassBean>)mav.getModelMap().getAttribute("stu");
		mav.addObject("slist2", list);
		return mav;
	}
	private void delBelong(ModelAndView mav) {
		boolean tran=false;
		String msg=null;
		try { 
			this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
			int result = -1;
			result = this.tmo.delBelong((ClassBean)mav.getModelMap().getAttribute("cb"));
			if(this.convertToBoolean(result)) {
				msg="등록이 성공되었습니다";	
				tran =true;
				System.out.println(result);
			}else {
				msg="등록에실패했습니다";
			}
			mav.addObject("msg",msg);

			this.setTransactionEnd(tran);	 	
		}catch(Exception e) {e.printStackTrace();}
	}
	private void getAssignSub(ModelAndView mav) {}
	
	
	@SuppressWarnings("unchecked")
	private ModelAndView getTeacherList(ModelAndView mav) {
	
		List<TList>list =null;
		mav.addObject("tea",tmo.getTeacherList((TList)mav.getModelMap().getAttribute("tl")));
		list=(List<TList>)mav.getModelMap().getAttribute("tea");
		mav.addObject("tlist", list);
		//System.out.println(mav.getModelMap().getAttribute("tlist"));
		return mav;
	}
}
