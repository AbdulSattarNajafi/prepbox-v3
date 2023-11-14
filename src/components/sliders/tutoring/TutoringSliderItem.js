import classes from './TutoringSliderItem.module.css';

const TutoringSliderItem = ({ quote, author }) => {
    return (
        <div className={classes.sliderItem}>
            <h4>{quote}</h4>
            <p>{author}</p>
        </div>
    );
};

export default TutoringSliderItem;
