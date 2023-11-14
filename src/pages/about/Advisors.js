import TeamCard from './../../components/cards/TeamCard';
import AdvisorImage1 from './../../assets/images/kyle-pearce.jpg';
import AdvisorImage2 from './../../assets/images/jon-orr.jpg';
import classes from './Advisors.module.css';

const Advisors = () => {
    return (
        <section className={classes.advisors}>
            <div className='container'>
                <h2 className={classes.title}>Our Advisors</h2>

                <div className={classes.gridContainer}>
                    <TeamCard
                        image={AdvisorImage1}
                        name='Kyle Pearce'
                        occupation='Co-founder of Make Math Moments'
                        description='K-12 Math Consultant for Greater Essex County District School Board'
                    />
                    <TeamCard
                        image={AdvisorImage2}
                        name='Jon Orr'
                        occupation='Co-founder of Make Math Moments'
                        description='Pedagogy Consultant to School Districts in U.S. and Canada'
                    />
                </div>
            </div>
        </section>
    );
};

export default Advisors;
