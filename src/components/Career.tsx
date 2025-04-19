import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Chapter-Treasurer</h4>
                <h5>ACM </h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            As Treasurer of the ACM Student Chapter at SRM, I manage budgets, track expenses, and ensure financial transparency.
            My role supports smooth execution of events and long-term sustainability of the club's initiatives.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Directorate of Student Affairs-Committee Member</h4>
                <h5>DSA</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            As a Committee Member in the Directorate of Student Affairs, I help organize and coordinate student-centric events and initiatives.
            My role fosters student engagement, enhances campus life, and supports holistic development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Finance Execute</h4>
                <h5>Aarush</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            As a Finance Executive for Aaruush at SRM University, I oversee budgeting, manage funds, and ensure financial efficiency for the event.
            My role is key in enabling smooth operations and supporting impactful student-led initiatives.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SRM -
                Placement Representative </h4>
                <h5>DSBS</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
            Placement representatives at SRMIST actively support students through training, mock interviews, and career guidance. Their efforts help students secure top positions in companies like PayPal, JP Morgan, and Optum.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Gengo-Freelance Translator </h4>
              </div>
              <h3>Now</h3>
            </div>
            <p>
            ​Gengo offers flexible, remote translation opportunities ideal for language enthusiasts seeking side income. However, translators often report low pay, inconsistent job availability, and competitive job claiming processes.
            </p>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Career;
