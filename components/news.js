import styles from './styles/news.module.scss';

const News = ({fields}) => {
    return (
        <div className={styles.post}>
            <div className={styles.thumb}><img src={fields.thumbnail.fields.file.url} className={styles.thumb_img} /></div>
            <div className={styles.body}>
                <h4 className={styles.title}>{fields.title}</h4>
                <p className={styles.content}>{fields.body}</p>
                <p className={styles.date}>{fields.date}</p> 
            </div>
        </div>
    );
};

export default News;