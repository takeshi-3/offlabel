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
                        <input name="name" type="text" />
                    </p>

                    <p className={styles.form_txt}>
                        <p><label>メールアドレス</label></p>
                        <input name="email" type="text" data-formrun-type="email" data-formrun-required />
                    </p>

                    <p className={styles.form_txt}>
                        <p><label>ご所属</label></p>
                        <input name="affiliation" type="text" />
                    </p>

                    <p className={styles.form_radio}>
                        <p><label>メールマガジンの登録</label></p>
                        <input type="radio" name="magazine" value="all" checked="checked" />全ての情報
                        <input type="radio" name="magazine" value="adequate" />適度な情報量
                        <input type="radio" name="magazine" value="important" />重要な情報のみ
                        <input type="radio" name="magazine" value="no" />登録しない
                    </p>

                    <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中">送信</button>
                </form>
            </main>
        </LayoutTitleBase>
    )
};

export default Contact;