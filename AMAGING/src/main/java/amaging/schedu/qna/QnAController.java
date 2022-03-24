package amaging.schedu.qna;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import amaging.schedu.bean.Counsel;
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
		List<Counsel> cn = (List<Counsel>)mav.getModelMap().getAttribute("contents");
		System.out.println(cn);
		return cn;
	}
	
}
