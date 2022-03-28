package amaging.schedu.qna;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.web.servlet.ModelAndView;

import amaging.schedu.bean.ACPlan;
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
	private void getAcList(ModelAndView mav) {
		UserInfo uf = (UserInfo) mav.getModel().get("uf");
		mav.addObject("contents", this.om.getAcList1(uf));
	}
	private void getATlist(ModelAndView mav) {
		UserInfo uf = (UserInfo) mav.getModel().get("uf");
		if(uf.getUserCode()==3) {
			mav.addObject("contents", this.om.getTList(uf));
		}else if(uf.getUserCode()==4) {
			mav.addObject("contents11", this.om.getAList(uf));
		}
		
	}
	private void insertQnA(ModelAndView mav) {
		Counsel cn = (Counsel)mav.getModel().get("cn");
		System.out.println(cn);
		boolean tran=false;
		String message ="";
		this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, 
				TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		if(this.convertToBoolean(this.om.insertQnA(cn))) {
			tran=true;
			message="글등록 성공!";
		}		
		this.setTransactionEnd(tran);
		mav.getModelMap().addAttribute("msg", message);
	}
	private void getContents(ModelAndView mav) {
		UserInfo uf = (UserInfo) mav.getModel().get("uf");
		if(uf.getUserCode()==4) {
			mav.addObject("contents", this.om.getAContents(uf));
		}else if(uf.getUserCode()==1) {
			mav.addObject("contents", this.om.getPContents(uf));
		}else if(uf.getUserCode()==2) {
			mav.addObject("contents", this.om.getSContents(uf));
		}
		else {mav.addObject("contents", this.om.getTContents(uf));}
		
	}
	private void updAnswer(ModelAndView mav) {
		Counsel cn = (Counsel)mav.getModel().get("cn");
		boolean tran=false;
		String message ="";
		this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, 
				TransactionDefinition.ISOLATION_READ_COMMITTED, false);
		if(this.convertToBoolean(this.om.updAnswer(cn))) {
			tran=true;
			message="답변입력 성공!";
		}		
		this.setTransactionEnd(tran);
		mav.getModelMap().addAttribute("msg", message);
	}
		
	
	
}
