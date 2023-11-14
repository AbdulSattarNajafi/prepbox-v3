import MaterialPage from './Material';
import Marking from '../Marking';

import ReactGA from 'react-ga';
ReactGA.initialize("UA-255807593")
ReactGA.pageview(window.location.pathname + window.location.search);


const BookMaterial = () => {
    return (
        <>
            <MaterialPage />
            <Marking />
        </>
    );
};

export default BookMaterial;
