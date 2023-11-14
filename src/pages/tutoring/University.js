import Button from '../../components/button/Button';
import classes from './University.module.css';

const University = () => {
    return (
        <section className={classes.section}>
            <div className='container'>
                <div className={classes.sectionContent}>
                    <h3 className='text-blue'>
                        Don’t let math grades stop you from your dream university
                    </h3>
                    <Button url='https://prepboxconsultation.paperform.co/'>Book consultation</Button>
                </div>
            </div>
        </section>
    );
};

export default University;
