import StudentProgressImage from './../../assets/images/student-progress.png';
import classes from './StudentProgress.module.css';

const StudentProgress = () => {
    return (
        <section className={classes.section}>
            <div className='container'>
                <div className={classes.sectionContent}>
                    <div className={classes.sectionContentTexts}>
                        <h3>
                            <span className='text-blue'>Track student progress</span> you want
                            through detailed reports with
                            <span className='text-blue'> all work shown</span>
                        </h3>
                        <p>
                            Know exactly how much progress has been made by the student, and ask
                            questions to the tutor for more intensive help
                        </p>
                    </div>

                    <div className={classes.sectionContentImage}>
                        <img src={StudentProgressImage} alt='Student Progress' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentProgress;
