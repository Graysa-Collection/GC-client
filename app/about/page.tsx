import Link from 'next/link';
import style from './about.module.scss';

const { about } = style;

const About = () => {
    return(
        <div className={about}>
            <h1>Graysa Collection About Page</h1>
            <p><Link href="/">Home</Link></p>
        </div>
    );
};

export default About;
