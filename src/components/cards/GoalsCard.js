import classes from './GoalsCard.module.css';

const GoalsCard = ({ image, title, children }) => {
    return (
        <div className={classes.card}>
            <div className={classes.image}>
                <img src={image} alt={title} />
            </div>
            <div className={classes.cardBody}>
                <h3 className={classes.cardTitle}>{title}</h3>
                {children}
            </div>
        </div>
    );
};

export default GoalsCard;
