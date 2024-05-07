import FaqCard from '../FaqCard/FaqCard';
import style from './faqSection.module.scss';
const {
    faqContainer,
    heading,
    faqList
} = style;

const FaqSection = () => {
    return(
        <section className={faqContainer}>
            <h1 className={heading}>FAQs</h1>
            <div className={faqList}>
                <FaqCard/>
                <FaqCard/>
                <FaqCard/>
            </div>
        </section>
    );
};

export default FaqSection;
