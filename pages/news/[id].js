// react
import {useEffect, useState} from 'react';

// next components
import Link from 'next/link';

// custom components
import {LayoutTitleBase} from '../../components/layout';
import PageTitle from '../../components/pageTitle';
import {BlogSecTitle, BlogKeySentence, BlogFeelSentence, BlogWriter} from '../../components/parts';


// styles
import styles from '../../styles/news.module.scss';

// contentful text format
import {BLOCKS, MARKS} from '@contentful/rich-text-types';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { RoundButton } from '../../components/buttons';

const documentOption = {
    renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => <BlogSecTitle>{children}</BlogSecTitle>,
        [BLOCKS.QUOTE]: (node, children) => <BlogKeySentence>{children}</BlogKeySentence>,
        [BLOCKS.EMBEDDED_ASSET]: (node) => <img src={node.data.target.fields.file.url} />
    }
};

// fetch data from contentful
const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

// Dynamic Routes
export const getStaticPaths = async () => {
    const allNews = await client.getEntries({content_type: 'news'});
    const allPath = allNews.items.map(news => {
        return {
            params: {
                id: news.sys.id
            }
        }
    });

    return {
        paths: allPath,
        fallback: false
    }
};

export const getStaticProps = async ({params}) => {
    const news = await client.getEntries({content_type: 'news', 'sys.id': params.id});
    return {
        props: {
            news
        }
    }
};

const SingleNews = ({news}) => {
    useEffect(() => {
        console.log(news);
    }, []);
    return (
        <LayoutTitleBase title="News">
            <main className={`mw ${styles.new}`}>
                <PageTitle>News</PageTitle>
                <section className={styles.new_hero}>
                    <img src={news.items[0].fields.thumbnail.fields.file.url} className={styles.new_hero_img} />
                    <div className={styles.new_hero_info}>
                        <h3 className={styles.new_hero_title}>{news.items[0].fields.title}</h3>
                        <p className={styles.new_hero_date}>{news.items[0].fields.date}</p>
                    </div>
                </section>

                <section className={styles.new_main}>
                    {documentToReactComponents(news.items[0].fields.body, documentOption)}
                    <BlogFeelSentence>Writer : {news.items[0].fields.writer}</BlogFeelSentence>
                </section>

                <section className={styles.new_footer}>
                    <Link href="/news/"><a><RoundButton>Back</RoundButton></a></Link>
                </section>

            </main>
        </LayoutTitleBase>
    )
};

export default SingleNews;