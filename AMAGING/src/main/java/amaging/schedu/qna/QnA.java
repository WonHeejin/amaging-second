package amaging.schedu.qna;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import amaging.schedu.bean.Counsel;
import amaging.schedu.bean.UserInfo;
import amaging.schedu.db.QMLOracleMapper;
@Service
public class QnA extends amaging.schedu.common.CommonMethod{
	@Autowired
	QMLOracleMapper om;
	public QnA() {}
	
	public void backController(int jobCode, ModelAndView mav) {
		switch(jobCode) {
		case 0:
			this.sQnAPage(mav);
			break;
		case 1:
			this.pQnAPage(mav);
			break;
		case 2:
			this.tQnAPage(mav);
			break;
		case 3:
			this.aQnAPage(mav);
			break;
		case 4:
			this.getAcList(mav);
			break;
		
		case 5:
			this.getATlist(mav);
			break;
		
		case 6:
			this.insertQnA(mav);
			break;
		
		case 7:
			this.getContents(mav);
			break;
		
		case 8:
			this.updAnswer(mav);
			break;
		
			
		}
	}
	private void sQnAPage(ModelAndView mav) {
		UserInfo uf = (UserInfo) mav.getModel().get("uf");
		mav.setViewName("SQnaPage");
	}

	private void pQnAPage(ModelAndView mav) {
		UserInfo uf = (UserInfo) mav.getModel().get("uf");
		mav.setViewName("PQnaPage");
	}
	private void tQnAPage(ModelAndView mav) {
		UserInfo uf = (UserInfo) mav.getModel().get("uf");
		mav.setViewName("TQnaPage");
	}
	private void aQnAPage(ModelAndView mav) {
		UserInfo uf = (UserInfo) mav.getModel().get("uf");
		mav.setViewName("AQnaPage");
	}
	private void getAcList(ModelAndView mav) {}
	private void getATlist(ModelAndView mav) {}
	private void insertQnA(ModelAndView mav) {}
	private void getContents(ModelAndView mav) {
		UserInfo uf = (UserInfo) mav.getModel().get("uf");
		mav.addObject("contents", this.om.getTContents(uf));
	}
	private void updAnswer(ModelAndView mav) {}
		
	
	
}
