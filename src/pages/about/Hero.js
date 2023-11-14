import HeroImage1 from './../../assets/images/about-1.jpg';
import HeroImage2 from './../../assets/images/about-2.jpg';
import classes from './Hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className='container'>
                <div className={classes['hero__content']}>
                    <div className={classes['hero__content-text']}>
                        <h3 className={classes['hero__title']}>
                            Our mission is to help parents and teachers focus on the human elements
                            of teaching math by using technology
                        </h3>
                    </div>

                    <div className={classes['hero__content-image']}>
                        <div className={classes['hero__image-top']}>
                            <img src={HeroImage1} alt='About us' />
                        </div>
                        <div className={classes['hero__image-bottom']}>
                            <img src={HeroImage2} alt='About us' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
