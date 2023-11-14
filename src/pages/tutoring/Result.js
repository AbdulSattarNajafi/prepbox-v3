import Button from '../../components/button/Button';
import ResultImage1 from './../../assets/images/result-1.jpg';
import ResultImage2 from './../../assets/images/result-2.jpg';
import classes from './Result.module.css';

const Result = () => {
    return (
        <div className={classes.result}>
            <div className='container'>
                <div className={classes.resultContent}>
                    <div className={classes.image}>
                        <img src={ResultImage1} alt='Result' />
                    </div>
                    <div className={classes.texts}>
                        <h4>We promise results with a guarantee</h4>
                        <p>
                            If you want to improve your test score with 100% certainty within 2
                            weeks or more, enroll today with a 100% money-back guarantee.
                        </p>
                        <p>I really mean it, when I say that I can make a difference. </p>
                        <div className={classes.textsButton}>
                            <Button url='https://prepboxconsultation.paperform.co/'>Book consultation</Button>
                        </div>
                    </div>
                </div>

                <div className={classes.resultContentBottom}>
                    <div className={classes.textsBottom}>
                        <h4>Our care extends to college-level calculus</h4>
                        <p>
                            Whether you are behind in Grade 6 or 12 does not matter. I can teach
                            college students, and our programs deliver results up to college-level
                            calculus.
                        </p>
                        <div className={classes.textsButtonBottom}>
                            <Button url='https://prepboxconsultation.paperform.co/'>Book consultation</Button>
                        </div>
                    </div>
                    <div className={classes.image}>
                        <img src={ResultImage2} alt='Result' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;
