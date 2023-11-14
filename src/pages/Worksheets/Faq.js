import { useState } from 'react';
import { faqs } from '../../constant/faq';
import FaqItem from './FaqItem';

const Faq = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaqHandler = (index) => {
        if (activeFaq === index) {
            return setActiveFaq(null);
        }
        setActiveFaq(index);
    };

    return (
        <ul className='w-full'>
            {faqs.map((faq, i) => {
                return (
                    <FaqItem
                        key={faq.id}
                        index={i}
                        faq={faq}
                        activeFaq={activeFaq}
                        onToggleFaq={toggleFaqHandler}
                    />
                );
            })}
        </ul>
    );
};

export default Faq;
