import BookCover from './Bookcover';
import Marking from '../Marking';

import ReactGA from 'react-ga';
ReactGA.initialize("UA-255807593")
ReactGA.pageview(window.location.pathname + window.location.search);



const BookDetail = () => {
    return (
        <>
            <BookCover />
            <Marking />
        </>
    );
};

export default BookDetail;
