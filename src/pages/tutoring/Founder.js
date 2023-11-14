import Button from '../../components/button/Button';
import classes from './Founder.module.css';

const Founder = () => {
    return (
        <article className={classes.founder}>
            <div className='container'>
                <div className={classes.founderContent}>
                    <div className={classes.texts}>
                        <h2>The founder of PrepAnywhere with 20+ years of experience</h2>
                    </div>
                    <div className={classes.texts}>
                        <p>
                            I have taught 5,000+ students in my 20+ years of experience, and can
                            guarantee your improvement in math
                        </p>
                        <p>
                            Over 90,000 students have learned from my videos on PrepAnywhere, many
                            of which are in the PrepBox app
                        </p>
                    </div>
                </div>
                <div className={classes.founderButton}>
                    <Button url='https://prepboxconsultation.paperform.co/'>Book consultation</Button>
                </div>
            </div>
        </article>
    );
};

export default Founder;
