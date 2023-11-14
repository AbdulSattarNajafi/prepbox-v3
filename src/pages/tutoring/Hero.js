import Button from '../../components/button/Button';
import TutorImage from './../../assets/images/guarantee.png';
import classes from './Hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className='container'>
                <div className={classes.heroContent}>
                    <div className={classes.texts}>
                        <h1>
                            We guarantee you will
                            <span className='text-blue'> improve on your next math test</span>
                        </h1>
                        <p>
                            <span className='text-blue'>100% money-back guarantee</span> for a test
                            that is at least 2 weeks away
                        </p>
                        <div className={classes.textsButton}>
                            <Button url='https://prepboxconsultation.paperform.co/'>Book constultation</Button>
                        </div>
                    </div>
                    <div className={classes.image}>
                        <img src={TutorImage} alt='Tutor' />
                        <div className={classes.imageButton}>
                            <Button url='https://prepboxconsultation.paperform.co/'>Book constultation</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
