// React
import {useState} from 'react';

// next components
import Link from 'next/link';
import Head from 'next/head';

// styles
import styles from './styles/footer.module.scss';

// Material-UI

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.logo} src="/images/logo.svg" />
            <p className={styles.name}>©︎ OFF LABEL</p>
        </div>
    )
};

export default Footer;