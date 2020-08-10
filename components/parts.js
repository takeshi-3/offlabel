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
                <img className={styles.academyHero_logo} src="/images/oshareLogo.png" />
            </div>
        </div>
    );
};