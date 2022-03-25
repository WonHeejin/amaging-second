package amaging.schedu.timeTable;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import amaging.schedu.bean.UserInfo;
import amaging.schedu.bean.ClassBean;
import amaging.schedu.bean.FullCalendar;
import amaging.schedu.bean.Subject;
import amaging.schedu.bean.TList;
@RestController
public class TimeTableController {
	@Autowired
	private TimeTable tt;


	@SuppressWarnings("unchecked")
	@PostMapping("/GetCourseList")
	public List<ClassBean> getCourseList(ModelAndView mav, @ModelAttribute UserInfo uf) {			
		mav.getModelMap().addAttribute("uf", uf);
		this.tt.backController(9, mav);
		return (List<ClassBean>)mav.getModelMap().getAttribute("course");

	}

	@PostMapping("/InsertClass")
	public String insertClass(ModelAndView mav, @ModelAttribute ClassBean cb) {
		//System.out.println("dddddd");
		mav.getModelMap().addAttribute("cb", cb);
		this.tt.backController(10, mav);
		return (String)mav.getModelMap().getAttribute("msg");
	}

	@SuppressWarnings("unchecked")
	@PostMapping("/GetAClassList")
	public List<ClassBean> getAClassList(ModelAndView mav, @ModelAttribute UserInfo uf) {
		mav.getModelMap().addAttribute("uf",uf);
		this.tt.backController(4, mav);
		return (List<ClassBean>)mav.getModelMap().getAttribute("curs");
	}

	@PostMapping("/UpdClass")
	public String UpdClass(ModelAndView mav, @ModelAttribute ClassBean cb) {
		mav.getModelMap().addAttribute("cb", cb);
		this.tt.backController(11, mav);
		return (String)mav.getModelMap().getAttribute("msg");
	}	
	@SuppressWarnings("unchecked")
	@PostMapping("/GetTeacherList")
	public List<TList> getTeacherList(ModelAndView mav, @ModelAttribute TList tl) {					
		mav.getModelMap().addAttribute("tl", tl);
		this.tt.backController(17, mav);

		return (List<TList>)mav.getModelMap().getAttribute("tlist");
	}
	@PostMapping("/RegSubject")
	public String regSubject(ModelAndView mav, @ModelAttribute Subject sb) {
		mav.getModelMap().addAttribute("sb", sb);
		this.tt.backController(6, mav);
		return (String)mav.getModelMap().getAttribute("msg");
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping("/GetASubjectList")
	public List<Subject> getASubjectList(ModelAndView mav, @ModelAttribute UserInfo uf) {			
		mav.getModelMap().addAttribute("uf", uf);
		this.tt.backController(7, mav);
		return (List<Subject>)mav.getModelMap().getAttribute("subjectlist");
	 }
	@PostMapping("/UpdSubject")
	public String UpdSubject(ModelAndView mav, @ModelAttribute Subject sb) {
		mav.getModelMap().addAttribute("sb", sb);
		this.tt.backController(8, mav);
		return (String)mav.getModelMap().getAttribute("msg");
	}
	@SuppressWarnings("unchecked")
	@PostMapping("/GetSClassList")
	public List<FullCalendar> getSClassList(ModelAndView mav, @ModelAttribute UserInfo uf){
		mav.getModelMap().addAttribute("uf", uf);
		this.tt.backController(18, mav);
		return(List<FullCalendar>)mav.getModelMap().getAttribute("event");
	}
}
