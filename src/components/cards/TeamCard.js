import classes from './TeamCard.module.css';

const TeamCard = ({ image, name, occupation, description }) => {
    return (
        <div className={classes.card}>
            <div className={classes['card__image']}>
                <img src={image} alt={name} />
            </div>
            <div className={classes['card__body']}>
                <h4>{name}</h4>
                <p>{occupation}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TeamCard;
