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

const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export const getStaticProps = async () => {
    const news = await client.getEntries({content_type: 'news', limit: 6});
    const library = await client.getEntries({content_type: 'library', limit: 1});
    const events = await client.getEntries({content_type: 'event', limit: 3});
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
    useEffect(() => {
        console.log(members);
    }, []);
    return (
        <LayoutNormal title="Home">
            <section 
                className={styles.hero}>
                <img src="/images/hero.png" />
                <div className={styles.hero_path}>
                    <p className={styles.hero_path_txt}>OFF LABELとは？</p>
                    <p className={styles.hero_path_line}></p>
                </div>
            </section>

            <section className={styles.about}>
                <div className="mw">
                    <Catch>「学問・研究」をよりカジュアルに、<br />日常をよりよく生きるための糧に</Catch>
                    <p className={styles.about_exp}>
                        OFF LABELは学問や研究の力を通じて、<br />
                        人々や組織、国や地域に貼られた、<br />
                        様々な負の「ラベル」を取り払ってゆくことを目的として、<br />
                        東京大学大学院博士課程教育リーディングプログラム、<br />
                        多文化共生・統合人間学プログラム（通称：IHS) 生が設立した団体です。
                    </p>
                    <img className={styles.about_logo} src="/images/logo.svg" />
                    <Link href="/about"><a><button className={styles.about_btn}>About OFF LABEL →</button></a></Link>
                </div>
            </section>

            <section className={styles.oshare}>
                <div className="mw">
                    <img className={styles.oshare_logo} src="/images/oshareLogo.png" />
                    <h3 className={styles.oshare_exp}>
                        新しい知識を知り得たときの、<br />
                        ソワソワと血が騒ぐような感覚をシェアするプラットフォーム
                    </h3>
                    <h4 className={styles.oshare_cont}>▼ CONTENTS</h4>
                    <div className={styles.oshare_links}>
                        <Link href="/library"><div className={`${styles.oshare_link} ${styles.oshare_link_library}`}>
                            <div className={styles.oshare_link_back}>
                                <h3>Human / Research Library</h3>
                                <p>どうやって研究を始めるの？研究者ってどんな人たち？ その疑問に答えられるようなコンテンツを揃えています。</p>
                            </div>
                        </div></Link>
                        <Link href="/ronbun"><div className={`${styles.oshare_link} ${styles.oshare_link_ronbun}`}>
                            <div className={styles.oshare_link_back}>
                                <h3>100人論文</h3>
                                <p>あなたはどんな研究をしていますか？ 現役の研究者が、自分の研究を分かりやすく紹介します。</p>
                            </div>
                        </div></Link>
                    </div>
                    <div className={styles.oshare_featured}>
                        <img src='/images/oshareFace.png' />
                        <h4>Featured Topic</h4>
                        <p></p>
                    </div>
                    {library.items.length > 0
                    ? library.items.map(lib =>
                        <LibraryItem fields={lib.fields} key={lib.sys.id} id={lib.sys.id} />) : null}
                </div>
            </section>

            <section className={styles.news}>
                <div className="mw">
                    <PageTitle>News</PageTitle>
                    <p className={styles.news_exp}>
                        OFF LABELメンバーは各自のフィールドで研究を続けながらも、
                        常にアウトリーチ活動としてOFF LABELの活動にも取り組んでいます。
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
                    <div className={styles.events_cont}>
                        {events.items.length > 0
                            ? events.items.map(event => (
                            <EventItem fields={event.fields} key={event.sys.id} />
                        )) : null}
                    </div>
                    <RoundButton>More</RoundButton>
                </div>
            </section>

            <section className={styles.members}>
                <div className="mw">
                    <PageTitle>Member</PageTitle>
                    <div className={styles.members_cont}>
                        {members.items.length > 0 
                            ? members.items.map(member => (
                                <div className={styles.members_thumb} key={member.sys.id}><img src={member.fields.thumbnail.fields.file.url} /></div>
                            )) : null}
                    </div>
                    <RoundButton>More</RoundButton>
                </div>
            </section>

            <section className={styles.reach}>
                <div className="mw">
                    <Banner 
                        title="Reach Us"
                        exp="OFF LABELのイベント情報などが届くメールマガジンの登録、 イベント・活動内容に関するお問い合わせなどはこちらから"
                    />
                </div>
            </section>
        </LayoutNormal>
    )
};

export default Home;