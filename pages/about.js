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
                <div className={styles.about_catch}><Catch>「学問・研究」をよりカジュアルに、<br />日常をよりよく生きるための糧に</Catch></div>
                <p className={styles.exp}>
                    OFF LABELは学問や研究の力を通じて、人々や組織、国や地域に貼られた、様々な負の「ラベル」を取り払ってゆくことを目的としています。<br /><br />
                    私たちは、アカデミックと現実世界が乖離してしまっている今、カジュアルな形で「学問」の楽しさを広め、研究を社会に発信していきたいと考えています。<br /><br />
                    また伝えるだけではなく、学問や研究を通じて、共に考える場を形成していきたいと思っています。<br /><br />
                    「学問」や「研究」が、人々が日常生活で直面する課題を解決するきっかけや武器になることが十分にあるのではないでしょうか。<br /><br />
                    そうすることで現状社会を取り巻く課題、研究者を取り巻く問題を解決するきっかけになると私たちは考えています。<br /><br />
                    今後OFF LABELは、市民参加型イベントなどの継続的な実施を通じて、多文化共生社会構築に寄与していきます。<br /><br />
                    OFF LABELは東京大学大学院博士課程教育リーディングプログラム、多文化共生・統合人間学プログラム（通称：IHS) 生が設立した団体です。
                </p>
                <Banner 
                    title="Reach Us"
                    exp="OFF LABELに参加したい方も常時募集しています。 参加希望の方はお問い合わせよりご連絡ください。"
                />
            </main>
        </LayoutTitleBase>
    )
};

export default About;