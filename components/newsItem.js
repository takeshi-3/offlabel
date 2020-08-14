import styles from './styles/newsItem.module.scss';

import Link from 'next/link';

import {timeToDate} from '../lib/stringFunctions';

const NewsItem = ({fields, id}) => {
    return (
        <div className={styles.post}>
            <Link href={`/news/${id}`}><a>
                <div className={styles.thumb}><img src={fields.thumbnail.fields.file.url} className={styles.thumb_img} /></div>
                <div className={styles.body}>
                    <h4 className={styles.title}>{fields.title}</h4>
                    {/* <p className={styles.content}>{fields.body}</p> */}
                    <p className={styles.date}>{timeToDate(fields.date)}</p> 
                </div>
            </a></Link>
        </div>
    );
};

export default NewsItem;