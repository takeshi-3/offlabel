import styles from './styles/eventItem.module.scss';

const EventItem = ({fields}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.thumb}><img src={fields.thumbnail.fields.file.url} /></div>
            <div className={styles.info}>
                <h2 className={styles.title}>{fields.title}</h2>
                <p className={styles.abstruct}>{fields.description}</p>
                <p className={styles.date}>{fields.date}</p>
            </div>
        </div>
    );
};

export default EventItem;