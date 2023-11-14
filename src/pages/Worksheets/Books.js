import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Loader from '../../components/elements/loader';
import SecondaryButton from '../../components/button/secondary-button';
import BookCard from '../../components/cards/BookCard';
import classes from './Books.module.css';
import booksConstant from '../../constant/books';
import { useDownloadBook } from '../../contexts/downloadBookContext';
import DownloadBookModal from '../../components/elements/DownloadBookModal';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedCurriculum, setSelectedCurriculum] = useState('');

    const { showModal } = useDownloadBook();

    const filteredBooks = selectedCurriculum
        ? books.filter((book) => book.country === selectedCurriculum)
        : booksConstant;

    useEffect(() => {
        const getBooks = async () => {
            try {
                setIsLoading(true);
                setError('');
                // Reinstate once the API is fully loaded with books
                // const response = await axios.get(
                //     // 'https://app.prepanywhere.com/api/stu/static_books/all_books'
                //     '../../constant/books'
                // );
                // setBooks(response.data);
                setBooks(booksConstant);
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
        // console.log(filteredBooks)
        // console.log(selectedCurriculum)
        getBooks();
    }, []);

    const handleCurriculumChange = (curriculum) => {
        setSelectedCurriculum(curriculum);
    };

    return (
        <div className={classes.section}>
            <div className={classes.header}>
                <h1>FREE Curriculum-aligned Workbook</h1>
            </div>
            <div className={classes.container}>
                <div className={classes['section__header']}>
                    <SecondaryButton
                        text='All'
                        isActive={selectedCurriculum === '' ? true : false}
                        onClick={() => handleCurriculumChange('')}
                    />
                    <SecondaryButton
                        text='United States'
                        isActive={selectedCurriculum === 'USA' ? true : false}
                        onClick={() => handleCurriculumChange('USA')}
                    />
                    <SecondaryButton
                        text='Canada'
                        isActive={selectedCurriculum === 'CA' ? true : false}
                        onClick={() => handleCurriculumChange('CA')}
                    />
                </div>
                {isLoading && <Loader />}
                {error && <p className='error-message'>{error}</p>}
                {!error && !isLoading && (
                    <div className={classes['section__grid']}>
                        {filteredBooks.map((book) => {
                            return (
                                <BookCard
                                    key={book.id}
                                    name={book.name}
                                    commonName={book.common_name}
                                    image={book.cover_image}
                                    bookFile={book.bookPDF}
                                    bookFileName={book.bookPDF_name}
                                    available={book.available}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
            {showModal && <DownloadBookModal />}
        </div>
    );
};

export default Books;
