import ServicesCard from './../../components/cards/ServicesCard';
import ServicesImage1 from './../../assets/images/services-1.png';
import ServicesImage2 from './../../assets/images/services-2.png';
import ServicesImage3 from './../../assets/images/services-3.png';
import classes from './Services.module.css';

const Services = () => {
    return (
        <section className={classes.section}>
            <div className='container'>
                <h2 className='text-center'>Our Products and Services</h2>

                <div className={classes.grid}>
                    <ServicesCard
                        image={ServicesImage1}
                        title='FREE Curriculum Workbooks'
                        text='Download workbooks with over 500 problems with lecture and solution videos for any curriculum in the U.S. or Canada'
                        linkText='Check out workbooks'
                        linkUrl='worksheets'
                    />
                    <ServicesCard
                        image={ServicesImage2}
                        title='PrepBox'
                        text='Solve grade-level questions in our PrepBox app that provides lectures videos, marks your work, and gives you reports.'
                        linkText='Try for free'
                        linkUrl='https://prepboxconsultation.paperform.co/'
                    />
                    <ServicesCard
                        image={ServicesImage3}
                        title='PrepBox Tutoring'
                        text='Receive tutoring from our tutors for guaranteed improvement in your next math test with money-back guarantee'
                        linkText='Learn more'
                        linkUrl='https://prepboxconsultation.paperform.co/'
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
