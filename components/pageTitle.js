import styles from './styles/pageTitle.module.scss';

import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

const PageTitle = ({children}) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.box}>
                <h1 className={styles.title}>
                    <PlayArrowRoundedIcon style={{fontSize: 30}} />
                    <span className={styles.title_str}>{children}</span>
                </h1>
            </div>
        </div>
    );
};

export default PageTitle;