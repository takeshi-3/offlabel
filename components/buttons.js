import {useState} from 'react';

import styles from './styles/buttons.module.scss';

export const RoundButton = ({children}) => {
    return (
        <button className={styles.roundBtn}>{children}</button>
    );
};

export const RoundTag = ({children}) => {
    const [active, setActive] = useState(false);
    const [hover, setHover] = useState(false);
    return (
        <button
            className={`${styles.roundTag} ${active||hover ? styles.roundTag_active : ''}`}
            onPointerEnter={e => setHover(true)}
            onPointerOut={e => setHover(false)}
            onClick={e => setActive(!active)}>
            # {children}
        </button>
    );
}