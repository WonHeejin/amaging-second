package amaging.schedu.qna;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import amaging.schedu.bean.ACPlan;
import amaging.schedu.bean.AList;
import amaging.schedu.bean.Counsel;
import amaging.schedu.bean.TList;
import amaging.schedu.bean.UserInfo;



@RestController
public class QnAController {
	@Autowired
	QnA qna;
	
	@PostMapping("/GetAcList")
	public ModelAndView getAcList(ModelAndView mav) {
		qna.backController(4, mav);
		return mav;
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping("/GetContents")
	public List<Counsel> getContents(ModelAndView mav, @ModelAttribute UserInfo uf) {
		
		qna.backController(7, mav.addObject("uf", uf));
		List<Counsel> a =(List<Counsel>)mav.getModelMap().getAttribute("contents");
		
		return a;
	}
	
	@PostMapping(value = "/UpdAnswer", produces="text/plain; charset=utf-8")
	public String updAnswer(ModelAndView mav, @ModelAttribute Counsel cn) {
		qna.backController(8, mav.addObject("cn", cn));
		return mav.getModelMap().getAttribute("msg").toString();
	}
	
	@PostMapping(value = "/SendReplyEmail", produces="text/plain; charset=utf-8")
	public String sendReplyEmail(ModelAndView mav, @ModelAttribute Counsel cn) {
		qna.backController(9, mav.addObject("cn", cn));
		return mav.getModelMap().getAttribute("msg").toString();
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping("/GetCAcademyList")
	public List<ACPlan> getCAcademyList(ModelAndView mav, @ModelAttribute UserInfo uf) {
		qna.backController(4, mav.addObject("uf", uf));
		return (List<ACPlan>)mav.getModelMap().getAttribute("contents");
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping("/GetTList")
	public List<TList> GetTList(ModelAndView mav, @ModelAttribute UserInfo uf) {
		qna.backController(5, mav.addObject("uf", uf));
		return (List<TList>)mav.getModelMap().getAttribute("contents");
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping("/GetAList")
	public List<AList> GetAList(ModelAndView mav, @ModelAttribute UserInfo uf) {
		
		qna.backController(5, mav.addObject("uf", uf));
		
		List<AList> a =(List<AList>)mav.getModelMap().getAttribute("contents11");
	
		return a;
	}
	
	@PostMapping(value = "/InsertQnA", produces="text/plain; charset=utf-8")
	public String insertQnA(ModelAndView mav, @ModelAttribute Counsel cn) {
	
		//System.out.println(cn);
		qna.backController(6, mav.addObject("cn", cn));
		
		return mav.getModelMap().getAttribute("msg").toString();
	}
	
}
