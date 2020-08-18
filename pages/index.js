// react
import {useEffect, useState} from 'react';

// next components
import Link from 'next/link';
import NewsItem from '../components/newsItem';
import PageTitle from '../components/pageTitle';
import EventItem from '../components/eventItem';
import LibraryItem from '../components/libraryItem';
import Banner from '../components/banner';
import {RoundButton} from '../components/buttons';
import {Catch} from '../components/parts.js';

// custom components
import {LayoutNormal} from '../components/layout';

// style
import styles from '../styles/home.module.scss';

// framer-motion
import {motion} from 'framer-motion';
import { CSSTransition } from 'react-transition-group';

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

const Home = ({news, library, events, members}) => {
    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true);
    }, []);

    return (
        <LayoutNormal title="Home">
            <section className={styles.hero}>
                <CSSTransition in={inProp} timeout={2000} classNames={{
                    enter: styles.heroCentEnter,
                    enterActive: styles.heroCentEnterActive,
                }}><div className={styles.hero_cent}>
                    <img src="/images/hero/logo.jpg" className={styles.hero_logo} />
                    <div className={styles.hero_message}>
                        <p><span>おしゃれ</span>で<span>カジュアル</span>な</p>
                        <p>学問への入り口</p>
                    </div>
                </div></CSSTransition>
                <div className={styles.hero_profs}>
                    <img src="/images/hero/prof1.svg" className={styles.hero_profs_img} />
                    <img src="/images/hero/prof2.svg" className={styles.hero_profs_img} />
                    <img src="/images/hero/prof3.svg" className={styles.hero_profs_img}/>
                    <img src="/images/hero/prof4.svg" className={styles.hero_profs_img}/>
                </div>
                <img src="/images/hero/offlabel.svg" className={styles.hero_offlabel} />
            </section>

            <section className={styles.oshare}>
                <div className="mw">
                    <img className={styles.oshare_logo} src="/images/oshareLogo.png" />
                    <h3 className={styles.oshare_exp}>
                        新しい知識や考え方に触れたときのワクワクをプロデュース。<br />
                        学問や研究を日常と繋げ、シェアするプラットフォーム。
                    </h3>
                    <p className={styles.oshare_abstract}>
                        O!SHARE Academyは、ポップでカジュアルな切り口から学問や研究に関する情報を皆さんにお届けします。
                        「学問」「研究」と聞くと、即座に「難しいもの」「私には関係ない」と思ってしまう方も多いかもしれません。
                        しかしながら、学問や研究を通じて、人々が日常で抱えている問題や悩みを解決したり、
                        完全に解決することは難しくても状況を少しでも良くすることが出来ると私たちは考えています。
                    </p>
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
                    <p className={`${styles.oshare_abstract} ${styles.oshare_abstract_2}`}>
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
                    </div>
                </div>

                <div className={styles.oshare_path}>
                    <p className={styles.oshare_path_txt}>Produce by OFF LABEL</p>
                    <p className={styles.oshare_path_line}></p>
                </div>
            </section>

            <section className={styles.about}>
                <div className="mw">
                    <Catch>「学問・研究」をよりカジュアルに、<br />日常をよりよく生きるための糧に。</Catch>
                    <p className={styles.about_exp}>
                        私たちは、アカデミックと現実世界が乖離してしまっている今、<br />
                        カジュアルな形で「学問」の楽しさを広め、<br />
                        研究を社会に発信していきたいと考えています。<br />
                        また伝えるだけではなく、学問や研究を通じて、<br />
                        共に考える場を形成していきたいと思っています。<br /><br />
                        そうすることで現状社会を取り巻く課題、<br />研究者を取り巻く問題を解決するきっかけになると私たちは考えています。<br /><br />
                        OFF LABELという団体名には学問や研究の力を通じて、<br />
                        人々や組織、国や地域に貼られた、<br />様々な負の「ラベル」を取り払っていくという想いが込められています。
                    </p>
                    <img className={styles.about_logo} src="/images/logo.svg" />
                    <Link href="/about"><a><button className={styles.about_btn}>About OFF LABEL →</button></a></Link>
                </div>
            </section>

            <section className={styles.news}>
                <div className="mw">
                    <PageTitle>News</PageTitle>
                    <p className={styles.news_exp}>
                        OFF LABELの活動に関連する最新情報をお届けします。
                    </p>
                    <div className={styles.news_cont}>
                        {news.items.length > 0
                            ? news.items.map(item => (
                                <NewsItem key={item.sys.id} fields={item.fields} id={item.sys.id} />
                            )) : null}
                    </div>
                    <RoundButton>More</RoundButton>
                </div>
            </section>

            <section className={styles.events}>
                <div className="mw">
                    <PageTitle>Event</PageTitle>
                    <p className={styles.events_exp}>
                        OFF LABEL主催・共催のイベントをお届けします。
                    </p>
                    <div className={styles.events_cont}>
                        {events.items.length > 0
                            ? events.items.map(event => (
                            <EventItem fields={event.fields} key={event.sys.id} />
                        )) : null}
                    </div>
                    {/* <RoundButton>More</RoundButton> */}
                </div>
            </section>

            <section className={styles.members}>
                <div className="mw">
                    <PageTitle>Member</PageTitle>
                    <p className={styles.members_exp}>
                        OFF LABELの研究色豊かなメンバーを紹介します。
                    </p>
                    <h1 className={styles.events_coming}>Coming Soon!</h1>
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
                    <Banner 
                        title="Reach Us"
                        exp="OFF LABELへの質問、メールはこちらから"
                    />
                </div>
            </section>
        </LayoutNormal>
    )
};

export default Home;