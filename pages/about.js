// react
import {useEffect, useState} from 'react';

// next components

// custom components
import {LayoutTitleBase} from '../components/layout';
import PageTitle from '../components/pageTitle';
import {Catch} from '../components/parts.js';
import Banner from '../components/banner';

// styles
import styles from '../styles/about.module.scss';

const About = () => {
    return (
        <LayoutTitleBase title="About">
            <main className={`mw ${styles.about}`}>
                <PageTitle>About</PageTitle>
                <div className={styles.about_catch}><Catch>「学問・研究」をよりカジュアルに、<br />日常をよりよく生きるための糧に。</Catch></div>
                <p className={styles.exp}>
                    私たちは、アカデミックと現実世界が乖離してしまっている今、<br />
                    カジュアルな形で「学問」の楽しさを広め、<br />
                    研究を社会に発信していきたいと考えています。<br />
                    また伝えるだけではなく、学問や研究を通じて、<br />
                    共に考える場を形成していきたいと思っています。<br /><br />
                    そうすることで現状社会を取り巻く課題、<br />研究者を取り巻く問題を解決するきっかけになると私たちは考えています。<br /><br />
                    OFF LABELという団体名には学問や研究の力を通じて、<br />
                    人々や組織、国や地域に貼られた、<br />様々な負の「ラベル」を取り払っていくという想いが込められています。
                </p>
                <Banner 
                    title="Reach Us"
                    exp="OFF LABELへの質問、メールはこちらから"
                />
            </main>
        </LayoutTitleBase>
    )
};

export default About;