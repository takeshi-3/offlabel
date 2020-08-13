// react
import {useEffect, useState} from 'react';

// next components

// custom components
import {LayoutTitleBase} from '../components/layout';
import PageTitle from '../components/pageTitle';
import EventItem from '../components/eventItem';

// styles
import styles from '../styles/event.module.scss';

const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export const getServerSideProps = async () => {
    const event = await client.getEntries({content_type: 'event'});
    return {
        props: {
            event
        }
    }
};

const Event = ({event}) => {
    return (
        <LayoutTitleBase title="Event">
            <main className={`mw ${styles.event}`}>
                <PageTitle>EVENTS</PageTitle>
                <p className={styles.exp}>
                    OFF LABEL 主催のイベント情報です！
                </p>
                <div className={styles.cont}>
                    {event.items.length > 0 ?
                        event.items.map(item => 
                        <EventItem key={item.sys.id} fields={item.fields} /> 
                    ) : null}
                </div>
            </main>
        </LayoutTitleBase>
    )
};

export default Event;