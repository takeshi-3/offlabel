import styles from './styles/memberItem.module.scss';

const MemberItem = ({name, role, major}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.thumb}><img src="/images/memberSample.png" /></div>
            <div className={styles.info}>
                <h4 className={styles.name}>{name}</h4>
                <p className={styles.tag}># Role</p>
                <p className={styles.role}>{role}</p>
                <p className={styles.tag}># Research Major</p>
                <p className={styles.major}>{major}</p>
            </div>
        </div>
    );
};

export default MemberItem;