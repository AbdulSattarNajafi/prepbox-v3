import { useRef } from 'react';
import classes from './FaqItem.module.css';

const FaqItem = ({ index, faq, activeFaq, onToggleFaq }) => {
    const contentRef = useRef(null);

    return (
        <li className={classes.item}>
            <button type='button' className={classes.btn} onClick={() => onToggleFaq(index)}>
                <h4>{faq.question}</h4>
                <span
                    className={`${classes.icon} ${activeFaq === index ? `${classes.rotate}` : ''}`}
                >
                    <span className={classes.iconVertival}></span>
                    <span className={classes.iconHorizontal}></span>
                </span>
            </button>

            <div
                ref={contentRef}
                style={{
                    maxHeight:
                        activeFaq === index ? `${contentRef?.current?.scrollHeight}px` : null,
                }}
                className={`${classes.content} ${activeFaq === index ? `${classes.show}` : ''}`}
            >
                <div className={classes.contentInner}>
                    {faq.answers.map((answer, index) => {
                        return <p key={index}>{answer}</p>;
                    })}
                </div>
            </div>
        </li>
    );
};

export default FaqItem;
