import styles from './styles/libraryItem.module.scss';

import Link from 'next/link';

const LibraryItem = ({fields, id}) => {
    return (
        <Link href={`/library/${id}`}><a>
            <div className={styles.wrapper}>
                <div className={styles.thumb}>
                    <img src={fields.thumbnail.fields.file.url} />
                    <p className={styles.thumb_tag}># {fields.tag.fields.name}</p>
                </div>
                <div className={styles.info}>
                    <div className={styles.header}>
                        <h3 className={styles.header_title}>{fields.title}</h3>
                        <p className={styles.header_name}>{`${fields.affiliation} | ${fields.name}`}</p>
                    </div>
                    <div className={styles.overview}>
                        <h4 className={styles.overview_title}>Overview</h4>
                        <p className={styles.overview_content}>{fields.overview}</p>
                    </div>
                </div>   
            </div>
        </a></Link>
    );
};

export default LibraryItem;