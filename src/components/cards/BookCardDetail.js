import { LazyLoadImage } from 'react-lazy-load-image-component';
import classes from './BookCardDetail.module.css';
// import { downloadBook } from '../../utils/helpers';
import { useDownloadBook } from '../../contexts/downloadBookContext';

const BookCardDetail = ({
    bookId,
    name,
    preReqs,
    questionCount,
    lectureCount,
    image,
    bookPDF,
    bookPDFName,
    available,
}) => {
    const { showModalHandler, setBookHandler } = useDownloadBook();

    const buttonHandler = (bookPDF, bookPDFName, bookId, event) => {
        event.stopPropagation();
        showModalHandler();
        setBookHandler({ file: bookPDF, name: bookPDFName, id: bookId });
    };

    const renderButton = (available) => {
        if (available === true) {
            return (
                <button
                    onClick={(event) => buttonHandler(bookPDF, bookPDFName, bookId, event)}
                    className={classes['card__body-button']}
                >
                    Get the Book
                </button>
            );
        } else {
            return (
                <button
                    disabled
                    onClick={(event) => buttonHandler(bookPDF, bookPDFName, bookId, event)}
                    className={classes['card__body-button-unavailable']}
                >
                    Coming Soon
                </button>
            );
        }
    };

    return (
        <div className={classes.card}>
            <div className={classes.coverImage}>
                <LazyLoadImage src={image} alt={name} width='200' height='200' />
                <div className={classes['card__body']}>{renderButton(available)}</div>
            </div>
            <div className={classes.description}>
                <h4 className='text-blue'>{name}</h4>

                <div className={classes.descriptionItem}>
                    <h5>Questions: </h5>
                    <h5>{questionCount}</h5>
                </div>

                <div className={classes.descriptionItem}>
                    <h5>Lecture Videos:</h5>
                    <h5>{lectureCount}</h5>
                </div>

                <h5>Prerequisites:</h5>
                <ul className={classes.descriptionList}>
                    {preReqs.map((preReq, i) => {
                        return <li key={i}>{preReq}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default BookCardDetail;
