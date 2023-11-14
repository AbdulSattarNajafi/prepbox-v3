import ReactPlayer from 'react-player';
import JumpToCourse from './../../assets/videos/jump-to-course.mp4';
import classes from './StudentPractice.module.css';

const StudentPractice = () => {
    return (
        <section className={classes.section}>
            <div className='container'>
                <div className={classes.sectionContent}>
                    <div className={classes.sectionContentTexts}>
                        <h3>
                            <span className='text-blue'>Jump to the section</span> you want your
                            student to practice
                        </h3>
                        <p>
                            Pick the section you need from 500+ questions in the workbook. Don’t
                            worry about running out! PrepBox will generate more.
                        </p>
                    </div>

                    <div className={classes.sectionContentVideo}>
                        <ReactPlayer url={JumpToCourse} width='100%' controls={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentPractice;
