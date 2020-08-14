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

                <form className={`formrun ${styles.form}`} action="https://form.run/api/v1/r/f893spkylf3x652omsshsamc" method="post">
                    <p className={styles.form_txt}>
                        <p><label>お名前</label></p>
                        <input name="お名前" type="text" />
                    </p>

                    <p className={styles.form_txt}>
                        <p><label>メールアドレス</label></p>
                        <input name="お名前" type="text" data-formrun-type="email" data-formrun-required />
                    </p>

                    <p className={styles.form_txt}>
                        <p><label>ご所属</label></p>
                        <input name="ご所属" type="text" />
                    </p>

                    <p className={styles.form_radio}>
                        <label></label>
                    </p>

                    <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中">送信</button>
                </form>
            </main>
        </LayoutTitleBase>
    )
};

export default Contact;