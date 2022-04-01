package amaging.schedu.db;

import java.util.List;

import amaging.schedu.bean.ACPlan;
import amaging.schedu.bean.AcList;
import amaging.schedu.bean.FeeBean;
import amaging.schedu.bean.GradeBean;
import amaging.schedu.bean.Subject;
import amaging.schedu.bean.UserInfo;

public interface GFOracleMapper {
	/*Fee*/
	public List<FeeBean> getMonthFee(FeeBean fb);
	public List<FeeBean> searchName(FeeBean fb);
	public int updFeeList(FeeBean fb);
	public int getFeeCheck(FeeBean fb);
	public List<FeeBean> feeStudentList(FeeBean fb);
	public int insFeeList(FeeBean fb);
	public List<FeeBean> getMyFeeList(FeeBean fb);
	public String getAmounts(UserInfo uf);
	/*Grade*/
	public List<ACPlan> getTeacherAcademy(AcList ac);
	public List<ACPlan> getChildAcademy(ACPlan ac);
	public List<GradeBean> getSubject(Subject sj);
	public int checkPwd(AcList ac);
	public List<Subject> getTeacherClass(AcList ac);
	public int modGrade(GradeBean grade);
	public List<GradeBean> getStudentList(GradeBean grade);
	public List<GradeBean> getSubjectGrade(GradeBean grade);
	public int isGrade(GradeBean grade);
	public int regGrade(GradeBean grade);
	public List<GradeBean> getTGrade(GradeBean grade);
	public List<GradeBean> getMaxGrade(GradeBean grade);
	public List<GradeBean> getGrade(UserInfo ui);
	public List<GradeBean> getMyChilds(UserInfo ui);
	
}
