import SupportForm from '../../components/elements/FormSupport';
import classes from './Support.module.css';

const Support = () => {
    return (
        <section className={classes.session}>
            <div className='container'>
                <div className={classes.sessionHeader}>
                    <h2>Have questions?</h2>
                    <p>Reach out to us!</p>
                </div>
            </div>
            <div className='container'>
                <SupportForm />
            </div>
        </section>
    );
};

export default Support;
