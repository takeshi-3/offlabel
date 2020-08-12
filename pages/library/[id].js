// react
import {useEffect, useState} from 'react';

// next components
import Link from 'next/link';

// custom components
import {LayoutNormal} from '../../components/layout';
import {BlogSecTitle, BlogKeySentence, BlogFeelSentence, BlogWriter, BlogOverview} from '../../components/parts';
import {RoundButton} from '../../components/buttons';

// styles
import styles from '../../styles/library.module.scss';

// contentful text format
import {BLOCKS, MARKS} from '@contentful/rich-text-types';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const documentOption = {
    renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => <BlogSecTitle>{children}</BlogSecTitle>,
        [BLOCKS.QUOTE]: (node, children) => <BlogKeySentence>{children}</BlogKeySentence>
    }
};

// fetch data from contentful
const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

// Dynamic Routes
export const getStaticPaths = async () => {
    const allLibs = await client.getEntries({content_type: 'library'});
    const allPath = allLibs.items.map(lib => {
        return {
            params: {
                id: lib.sys.id
            }
        }
    });

    return {
        paths: allPath,
        fallback: false
    }
};

export const getStaticProps = async ({params}) => {
    const library = await client.getEntries({content_type: 'library', 'sys.id': params.id});
    return {
        props: {
            library
        }
    }
};

const SingleLibrary = ({library}) => {
    useEffect(() => {
        console.log(library);
    }, []);
    return (
        <LayoutNormal title={library.items[0].fields.title}>
            <main className={styles.lib}>
                <section
                    className={styles.lib_hero}
                    style={{backgroundImage: `url(${library.items[0].fields.thumbnail.fields.file.url})`}}>
                    <div className={styles.lib_hero_wrap}>
                        <div className={styles.lib_hero_exp}>
                            <h2 className={styles.lib_hero_title}>{library.items[0].fields.title}</h2>
                            <p className={styles.lib_hero_info}>
                                {library.items[0].fields.affiliation}　|　
                                {library.items[0].fields.name}
                            </p>
                            <h3 className={styles.lib_hero_tag}># {library.items[0].fields.tag.fields.name}</h3>
                        </div>
                    </div>
                </section>

                <section className={styles.lib_main}>
                    <div className={styles.lib_main_overview}>
                        <BlogOverview>{library.items[0].fields.overview}</BlogOverview>
                    </div>

                    <div className={styles.lib_main_body}>
                        {documentToReactComponents(library.items[0].fields.body, documentOption)}
                        <BlogFeelSentence>Writer : {library.items[0].fields.writer}</BlogFeelSentence>
                    </div>

                    <Link href='/library/'><a><RoundButton>Back</RoundButton></a></Link>
                </section>
            </main>
        </LayoutNormal>
    )
};

export default SingleLibrary;