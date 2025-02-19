import styles from './styles/banner.module.scss';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

import Link from 'next/link';

const Banner = ({title, exp}) => {
    return (
        <div className={styles.wrapper}>
        <Link href="/contact/"><a>
            <div className={styles.wrapper_back}>
                <h1 className={styles.title}>
                    <PlayArrowRoundedIcon color="primary" style={{fontSize: 30}} />
                    <span className={styles.title_str}>{title}</span>
                </h1>
                <p className={styles.exp}>{exp}</p>
            </div>
        </a></Link>
        </div>
    );
};

export default Banner;