import ContentTypeOne from '../ContentTypeOne/ContentTypeOne';
import ContentTypeTwo from '../ContentTypeTwo/ContentTypeTwo';
import style from './contentSection.module.scss';

const {
    contentSection,
    bgContainer,
    colorPink,
    colorGreen,
    colorYellow,
    contentContainer
} = style;

const ContentSection = () => {
    return(
        <section className={contentSection}>
            <div className={bgContainer}>
                <div className={colorPink}/>
                <div className={colorGreen}/>
                <div className={colorYellow}/>
            </div>
            <div className={contentContainer}>
                <ContentTypeOne/>
                <ContentTypeTwo imageFor='beauty' title='BEAUTY & CARE' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." reverse/>
                <ContentTypeTwo imageFor='book' title='books' desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            </div>
        </section>
    );
};

export default ContentSection;
