// react
import {useEffect, useState} from 'react';

// next components

// custom components
import {LayoutTitleBase} from '../components/layout';
import PageTitle from '../components/pageTitle';
import MemberItem from '../components/memberItem';

// styles
import styles from '../styles/member.module.scss';

// fetch data from contentful
const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export const getServerSideProps = async () => {
    const member = await client.getEntries({content_type: 'member'});
    return {
        props: {
            member
        }
    }
};

const Member = ({member}) => {
    return (
        <LayoutTitleBase title="Member">
            <main className={`mw ${styles.member}`}>
                <PageTitle>MEMBER</PageTitle>
                <p className={styles.exp}>
                    OFF LABELのメンバー情報です。
                </p>
                <div className={styles.cont}>
                    {member.items.length > 0 ?
                        member.items.map(item =>
                        <MemberItem key={item.sys.id} fields={item.fields} />
                    ) : null}
                </div>
            </main>
        </LayoutTitleBase>
    )
};

export default Member;