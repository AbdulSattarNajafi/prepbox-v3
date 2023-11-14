import Hero from './Hero';
import HowWork from './HowWork';
import StudentPractice from './StudentPractice';
import StudentEngage from './StudentEngage';
import StudentProgress from './StudentProgress';
import Start from './Start';
import Services from './Services';
import Improved from './Improved';
import Quotes from './Quotes';
import Newsletter from './Newsletter';

import ReactGA from 'react-ga';
ReactGA.initialize("UA-255807593")
ReactGA.pageview(window.location.pathname + window.location.search);

const Home = () => {
    return (
        <>
            <Hero />
            <HowWork />
            <StudentPractice />
            <StudentEngage />
            <StudentProgress />
            <Start />
            <Services />
            <Improved />
            <Quotes />
            <Newsletter />
        </>
    );
};

export default Home;
