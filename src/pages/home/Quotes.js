import QuotesSlider from './../../components/sliders/quotes/QuotesSlider';

import classes from './Quotes.module.css';

const Quotes = () => {
    return (
        <section className={classes.section}>
            <div className='container'>
                <QuotesSlider />
            </div>
        </section>
    );
};

export default Quotes;
