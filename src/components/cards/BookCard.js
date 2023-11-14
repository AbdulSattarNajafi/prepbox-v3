import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classes from './BookCard.module.css';
import { useDownloadBook } from '../../contexts/downloadBookContext';
const BookCard = ({ name, commonName, image, bookFile, bookFileName, available, showModal }) => {
    const navigate = useNavigate();
    const { showModalHandler, setBookHandler } = useDownloadBook();

    const bookHandler = (event) => {
        navigate(commonName);
        // localStorage.setItem('__book_id', id);
    };

    const buttonHandler = (bookFile, bookFileName, event) => {
        event.stopPropagation();
        showModalHandler();
        setBookHandler({ file: bookFile, name: bookFileName });
    };

    const renderButton = (available) => {
        if (available === true) {
            return (
                <button
                    onClick={(event) => buttonHandler(bookFile, bookFileName, event)}
                    className={classes['card__body-button']}
                >
                    Get the Book
                </button>
            );
        } else {
            return (
                <button
                    disabled
                    onClick={(event) => buttonHandler(bookFile, bookFileName, event)}
                    className={classes['card__body-button-unavailable']}
                >
                    Coming Soon
                </button>
            );
        }
    };

    return (
        <div className={classes.card} onClick={bookHandler}>
            <div className={classes['card__image']}>
                <LazyLoadImage src={image} alt={name} width='200' height='200' />
            </div>
            <div className={classes['card__body']}>
                <h3 className={classes['card__body-title']}>{name}</h3>
                {renderButton(available)}
            </div>
        </div>
    );
};

export default BookCard;
