// react
import {useEffect, useState} from 'react';

// next components

// custom components
import {LayoutNormal} from '../../components/layout';
import {AcademyHero} from '../../components/parts';
import PageTitle from '../../components/pageTitle';
import {RoundTag, RoundButton} from '../../components/buttons';
import LibraryItem from '../../components/libraryItem';

// styles
import styles from '../../styles/library.module.scss';


// fetch data from contentful
const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export const getServerSideProps = async () => {
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
            <AcademyHero image={"/images/libraryBack.jpg"} />

            <main className={`mw ${styles.library}`}>
                <div className={styles.title}><PageTitle>Human / Research Library</PageTitle></div>

                <section className={styles.exp}>
                    <p>
                        O!SHARE Academyでは、1人では考えきれない問題や課題を探求するためのツールや情報を提供し、 
                        研究とつなげることによって、何となく疑問に思っていることをより深めるための交流の場を作っていきます。 
                        例えば普段とは少し異なる切り口を通じて共有し、新たな思考を生み出して行動のきっかけになるような情報をシェアしていきます。 
                        情報過多な現代を生きるには、何が正しく、何が間違っているのか、自分の力で情報を吟味し判断するリテラシー能力が必要です。 
                        それには、教養や知識も必要です。 また自分の「問い」を深め、大切に育てる必要もあります。 自分の興味・関心がどのように「問い」に昇華され、
                        探求し、研究し、共有されているのかを、「研究」を行う人にフォーカスをあて発信する場も創造していきます。
                    </p>
                </section>

                {/* <section className={styles.tags}>
                    {tags.items.length > 0 ?
                        tags.items.map(item =>
                        <RoundTag>{item.fields.name}</RoundTag>
                    ) : null}
                </section> */}

                <section className={styles.cont}>
                    {library.items.length > 0 ?
                        library.items.map(item => 
                        <LibraryItem key={item.sys.id} fields={item.fields} id={item.sys.id} />
                    ) : null}
                </section>

                {/* <RoundButton>More</RoundButton> */}
            </main>
        </LayoutNormal>
    )
};

export default Library;