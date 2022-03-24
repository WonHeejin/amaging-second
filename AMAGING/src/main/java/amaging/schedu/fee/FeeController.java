package amaging.schedu.fee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import amaging.schedu.bean.FeeBean;

@RestController
public class FeeController {
	@Autowired
	private Fee fee;
	
	@SuppressWarnings("unchecked")
	@PostMapping(value = "/GetFeeList", produces = "application/json; charset=UTF-8")
	public List<FeeBean> getFeeList(ModelAndView mav, @ModelAttribute FeeBean fb) {
		System.out.println(fb.getAcCode() + " : " + fb.getUpMonth());
		mav.addObject("fb",fb);
		this.fee.backController(2, mav);
		System.out.println("FRONTCONTROLLER BEFORE CLIENT" + mav.getModelMap().getAttribute("monthFeeList"));
		return (List<FeeBean>)mav.getModelMap().getAttribute("monthFeeList");
	}
	
}
