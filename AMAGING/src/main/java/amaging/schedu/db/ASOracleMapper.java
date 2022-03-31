package amaging.schedu.db;

import java.util.List;

import amaging.schedu.bean.AcList;
import amaging.schedu.bean.Admin;
import amaging.schedu.bean.AtLog;
import amaging.schedu.bean.AttendanceBean;
import amaging.schedu.bean.ChildCode;
import amaging.schedu.bean.ClassBean;
import amaging.schedu.bean.Subject;
import amaging.schedu.bean.UserInfo;

public interface ASOracleMapper {
	public UserInfo getTInfo(UserInfo uf);
	public List<AcList> getSchoolList(UserInfo uf);
	public List<ClassBean> getClassList(AcList al);
	public int checkPwd(AcList al);
	public int checkSL(AcList al);
	public List<ClassBean> getStudentList(Subject sj);
	public int insSA(AttendanceBean ab);
	public List<AttendanceBean> getAForm(Subject sj);
	public int upSA(AttendanceBean ab);
	public List<AttendanceBean> getRcAForm(Subject sj);
	/*overlap check*/
	public int checkOverlap(AcList al);
	public List<AttendanceBean> sList(AcList al);
	public int insSAttendance(AttendanceBean ab);
	public List<AttendanceBean> stAllList(AcList al);
	/*get timeTable*/
	public int upSudentS(AcList al);
	public int upSudentL(AcList al);
	/*search student*/
	public List<AttendanceBean> searchSI(Subject sj);
	/*updateStudentInfo*/
	public int checkSI(Subject sj);
	public int upSI(Subject sj);
	public AttendanceBean getJustTime(AcList al);
	public List<AttendanceBean> forInsert(AcList al);
	/*waitingStudentList*/
	public List<ChildCode> getWSList(Admin an);
	public int upPermission(Admin an);
	public int upReject(Admin an);
	/*deleteStudent*/
	public int checkS(Admin an);
	public List<ChildCode> getDSList(Admin an);
	public List<ChildCode> getFailSList(Admin an);
	public int delS(Admin an);
	/*psAttendance*/
	public List<Subject> getPSAttendanceList(UserInfo uf);
	public Subject getSEDate(AttendanceBean ab);
	public List<AtLog> getAtlog(AttendanceBean ab);
	/*Graph*/
	public List<Subject> getGraph(Admin an);
	public int delST(Admin an);
	public List<ChildCode> getPSN(Admin an);
	public List<ChildCode> getPSNN(Admin an);
	public List<ChildCode> getAG(Admin an);	
}
