import Faq from './Faq';
import classes from './Hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className='container'>
                <div className={classes.heroContent}>
                    <div className={classes.texts}>
                        <div className={classes.textsWrapper}>
                            <h1>Our Worksheets</h1>
                            <h5>
                                And <span className='text-blue'> endless spring </span> of resources
                                for parents and teachers
                            </h5>
                        </div>
                    </div>
                    <div className={classes.faq}>
                        <Faq />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
