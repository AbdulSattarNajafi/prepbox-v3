import Button from '../../components/button/Button';
import HeroImage from './../../assets/images/home-hero2.png';
import classes from './Hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className='container'>
                <div className={classes.heroContent}>
                    <div className={classes.heroContentTexts}>
                        <h1>
                            Improve in math through <span className='text-blue'>Monitored Practice</span> with PrepBox
                        </h1>
                        <h2>
                            Have your students solve questions on PrepBox, receive immediate feedback, and get reports
                        </h2>
                        <Button
                            type='external-link'
                            url='https://apps.apple.com/us/app/prepbox/id1635011155'
                        >
                            Download PrepBox
                        </Button>
                    </div>

                    <div className={classes.heroContentImage}>
                        <img src={HeroImage} alt='Banner' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
