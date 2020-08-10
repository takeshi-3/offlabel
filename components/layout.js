import Header from './header.js';
import Footer from './footer.js';

import styles from './styles/layout.module.scss';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import { motion } from 'framer-motion';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#6FA8A9",
        },
        secondary: {
            main: "#F0A528",
        },
    }
});

export const LayoutNormal = ({children, title}) => {
    return (
        <ThemeProvider theme={theme}>
            <Header title={title} />
            <motion.div 
                className={styles.normal}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                >{children}</motion.div>
            <Footer />
        </ThemeProvider>
    )
};

export const LayoutTitleBase = ({children, title}) => {
    return (
        <ThemeProvider theme={theme}>
            <Header title={title} />
            <motion.div 
                className={styles.titleBase}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                >{children}</motion.div>
            <Footer />
        </ThemeProvider>
    );
};