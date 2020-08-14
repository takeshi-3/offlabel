import styles from './styles/parts.module.scss';

export const Catch = ({children}) => {
    return (
        <h2 className={styles.catch}>{children}</h2>
    );
};

export const AcademyHero = ({image}) => {
    return (
        <div style={{backgroundImage: `url(${image})`}} className={styles.academyHero}>
            <div className={styles.academyHero_wrap}>
                <div className={styles.academyHero_logo}><img src="/images/oshareLogo.png" /></div>
            </div>
        </div>
    );
};

export const BlogOverview = ({children}) => {
    return (
        <div className={styles.overview}>
            <h4 className={styles.overview_title}>Overview</h4>
            <p className={styles.overview_content}>{children}</p>
        </div>
    );
};

export const BlogSecTitle = ({children}) => {
    return (
        <div className={styles.secTitle}>
            {children}
        </div>
    );
};

export const BlogKeySentence = ({children}) => {
    return (
        <div className={styles.keySentence}>
            {children}
        </div>
    );
};

export const BlogFeelSentence = ({children}) => {
    return (
        <div className={styles.feelSentence}>
            <div className={styles.feelSentence_border}></div>
            <p className={styles.feelSentence_txt}>{children}</p>
        </div>
    );
};

export const BlogWriter = ({children}) => {
    return (

        <p className={styles.writer}>Writer : {children}</p>
    );
};