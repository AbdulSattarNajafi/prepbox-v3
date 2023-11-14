import TeamCard from './../../components/cards/TeamCard';
import TeamImage1 from './../../assets/images/min-lee.png';
import TeamImage2 from './../../assets/images/sam-kwon.png';
import TeamImage3 from './../../assets/images/nesan-vettivel.png';
import classes from './Team.module.css';

const Team = () => {
    return (
        <section className={classes.team}>
            <div className='container'>
                <h2 className={classes.title}>Meet our Team</h2>

                <div className={classes['team__grid']}>
                    <TeamCard
                        image={TeamImage1}
                        name='Min Lee'
                        occupation='Founder & CEO'
                        description='University of Toronto'
                    />

                    <TeamCard
                        image={TeamImage2}
                        name='Sam Kwon '
                        occupation='Cofounder'
                        description='MIT'
                    />

                    <TeamCard
                        image={TeamImage3}
                        name='Nesan Vettivel'
                        occupation='VP of Engineering'
                        description='York University'
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;
