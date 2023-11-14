import Button from '../../components/button/Button';
import classes from './Improved.module.css';

const Improved = () => {
    return (
        <section className={classes.section}>
            <div className='container'>
                <div className={classes.sectionContent}>
                    <div className={classes.titleWrapper}>
                        <h2 className='text-blue'>
                            90,000+ students have improved their math with PrepBox
                        </h2>
                    </div>
                    <div className={classes.texts}>
                        <p>
                            Our products have helped students become A+ students and advance onto
                            the best universities
                        </p>

                        <Button url='https://prepboxconsultation.paperform.co/'>Start Today</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Improved;
