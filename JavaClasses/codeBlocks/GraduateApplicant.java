/**
 * Name: Alina Bozynski
 * Program: Full Stack Web Development
 * Course: WEBD-1009 Programming 1
 * Created: 04-07-2022
 * Updated: 04-13-2022
 */

/**
 * Represents college graduate applicants.
 *
 * @author Alina Bozynski
 * @version 1.0
 */
public class GraduateApplicant extends CollegeApplicant
{
	private String collegeOfOrigin;

	/**
	 * Initializes an instance of the GraduateApplicant class
	 * with a specified name, college name, and college of origin.
	 *
	 * @param name The name of the college applicant.
	 * @param college The name of the college.
	 * @param collegeOfOrigin The name of the college where the graduate applicant received their degree.
	 */
	public GraduateApplicant(String name, String college, String collegeOfOrigin)
	{
		super(name, college);
		this.setCollegeOfOrigin(collegeOfOrigin);
	}

	/**
	 * Returns a string representing the applicant's college of origin.
	 *
	 * @return A String representing the applicant's college of origin.
	 */
	public String getCollegeOfOrigin()
	{
		return this.collegeOfOrigin;
	}

	/**
	 * Sets the college of origin.
	 *
	 * @param collegeOfOrigin The name of the college where the graduate applicant received their degree.
	 */
	public void setCollegeOfOrigin(String collegeOfOrigin)
	{
		this.collegeOfOrigin = collegeOfOrigin;
	}

	/**
	 * Returns true when the college name and the college of origin
	 * are the same (case is not a factor); otherwise returns false.
	 *
	 * @return Boolean value representing if the college name and college of origin are the same.
	 */
	public boolean isInside()
	{
		String college = super.getCollege().toUpperCase();
		String origin = this.collegeOfOrigin.toUpperCase();

		if(college.equals(origin))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	/**
	 * Returns a String representing the registration of a program.
	 *
	 * @param program The college program the applicant is registering for.
	 * @return A String representing the registration of a program.
	 */
	@Override
	public String registerForProgram(String program)
	{
		String college = super.getCollege();

		return this.collegeOfOrigin + " > " + college + " - " + program;
	}

	/**
	 * Returns a String representation of the class.
	 *
	 * @return A String representation of the class.
	 */
	@Override
	public String toString()
	{
		String template = "%sOrigin:\t         %s";
        return String.format(template,
        					 super.toString(),
        					 this.collegeOfOrigin);
	}
}