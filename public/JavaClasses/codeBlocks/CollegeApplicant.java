/**
 * Name: Alina Bozynski
 * Program: Full Stack Web Development
 * Course: WEBD-1009 Programming 1
 * Created: 04-07-2022
 * Updated: 04-07-2022
 */

/**
 * Represents college applicants.
 *
 * @author Alina Bozynski
 * @version 1.0
 */
public abstract class CollegeApplicant
{
	private String name;
	private String college;

	/**
	 * Initializes an instance of the CollegeApplicant class where
	 * the name and college are set to the specified values.
	 *
	 * @param name The name of the college applicant.
	 * @param college The name of the college.
	 */
	public CollegeApplicant(String name, String college)
	{
		this.name = name;
		this.college = college;
	}

	/**
	 * Initializes an instance of the CollegeApplicant class where
	 * the name and college are set to "unknown".
	 */
	public CollegeApplicant()
	{
		this("unknown", "unknown");
	}

	/**
	 * Returns the college applicant's name.
	 *
	 * @return The college applicant's name.
	 */
	public String getName()
	{
		return this.name;
	}

	/**
	 * Sets the college applicant's name.
	 *
	 * @param name The name of the college applicant.
	 */
	public void setName(String name)
	{
		this.name = name;
	}

	/**
	 * Returns the name of the college.
	 *
	 * @return The name of the college.
	 */
	public String getCollege()
	{
		return this.college;
	}

	/**
	 * Sets the name of the college.
	 *
	 * @param college The name of the college.
	 */
	public void setCollege(String college)
	{
		this.college = college;
	}

	/**
	 * Returns a String representing the registration of a program.
	 *
	 * @param program The college program the applicant is registering for.
	 * @return A String representing the registration of a program.
	 */
	public abstract String registerForProgram(String program);

	/**
	 * Returns a String representation of the class.
	 *
	 * @return A String representation of the class.
	 */
	@Override
	public String toString()
	{
		return "=======================\nCollege Applicant\n=======================\nName:\t         "
				+ name + "\nCollege:\t " + college + "\n";
	}
}