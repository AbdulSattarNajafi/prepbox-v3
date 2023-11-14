import Button from '../../components/button/Button';

import HowworkImage from './../../assets/images/howworks.png';
import classes from './HowWork.module.css';

const HowWork = () => {
    return (
        <section className={classes.section}>
            <div className='container'>
                <h2 className='text-center'>
                    How Does <span className='text-blue'>PrepBox</span> work?
                </h2>
                <div className={classes['section__content']}>
                    <div className={classes['section__content-image']}>
                        <img src={HowworkImage} alt='banner' />
                    </div>
                    <div className={classes['section__content-texts']}>
                        <h3>
                            <span className='text-blue'>Pick the workbook</span> for your student’s
                            curriculum
                        </h3>
                        <p>
                            PrepBox contains all the questions needed to fully master your grade or
                            subject, depending on your curriculum (also downloadable for free!)
                        </p>

                        <div className={classes['section__content-links']}>
                            <Button url='/worksheets'>Download workbooks</Button>
                            <p>or</p>
                            <Button url='https://prepboxconsultation.paperform.co/'>Match my textbook</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWork;
