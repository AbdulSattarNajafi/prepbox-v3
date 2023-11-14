import classes from './hero.module.css';

const WorksheetGenerator = () => {
    const book = require('../../utils/fullbook.json');
    return (
        <div className={classes.section}>
            <div className={classes.header}>
                <h1>{book.name}</h1>
                <div>
                    {book.chapters.map((chapter) => {
                        return (
                            <div>
                                <div>{chapter.name}</div>
                                <div>
                                    {chapter.materials.map((material) => {
                                        return (
                                            <div>
                                                {material.questions.map((question) => {
                                                    return <div>{question.question_html}</div>;
                                                })}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WorksheetGenerator;
