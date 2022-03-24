package amaging.schedu.fee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.web.servlet.ModelAndView;

import amaging.schedu.bean.FeeBean;
import amaging.schedu.bean.GradeBean;
import amaging.schedu.db.GFOracleMapper;

@Service
public class Fee extends amaging.schedu.common.CommonMethod{
	@Autowired
	GFOracleMapper gfo;
	public Fee() {}
	public void backController(int jobCode, ModelAndView mav) {
		switch(jobCode) {
		case 1:
			this.aFeePage(mav);
			break;
		case 2:
			this.getMonthFee(mav);
			break;
		case 3:
			this.nameSearch(mav);
			break;	
		case 4:
			this.updFee(mav);
			break;
		case 5:
			this.getStudentList(mav);
			break;
		case 6:
			this.pFeePage(mav);
			break;
		case 7:
			this.getMyFeeList(mav);
			break;	
		}
	}
	private void aFeePage(ModelAndView mav) {
		mav.setViewName("AFeePage");
	}
	@SuppressWarnings("unchecked")
	private void getMonthFee(ModelAndView mav) {
		List<FeeBean> list;

		mav.addObject("fbs",gfo.getMonthFee((FeeBean)mav.getModelMap().getAttribute("fb")));
		list = (List<FeeBean>)mav.getModelMap().getAttribute("fbs");
		mav.getModelMap().addAttribute("monthFeeList",list);
	}
	
	@SuppressWarnings("unchecked")
	private void nameSearch(ModelAndView mav) {
		List<FeeBean> list;

		mav.addObject("sn",gfo.searchName((FeeBean)mav.getModelMap().getAttribute("fb")));
		list = (List<FeeBean>)mav.getModelMap().getAttribute("sn");
		mav.getModelMap().addAttribute("feeList",list);
	}
	
	@SuppressWarnings("unchecked")
	private void updFee(ModelAndView mav) {
		boolean tran = false;
		String message = null;
		
		this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);

		List<FeeBean> fList = (List<FeeBean>)mav.getModelMap().getAttribute("fb");
		for(int i=0; i<fList.size(); i++) {
			if(this.convertToBoolean(gfo.updFeeList(fList.get(i)))) {
				tran = true;
			}else {
				tran = false;
			}
		}
		
		message = (tran=true)? "feeFirst:수정 완료" : "feeSecond:수정 실패. 다시 시도해주세요.";
		
		this.setTransactionEnd(tran);
		mav.addObject("msg",message);
		
	}
	private void getStudentList(ModelAndView mav) {}
	private void pFeePage(ModelAndView mav) {}
	private void getMyFeeList(ModelAndView mav) {}
}
