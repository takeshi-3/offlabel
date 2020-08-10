// React
import {useState, useEffect} from 'react';

// next components
import Link from 'next/link';
import Head from 'next/head';

// styles
import styles from './styles/header.module.scss';

// Material-UI
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Header = ({title}) => {
    const menuItems = ['About', 'News', 'Event', 'Member', 'Contact', 'O!SHARE Academy'];

    useEffect(() => {
        (function(d) {
            var config = {
            kitId: 'otj6pkb',
            scriptTimeout: 3000,
            async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document)
    }, []);

    return (
        <>
            <Head>
                <title>OFF LABEL | {title}</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <div className={styles.wrapper}>
                <Link href="/"><a><img className={styles.logo} src="/images/headerLogo.svg" /></a></Link>
                <div className={styles.menu}>
                    {menuItems.map(menu => 
                        <Link href={`/${menu.toLowerCase()}`}><a>{menu}</a></Link>
                    )}
                    <a href="https://www.facebook.com/OFFLABELJP/" target="_blank"><FacebookIcon></FacebookIcon></a>
                    <a href="https://twitter.com/offlabelgakkai" target="_blank"><TwitterIcon></TwitterIcon></a>
                    <a href="https://www.instagram.com/offlabelgakkai/" target="_blank"><InstagramIcon></InstagramIcon></a>
                    <a href="https://www.youtube.com/channel/UChKC9yt9aLqkTjIiXPHeHAg/featured" target="_blank"><YouTubeIcon></YouTubeIcon></a>
                </div>
            </div>
        </>
    )
};

export default Header;