import Header from './header.js';
import Footer from './footer.js';

import styles from './styles/layout.module.scss';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

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

const Layout = ({children, title}) => {
    return (
        <ThemeProvider theme={theme}>
            <Header title={title} />
            <div className={styles.wrapper}>{children}</div>
            <Footer />
        </ThemeProvider>
    )
};

export default Layout;