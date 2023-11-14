import Solution from './Solution';
import Marking from '../Marking';

import ReactGA from 'react-ga';
ReactGA.initialize("UA-255807593")
ReactGA.pageview(window.location.pathname + window.location.search);


const SolutionPage = () => {
    return (
        <>
            <Solution />
            <Marking />
        </>
    );
};

export default SolutionPage;
