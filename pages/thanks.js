// react
import {useEffect, useState} from 'react';

// next components
import Link from 'next/link';

// custom components
import {LayoutTitleBase} from '../components/layout';
import PageTitle from '../components/pageTitle';

// styles
import styles from '../styles/contact.module.scss';
import { RoundButton } from '../components/buttons';


const Thanks = () => {

    return (
        <LayoutTitleBase title="Contact">
            <main className={`mw ${styles.thanks}`}>
                <PageTitle>Contact</PageTitle>

                <p className={styles.exp}>
                    お問い合わせ頂きありがとうございました。<br /><br />
                    後日ご入力頂いたメールアドレス宛に運営メンバーからご連絡を差し上げますので、しばらくお待ちくださいませ。
                </p>

                <Link href="/"><a><RoundButton>Home</RoundButton></a></Link>
            </main>
        </LayoutTitleBase>
    )
};

export default Thanks;