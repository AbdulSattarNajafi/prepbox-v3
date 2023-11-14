import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AiFillCaretLeft } from 'react-icons/ai';
import Loader from '../../../components/elements/loader';
import capitalizeString from '../../../utils/capital';
import BookCardDetail from '../../../components/cards/BookCardDetail';
import classes from './Bookcover.module.css';
import books from '../../../constant/books';
import DownloadBookModal from '../../../components/elements/DownloadBookModal';
import { useDownloadBook } from '../../../contexts/downloadBookContext';

const BookCover = () => {
    const [Chapters, setChapters] = useState([]);
    const [Book, setBook] = useState({ prerequisites: [] });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { bookName } = useParams();
    const navigate = useNavigate();

    const { showModal } = useDownloadBook();

    var book = books.filter((obj) => {
        return obj.common_name === bookName;
    })[0];

    useEffect(() => {
        const getChapters = async () => {
            try {
                setIsLoading(true);
                setError('');
                const response = await axios.get(
                    `https://app.prepanywhere.com/api/stu/static_books/all_chapters?book_name=${bookName.toLowerCase()}`
                );
                setChapters(response.data);
            } catch (error) {
                if (error.response) {
                    setError('No Data Found!');
                } else if (error.request) {
                    setError('Network Error');
                } else {
                    setError('Something went wrong, Please try again!');
                }
            } finally {
                setIsLoading(false);
            }
        };

        const getBook = async () => {
            try {
                setIsLoading(true);
                setError('');
                const response = await axios.get(
                    `https://app.prepanywhere.com/api/stu/static_books/book_details?book_name=${bookName.toLowerCase()}`
                );
                setBook(response.data);
            } catch (error) {
                if (error.response) {
                    setError('No Data Found!');
                } else if (error.request) {
                    setError('Network Error');
                } else {
                    setError('Something went wrong, Please try again!');
                }
            } finally {
                setIsLoading(false);
            }
        };
        getBook();
        getChapters();
    }, [bookName]);

    const navigationHandler = (chapterName, materialName) => {
        navigate(`${chapterName}/${materialName}`);
    };

    const worksheetNavigationHandler = () => {
        navigate(`/worksheets`, { replace: true });
    };

    const bookNameProper = capitalizeString(bookName.replace(/-/g, ' '));

    return (
        <div className={classes.section}>
            <div className={classes.navigation}>
                <div className='container'>
                    <div
                        className={classes.navigationBook}
                        onClick={() => worksheetNavigationHandler()}
                    >
                        <span>
                            <AiFillCaretLeft />
                        </span>
                        <span>All Workbooks</span>
                    </div>
                    <div className={classes.navigationCurrent}>
                        {capitalizeString(bookName.replace(/-/g, ' '))}
                    </div>
                </div>
            </div>
            <div className={classes.header}>
                <h1> {bookNameProper} </h1>
            </div>

            <div className='container'>
                <BookCardDetail
                    questionCount={Book.questions_count}
                    lectureCount={Book.lectures_count}
                    preReqs={Book.prerequisites}
                    name={Book.name}
                    image={Book.cover_image}
                    bookPDFName={book.bookPDF_name}
                    bookPDF={book.bookPDF}
                    available={book.available}
                />
            </div>
            <div className={classes.container}>
                {isLoading && <Loader />}

                {error && <p className='error-message'>{error}</p>}

                {!error && !isLoading && (
                    <>
                        {Chapters.map((chapter) => {
                            return (
                                <div key={chapter.id} className={classes.chapters}>
                                    <div className={classes.chapterTitle}>
                                        <h2>{chapter.name}</h2>
                                    </div>
                                    <ul className={classes.chapterContainer}>
                                        <div className={classes.chapterTextContainer}>
                                            <li className={classes.listItem}>
                                                <div className={classes.materialWrapper}>
                                                    <div className={classes.material}>
                                                        {chapter.materials.map((material) => {
                                                            return (
                                                                <div
                                                                    key={material.id}
                                                                    onClick={() =>
                                                                        navigationHandler(
                                                                            chapter.common_name,
                                                                            material.common_name
                                                                        )
                                                                    }
                                                                >
                                                                    <p>{material.name}</p>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
            {showModal && <DownloadBookModal />}
        </div>
    );
};

export default BookCover;
