import TeamCard from './../../components/cards/TeamCard';
import TutorImage1 from './../../assets/images/min-lee.png';
import TutorImage2 from './../../assets/images/jina-seok.png';
import TutorImage3 from './../../assets/images/payton-coutlis.png';
import TutorImage4 from './../../assets/images/Aria-hwang.png';
import TutorImage5 from './../../assets/images/shahrzad-islami.png';
import classes from './Tutors.module.css';

const Tutors = () => {
    return (
        <section className={classes.tutors}>
            <div className='container'>
                <h2 className={classes.title}>Meet our Tutors</h2>

                <div className={classes.gridContainer}>
                    <TeamCard
                        image={TutorImage1}
                        name='Min Lee'
                        occupation='Head Tutor'
                        description='University of Toronto'
                    />
                    <TeamCard
                        image={TutorImage2}
                        name='Jina Seok'
                        occupation='Senior Lead Tutor'
                        description='University of Toronto'
                    />
                    <TeamCard
                        image={TutorImage3}
                        name='Payton Coutlis'
                        occupation='Lead Tutor'
                        description='Harvard University'
                    />
                    <TeamCard
                        image={TutorImage4}
                        name='Aria Hwang'
                        occupation='Senior Tutor'
                        description='McMaster University'
                    />
                    <TeamCard
                        image={TutorImage5}
                        name='Shahrzad Islami'
                        occupation='Senior Tutor'
                        description='University of Waterloo'
                    />
                </div>
            </div>
        </section>
    );
};

export default Tutors;
