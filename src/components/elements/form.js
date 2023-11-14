import { useNavigate } from 'react-router-dom';
import classes from './form.module.css';
import axios from 'axios';
import useInput from '../../hooks/useInput';

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function validatePhoneNumber(phoneNumber) {
    return phoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
}

const NameForm = () => {
    const navigate = useNavigate();

    const {
        value: selectedIpad,
        isValid: selectedIpadIsValid,
        hasError: selectedIpadHasError,
        inputBlurHandler: selectedIpadBlurHandler,
        inputChangeHandler: selectedIpadChangeHandler,
        resetInput: resetSelectedIpad,
    } = useInput((value) => value === '1');

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: enteredNameHasError,
        inputBlurHandler: nameBlurHandler,
        inputChangeHandler: nameInputChangeHandler,
        resetInput: resetNameInput,
    } = useInput((value) => value.trim() !== '');

    const {
        value: selectedGrade,
        isValid: selectedGradeIsValid,
        hasError: selectedGradeHasError,
        inputBlurHandler: selectedGradeBlurHandler,
        inputChangeHandler: selectedGradeChangeHandler,
        resetInput: resetSelectedGrade,
    } = useInput((value) => value !== '');

    const {
        value: selectedCurriculum,
        isValid: selectedCurriculumIsValid,
        hasError: selectedCurriculumHasError,
        inputBlurHandler: selectedCurriculumBlurHandler,
        inputChangeHandler: selectedCurriculumChangeHandler,
        resetInput: resetSelectedCurriculum,
    } = useInput((value) => value !== '');

    const {
        value: enteredPhone,
        isValid: enteredPhoneIsValid,
        hasError: enteredPhoneHasError,
        inputBlurHandler: phoneBlurHandler,
        inputChangeHandler: phoneChangeHandler,
        resetInput: resetPhoneInput,
    } = useInput((value) => validatePhoneNumber(value));

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: enteredEmailHasError,
        inputBlurHandler: emailBlurHandler,
        inputChangeHandler: emailChangeHandler,
        resetInput: resetEmailInput,
    } = useInput((value) => validateEmail(value));

    let formIsValid = false;

    if (
        selectedIpadIsValid &&
        enteredNameIsValid &&
        selectedGradeIsValid &&
        selectedCurriculumIsValid &&
        enteredPhoneIsValid &&
        enteredEmailIsValid
    ) {
        formIsValid = true;
    }

    async function submitHandler(event) {
        event.preventDefault();

        if (!formIsValid) {
            selectedIpadBlurHandler();
            nameBlurHandler();
            selectedGradeBlurHandler();
            selectedCurriculumBlurHandler();
            phoneBlurHandler();
            emailBlurHandler();

            return;
        }

        const webhookUrl =
            'https://hooks.slack.com/services/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';

        const data = {
            text: `Free student sign-up request \n Name: ${enteredName} \n Grade: ${selectedGrade} \n Phone: ${enteredPhone} \n Email: ${enteredEmail} \n Curriculum:${selectedCurriculum}`,
        };

        let response = await axios.post(webhookUrl, JSON.stringify(data), {
            withCredentials: false,
            transformRequest: [
                (data, headers) => {
                    return data;
                },
            ],
        });

        if (response.status === 200) {
            resetSelectedIpad();
            resetNameInput();
            resetSelectedGrade();
            resetSelectedCurriculum();
            resetPhoneInput();
            resetEmailInput();

            navigate('/thankyou', { replace: true });
        }
    }

    return (
        <div className={classes.form}>
            <form className={classes.formBox} onSubmit={submitHandler}>
                <div
                    className={`${classes.formControl} ${
                        selectedIpadHasError ? classes.formControlInvalid : ''
                    }`}
                >
                    <select
                        value={selectedIpad}
                        onBlur={selectedIpadBlurHandler}
                        onChange={selectedIpadChangeHandler}
                    >
                        <option value='' disabled>
                            Have an iPad?
                        </option>
                        <option value='1'>Yes </option>
                        <option value='0'>No</option>
                    </select>
                    {selectedIpadHasError && (
                        <span className={classes.errorText}>You must have an iPad to sign up</span>
                    )}
                </div>

                <div
                    className={`${classes.formControl} ${
                        enteredNameHasError ? classes.formControlInvalid : ''
                    }`}
                >
                    <input
                        type='text'
                        placeholder='Student Name'
                        value={enteredName}
                        onBlur={nameBlurHandler}
                        onChange={nameInputChangeHandler}
                    />
                    {enteredNameHasError && (
                        <span className={classes.errorText}>Name must not be empty!</span>
                    )}
                </div>

                <div
                    className={`${classes.formControl} ${
                        selectedGradeHasError ? classes.formControlInvalid : ''
                    }`}
                >
                    <select
                        value={selectedGrade}
                        onBlur={selectedGradeBlurHandler}
                        onChange={selectedGradeChangeHandler}
                    >
                        <option value='' disabled>
                            Select your Grade
                        </option>
                        <option value='6'>Grade 6 </option>
                        <option value='7'>Grade 7 </option>
                        <option value='8'>Grade 8</option>
                        <option value='9'>Grade 9</option>
                        <option value='10'>Grade 10</option>
                        <option value='11'>Grade 11</option>
                        <option value='12'>Grade 12</option>
                    </select>

                    {selectedGradeHasError && (
                        <span className={classes.errorText}>Please select a grade!</span>
                    )}
                </div>

                <div
                    className={`${classes.formControl} ${
                        selectedCurriculumHasError ? classes.formControlInvalid : ''
                    }`}
                >
                    <select
                        value={selectedCurriculum}
                        onBlur={selectedCurriculumBlurHandler}
                        onChange={selectedCurriculumChangeHandler}
                    >
                        <option value='' disabled>
                            Select your Curriculum
                        </option>
                        <option value='US Common Core'>US Common Core </option>
                        <option value='Canada'>Canada</option>
                        <option value='Pre-Algebra'>Pre-Algebra</option>
                        <option value='Algebra I'>Algebra I</option>
                        <option value='Algebra II'>Algebra II</option>
                        <option value='Grade 8'>AP Calculus AB</option>
                        <option value='Grade 9'>AP Calculus BC</option>
                        <option value='Grade 10'>IB Math Standard Level</option>
                        <option value='Grade 11'>IB Math Higher Level</option>
                        <option value='Grade 12'>Grade 12</option>
                    </select>

                    {selectedCurriculumHasError && (
                        <span className={classes.errorText}>Please select a Curriculum!</span>
                    )}
                </div>

                <div
                    className={`${classes.formControl} ${
                        enteredPhoneHasError ? classes.formControlInvalid : ''
                    }`}
                >
                    <input
                        type='text'
                        placeholder='Phone Number'
                        value={enteredPhone}
                        onBlur={phoneBlurHandler}
                        onChange={phoneChangeHandler}
                    />
                    {enteredPhoneHasError && (
                        <span className={classes.errorText}>Phone enter a valid phone number!</span>
                    )}
                </div>

                <div
                    className={`${classes.formControl} ${
                        enteredEmailHasError ? classes.formControlInvalid : ''
                    }`}
                >
                    <input
                        type='text'
                        placeholder='Email'
                        value={enteredEmail}
                        onBlur={emailBlurHandler}
                        onChange={emailChangeHandler}
                    />
                    {enteredEmailHasError && (
                        <span className={classes.errorText}>
                            Please enter a valid Email address!
                        </span>
                    )}
                </div>

                <button type='submit' className={classes.button}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default NameForm;