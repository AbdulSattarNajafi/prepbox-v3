import { createPortal } from 'react-dom';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import useInput from '../../hooks/useInput';
import { validateEmail } from '../../utils/helpers';
import { useDownloadBook } from '../../contexts/downloadBookContext';

import classes from './DownloadBookModal.module.css';

const DownloadBookModal = () => {
    const { hideModalHandler, downloadBookHandler } = useDownloadBook();
    const ref = useOutsideClick(hideModalHandler);

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: enteredEmailHasError,
        inputBlurHandler: emailBlurHandler,
        inputChangeHandler: emailChangeHandler,
    } = useInput((value) => validateEmail(value));

    const errorMessage =
        enteredEmail === '' ? 'Email is required' : 'Please enter a valid Email address!';

    let formIsValid = false;

    if (enteredEmailIsValid) {
        formIsValid = true;
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (!formIsValid) {
            emailBlurHandler();
            return;
        }

        // ========= API Request

        // A- Close Modal
        hideModalHandler();

        // B- Download the Book
        downloadBookHandler();
    };

    return createPortal(
        <div className={classes.modal}>
            <div className={classes.modalContent} ref={ref}>
                <form onSubmit={submitHandler} className={classes.form}>
                    <div
                        className={`${classes.formControl} ${
                            enteredEmailHasError ? classes.formControlInvalid : ''
                        }`}
                    >
                        <input
                            type='text'
                            placeholder='Email address'
                            value={enteredEmail}
                            onBlur={emailBlurHandler}
                            onChange={emailChangeHandler}
                        />
                        <span className={classes.errorText}>
                            {enteredEmailHasError && errorMessage}
                        </span>
                    </div>
                    <div className={classes.formButton}>
                        <button
                            type='button'
                            className={classes.cancelBtn}
                            onClick={() => hideModalHandler()}
                        >
                            Cancel
                        </button>
                        <button type='submit' className={classes.submitBtn}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
};

export default DownloadBookModal;
