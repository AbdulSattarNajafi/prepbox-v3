import PlansCard from './../../components/cards/PlansCard';
import Button from '../../components/button/Button';
import classes from './Plans.module.css';

const Plans = () => {
    return (
        <section className={classes.plans} id='plans'>
            <div className='container'>
                <div className={classes['plans-title']}>
                    <h2>Our Plans</h2>
                </div>
                <div className={classes['plans-grid']}>
                    <PlansCard
                        title='Junior'
                        price={200}
                        session='Unlimited sessions'
                        eligible='Only grade 5-8 eligible'
                    />
                    <PlansCard title='Basic' price={200} session='1x 2-hr session' />
                    <PlansCard title='Accelerated' price={350} session='2x 2-hr session' />
                    <PlansCard title='Light Speed' price={450} session='Unlimited sessions' />
                </div>
                <div className={classes['plans-button']}>
                    <Button url='https://prepboxconsultation.paperform.co/'>Book consultation</Button>
                </div>
            </div>
        </section>
    );
};

export default Plans;
