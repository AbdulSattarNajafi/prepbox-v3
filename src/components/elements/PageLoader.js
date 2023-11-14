import Loader from './loader';
import classes from './PageLoader.module.css';

const PageLoader = () => {
    return (
        <div className={classes.pageloader}>
            <Loader />
        </div>
    );
};

export default PageLoader;
