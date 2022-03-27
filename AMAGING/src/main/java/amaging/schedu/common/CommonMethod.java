package amaging.schedu.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.web.servlet.ModelAndView;

import amaging.schedu.bean.UserInfo;


public class CommonMethod {
	
	@Autowired
	protected ProjectUtils pu;
	@Autowired
	protected Encryption enc;
	@Autowired
	protected DataSourceTransactionManager tx;
	protected TransactionStatus txStatus;
	protected DefaultTransactionDefinition txDef;
	public CommonMethod() {
	}
	public boolean convertToBoolean(int number) {
		return number>0?true:false;
	}
	protected void setTransactionConf(int propa, int iso, boolean isRead) {
		this.txDef= new DefaultTransactionDefinition();
		this.txDef.setPropagationBehavior(propa);
		this.txDef.setIsolationLevel(iso);
		this.txDef.setReadOnly(isRead);
		this.txStatus=this.tx.getTransaction(txDef);
	}
	protected void setTransactionEnd(boolean tran){
		if(tran)this.tx.commit(txStatus);
		else this.tx.rollback(txStatus);
	}
	protected boolean sessionCheck(ModelAndView mav) {
		boolean result= false;
		UserInfo uf=(UserInfo)mav.getModelMap().getAttribute("uf");
		try {
			if(this.pu.getAttribute("sessionInfo")!=null) {
				if(uf.getUserId().equals(((UserInfo)this.pu.getAttribute("sessionInfo")).getUserId())) {
					result=true;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
}
