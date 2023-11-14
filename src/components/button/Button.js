import { Link } from 'react-router-dom';
import classes from './Button.module.css';
const Button = ({ type, children, url, onClick }) => {
    if (type === 'external-link') {
        return (
            <a href={url} rel='noreferrer' target='_blank' className={classes.btn}>
                {children}
            </a>
        );
    }

    if (type === 'button') {
        return (
            <button className={classes.btn} onClick={onClick}>
                {children}
            </button>
        );
    }

    return (
        <Link className={classes.btn} to={url}>
            {children}
        </Link>
    );
};

export default Button;
