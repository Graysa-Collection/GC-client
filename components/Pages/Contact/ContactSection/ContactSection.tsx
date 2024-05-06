import { ContactForm } from '@/components/Form';
import style from './contactSection.module.scss';
import { SocialMedia } from '@/components/SocialMedia';
const {
    contactSection,
    heading,
    inquiryContainer,
    formContainer,
    contactContainer,
    email,
    number,
    address,
    headingContainer
} = style;

const ContactSection = () => {
    return(
        <section className={contactSection}>
            <div className={headingContainer}>
                <h1 className={heading}>Contact us</h1>
            </div>
            <div className={inquiryContainer}>
                <h2 className={heading}>online inquiry</h2>
                <div className={formContainer}>
                    <ContactForm/>
                </div>
            </div>
            <div className={contactContainer}>
                <h2 className={heading}>contact info</h2>
                <p className={email}>
                    <span>EMAIL ADDRESS</span>
                    <span>EMAIL ADDRESS</span>
                </p>
                <p className={number}>
                    <span>CONTACT NUMBER 1</span>
                    <span>CONTACT NUMBER 2</span>
                </p>
                <p className={address}>
                    <span>FULL ADDRESS</span>
                    <span>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book.
                    </span>
                </p>
                <SocialMedia/>
            </div>
        </section>
    );
};

export default ContactSection;
