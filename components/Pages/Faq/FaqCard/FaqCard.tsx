'use client';

import { useState } from 'react';

import style from './faqCard.module.scss';
const {
    faqCard,
    questionContainer,
    ques,
    ansContainer,
    line,
    activeDropdown,
    ans,
    btnActive,
    lineOne,
    lineTwo,
    activeContent,
    rotateLine
} = style;

const FaqCard = () => {
    const [isActive, setIsActive] = useState(false);

    const handleDropdown = () => {
        setIsActive(!isActive)
    }

    return(
        <div className={faqCard}>
            <div className={questionContainer} onClick={handleDropdown}>
                <h2 className={ques}>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                </h2>
                <button className={btnActive}>
                    <span className={lineOne}/>
                    <span className={isActive ? `${lineTwo} ${rotateLine}` : lineTwo}/>
                </button>
            </div>
            <div className={isActive ? `${ansContainer} ${activeDropdown}` : ansContainer}>
                <span className={isActive ? `${line} ${activeContent}` : line}/>
                <p className={isActive ? `${ans} ${activeContent}` : ans}>Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised
                    in the 1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    );
};

export default FaqCard;
