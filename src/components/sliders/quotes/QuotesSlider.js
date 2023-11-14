import Slider from 'react-slick';
import { homeQuotes } from '../../../constant/quotes';
import QuotesSliderItem from './QuotesSliderItem';
import classes from './QuotesSlider.module.css';

const settings = {
    dots: false,
    // fade: true,
    infinite: true,
    speed: 500,
    autoplay: false,

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: classes.slider,
};

const QuotesSlider = () => {
    return (
        <Slider {...settings}>
            {homeQuotes.map((quote) => (
                <QuotesSliderItem key={quote.id} quote={quote.quote} author={quote.author} />
            ))}
        </Slider>
    );
};

export default QuotesSlider;
