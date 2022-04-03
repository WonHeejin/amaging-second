package amaging.schedu.grade;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import amaging.schedu.bean.ACPlan;
import amaging.schedu.bean.AcList;
import amaging.schedu.bean.ClassBean;
import amaging.schedu.bean.GradeBean;
import amaging.schedu.bean.Subject;
import amaging.schedu.bean.UserInfo;

@RestController
public class GradeController {
	
	@Autowired
	private Grade grade;
	
	@SuppressWarnings("unchecked")
	@PostMapping("/MyAcademyList")
	public List<ACPlan> myAcademyList(ModelAndView mav, @ModelAttribute AcList ac) {
		mav.getModelMap().addAttribute("ac",ac);
		this.grade.backController(2, mav);
		return (List<ACPlan>)mav.getModelMap().getAttribute("acList");
	}
	
	@PostMapping(value = "/CheckPwd", produces = "application/json; charset=UTF-8")
	public String checkPwd(ModelAndView mav, @ModelAttribute AcList ac) {
		
		mav.getModelMap().addAttribute("ac",ac);
		this.grade.backController(3, mav);
		return (String)mav.getModelMap().getAttribute("msg");
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping(value = "/MyClassList", produces = "application/json; charset=UTF-8")
	public List<ACPlan> myClassList(ModelAndView mav, @ModelAttribute AcList ac) {
		
		mav.getModelMap().addAttribute("ac",ac);
		this.grade.backController(4, mav);
		return (List<ACPlan>)mav.getModelMap().getAttribute("clList");
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping(value = "/GetGrade", produces = "application/json; charset=UTF-8")
	public List<Grade> getGrade(ModelAndView mav, @ModelAttribute GradeBean gr) {
		
		mav.getModelMap().addAttribute("gr",gr);
		this.grade.backController(5, mav);
		return (List<Grade>)mav.getModelMap().getAttribute("gradeList");
	}
	
	@PostMapping(value = "/ModGrade", consumes="application/json", produces = "application/json; charset=UTF-8")
	public String modGrade(ModelAndView mav, @RequestBody List<GradeBean> gr) {
		
		mav.getModelMap().addAttribute("gr",gr);
		this.grade.backController(6, mav);
		System.out.println("성공??" + (String)mav.getModelMap().getAttribute("msg"));
		return (String)mav.getModelMap().getAttribute("msg");
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping(value = "/GetStudent", produces = "application/json; charset=UTF-8")
	public List<Grade> getStudentList(ModelAndView mav, @ModelAttribute GradeBean gr) {
		mav.getModelMap().addAttribute("gr",gr);
		this.grade.backController(7, mav);
		return (List<Grade>)mav.getModelMap().getAttribute("regGradeList");
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping(value = "/ChildAcademy", produces = "application/json; charset=UTF-8")
	public List<ACPlan> childAcademy(ModelAndView mav, @ModelAttribute ACPlan ac) {
		
		mav.getModelMap().addAttribute("ac",ac);
		this.grade.backController(8, mav);
		return (List<ACPlan>)mav.getModelMap().getAttribute("acList");
	}
	
	@PostMapping(value = "/RegGrade", consumes="application/json", produces = "application/json; charset=UTF-8")
	public String regGrade(ModelAndView mav, @RequestBody List<GradeBean> gr) {
		//(#{sBACode},#{studentId},#{score},#{rank},#{month})
		System.out.println("regGrade : " + gr.get(0).getSBACode() + " : " + gr.get(0).getStudentId() + " : " + 
				gr.get(0).getScore() + " : " + gr.get(0).getRank() + " : " + gr.get(0).getMonth());
		mav.getModelMap().addAttribute("gr",gr);
		this.grade.backController(10, mav);
		return (String)mav.getModelMap().getAttribute("msg");
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping(value = "/ChildSubject", produces = "application/json; charset=UTF-8")
	public List<GradeBean> childsubject(ModelAndView mav, @ModelAttribute Subject sj) {
		
		mav.getModelMap().addAttribute("sj",sj);
		this.grade.backController(11, mav);
		return (List<GradeBean>)mav.getModelMap().getAttribute("subjectList");
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping(value = "/GetMyGrade", produces = "application/json; charset=UTF-8")
	public List<Grade> getMyGrade(ModelAndView mav, @ModelAttribute UserInfo ui) {
		
		mav.getModelMap().addAttribute("ui",ui);
		this.grade.backController(12, mav);
		return (List<Grade>)mav.getModelMap().getAttribute("gradeList");
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping("/MyChildList")
	public List<ACPlan> myChildList(ModelAndView mav, @ModelAttribute UserInfo ui) {
		mav.getModelMap().addAttribute("ui",ui);
		this.grade.backController(13, mav);
		return (List<ACPlan>)mav.getModelMap().getAttribute("childList");
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping(value = "/GetSubjectGrade", produces = "application/json; charset=UTF-8")
	public List<Grade> getSubjectGrade(ModelAndView mav, @ModelAttribute GradeBean gr) {
		System.out.println("GetSubjectGrade = " + gr.getSBACode() + " : " + gr.getAcCode() + " : " + gr.getSubjectCode() + " : " + gr.getStudentId());
		mav.getModelMap().addAttribute("gr",gr);
		this.grade.backController(14, mav);
		return (List<Grade>)mav.getModelMap().getAttribute("latestGrade");
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping(value = "/GetGradeForGraph", produces = "application/json; charset=UTF-8")
	public List<Grade> GetGradeForGraph(ModelAndView mav, @ModelAttribute GradeBean gr) {
		System.out.println("GetGradeForGraph = " + gr.getSBACode());
		mav.getModelMap().addAttribute("gr",gr);
		this.grade.backController(15, mav);
		return (List<Grade>)mav.getModelMap().getAttribute("subjectGrade");
	}
	
	
	
}
