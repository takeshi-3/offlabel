import styles from './styles/newsItem.module.scss';

import Link from 'next/link';

import {timeToDate} from '../lib/stringFunctions';
import { animated } from 'react-spring';

const NewsItem = ({fields, id, animProps}) => {
    return (
        <animated.div className={styles.post} style={{...animProps}}>
            <Link href={`/news/${id}`}><a>
                <div className={styles.thumb}><img src={fields.thumbnail.fields.file.url} className={styles.thumb_img} /></div>
                <div className={styles.body}>
                    <h4 className={styles.title}>{fields.title}</h4>
                    {/* <p className={styles.content}>{fields.body}</p> */}
                    <p className={styles.date}>{timeToDate(fields.date)}</p> 
                </div>
            </a></Link>
        </animated.div>
    );
};

export default NewsItem;