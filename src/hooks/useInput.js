import { useState } from 'react';

const useInput = (validate) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [inputTouched, setInputTouched] = useState(false);

    const isValid = validate(enteredValue);
    const hasError = !isValid && inputTouched;

    const inputChangeHandler = (e) => {
        setEnteredValue(e.target.value);
        setInputTouched(false);
    };

    const inputBlurHandler = () => {
        setInputTouched(true);
    };

    const resetInput = () => {
        setEnteredValue('');
        setInputTouched(false);
    };

    return {
        value: enteredValue,
        isValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        resetInput,
    };
};

export default useInput;
