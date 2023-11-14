import Hero from './Hero';
import Books from './Books';
import Marking from './Marking';

import ReactGA from 'react-ga';
ReactGA.initialize("UA-255807593")
ReactGA.pageview(window.location.pathname + window.location.search);


const Worksheet = () => {
    return (
        <>
            <Hero />
            <Books />
            <Marking />
        </>
    );
};

export default Worksheet;
