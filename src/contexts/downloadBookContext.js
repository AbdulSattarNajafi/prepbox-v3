import { createContext, useContext, useState } from 'react';
import { downloadBook } from '../utils/helpers';

const DownloadBookContext = createContext({
    showModal: false,
    showModalHandler: () => {},
    hideModalHandler: () => {},

    book: { file: '', name: '' },
    setBookHandler: (newBook) => {},
    downloadBookHandler: () => {},
});

const DownloadBookProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [book, setBook] = useState({});

    const showModalHandler = () => setShowModal(true);
    const hideModalHandler = () => setShowModal(false);

    const setBookHandler = (newBook) => {
        setBook(newBook);
    };

    const downloadBookHandler = () => {
        downloadBook(book);
    };

    const value = {
        showModal,
        showModalHandler,
        hideModalHandler,
        book,
        setBookHandler,
        downloadBookHandler,
    };

    return <DownloadBookContext.Provider value={value}>{children}</DownloadBookContext.Provider>;
};

const useDownloadBook = () => {
    const context = useContext(DownloadBookContext);

    if (context === undefined) {
        throw new Error('DownloadBookContext was used outside of DownloadBookProvider.');
    }

    return context;
};

export { DownloadBookProvider, useDownloadBook };
