// react
import {useEffect, useState} from 'react';

// next components

// custom components
import {LayoutNormal} from '../components/layout';
import {AcademyHero} from '../components/parts';
import PageTitle from '../components/pageTitle';
import {RoundTag, RoundButton} from '../components/buttons';
import LibraryItem from '../components/libraryItem';

// styles
import styles from '../styles/library.module.scss';


// fetch data from contentful
const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export const getStaticProps = async () => {
    const library = await client.getEntries({content_type: 'library'});
    const tags = await client.getEntries({content_type: 'libraryTag'});
    return {
        props: {
            library,
            tags
        }
    }
};

const Library = ({library, tags}) => {
    return (
        <LayoutNormal title="Human / Research Library">
            <AcademyHero image={"/images/ronbunBack.png"} />

            <main className={`mw ${styles.library}`}>
                <div className={styles.title}><PageTitle>Human / Research Library</PageTitle></div>

                <section className={styles.exp}>
                    <p>
                        １００人論文企画は、発案者である京都大学学際融合教育研究推進センターにアドバイスを受けながら研究のアウトリーチを目的として立ち上がった企画です。<br /><br />
                        皆さまが日頃取り組まれている研究内容やその社会的意義を掲示してただき、来場者や院生が、互いの研究や関心事を紹介しあって意見交換する場を提供することを目的としています。
                        OFF LABEL独自のコンテンツとしては、研究者自身がアカデミアとしての道を選んだ経緯も紹介しています。 研究を身近に捉え、自らが「考えること」「研究」の担い手になるきっかけ作りなることを願っています。<br /><br />
                        こちらの企画は自身研究のアウトリーチを行いたいと考えいている方は誰でも参加が可能なため、参加希望の場合は以下のリンクにて質問に回答の上、ご参加いただけます。
                    </p>
                </section>

                <section className={styles.tags}>
                    {tags.items.length > 0 ?
                        tags.items.map(item =>
                        <RoundTag>{item.fields.name}</RoundTag>
                    ) : null}
                </section>

                <section className={styles.cont}>
                    {library.items.length > 0 ?
                        library.items.map(item => 
                        <LibraryItem key={item.sys.id} fields={item.fields} />
                    ) : null}
                    <RoundButton>More</RoundButton>
                </section>
            </main>
        </LayoutNormal>
    )
};

export default Library;