package amaging.schedu.fee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import amaging.schedu.bean.FeeBean;
import amaging.schedu.bean.GradeBean;

@RestController
public class FeeController {
	@Autowired
	private Fee fee;
	
	@SuppressWarnings("unchecked")
	@PostMapping(value = "/GetFeeList", produces = "application/json; charset=UTF-8")
	public List<FeeBean> getFeeList(ModelAndView mav, @ModelAttribute FeeBean fb) {
		mav.addObject("fb",fb);
		this.fee.backController(2, mav);
		return (List<FeeBean>)mav.getModelMap().getAttribute("monthFeeList");
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping(value = "/SearchName", produces = "application/json; charset=UTF-8")
	public List<FeeBean> searchName(ModelAndView mav, @ModelAttribute FeeBean fb) {
		mav.addObject("fb",fb);
		this.fee.backController(3, mav);
		return (List<FeeBean>)mav.getModelMap().getAttribute("feeList");
	}
	
	@PostMapping(value = "/SaveModFee", consumes="application/json", produces = "application/json; charset=UTF-8")
	public String saveModFee(ModelAndView mav, @RequestBody List<FeeBean> fb) {
		mav.getModelMap().addAttribute("fb",fb);
		this.fee.backController(4, mav);
		return (String)mav.getModelMap().getAttribute("msg");
	}
}
