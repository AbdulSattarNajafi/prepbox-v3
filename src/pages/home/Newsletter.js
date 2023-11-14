import classes from './Newsletter.module.css';
import React, {useEffect} from 'react';

const Newsletter = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    portalId: '24047407',
                    formId: '88a6e69f-a2a9-40a1-842e-a2ab185e6337',
                    target: '#hubspotForm'
                })
            }
        });
        }, []);
    
    return (
        <section className={classes.section}>
            <div className='container'>
                <div className={classes.sectionContent}>
                    <h2>Subscribe to Our Newsletter</h2>
                    <p>Sign up with your email address to receive news and updates.</p>

                    <form className={classes.form}>
                        <div className={classes.formRow}>
                            {/* <input
                                className={classes.formInput}
                                type='text'
                                placeholder='Email Address'
                            />
                            <button className={classes.formBtn} type='submit'>
                                Sign Up
                            </button> */}
                        <div id="hubspotForm"></div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
