import styles from './styles/pageTitle.module.scss';

import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

const PageTitle = ({title}) => {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>
                <PlayArrowRoundedIcon style={{fontSize: 30}} />
                <span className={styles.title_str}>{title}</span>
            </h1>
        </div>
    );
};

export default PageTitle;