import classes from './QuotesSliderItem.module.css';

const QuotesSliderItem = ({ quote, author }) => {
    return (
        <div className={classes.sliderItem}>
            <h4>{quote}</h4>
            <p>{author}</p>
        </div>
    );
};

export default QuotesSliderItem;
