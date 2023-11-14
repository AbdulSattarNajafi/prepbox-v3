import SessionCard from '../../components/cards/SessionCard';
import classes from './Session.module.css';

const tuesday = [
    { from: '6:30AM', to: '8:30AM' },
    { from: '6:00PM', to: '8:00PM' },
    { from: '9:00PM', to: '11:00PM' },
];

const wednesday = [
    { from: '6:00PM', to: '8:00PM' },
    { from: '9:00PM', to: '11:00PM' },
];
const thursday = [
    { from: '6:30AM', to: '8:30AM' },
    { from: '9:00PM', to: '11:00PM' },
];

const saturday = [
    { from: '6:30AM', to: '8:30AM' },
    { from: '10:00AM', to: '12:00PM' },
];

const Session = () => {
    return (
        <section className={classes.session}>
            <div className='container'>
                <div className={classes.sessionHeader}>
                    <h2>Our Sessions</h2>
                    <p>All times are U.S. Eastern Standard Time</p>
                </div>

                <div className={classes['session__grid']}>
                    <SessionCard weekday='Tuesday' availability={tuesday} />
                    <SessionCard weekday='Wednesday' availability={wednesday} />
                    <SessionCard weekday='Thursday' availability={thursday} />
                    <SessionCard weekday='Saturday' availability={saturday} />
                </div>
            </div>
        </section>
    );
};

export default Session;
