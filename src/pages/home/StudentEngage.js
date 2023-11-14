import ReactPlayer from 'react-player';
import WhiteboardIntro from './../../assets/videos/whiteboard-intro.mov';
import Button from '../../components/button/Button';
import classes from './StudentEngage.module.css';

const StudentEngage = () => {
    return (
        <section className={classes.section}>
            <div className='container'>
                <div className={classes.sectionContent}>
                    <div className={classes.sectionContentVideo}>
                        <ReactPlayer url={WhiteboardIntro} width='100%' controls={true} />
                    </div>

                    <div className={classes.sectionContentTexts}>
                        <h3>
                            Engage your student in
                            <span className='text-blue'> low-stakes practice </span>
                            with <span className='text-blue'>instant marking*</span>
                        </h3>
                        <p>
                            Instant marking by our A.I. improves focus and keeps students engaged,
                            which guarantees improvement
                        </p>
                        <p className={classes.priceText}>
                            *Instant marking is
                            <span className='text-blue'> free for the 1st month</span> and $19.99 /
                            month afterwards
                        </p>

                        <Button
                            type='external-link'
                            url='https://apps.apple.com/us/app/prepbox/id1635011155'
                        >
                            Download PrepBox
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentEngage;
