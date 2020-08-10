// react
import {useEffect, useState} from 'react';

// next components

// custom components
import {LayoutTitleBase} from '../components/layout';
import PageTitle from '../components/pageTitle';

// styles
import styles from '../styles/contact.module.scss';


const Contact = () => {
    // contact type : 'magazine' or 'inquiry'
    const [contactType, setContactType] = useState('magazine');

    return (
        <LayoutTitleBase title="Contact">
            <main className={`mw ${styles.contact}`}>
                <PageTitle>Contact</PageTitle>

                <p className={styles.exp}>お問い合わせ、メールマガジンはこちらから。</p>

                <div className={styles.select}>

                </div>

                <div className={styles.line}></div>

                <form className={styles.form}>

                </form>
            </main>
        </LayoutTitleBase>
    )
};

export default Contact;