import Button from '../../components/button/Button';
import classes from './Marking.module.css';

const Marking = () => {
    return (
        <section className={classes.marking}>
            <div className='container'>
                <div className={classes.markingContent}>
                    <h2>Begin a catered program</h2>
                    <Button url='https://prepboxconsultation.paperform.co/'>Book Consultation</Button>
                </div>
            </div>
        </section>
    );
};

export default Marking;
