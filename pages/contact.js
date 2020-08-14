// react
import {useEffect, useState} from 'react';

// next components
import Head from 'next/head';

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
                        <label>お名前</label>
                        <input name="名前" type="text" />
                    </p>

                    <p className={styles.form_txt}>
                        <label>メールアドレス</label>
                        <input name="メールアドレス" type="text" data-formrun-type="email" data-formrun-required />
                    </p>

                    <p className={styles.form_txt}>
                        <label>ご所属</label>
                        <input name="所属" type="text" />
                    </p>

                    <p className={styles.form_txt}>
                        <label>お問い合わせ件名</label>
                        <input name="件名" type="text" />
                    </p>

                    <p className={styles.form_txt}>
                        <label>お問い合わせ内容</label>
                        <textarea name="お問い合わせ内容"></textarea>
                    </p>

                    <p className={styles.form_radio}>
                        <label>メールマガジンの登録</label>
                        <input type="radio" name="メールマガジン" value="全ての情報" /><span>全ての情報</span>
                        <input type="radio" name="メールマガジン" value="適度な情報量" /><span>適度な情報量</span>
                        <input type="radio" name="メールマガジン" value="重要な情報のみ" /><span>重要な情報のみ</span>
                        <input type="radio" name="メールマガジン" value="登録しない" /><span>登録しない</span>
                    </p>

                    <button className={styles.form_submit} type="submit"　data-formrun-submitting-text="送信中">送信</button>
                </form>
            </main>
        </LayoutTitleBase>
    )
};

export default Contact;