import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classes from './BlogCard.module.css';

const BlogCard = ({ post }) => {
    const { image, title, subtitle, date, id } = post;

    return (
        <div className={classes.card}>
            <div className={classes['card__image']}>
                <LazyLoadImage src={image} alt={subtitle} width='282' height='208' />
            </div>
            <div className={classes['card__body']}>
                <time className={classes['card__body-date']}>{date}</time>
                <h4 className={classes['card__body-title']}>{title}</h4>
                <p className={classes['card__body-subtitle']}>{subtitle}</p>
                <Link to={id} className={classes['card__body-link']}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
