import ReactGA from 'react-ga';
ReactGA.initialize('UA-255807593');
ReactGA.pageview(window.location.pathname);

export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export const downloadBook = (book) => {
    ReactGA.event({
        category: 'User',
        action: `downloaded_${book.name}`,
        label: `download_${book.name}`,
    });
    const link = document.createElement('a');
    link.href = book.file;
    link.download = book.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
