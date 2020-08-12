import styles from './styles/libraryItem.module.scss';

import Link from 'next/link';

const LibraryItem = ({fields, id}) => {
    return (
        <div className={styles.wrapper}>
            <Link href={`/library/${id}`}><a>
                <div className={styles.thumb} >
                    <img className={styles.thumb_img} src={fields.thumbnail.fields.file.url} />
                    <p className={styles.thumb_tag}># {fields.tag.fields.name}</p>
                    <div className={styles.thumb_info}>
                        <h3 className={styles.thumb_title}>{fields.title}</h3>
                        <p className={styles.thumb_name}>{`${fields.affiliation} | ${fields.name}`}</p>
                    </div>
                </div>

                <div className={styles.overview}>
                    <h4 className={styles.overview_title}>Overview</h4>
                    <p className={styles.overview_content}>{fields.overview}</p>
                </div>
            </a></Link>
        </div>
        
    );
};

export default LibraryItem;