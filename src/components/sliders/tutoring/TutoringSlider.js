import Slider from 'react-slick';
import { tutoringQuotes } from '../../../constant/quotes';
import TutoringSliderItem from './TutoringSliderItem';
import classes from './TutoringSlider.module.css';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: classes.slider,
};

const TutoringSlider = () => {
    return (
        <Slider {...settings}>
            {tutoringQuotes.map((quote) => (
                <TutoringSliderItem key={quote.id} quote={quote.quote} author={quote.author} />
            ))}
        </Slider>
    );
};

export default TutoringSlider;
