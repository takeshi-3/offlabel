// react
import {useEffect, useState, useRef} from 'react';

// next components
import Link from 'next/link';
import NewsItem from '../components/newsItem';
import PageTitle from '../components/pageTitle';
import EventItem from '../components/eventItem';
import LibraryItem from '../components/libraryItem';
import Banner from '../components/banner';
import {RoundButton} from '../components/buttons';
import {Catch} from '../components/parts.js';
import {InViewFade, InViewRotate} from '../components/inView';

// custom components
import {LayoutNormal} from '../components/layout';

// style
import styles from '../styles/home.module.scss';

// animation
import {useSpring, animated, config, useChain, useTransition} from 'react-spring';
import {useInView} from 'react-intersection-observer';

const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export const getServerSideProps = async () => {
    const news = await client.getEntries({content_type: 'news', limit: 6, order: '-fields.date' });
    const library = await client.getEntries({content_type: 'library', limit: 2, order: 'sys.createdAt'});
    const events = await client.getEntries({content_type: 'event', limit: 3, order: '-fields.date'});
    const members = await client.getEntries({content_type: 'member', limit: 12});
    return {
        props: {
            news,
            library,
            events,
            members
        }
    }
};

const SectionNews = ({news}) => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const titleRef = useRef();
    const titleSpring = useSpring({
        ref: titleRef,
        to: {opacity: inView ? 1 : 0, transform: inView ? 'rotateX(0)' : 'rotateX(180deg)'},
        config: config.slow
    });

    const textRef = useRef();
    const textSpring = useSpring({
        ref: textRef,
        to: {opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(50px)'},
        config: config.slow
    });

    const itemRef = useRef();
    const itemSpring = useTransition(inView ? news.items : [], item => item.sys.id, {
        ref: itemRef,
        unique: true,
        trail: 400 / news.items.length,
        from: {opacity: 0, transform: 'scale(0)'},
        enter: {opacity: 1, transform: 'scale(1)'},
    });

    useChain([titleRef, itemRef], [0, 0.6]);

    return (
        <div className={styles.news} ref={ref}>
            <div className="mw">
                <animated.div style={titleSpring}><PageTitle>News</PageTitle></animated.div>
                <animated.div className={styles.news_exp} style={textSpring}>
                    <p>OFF LABELの活動に関連する<span>最新情報をお届けします。</span></p>
                </animated.div>
                <div className={styles.news_cont}>
                    {news.items.length > 0
                        ? itemSpring.map(({item, key, props}) => (
                            <NewsItem fields={item.fields} key={key} id={item.sys.id} animProps={props}/>
                        )) : null}
                </div>
                <RoundButton>More</RoundButton>
            </div>
        </div>
    );
};

const Home = ({news, library, events, members}) => {

    // Hero animation
    const logoRef = useRef();
    const logoSpring = useSpring({
        ref: logoRef,
        from: {opacity: 0, transform: 'translateY(50px)'},
        to: {opacity: 1, transform: 'translateY(0px)'},
        delay: 700,
        config: config.gentle
    });


    const messageRef = useRef();
    const messageSpring = useSpring({
        ref: messageRef,
        from: {opacity: 0, transform: 'translateY(50px)'},
        to: {opacity: 1, transform: 'translateY(0px)'},
        delay: 700,
        config: config.gentle
    });

    const offlabelRef = useRef();
    const offlabelSpring = useSpring({
        ref: offlabelRef,
        from: {opacity: 0, transform: 'translateY(-30px)'},
        to: {opacity: 1, transform: 'translateY(0px)'},
        delay: 700,
        config: config.gentle
    });

    useChain([logoRef, messageRef, offlabelRef], [0, 0.4, 1.2]);

    return (
        <LayoutNormal title="Home">
            <section className={styles.hero}>
                <div className={styles.hero_cent}>
                    <animated.div style={logoSpring}>
                        <img src="/images/hero/logo.jpg" className={styles.hero_logo} />
                    </animated.div>
                    <animated.div style={messageSpring}>
                        <div className={styles.hero_message}>
                            <p><span>おしゃれ</span>で<span>カジュアル</span>な</p>
                            <p>学問への入り口</p>
                        </div>
                    </animated.div>
                </div>
                <div className={styles.hero_profs}>
                    <img src="/images/hero/prof1.svg" className={styles.hero_profs_img} />
                    <img src="/images/hero/prof2.svg" className={styles.hero_profs_img} />
                    <img src="/images/hero/prof3.svg" className={styles.hero_profs_img}/>
                    <img src="/images/hero/prof4.svg" className={styles.hero_profs_img}/>
                </div>
                <animated.div style={offlabelSpring}><img src="/images/hero/offlabel.svg" className={styles.hero_offlabel} /></animated.div>
            </section>

            
            <section className={styles.oshare}>
                <div className="mw">
                <InViewFade>
                    <img className={styles.oshare_logo} src="/images/oshareLogo.png" />
                    
                    <h3 className={styles.oshare_exp}>
                        新しい知識や考え方に触れたときの<span>ワクワクをプロデュース。</span><br />
                        学問や研究を日常と繋げ、<span>シェアするプラットフォーム。</span>
                    </h3>
                    <p className={styles.oshare_abstract}>
                        O!SHARE Academyは、ポップでカジュアルな切り口から学問や研究に関する情報を皆さんにお届けします。
                        「学問」「研究」と聞くと、即座に「難しいもの」「私には関係ない」と思ってしまう方も多いかもしれません。
                        しかしながら、学問や研究を通じて、人々が日常で抱えている問題や悩みを解決したり、
                        完全に解決することは難しくても状況を少しでも良くすることが出来ると私たちは考えています。
                    </p>
                </InViewFade>
                <InViewFade>
                    <h4 className={styles.oshare_cont}>▼ CONTENTS</h4>
                    <div className={styles.oshare_links}>
                        <Link href="/library"><div className={`${styles.oshare_link} ${styles.oshare_link_library}`}>
                            <div className={styles.oshare_link_back}>
                                <h3>Human / Research Library</h3>
                                <p>Human/Research Library では多種多様な「問い」と共に、生きてきた「研究者・研究家」のライフストーリーをフィーチャーします。</p>
                            </div>
                        </div></Link>
                        <Link href="/ronbun"><div className={`${styles.oshare_link} ${styles.oshare_link_ronbun}`}>
                            <div className={styles.oshare_link_back}>
                                <h3>100人論文</h3>
                                <p>あなたはどんな研究をしていますか？ 現役の研究者が、自分の研究を分かりやすく紹介します。</p>
                            </div>
                        </div></Link>
                    </div>
                </InViewFade>
                    {/* <p className={`${styles.oshare_abstract} ${styles.oshare_abstract_2}`}>
                        O!SHARE Academyでは、1人では考えきれない問題や課題を探求するためのツールや情報を提供し、
                        研究とつなげることによって、何となく疑問に思っていることをより深めるための交流の場を作っていきます。
                        例えば普段とは少し異なる切り口を通じて共有し、新たな思考を生み出して行動のきっかけになるような情報をシェアしていきます。
                        情報過多な現代を生きるには、何が正しく、何が間違っているのか、自分の力で情報を吟味し判断するリテラシー能力が必要です。
                        それには、教養や知識も必要です。
                        また自分の「問い」を深め、大切に育てる必要もあります。
                        自分の興味・関心がどのように「問い」に昇華され、探求し、研究し、共有されているのかを、
                        「研究」を行う人にフォーカスをあて発信する場も創造していきます。
                    </p>
                    <div className={styles.oshare_featured}>
                        <img src='/images/oshareFace.png' />
                        <h4>Featured Topic</h4>
                        <p></p>
                    </div>

                    <div className={styles.oshare_article}>
                        {library.items.length > 0
                        ? library.items.map(lib =>
                            <LibraryItem fields={lib.fields} key={lib.sys.id} id={lib.sys.id} />) : null}
                    </div> */}
                </div>
                
                <div className={styles.oshare_path}>
                <InViewFade>
                    <p className={styles.oshare_path_txt}>OFF LABELとは？</p>
                    <p className={styles.oshare_path_line}></p>
                </InViewFade>
                </div>
            </section>

            <section className={styles.about}>
                <div className="mw">
                <InViewFade>
                    <img className={styles.about_logo} src="/images/logo.svg" />
                    <div className={styles.about_catch}><Catch>「学問・研究」をよりカジュアルに、<br />日常をよりよく生きるための糧に。</Catch></div>
                </InViewFade>
                    <InViewFade><p className={styles.about_exp}>
                        私たちは、アカデミックと現実世界が乖離してしまっている今、<br />
                        カジュアルな形で「学問」の楽しさを広め、<br />
                        研究を社会に発信していきたいと考えています。<br />
                        また伝えるだけではなく、学問や研究を通じて、<br />
                        共に考える場を形成していきたいと思っています。
                    </p></InViewFade>
                    <InViewFade><p className={styles.about_exp}>
                        そうすることで現状社会を取り巻く課題、<br />研究者を取り巻く問題を解決するきっかけになると私たちは考えています。
                    </p></InViewFade>
                    <InViewFade><p className={styles.about_exp}>
                        OFF LABELという団体名には学問や研究の力を通じて、<br />
                        人々や組織、国や地域に貼られた、<br />様々な負の「ラベル」を取り払っていくという想いが込められています。
                    </p></InViewFade>
                    <InViewFade>
                        <Link href="/about"><a><button className={styles.about_btn}>About OFF LABEL</button></a></Link>
                    </InViewFade>
                </div>
            </section>

            <SectionNews news={news} />

            <section className={styles.events}>
                <div className="mw">
                    <InViewRotate><PageTitle>Event</PageTitle></InViewRotate>
                    <InViewFade><p className={styles.events_exp}>
                        OFF LABEL主催・共催のイベントをお届けします。
                    </p></InViewFade>
                    <div className={styles.events_cont}>
                        {events.items.length > 0
                            ? events.items.map(event => (
                            <InViewFade><EventItem fields={event.fields} key={event.sys.id} /></InViewFade>
                        )) : null}
                    </div>
                    {/* <RoundButton>More</RoundButton> */}
                </div>
            </section>

            <section className={styles.members}>
                <div className="mw">
                    <InViewRotate><PageTitle>Member</PageTitle></InViewRotate>
                    <InViewFade>
                    <p className={styles.members_exp}>
                        OFF LABELの研究色豊かなメンバーを紹介します。
                    </p>
                    <h1 className={styles.events_coming}>Coming Soon!</h1>
                    </InViewFade>
                    {/* <div className={styles.members_cont}>
                        {members.items.length > 0 
                            ? members.items.map(member => (
                                <div className={styles.members_thumb} key={member.sys.id}><img src={member.fields.thumbnail.fields.file.url} /></div>
                            )) : null}
                    </div>
                    <RoundButton>More</RoundButton> */}
                </div>
            </section>

            <section className={styles.reach}>
                <div className="mw">
                <InViewFade>
                    <Banner 
                        title="Reach Us"
                        exp="OFF LABELへの質問、メールはこちらから"
                    />
                </InViewFade>
                </div>
            </section>
        </LayoutNormal>
    )
};

export default Home;