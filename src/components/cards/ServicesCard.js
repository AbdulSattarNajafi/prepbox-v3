import Button from '../button/Button';
import classes from './ServicesCard.module.css';

const ServicesCard = ({ image, title, text, linkText, linkUrl }) => {
    return (
        <div className={classes.card}>
            <div className={classes.cardImage}>
                <img src={image} alt={title} />
            </div>

            <div className={classes.cardBody}>
                <div className={classes.cardContent}>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
                <Button url={linkUrl}>{linkText}</Button>
            </div>
        </div>
    );
};

export default ServicesCard;
