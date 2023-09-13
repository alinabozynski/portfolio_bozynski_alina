/**
 * Name: Alina Bozynski
 * Program: Full Stack Web Development
 * Course: WEBD-1009 Programming 1
 * Created: 04-07-2022
 * Updated: 04-13-2022
 */

/**
 * Represents college undergraduate applicants.
 *
 * @author Alina Bozynski
 * @version 1.0
 */
public class UndergraduateApplicant extends CollegeApplicant
{
	private double standardAptitudeTestScore;
	private double gradePointAverage;

	/**
	 * Initializes an instance of the UndergraduateApplicant class with the
	 * specified applicant name, college name, standard aptitude test score
	 * and grade point average.
	 *
	 * @param name The name of the college applicant.
	 * @param college The name of the college.
	 * @param standardAptitudeTestScore The score achieved on the standard aptitude test.
	 * Allowable values: 0.0 - 500.0 inclusive. If this field is set outside the
	 * allowable range, set the state to zero.
	 * @param gradePointAverage The applicants grade point average. Allowable values:
	 * 0.00 - 4.50 inclusive. If this field is set outside the allowable range, set
	 * the state to zero.
	 */
	public UndergraduateApplicant(String name, String college,
		double standardAptitudeTest, double gradePointAverage)
	{
		super(name, college);

        String formatSAT = String.format("%.1f", standardAptitudeTest);

        double formattedSAT = Double.parseDouble(formatSAT);

		if(standardAptitudeTest >= 0.0 && standardAptitudeTest <= 500.0)
		{
			this.standardAptitudeTestScore = formattedSAT;
		}
		else if(standardAptitudeTest < 0.0 || standardAptitudeTest > 500.0)
		{
			this.standardAptitudeTestScore = 0.0;
		}

        String formatGPA = String.format("%.2f", gradePointAverage);

        double formattedGPA = Double.parseDouble(formatGPA);

		if(gradePointAverage >= 0.00 && gradePointAverage <= 4.50)
		{
			this.gradePointAverage = formattedGPA;
		}
		else if(gradePointAverage < 0.00 || gradePointAverage > 4.50)
		{
			this.gradePointAverage = 0.00;
		}
	}

	/**
	 * Returns the standard aptitude test score.
	 *
	 * @return The standard aptitude test score.
	 */
	public double getStandardAptitudeTestScore()
	{
		return this.standardAptitudeTestScore;
	}

	/**
	 * Sets the standard aptitude test score.
	 *
	 * @param score The score achieved on the standard aptitude test.
	 */
	public void setStandardAptitudeTestScore(double score)
	{
        if(score >= 0.0 && score <= 500.0)
		{
			this.standardAptitudeTestScore = score;
		}
		else if(score < 0.0 || score > 500.0)
		{
			this.standardAptitudeTestScore = 0.0;
		}
	}

	/**
	 * Returns the grade point average.
	 *
	 * @return The grade point average.
	 */
	public double getGradePointAverage()
	{
		return this.gradePointAverage;
	}

	/**
	 * Sets the grade point average.
	 *
	 * @param gradePointAverage The applicants grade point average.
	 */
	public void setGradePointAverage(double gradePointAverage)
	{
        if(gradePointAverage >= 0.00 && gradePointAverage <= 4.50)
		{
			this.gradePointAverage = gradePointAverage;
		}
		else if(gradePointAverage < 0.00 || gradePointAverage > 4.50)
		{
			this.gradePointAverage = 0.00;
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

		return college + " - " + program + " [" + this.standardAptitudeTestScore + "]";
	}

	/**
	 * Returns a String representation of the class.
	 *
	 * @return A String representation of the class.
	 */
	@Override
	public String toString()
	{
		String template = "%sSAT Score:\t %.1f%nGPA:\t         %.2f%n";

        return String.format(template,
        					 super.toString(),
        					 this.standardAptitudeTestScore,
        					 this.gradePointAverage);
	}
}