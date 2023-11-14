import Button from '../../components/button/Button';
import classes from './Adventure.module.css';

const Adventure = () => {
    return (
        <section className={classes.adventure}>
            <div className='container'>
                <div className={classes.content}>
                    <h2 className={classes.title}>Start the adventure today. </h2>
                    <Button url='https://prepboxconsultation.paperform.co/'>Speak with us</Button>
                </div>
            </div>
        </section>
    );
};

export default Adventure;
