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

// custom components
import {HamburgerButton} from './buttons';

// OGP static info
const description = "\
私たちは、アカデミックと現実世界が乖離してしまっている今、\
カジュアルな形で「学問」の楽しさを広め、\
研究を社会に発信していきたいと考えています。\
また伝えるだけではなく、学問や研究を通じて、\
共に考える場を形成していきたいと思っています。";

const MenuGroup = ({parent, list}) => {
    const [hover, setHover] = useState(false);

    return (
        <div className={styles.parentMenu} onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)}>
            <p>{parent}</p>
            <div className={`${styles.subMenu} ${hover ? styles.subMenu_active : null}`}>
                {list.map(m => <Link href={`/${m.link}`} key={m.link}><a>{m.name}</a></Link>)}
            </div>
        </div>
    );
};

const Header = ({title}) => {
    const menuItems = [
        {link: 'about', name:'About', sub: false}, 
        {link: 'news', name: 'News', sub: false}, 
        // {link: 'event', name: 'Event', sub: false},
        // {link: 'member', name: 'Member', sub: false}, 
        {link: 'contact', name: 'Contact', sub: false}, 
        {name: 'O!SHARE Academy', sub: [
            {link: 'library', name: 'Human / Research Library'},
            {link: 'ronbun', name: '100人論文'}
        ]}];

    const [menuOpen, setMenuOpen] = useState(false);

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
                <link rel="shortcut icon" href="/images/favicon.ico"></link>

                {/* ----- formrun sdk ----- */}
                {title === "Contact" ? <script src="https://sdk.form.run/js/v2/formrun.js"></script> : null}

                {/* ----- OGP ----- */}
                <meta property="og:title" content={`OFF LABEL | ${title}`} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://offlabel.tokyo/${title.toLowerCase()}`} />
                <meta property="og:image" content="https://offlabel.tokyo/images/ogp.jpg" />
                <meta property="og:site_name" content="OFF LABEL | 学問と日常を繋ぐ" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@offlabelgakkai" />
            </Head>

            <div className={styles.header}>
                <Link href="/"><a><img className={styles.header_logo} src="/images/headerLogo.svg" /></a></Link>
                <div className={styles.header_menu}>
                    {menuItems.map(menu => (
                        Array.isArray(menu.sub) ?
                        <MenuGroup parent={menu.name} list={menu.sub} key={menu.link} />
                        : <Link href={`/${menu.link}`} key={menu.link}><a>{menu.name}</a></Link>
                    ))}
                    <a href="https://www.facebook.com/OFFLABELJP/" target="_blank"><FacebookIcon fontSize="large"></FacebookIcon></a>
                    <a href="https://twitter.com/offlabelgakkai" target="_blank"><TwitterIcon fontSize="large"></TwitterIcon></a>
                    <a href="https://www.instagram.com/offlabelgakkai/" target="_blank"><InstagramIcon fontSize="large"></InstagramIcon></a>
                    <a href="https://www.youtube.com/channel/UChKC9yt9aLqkTjIiXPHeHAg/featured" target="_blank"><YouTubeIcon fontSize="large"></YouTubeIcon></a>
                </div>
            </div>


            <div onClick={e => setMenuOpen(!menuOpen)}><HamburgerButton /></div>

            <div className={`${styles.sp_menu} ${menuOpen ? styles.sp_menu_active : ""}`}>
                {menuItems.map(item => 
                    !item.sub ? <Link href={`/${item.link}`} key={item.link}><a>{item.name}</a></Link> : 
                    <>{item.sub.map(i => <Link href={`/${i.link}`} key={i.link}><a>{i.name}</a></Link>)}</>
                )}
                <div className={styles.sp_menu_sns}>
                    <a href="https://www.facebook.com/OFFLABELJP/" target="_blank"><FacebookIcon fontSize="large"></FacebookIcon></a>
                    <a href="https://twitter.com/offlabelgakkai" target="_blank"><TwitterIcon fontSize="large"></TwitterIcon></a>
                    <a href="https://www.instagram.com/offlabelgakkai/" target="_blank"><InstagramIcon fontSize="large"></InstagramIcon></a>
                    <a href="https://www.youtube.com/channel/UChKC9yt9aLqkTjIiXPHeHAg/featured" target="_blank"><YouTubeIcon fontSize="large"></YouTubeIcon></a>
                </div>
            </div>
        </>
    )
};

export default Header;