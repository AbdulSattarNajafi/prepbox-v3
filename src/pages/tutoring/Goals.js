import GoalsCard from './../../components/cards/GoalsCard';
import Improvement from './../../assets/images/improvement.png';
import Progress from './../../assets/images/progress.png';
import Practice from './../../assets/images/practice.png';
import classes from './Goals.module.css';

const Goals = () => {
    return (
        <article className={classes.goals}>
            <div className='container'>
                <div className={classes.goalsContent}>
                    <GoalsCard image={Improvement} title='Guaranteed Improvement'>
                        <p>
                            If your next test is 2 or more weeks away, we
                            <span className='text-blue'>
                                {''} guarantee an improvement in your grade
                            </span>
                            . We will refund you 100% if this does not happen.
                        </p>
                    </GoalsCard>

                    <GoalsCard image={Progress} title='Monitored Progress'>
                        <p>
                            You will receive
                            <span className='text-blue'> a detailed progress report</span> after
                            every session. You don’t have to worry about keeping track!
                        </p>
                    </GoalsCard>

                    <GoalsCard image={Practice} title='Unlimited Practice'>
                        <p>
                            Our
                            <span className='text-blue'>
                                {' '}
                                A.I. grades your work, and generates similar questions{' '}
                            </span>
                            to your heart’s content. You can practice on your own time without
                            limits.
                        </p>
                    </GoalsCard>
                </div>
            </div>
        </article>
    );
};

export default Goals;
