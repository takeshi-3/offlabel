import styles from './styles/buttons.module.scss';

export const RoundButton = ({children}) => {
    return (
        <button className={styles.roundBtn}>{children}</button>
    );
};