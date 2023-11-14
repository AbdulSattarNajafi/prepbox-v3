import TutoringSlider from '../../components/sliders/tutoring/TutoringSlider';
import classes from './Quotes.module.css';
const Quotes = () => {
    return (
        <article className={classes.quotes}>
            <div className='container'>
                <TutoringSlider />
            </div>
        </article>
    );
};

export default Quotes;
