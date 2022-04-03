package amaging.schedu.qna;

import java.util.List;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.web.servlet.ModelAndView;

import amaging.schedu.bean.ACPlan;
import amaging.schedu.bean.Counsel;
import amaging.schedu.bean.RegParent;
import amaging.schedu.bean.UserInfo;
import amaging.schedu.db.QMLOracleMapper;
@Service
public class QnA extends amaging.schedu.common.CommonMethod{
	@Autowired
	QMLOracleMapper om;
	@Autowired
	JavaMailSenderImpl javaMail;
	
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
		
		case 9:
			this.sendReplyEmail(mav);
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
	/*관리자 선생님 답변등록*/
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
	
	/*private void sendReplyEmail(ModelAndView mav) {
		
	}*/
	
	public void sendReplyEmail(ModelAndView mav) {
		Counsel cn = (Counsel)mav.getModel().get("cn");
		Counsel cn1 = (Counsel)mav.getModel().get("cn");
		Counsel cn2 = (Counsel)mav.getModel().get("cn");
		boolean isSendMail = false;
		String message1="메일발송에 실패하였습니다.";
		cn1 = this.om.getReceiverEmail(cn);
		cn2 = this.om.getSenderEmail(cn);
//		System.out.println(cn);
//		System.out.println(cn1);
//		System.out.println(cn2);
		
			String host = "smtp.naver.com"; 
			String user = cn2.getEmail();  // 네이버일 경우 네이버 계정, gmail경우 gmail 
			String password = cn.getPassword();// 패스워드
		
			// SMTP 서버 정보를 설정한다.
			Properties props = new Properties(); 
			props.put("mail.smtp.host", host); 
			props.put("mail.smtp.port", 587);
			props.put("mail.smtp.auth", "true"); 
			Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() { 
				protected PasswordAuthentication getPasswordAuthentication() { 
					return new PasswordAuthentication(user, password);
					}
				}); 
			
			try { 
				MimeMessage message = new MimeMessage(session);
				message.setFrom(new InternetAddress(user));
				message.addRecipient(Message.RecipientType.TO, new InternetAddress(cn1.getEmail())); 
				
				// 메일 제목 
				message.setSubject("요청하신 문의에 답변이 완료되었습니다."); 
				
				// 메일 내용
				message.setText("<a href='http://localhost/'> 요청하신 문의에 답변이 등록되었습니다. 내용은 홈페이지를 통해 확인해주세요. </a>");
				
				// send the message
				Transport.send(message);
				
				
				isSendMail = true;
				
			} catch (MessagingException e) { 
				e.printStackTrace();
				isSendMail = false;
				} 
	
			
message1=isSendMail?"해당회원의 메일주소로 답변완료 메일을 발송하였습니다.":"메일 발송에 실패했습니다. 다시 시도해주세요";
mav.addObject("msg", message1);
}
	
	
/*ROOTCONTEXT에 이메일 빈에 설정해놓고 메일전송 성공*/	
//	Counsel cn = (Counsel)mav.getModel().get("cn");
//	Counsel cn1 = (Counsel)mav.getModel().get("cn");
//	Counsel cn2 = (Counsel)mav.getModel().get("cn");
//	String message=null;
//	boolean isSendMail = false;
//	cn1 = this.om.getReceiverEmail(cn);
//	cn2 = this.om.getSenderEmail(cn);
//	/* 12 >> 이메일만 다시 전송
//	String regPrInfo=regp.getUserId()+","+regp.getPrCode();
//	try {
//		regPrInfo=this.enc.aesEncode(regPrInfo, "regParent");
//	} catch (Exception e) {e.printStackTrace();}*/
//	/* Email Info */
//	if(cn.getUserId().substring(0,1).equals("T")) {
//		String subject="요청하신 문의에 답변이 완료되었습니다.";
//		String contents="<a href='http://localhost/'> 요청하신 문의에 답변이 등록되었습니다. 내용은 홈페이지를 통해 확인해주세요. </a>";
//		String from=cn2.getEmail();
//		String to=cn1.getEmail();
//		
//		/* Creation MimeMessage */
//		MimeMessage mail=javaMail.createMimeMessage();
//		MimeMessageHelper helper = new MimeMessageHelper(mail,"UTF-8");
//		try {
//			helper.setFrom(from);
//			helper.setTo(to);
//			helper.setSubject(subject);
//			helper.setText(contents,true);
//			javaMail.send(mail);
//			isSendMail=true;
//		} catch (MessagingException e) {
//			isSendMail=false;
//			e.printStackTrace();
//		}
//		message=isSendMail?"해당회원의 메일주소로 답변완료 메일을 발송하였습니다.":"메일 발송에 실패했습니다. 다시 시도해주세요";
//		mav.addObject("msg", message);
//	}else {
//		String subject="요청하신 문의에 답변이 완료되었습니다.";
//		String contents="<a href='http://localhost/'> 요청하신 문의에 답변이 등록되었습니다. 내용은 홈페이지를 통해 확인해주세요. </a>";
//		String from=cn2.getEmail();
//		String to=cn1.getEmail();
//		
//		/* Creation MimeMessage */
//		MimeMessage mail=javaMail1.createMimeMessage();
//		MimeMessageHelper helper = new MimeMessageHelper(mail,"UTF-8");
//		try {
//			helper.setFrom(from);
//			helper.setTo(to);
//			helper.setSubject(subject);
//			helper.setText(contents,true);
//			javaMail1.send(mail);
//			isSendMail=true;
//		} catch (MessagingException e) {
//			isSendMail=false;
//			e.printStackTrace();
//		}
//		message=isSendMail?"해당회원의 메일주소로 답변완료 메일을 발송하였습니다.":"메일 발송에 실패했습니다. 다시 시도해주세요";
//		mav.addObject("msg", message);
//	}
	
//	private void parentRegEmail(ModelAndView mav) {
//		boolean isSendMail = false;
//		String message=null;             
//		/*대기중인 등록요청 있는지 조회*/
//		RegParent regp=(RegParent)mav.getModelMap().getAttribute("regp");
//		int spStatus=tm.checkSPStatus(regp);
//		if(spStatus==11) {
//			/* 11 >> 이미 등록됨 메세지 전송*/
//			message="이미 등록이 완료된 이메일입니다.";
//		}else {
//			/* 0 >> 대기중 insert, 이메일 전송*/
//			if(spStatus==0) {
//				boolean tran=false;
//				this.setTransactionConf(TransactionDefinition.PROPAGATION_REQUIRED, TransactionDefinition.ISOLATION_READ_COMMITTED, false);
//				/*대기중 insert*/
//				if(this.convertToBoolean(tm.regParent(regp))) {
//					tran=true;
//				}
//				this.setTransactionEnd(tran);
//			}
//			/* 12 >> 이메일만 다시 전송*/
//			String regPrInfo=regp.getUserId()+","+regp.getPrCode();
//			try {
//				regPrInfo=this.enc.aesEncode(regPrInfo, "regParent");
//			} catch (Exception e) {e.printStackTrace();}
//			/* Email Info */
//			String subject="부모등록 요청이 도착하였습니다.";
//			String contents="<a href='http://localhost/UpdPrPage?regPrInfo="+regPrInfo+"'>"+regp.getStudentName()+"님이 당신을 부모님으로 등록하길 원합니다! 링크를 통해 요청을 수락해주세요. </a>";
//			String from="swhong_test@naver.com";
//			String to=regp.getPEmail();
//			/* Creation MimeMessage */
//			MimeMessage mail=javaMail.createMimeMessage();
//			MimeMessageHelper helper = new MimeMessageHelper(mail,"UTF-8");
//			try {
//				helper.setFrom(from);
//				helper.setTo(to);
//				helper.setSubject(subject);
//				helper.setText(contents,true);
//				javaMail.send(mail);
//				isSendMail=true;
//			} catch (MessagingException e) {
//				isSendMail=false;
//				e.printStackTrace();
//			}
//			message=isSendMail?"요청하신 메일주소로 수락 요청 메일을 발송하였습니다.":"메일 발송에 실패했습니다. 다시 시도해주세요";
//		}
//		mav.addObject("message", message);
//	}
	
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
			message="답변입력 및 이메일발송 성공!";
		}		
		this.setTransactionEnd(tran);
		mav.getModelMap().addAttribute("msg", message);
	}
		
	
	
}
