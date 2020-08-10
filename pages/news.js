// react
import {useEffect, useState} from 'react';

// next components

// custom components
import {LayoutTitleBase} from '../components/layout';
import PageTitle from '../components/pageTitle';
import NewsItem from '../components/newsItem';

// styles
import styles from '../styles/news.module.scss';

// fetch data from contentful
const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export const getStaticProps = async () => {
    const news = await client.getEntries({content_type: 'news'});
    return {
        props: {
            news
        }
    }
};

const News = ({news}) => {
    useEffect(() => {
        console.log(news);
    }, []);
    return (
        <LayoutTitleBase title="News">
            <main className={`${styles.news} mw`}>
                <PageTitle>NEWS</PageTitle>
                <p className={styles.exp}>
                    OFF LABELメンバーは各自のフィールドで研究を続けながらも、<br />
                    常にアウトリーチ活動としてOFF LABELの活動にも取り組んでいます。<br /><br />
                    ここではOFF LABELの最近の活動を見ることができます。
                </p>
                <div className={styles.cont}>
                    {news.items.length > 0 ?
                        news.items.map(item => 
                            <NewsItem key={item.sys.id} fields={item.fields} />
                    ) : null}
                </div>
            </main>
        </LayoutTitleBase>
    )
};

export default News;